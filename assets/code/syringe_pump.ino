#include <AccelStepper.h>

// Pin Definitions
#define STEP_PIN 2
#define DIR_PIN 3
#define BUTTON_PIN 4
#define LIMIT_PIN 5
#define RED_PIN 11
#define GREEN_PIN 10
#define BLUE_PIN 9
#define CW_BUTTON 6
#define CCW_BUTTON 7

// Syringe & Motor Settings
const int stepsPerRev = 200;
const int microstepping = 16;
const float syringeDiameter_mm = 14.3; // 19mm large syringe, 14.3 mm small syringe
const int lead_mm_per_rev = 8;
const float flowRate_mL_min = 10;

AccelStepper stepper(AccelStepper::DRIVER, STEP_PIN, DIR_PIN);

float stepsPerSec;

void setup() {
  stepsPerSec = flowRateToStepsPerSecond(flowRate_mL_min);

  pinMode(BUTTON_PIN, INPUT_PULLUP);   // Latching button
  pinMode(LIMIT_PIN, INPUT_PULLUP);    // NC → GND, C → D5
  pinMode(CW_BUTTON, INPUT_PULLUP);
  pinMode(CCW_BUTTON, INPUT_PULLUP);

  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);

  stepper.setMaxSpeed(10000);
  stepper.setSpeed(0);                 // Start paused
  setLEDColor(0, 0, 0);                // LED off
}

void loop() {
  bool buttonPressed = digitalRead(BUTTON_PIN) == LOW;
  bool limitPressed = digitalRead(LIMIT_PIN) == HIGH; // HIGH = switch is hit
  bool cwHeld = digitalRead(CW_BUTTON) == LOW;
  bool ccwHeld = digitalRead(CCW_BUTTON) == LOW;

  if (cwHeld) {
    // CW override always allowed, even if limit is pressed
    stepper.setSpeed(1000);
    stepper.runSpeed();
    setLEDColor(0, 255, 255); // Cyan (CW override)

  } else if (limitPressed) {
    // STOP all movement (unless CW override is held)
    stepper.setSpeed(0);
    setLEDColor(255, 0, 0); // Red

  } else if (ccwHeld && !buttonPressed) {
    // Manual CCW (block if limit is hit)
    stepper.setSpeed(-1000);
    stepper.runSpeed();
    setLEDColor(255, 0, 255); // Magenta

  } else if (buttonPressed) {
    // Auto run
    stepper.setSpeed(-stepsPerSec); // Fix direction here if needed
    stepper.runSpeed();
    setLEDColor(0, 255, 0); // Green

  } else {
    // Paused
    stepper.setSpeed(0);
    setLEDColor(255, 100, 0); // Yellow
  }
}

void setLEDColor(int r, int g, int b) {
  analogWrite(RED_PIN, r);
  analogWrite(GREEN_PIN, g);
  analogWrite(BLUE_PIN, b);
}

float flowRateToStepsPerSecond(float flowRate_mL_min) {
  float r = syringeDiameter_mm / 2.0;
  float A = PI * r * r;

  float flow_mm3_min = flowRate_mL_min * 1000.0;
  float plungerSpeed_mm_min = flow_mm3_min / A;
  float plungerSpeed_mm_sec = plungerSpeed_mm_min / 60.0;

  float revsPerSec = plungerSpeed_mm_sec / lead_mm_per_rev;
  float stepsPerSec = revsPerSec * stepsPerRev * microstepping;

  return stepsPerSec;
}

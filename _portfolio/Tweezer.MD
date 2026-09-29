---
title: "Multi-Material Tweezers"
excerpt: "TPU + PLA 3D printed tweezers"
header:
  image: assets/img/Tweezer Render One.png
  teaser: assets/img/Tweezer Render One.png
gallery:
  - url: assets/img/Tweezer Render Two.png
    image_path: assets/img/Tweezer Render One.png
    alt: "placeholder image 1"
  - url: assets/img/Tweezer Render Three.png
    image_path: assets/img/Tweezer Render Three.png
    alt: "placeholder image 2"
---

# Multi-Material Pliers

## Designing for Simplicity

The objective of this project was to design a pair of needle-nose pliers capable of gripping and picking up small through-hole resistors. Rather than approaching the problem with a traditional pair of pliers, I looked at how the human hand naturally interacts with small objects. Conventional pliers require the user to squeeze handles positioned behind the jaws, creating a mechanical offset between the user's fingers and the object being manipulated. For an object as small as a resistor, this can introduce unnecessary coordination and precision challenges.

I instead developed a compact tweezer-like form that allows the user to directly control the jaws with their fingers. The simplified geometry places the point of interaction closer to the user's hand and creates a more intuitive motion for manipulating small components. The jaws were also designed specifically around the geometry of a through-hole resistor. A shallow 0.75 mm recessed cavity near the tips creates a small scooping surface that helps capture the body of the resistor and prevent it from slipping while being moved. A 2 mm fillet along the rear edge of each jaw further rounds the profile and allows the tips to approach small objects more naturally.

This approach became an exercise in applying Occam's razor to product design. Instead of adding mechanical components to solve a problem, I reduced the mechanism to the simplest form that could directly accomplish the task.

## Designing the Flexible Mechanism

The defining feature of the design is its use of two different materials to create the opening and closing mechanism. The jaws are printed from rigid PLA, while a central 95A TPU component functions as the spring.

When the user squeezes the jaws together, the TPU center deforms and stores elastic energy. Once the external force is released, the TPU returns toward its original shape and pushes the PLA jaws back into the open position. This eliminates the need for a conventional metal spring, hinge, or separate mechanical linkage.

The material combination was selected specifically because the two plastics perform different mechanical roles. PLA provides the rigidity needed to maintain the shape of the jaws and transmit gripping forces, while TPU provides the flexibility and elastic recovery required for repeated opening and closing.

Because a multi-material printer was not available for the final fabrication process, the TPU center and PLA jaws were printed separately. This created an additional design problem: the two materials needed to behave as a single mechanical system without adhesives, screws, or tools.

## Dovetail Interface

The connection between the TPU and PLA became one of the most important parts of the design. Instead of relying on adhesion between the two materials, I designed mechanical dovetail joints that physically lock the rigid jaws into the flexible center.

The TPU center is a 14 mm square with two dovetail connections positioned on adjacent sides. Each dovetail has a 3 mm bottom width and an 8 mm top width, with the sides positioned at 60-degree angles. The corresponding female dovetails were incorporated into the PLA jaws.

A 2-degree taper was added to the female dovetail cuts to account for the dimensional variation that can occur during FDM printing. This allowed the two materials to be hand-pressed together while maintaining a secure connection. The resulting interface prevents the PLA jaws from slipping out of the TPU center during use while still allowing the three printed components to be assembled without tools.

This type of mechanical interlocking is particularly useful when combining materials such as PLA and TPU because the two materials have very different mechanical properties and their interface can be a critical point of failure.

The dovetail also became an opportunity to incorporate a design detail into the final object. The word **"Dove"** was placed directly above the dovetail connection on each jaw, creating a visual reference to both the joint and my last name. Rather than adding decoration independently of the mechanism, the graphic element reinforces the geometry that makes the pliers functional.

## Tuning Flexibility Through Print Settings

The TPU center required additional consideration because its flexibility is controlled not only by the material but also by the internal print structure.

To reduce stiffness, the solid top and bottom layers were removed from the TPU spring. A grid infill pattern oriented at 45 degrees was then used to reduce resistance to bending in the direction of jaw movement. This allowed the center to deform more easily while maintaining enough internal structure to return the jaws to their open position.

An infill range between 15% and 25% provided the best balance between flexibility and structural stability. Lower infill reduced the force required to close the jaws but also reduced the durability of the spring. Higher infill increased the stiffness of the center and made the pliers more difficult to operate.

Four perimeter layers were used around the TPU center to provide additional support around the dovetail connections. This created a stronger interface while allowing the interior of the spring to remain relatively flexible.

## Design Specifications

The final geometry was developed around the required movement of the jaws and the small scale of the objects being manipulated.

- **TPU spring:** 14 mm × 14 mm square
- **Dovetail bottom width:** 3 mm
- **Dovetail top width:** 8 mm
- **Dovetail spacing from corner:** 3 mm
- **Dovetail angle:** 60°
- **Female dovetail taper:** 2°
- **PLA jaw length:** 50 mm
- **Jaw orientation:** 120° from the dovetail horizontal
- **Jaw clearance to corner:** 2 mm
- **Resistor cavity depth:** 0.75 mm
- **Resistor cavity length:** 11.75 mm
- **Cavity position:** 1 mm from jaw tip
- **Rear jaw fillet:** 2 mm
- **TPU infill:** 15% to 25%
- **TPU perimeter:** 4 layers

The 2 mm clearance between the jaws provides room for the two rigid components to compress the TPU spring without colliding with one another. The 50 mm jaw length provides enough reach to manipulate through-hole resistors while maintaining a compact overall form.

## From a Classroom Exercise to Real-World Applications

The combination of rigid and flexible materials used in this project has applications well beyond a pair of laboratory pliers. Multi-material additive manufacturing is particularly useful when a single object needs different mechanical properties in different locations. PLA or other rigid plastics can provide structural support, while TPU can provide flexibility, cushioning, grip, or elastic motion.

One example is **prosthetic design**. Researchers have used multi-material design to create prosthetic hands in which rigid components provide structural support while flexible components provide compliant movement and interaction with the user. Research into multi-material prosthetic joints has specifically investigated how the interface between the rigid and flexible materials can be strengthened to prevent delamination.

A second application is **robotic gripping systems**. Recent multimaterial robotic gripper research uses TPU for compliant fingers, flexible interfaces, and passive spring elements while using rigid materials for structural components. This allows the gripper to adapt to objects with different shapes and stiffnesses without requiring every component to have the same mechanical properties.

The same principle can also be applied to everyday products. Rigid plastics can form the structural shell of a product while TPU creates flexible hinges, protective interfaces, grips, or seals. Prusa's documentation identifies rigid-flexible combinations such as PLA or PETG with TPU as a common multi-material strategy, with TPU being used for applications including hinges, anatomical joints, cable interfaces, and non-slip grips.

Our pliers demonstrate this principle at a much smaller scale. The PLA jaws need to resist deformation while gripping an object, but the center needs to behave almost like a mechanical spring. Instead of asking one material to perform both functions, the design assigns each material a specific job.

## Designing Through Material

The final pliers demonstrate how material selection can become a primary design tool. The geometry of the PLA jaws determines how the resistor is captured, while the geometry and print structure of the TPU center determine how the jaws move. The dovetail connection then bridges the two materials and transforms separate printed components into a single functional mechanism.

What began as a simple challenge to pick up a resistor became an exploration of how **geometry, material behavior, and manufacturing constraints can work together to create mechanical movement**. The final design does not rely on a complex mechanism. Instead, it uses two materials, carefully controlled geometry, and a simple mechanical interface to create a tool that is compact, intuitive, and purpose-built for manipulating small objects.



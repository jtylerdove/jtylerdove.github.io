---
title: "Syringe Pump"
excerpt: "Medical Syringe Capable of dispensing liquid from one micromillimeter to ten millimeters of liquid per minute"
header:
  image: assets/img/Screenshot 2026-08-31 225315.png
  teaser: assets/img/Screenshot 2026-08-31 225315.png
gallery:
  - url: assets/img/Screenshot 2026-08-31 225315.png
    image_path: assets/img/Screenshot 2026-08-31 225315.png
    alt: "placeholder image 1"
  - url: /assets/img/Cyber-Scooter-2.jpg
    image_path: assets/img/Cyber-Scooter-2.jpg
    alt: "placeholder image 2"
  - url: /assets/img/Cyber-Scooter-3.jpg
    image_path: assets/img/Cyber-Scooter-3.jpg
    alt: "placeholder image 3"
---

## Syringe Pump

My team was tasked with designing a compact syringe pump capable of precisely controlling the movement and flow of fluid through both automated and manual operation. Beyond simply creating a functional machine, the project challenged us to develop a design that reflected our assigned team identity: **the Widget Wizards**. I led the physical design of the pump and track while my teammates developed the electrical and control systems, allowing us to approach the project as both an engineering system and a designed object.

At the center of the pump is an **8 mm lead screw and motor system** that converts rotational motion into linear movement. As the motor rotates the lead screw, a pusher block travels along the track, advancing or retracting the syringe plunger. This allows the pump to precisely control the rate at which fluid is dispensed. An Arduino-based control system translates the desired flow rate into motor speed, while manual forward and reverse controls allow the user to position the syringe before operation.

A key design challenge was creating a **universal interface** capable of accommodating both 10 mL and 20 mL syringes without requiring the machine to be disassembled or reconfigured. The syringe holders and pusher block were developed around the geometry of the two syringe sizes, creating a secure connection while maintaining alignment with the linear actuator. The enclosure similarly became an opportunity to organize the mechanical and electrical components into a compact, intentional form rather than leaving the system exposed.

Because our team was given the name **Widget Wizards**, we incorporated a subtle wizard theme directly into the physical design. Rather than treating these elements as purely decorative, we looked for opportunities where the theme could become part of the machine's functionality. The top of the enclosure features **wizard-inspired engravings**, while the ventilation openings take the form of the team's “WW” initials and stylized wizard wands. The wand motif was carried further through the control interface, where an integrated LED illuminates the wand element to communicate the pump's operating state—**green during forward operation and red during retraction**. These details allowed the required creative theme to become part of the machine's visual and functional language.

The project ultimately became an exploration of **how engineering constraints can inform design rather than restrict it**. The lead screw dictated the primary movement, the syringe dimensions shaped the interfaces, and the electrical components established constraints for the enclosure. Within those limitations, we used form, detailing, and visual communication to give the machine its own identity. Through CAD modeling, 3D printing, and physical testing, the final pump brought together mechanical precision, user interaction, and playful design into a single functional object.

## Final Project Supplies

| Part | Quantity | Link |
|:---|:---:|:---:|
| 250 mm Lead Screw — 2 mm Pitch, 2 mm Lead | 1 | [Product Link](https://www.amazon.com/dp/B07R1H5ZMV/ref=cm_sw_em_r_mt_dp_0YZ13D4HQBGW2Z86PBV1?_encoding=UTF8&psc=1) |
| 250 mm Lead Screw — 2 mm Pitch, 8 mm Lead | 1 | [Product Link](amazon.com/gp/product/B0B8RKN89V?ie=UTF8&th=1&linkCode=sl1&tag=drd0cf-20&linkId=bb4eefbbfff880704d7cd0784b1af8c0&language=en_US&ref_=as_li_ss_tl) |
| 1/4" × 8 mm Flexible Coupling | 1 | [Product Link](https://www.amazon.com/1-4-x-8mm-flexible-coupling/s?k=1%2F4+x+8mm+flexible+coupling) |
| 200 mm Linear Rod — 8 mm Diameter | 2 | [Product Link](https://www.amazon.com/dp/B07MPGWJMS/ref=cm_sw_em_r_mt_dp_X5AQS0ES7JH8JG83AAZ3?th=1) |
| LM8UU Linear Bearing — 8 mm Diameter Rod | 2 | [Product Link](https://www.amazon.com/gp/product/B087WPGQ8T/ref=ppx_yo_dt_b_asin_image_o00_s00?ie=UTF8&psc=1) |
| 2040 Aluminum Extrusion — 1' Length | 1 | [Product Link](https://us.misumi-ec.com/vona2/mech/M1500000000/M1501000000/M1501010000/?CategorySpec=00000042730%3A%3Amig00000001423218&gad_source=1&gad_campaignid=362492313&gbraid=0AAAAADtMMx_f0PEkwytyahoNuOqB_liPZ&gclid=Cj0KCQjw2OnUBhC2ARIsACKyfaEj4kStaelltOhplZjBWM9z_E6sW0vRVTtFESNjYUoPvn1z1IsHo-gaAn-FEALw_wcB) |
| NEMA 17 Stepper Motor | 1 | [Product Link](https://www.amazon.com/gp/product/B07LF898KN/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1) |
| MEAN WELL RQ-65D AC-DC Power Supply — Quad Output | 1 | [Product Link](https://www.amazon.com/dp/B005T9HGLI/ref=cm_sw_em_r_mt_dp_A8CZ056TM52EJGZTGZGR?_encoding=UTF8&psc=1) |
| Arduino Uno | 1 | [Product Link](https://www.amazon.com/dp/B007R9TUJE/ref=cm_sw_em_r_mt_dp_TY8JGK0CJD1JEJM4BNNJ) |
| A4988 Stepper Driver | 1 | [Product Link](https://www.amazon.com/dp/B01FFGAKK8/ref=cm_sw_em_r_mt_dp_V0YKTYKDWMR8WHTKA53T?_encoding=UTF8&psc=1) |
| Small Breadboard | 1 | [Product Link](https://www.amazon.com/dp/B082VYXDF1/ref=cm_sw_em_r_mt_dp_N6Q28CAGPAYCKCSJKDDC?_encoding=UTF8&psc=1) |
| Panel Mount Latching Push Button — On/Off | 1 | [Product Link](https://www.amazon.com/dp/B07XTBL1NP?smid=A2NNH5C5IP9N3O&linkCode=sl1&tag=drd0cf-20&linkId=43b42a7cb2a088ebd85d65cb9da46725&language=en_US&ref_=as_li_ss_tl&th=1) |
| Panel Mount Momentary Push Button — Bonus Only | 1 | [Product Link](https://www.amazon.com/dp/B07BD1MS18?_encoding=UTF8&ref_=cm_sw_r_cp_ud_dp_2TQBTAV0C4S8AFJD47ZB&th=1) |
| Limit Switch | 1 | [Product Link](https://www.amazon.com/gp/product/B07X142VGC) |
| RGB Common Cathode LED | 1 | [Product Link](https://www.amazon.com/dp/B0194Y6MW2/ref=cm_sw_em_r_mt_dp_FW3CFQT7ZGFQ2R04N6G3?_encoding=UTF8&psc=1) |

| Part Name | Quantity | Link |
|:---|:---:|:---:|
| Linear Actuator Syringe Carriage | 1 | [STL File](assets/stl/Carriage-Linear Actuator-Syringe.stl) |
| Front of Box | 1 | [STL File](/assets/stl/Front_Wall.stl) |
| Top of Box | 1 | [STL File](/assets/stl/Box Top.stl) |
| Bare Bones Enclosure | 1 | [STL File](/assets/stl/Bare Bones Enclosure.stl) |
| Arduino Holder | 1 | [STL File](/assets/stl/Breadboard Holder.stl) |
| In-Support Syringe Wings Holder | 1 | [STL File](/assets/stl/In-Support_Syringe Wings Holder.stl) |
| In-Support | 2 | [STL File](/assets/stl/In-Support.stl) |
| Attachment for Limit Switch | 1 | [STL File](/assets/stl/attachment for limit switch.stl) |
| Motor Mounting Plate | 1 | [STL File](/assets/stl/Mounting Plate Motor.stl) |

[View Arduino Code](/assets/code/syringe_pump.html)

## 3D Model

<iframe src="https://vanderbilt643.autodesk360.com/shares/public/SH90d2dQT28d5b602811f53de683dfbffbea?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>

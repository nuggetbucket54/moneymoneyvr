# Cardboard++
An accessible VR headset using Google Cardboard, an Arduino board, and WebSockets. The headset utilizes an Arduino gyroscope module to track head movements, which are then translated into mouse movements. Socket\.io is then integrated to allow computer video output to be mirrored onto the headset in a VR format, allowing for a VR headset compatible with any first-person experience (e.g., Minecraft, Valorant, Microsoft Flight Simulator, etc.)

## Getting Started
These instructions will (hopefully) get the repo up and running on your local machine! To be transparent, this project was made over the course of a single weekend, and thus may have deprecated or obscure dependencies that are difficult to get working on different systems.


Check out my teammate Hinson's video on the headset here:

<div align="center" markdown="1">

[![hi youtube](https://img.youtube.com/vi/KP3yoWUXz70/0.jpg)](https://www.youtube.com/watch?v=KP3yoWUXz70)
  
</div>



### How to run cardboard++

- Upload the .ino sketch to an arduino that is attached to a GY-521 module
- Start the .ino sketch and open the serial terminal to start the program
- Run the .py file to grab data from the .ino sketch
- Start the webserver with `npm run client`
- Access the webserver on the device in the Google cardboard and enjoy Cardboard++!

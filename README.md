# Cardboard++
An accessible VR headset using Google Cardboard, an Arduino board, and WebSockets. The headset utilizes an Arduino gyroscope module to track head movements, which are then translated into mouse movements. Socket\.io is then integrated to allow computer video output to be mirrored onto the headset in a VR format, allowing for a VR headset compatible with any first-person experience (e.g., Minecraft, Valorant, Microsoft Flight Simulator, etc.)

## Getting Started
These instructions will (hopefully) get the repo up and running on your local machine! To be transparent, this project was made over the course of a single weekend, and thus may have deprecated or obscure dependencies that are difficult to get working on different systems.

### Prerequisites
You should have some version of Python3, Node.js, and npm working and running on your local system. To check if they are installed, as well as their respective versions on your local machine, you can run:
```
python3
node -v
npm -v
```

You may also want to install the Arduino IDE, as it provides the easiest environment to work with Arduino hardware.

### Installation
- Install the necessary Python libraries with `pip install pyautogui pyserial`

- Install the necessary node modules by navigating to the `video_sockets` directory, initializing the node server with `npm init`, and installing necessary dependencies with `npm i`

- You may also need to install the [necessary libraries](https://www.arduino.cc/reference/en/libraries/mpu6050_light/) for the MPU6050 gyroscope module. This can be done through the Arduino IDE's built-in library installation tool. See [here](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries/) for clarification.


## Running the Project
### Web Server
To run the web server to connect computer video output to your mobile device, navigate to the `video_sockets` directory and run:

```
node server.js
cd client
npm run start
```

### Arduino Hardware
#### The Headset
The circuitry involved for this project is just a simple circuit connecting an MPU6050 module to an Arduino UNO. Orientation of the gyroscope shouldn't matter, though cartesian components may have to be switched around in `script.py` depending on how the module is placed.

#### Running the Arduino
Check the output port of your Arduino. This can most easily be done through the Arduino IDE. Navigate to the `hardware` directory and update the Serial port and BAUD rate in `script.py` to what is given by the Arduino IDE.

After powering the Arduino, `script.py` can be run using `python3 script.py` to grab the gyroscope data.
**note: headset will have to be stationary initially to set a reference point for all other gyroscope data**

## Extra
My teammate Hinson made a video on the project, which can be viewed [here](https://www.youtube.com/watch?v=KP3yoWUXz70).



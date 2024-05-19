# Arduino Hardware
## The Headset

The circuitry involved for this project is just a simple circuit connecting an MPU6050 module to an Arduino UNO. Orientation of the gyroscope shouldn't matter, though cartesian components may have to be switched around in script.py depending on how the module is placed.

## Running the Arduino

Check the output port of your Arduino. This can most easily be done through the Arduino IDE. Navigate to the hardware directory and update the Serial port and BAUD rate in script.py to what is given by the Arduino IDE.

After powering the Arduino, script.py can be run using python3 script.py to grab the gyroscope data. Note: headset will have to be stationary initially to set a reference point for all other gyroscope data

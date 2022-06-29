#include "Wire.h"
#include <MPU6050_light.h>

MPU6050 mpu(Wire);
unsigned long timer = 0;
float pi = 3.1416;
int len = 1920;
int wid = 1080;
int xO = 0, yO = 0, zO = 0;
float x, y, z, dx, dy, dz;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  
  byte status = mpu.begin();
  Serial.print(F("MPU6050 status: "));
  Serial.println(status);
  while(status!=0){ } // stop everything if could not connect to MPU6050
  
  Serial.println(F("Calculating offsets, do not move MPU6050"));
  delay(1000);
  
  // mpu.upsideDownMounting = true; // uncomment this line if the MPU6050 is mounted upside-down
  mpu.calcOffsets(); // gyro and accelero
  Serial.println("Done!\n");
}

void loop() {
  mpu.update();
  
  if ((millis() - timer) > 150){
    x = mpu.getAngleX() * -1;
    //y = mpu.getAngleY();
    z = mpu.getAngleZ();

    dz = z - zO;
    dx = x - xO;

    xO = x;
    zO = z;
    
    Serial.print(String(dx * pi * len / 180, 3));
    Serial.print(" ");
    //Serial.print(mpu.getAngleY());
    //Serial.print(" ");
    Serial.println(String(dz * pi * len / 180, 3));
    timer = millis();  
  }
}

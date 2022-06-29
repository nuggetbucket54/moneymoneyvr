import serial
from math import sin, cos, pi
import pyautogui as pag

ser = serial.Serial('/dev/cu.usbserial-141420', 9600, timeout = 0.15)
xO, yO, zO = 0, 0, 0
screenl, screenw = pag.size()

while 1:
    try:
        #reading the data (output of arduino sketch)
        data = ser.readline()
        data = data.decode()
        data = data.strip()

        z, y, x = map(float,data.split())

        x *= -1

        dx = x - xO
        #dy = y - yO
        dz = z - zO

        xO = x
        #yO = y
        zO = z

        changex = dx * pi * screenl / 180
        changez = dz * pi * screenw / 180
        
        locx,locy = pag.position()
        pag.moveTo(locx + changex, locy + changez, duration = 0.1)
        
        #print(*[x, y, z])

    except:
        pass
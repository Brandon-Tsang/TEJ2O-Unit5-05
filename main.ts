/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Apr 2026
 * This program will tell me the distance to an object using a sonar.
*/

// variables
let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

// locate distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    
    // get distance to object
    distanceToObject = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

    // show the distance
    basic.clearScreen()
    basic.showString((distanceToObject) + ' cm.')

    // reset
    basic.showIcon(IconNames.Happy)
})

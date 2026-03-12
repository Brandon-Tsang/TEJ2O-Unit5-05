/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

// locate distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    
    // get distance to object
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // show the distance
    basic.clearScreen()
    basic.showString((distanceToObject) + ' cm.')

    // reset
    basic.showIcon(IconNames.Happy)
})

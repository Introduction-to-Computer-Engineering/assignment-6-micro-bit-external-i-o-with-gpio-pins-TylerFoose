let moisture = 0

basic.forever(function () {
    pins.analogWritePin(AnalogPin.P8, 1023)
    moisture = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P8, 0)

    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P8, 1)
        basic.showNumber(moisture)
        basic.pause(2000)
        pins.analogWritePin(AnalogPin.P8, 0)
    }


})


// this program reads the analog signal from a moisture sensor and displays the reading it also turns off the sensor when not taking a reading 

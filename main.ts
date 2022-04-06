function checkInput (inputValue: string) {
    if (inputValue == sequence[inputPosition]) {
        if (inputValue == "A") {
            basic.pause(100)
            strip = neopixel.create(DigitalPin.P3, 7, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        } else {
            basic.pause(100)
            strip = neopixel.create(DigitalPin.P3, 7, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            strip.show()
        }
        if (inputValue == "C") {
            basic.pause(100)
            strip = neopixel.create(DigitalPin.P3, 7, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.show()
        }
        inputPosition += 1
        if (inputPosition == sequence.length) {
            inputPosition = 0
            basic.showIcon(IconNames.Happy)
            extendSequence()
            showSequence()
        }
    } else if (sequence.length > 3) {
        basic.clearScreen()
        basic.showString("Game Over: Score: " + sequence.length)
    } else {
        basic.showString("Game Over: Score: 0")
        basic.clearScreen()
    }
}
input.onPinPressed(TouchPin.P0, function () {
    if (isInputActive) {
        isInputActive = false
        checkInput("A")
        isInputActive = true
    }
})
function showSequence () {
    for (let index = 0; index <= sequence.length - 1; index++) {
        if (sequence[index] == "A") {
            strip = neopixel.create(DigitalPin.P3, 7, NeoPixelMode.RGB)
            strip.showColor(neopixel.rgb(255, 128, 0))
            strip.show()
        } else {
            strip = neopixel.create(DigitalPin.P3, 7, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        }
        if (sequence[index] == "C") {
            strip = neopixel.create(DigitalPin.P3, 7, NeoPixelMode.RGB)
            strip.showColor(neopixel.rgb(85, 32, 145))
            strip.show()
        }
        basic.pause(200)
        if (index < sequence.length - 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.pause(200)
        }
    }
    basic.showString("?")
}
input.onPinPressed(TouchPin.P2, function () {
    if (isInputActive) {
        isInputActive = false
        checkInput("C")
        isInputActive = true
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (isInputActive) {
        isInputActive = false
        checkInput("B")
        isInputActive = true
    }
})
function extendSequence () {
    if (Math.randomBoolean()) {
        sequence.push("A")
    } else {
        sequence.push("B")
    }
    if (Math.randomBoolean()) {
        sequence.push("C")
    }
}
let strip: neopixel.Strip = null
let isInputActive = false
let inputPosition = 0
let sequence: string[] = []
sequence = []
inputPosition = 0
isInputActive = false
for (let index = 0; index < 3; index++) {
    extendSequence()
}
basic.pause(1000)
showSequence()
isInputActive = true
strip = neopixel.create(DigitalPin.P3, 7, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()

function checkInput(inputValue: string) {
    if (inputValue == sequence[inputPosition]) {
        if (inputValue == "A") {
            strip = neopixel.create(DigitalPin.P3, 15, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.show()
        } else if (inputValue == "B") {
            strip = neopixel.create(DigitalPin.P3, 15, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        } else {
            strip = neopixel.create(DigitalPin.P3, 15, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
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
        basic.clearScreen()
        basic.showString("Game Over: Score: 0")
    }
}
input.onPinPressed(TouchPin.P0, function () {
    if (isInputActive) {
        isInputActive = false
        checkInput("A")
        isInputActive = true
    }
})
function showSequence() {
    for (let index = 0; index <= sequence.length - 1; index++) {
        if (sequence[index] == "A") {
            strip = neopixel.create(DigitalPin.P3, 15, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        } else if (sequence[index] == "B") {
            strip = neopixel.create(DigitalPin.P3, 15, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Violet))
            strip.show()
        } else {
            strip = neopixel.create(DigitalPin.P3, 15, NeoPixelMode.RGB)
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
            strip.show()
        }
        basic.pause(1000)
        if (index < sequence.length - 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.pause(1000)
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
function extendSequence() {
    if (Math.randomBoolean()) {
        sequence.push("A")
    } else {
        sequence.push("B")
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

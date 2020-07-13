input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.stopAnimation()
        x += -1
    } else {
        led.stopAnimation()
        x = 4
        y += -1
    }
    if (x == 4 && y == -1) {
        led.stopAnimation()
        x = 4
        y = 4
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.stopAnimation()
        x += 1
    } else {
        led.stopAnimation()
        x = 0
        y += 1
    }
    if (x == 0 && y == 5) {
        led.stopAnimation()
        x = 0
        y = 0
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
})

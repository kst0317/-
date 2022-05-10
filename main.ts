input.onPinPressed(TouchPin.P2, function () {
    alam = true
    while (alam == true) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (alam == true) {
        alam = false
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        alam = true
    }
})
let alam = false
alam = false
basic.forever(function () {
    while (alam == true) {
        basic.showIcon(IconNames.Angry)
    }
})

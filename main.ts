let item = false
basic.showLeds(`
    . . . . .
    . # # . .
    # . # # #
    # # # # #
    . # . # .
    `)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 35 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(800)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(800)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})

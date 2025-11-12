input.onButtonPressed(Button.A, function () {
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "GreenServoArm: Pin S2: right_motor: 1000 millisec ('millisec' more precision than 'sec')"
    )
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight,
    0,
    15
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1000, quest_Time_Units_Enum.Milliseconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight,
    0,
    0
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1000, quest_Time_Units_Enum.Milliseconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight,
    0,
    -15
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1000, quest_Time_Units_Enum.Milliseconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight,
    0,
    0
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1000, quest_Time_Units_Enum.Milliseconds)
})
input.onButtonPressed(Button.B, function () {
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "GreenServoArm: Pin S2: 1000 millisec ('millisec' more precision than 'sec')"
    )
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 0)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1000, quest_Time_Units_Enum.Milliseconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 180)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1000, quest_Time_Units_Enum.Milliseconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 360)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1000, quest_Time_Units_Enum.Milliseconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 180)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(1000, quest_Time_Units_Enum.Milliseconds)
})
quest_Note_2.quest_Show_String_For_Note_Big_Func(
"Startup Message"
)
basic.showIcon(IconNames.Heart)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
basic.forever(function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2025 Quest Institute. All rights reserved."
    )
})

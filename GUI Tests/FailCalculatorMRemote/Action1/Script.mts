SystemUtil.CloseProcessByName("calc.exe")
SystemUtil.Run("calc.exe")
Window("Calculator").WinButton("5").Click @@ hightlight id_;_983628_;_script infofile_;_ZIP::ssf1.xml_;_
Window("Calculator").WinButton("*").Click @@ hightlight id_;_1376688_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Calculator").WinButton("6").Click
Window("Calculator").WinButton("WrongButtonName").Click
Window("Calculator").Close

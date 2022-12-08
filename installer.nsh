!macro customInstall
  CreateDirectory "C:\Users\Public\PyBOTs LLC\DOST\support"
  CopyFiles /SILENT $INSTDIR\support\* "C:\Users\Public\PyBOTs LLC\DOST\support" 9000000
  RMDir /r $INSTDIR\support
!macroend

!macro customUnInstall
  RMDir /r "C:\Users\Public\PyBOTs LLC\DOST"
!macroend

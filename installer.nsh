!macro customInstall
  CreateDirectory "C:\Users\Public\PyBOTs LLC\DOST\support"
  CopyFiles /SILENT $INSTDIR\resources\support\* "C:\Users\Public\PyBOTs LLC\DOST\support" 4000000
  RMDir /r $INSTDIR\resources\support
!macroend

!macro customUnInstall
  RMDir /r "C:\Users\Public\PyBOTs LLC\DOST"
!macroend

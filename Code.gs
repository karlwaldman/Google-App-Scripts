function mySheetName() {
  var key = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
  return key;
}

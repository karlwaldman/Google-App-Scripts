function WeeklyUpdate() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('B12').activate();
  spreadsheet.duplicateActiveSheet();
  spreadsheet.moveActiveSheet(43);
  var date = Utilities.formatDate(new Date(), "GMT+1", "MM/dd/yyyy");
  spreadsheet.getActiveSheet().setName(date);
  spreadsheet.getRange('B5').activate();
  spreadsheet.getRange('C5').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('C6').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('C16').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
};
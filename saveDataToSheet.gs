function saveDataToSheet(data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("UserId") || spreadsheet.insertSheet("UserId");
  sheet.appendRow(data);
}

window.addEventListener("DOMContentLoaded", (event) => {
  const sheetDataHandler = (sheetData) => {
    console.log("sheet data: ", sheetData);
    console.log("Na řádku 1 je:", sheetData[1][""]);
    //ADD YOUR CODE TO WORK WITH sheetData ARRAY OF OBJECTS HERE
  };

  // --==== QUERY EXAMPLES ====--
  // --==== USE LETTERS FOR COLUMN NAMES ====--
  //  'SELECT A,C,D WHERE D > 150'
  //  'SELECT * WHERE B = "Potato"'
  //  'SELECT * WHERE A contains "Jo"'
  //  'SELECT * WHERE C = "active" AND B contains "Jo"'
  //  "SELECT * WHERE E > date '2022-07-9' ORDER BY E DESC"
  //  query: "SELECT * WHERE B > 250 AND C < date '1960-01-1' AND D = FALSE" 

  getSheetData({
    // sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
    sheetID: "1Ctd60JBAUPmzeQucE1pIFLFU8isizEGXqzFHEfTZ6UY",
    // sheetName is the name of the TAB in your spreadsheet (default is "Sheet1")
    sheetName: "AdminTeam",
    query: "SELECT *",
    callback: sheetDataHandler,
  });
});

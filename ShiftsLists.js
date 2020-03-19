// Function to get the date for the first day of the week
function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

// Creates an array of dates between two dates
var startDate = getMonday(new Date());
var prevDate = startDate.getDate() - 42;
startDate.setDate(prevDate);

var endDate = getMonday(new Date());
var nextDate = endDate.getDate() + 364;
endDate.setDate(nextDate);

var getDateArray = function(start, end) {
  var arr = new Array();
  var dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 7);
  }
  return arr;
};

var dateArr = getDateArray(startDate, endDate);
var weekArr = [];

// Output
for (var i = 0; i < dateArr.length; i++) {
  var dd = String(dateArr[i].getDate()).padStart(2, "0");
  var mm = String(dateArr[i].getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = dateArr[i].getFullYear();

  dateArr[i] = dd + "/" + mm + "/" + yyyy;

  var week = "p" + i.toString();

  weekArr[i] = week;
}

//document.getElementById(weekArr[0]).innerHTML = dateArr[0];

for (var i = 0; i < dateArr.length; i++) {
  try {
    document.getElementById(weekArr[i]).innerHTML = dateArr[i];
  } catch (err) {}
}

//Testing
var timeDiff = 0
var diffDays = 0
var modDiffDays = 0

// Function to calculate modulus of difference between dates
function daysDiff(date2) {
  var firstDate = "30/09/2019";
  firstDate = new Date(
    firstDate.split("/")[2],
    firstDate.split("/")[1] - 1,
    firstDate.split("/")[0]
  );
  date2 = new Date(
    date2.split("/")[2],
    date2.split("/")[1] - 1,
    date2.split("/")[0]
  );
  var timeDiff = Math.abs(date2.getTime() - firstDate.getTime());
  if (timeDiff < 15724800000) {
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24) - 1);
    var modDiffDays = diffDays % 6;
    return modDiffDays;
  } else {
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var modDiffDays = diffDays % 6;
    return modDiffDays;
  }
}

// Function that returns the list for a specific date given the modulus (calculated from daysDiff function) and the person
function listFromMod(mod, person) {
  let rotaSM = ["Stock", "Stock", "Mob", "Mob", "Fix", "Fix"];
  let rotaDW = ["Fix", "Fix", "Stock", "Stock", "Mob", "Mob"];
  let rotaJW = ["Mob", "Mob", "Fix", "Fix", "Stock", "Stock"];
  if (person === "SM") {
    let modList = rotaSM[mod];
    return modList;
  } else if (person === "DW") {
    let modList = rotaDW[mod];
    return modList;
  } else if (person === "JW") {
    let modList = rotaJW[mod];
    return modList;
  } else {
    return "Failure";
  }
}

// Function that returns the shift for a specific date given the modulus (calculated from daysDiff function) and the person
function shiftFromMod(mod, person) {
  let shiftSM = ["Mid", "Mid", "Early", "Early", "Mid", "Mid"];
  let shiftDW = ["Late", "Late", "Late", "Late", "Late", "Late"];
  let shiftJW = ["Early", "Early", "Early", "Early", "Early", "Early"];
  let shiftRD = ["Mid", "Mid", "Mid", "Mid", "Late", "Late"];
  if (person === "SM") {
    let modShift = shiftSM[mod];
    return modShift;
  } else if (person === "DW") {
    let modShift = shiftDW[mod];
    return modShift;
  } else if (person === "JW") {
    let modShift = shiftJW[mod];
    return modShift;
  } else if (person === "RD") {
    let modShift = shiftRD[mod];
    return modShift;
  } else {
    return "Failure";
  }
}

let allTableData = [];

// Table data for shifts
let TableDataTwo = createShiftTableObject();

// Adding data to shifts table
function generateTableTwo(tableTwo, data) {
  for (let element of data) {
    let row = tableTwo.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let tableTwo = document.querySelector(".table2");
let dataTwo = Object.keys(TableDataTwo[0]);
generateTableTwo(tableTwo, TableDataTwo);

// Function that creates the object which holds the table data for shifts and lists
function createShiftListTableObject() {
  let allTableData = [];
  for (var i = 0; i < dateArr.length; i++) {
    allTableData.push({
      date: dateArr[i],
      shifttRD: shiftFromMod(daysDiff(dateArr[i]), "RD"),
      shiftSM: shiftFromMod(daysDiff(dateArr[i]), "SM"),
      listSM: listFromMod(daysDiff(dateArr[i]), "SM"),
      shiftDW: shiftFromMod(daysDiff(dateArr[i]), "DW"),
      listDW: listFromMod(daysDiff(dateArr[i]), "DW"),
      shiftJW: shiftFromMod(daysDiff(dateArr[i]), "JW"),
      listJW: listFromMod(daysDiff(dateArr[i]), "JW")
    });
  }
  return allTableData;
}

// Table data for shifts and lists
let TableDataOne = createShiftListTableObject();

// Adding data to shifts and lists table
function generateTableOne(tableOne, data) {
  for (let element of data) {
    let row = tableOne.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let tableOne = document.querySelector(".table1");
let dataOne = Object.keys(TableDataOne[0]);
generateTableOne(tableOne, TableDataOne);

// Function that creates the object which holds the table data for lists
function createListTableObject() {
  let allTableData = [];
  for (var i = 0; i < dateArr.length; i++) {
    allTableData.push({
      date: dateArr[i],
      listSM: listFromMod(daysDiff(dateArr[i]), "SM"),
      listDW: listFromMod(daysDiff(dateArr[i]), "DW"),
      listJW: listFromMod(daysDiff(dateArr[i]), "JW")
    });
  }
  return allTableData;
}

// Table data for lists
let TableDataThree = createListTableObject();

// Adding data to lists table
function generateTableThree(tableThree, data) {
  for (let element of data) {
    let row = tableThree.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let tableThree = document.querySelector(".table3");
let dataThree = Object.keys(TableDataThree[0]);
generateTableThree(tableThree, TableDataThree);

// Function that creates the object which holds the table data for shifts
function createShiftTableObject() {
  let allTableData = [];
  for (var i = 0; i < dateArr.length; i++) {
    allTableData.push({
      date: dateArr[i],
      shifttRD: shiftFromMod(daysDiff(dateArr[i]), "RD"),
      shiftSM: shiftFromMod(daysDiff(dateArr[i]), "SM"),
      shiftDW: shiftFromMod(daysDiff(dateArr[i]), "DW"),
      shiftJW: shiftFromMod(daysDiff(dateArr[i]), "JW")
    });
  }
  return allTableData;
}

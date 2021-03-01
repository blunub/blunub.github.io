//Need to check and update GPM codes

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
};

//This generates the script once the Generate Script button is pressed
function go() {
  var tariff = document.getElementById('selectTariff').value;
  var currentLead = document.getElementById('leadNumberCurrent').value;
  var newLead = document.getElementById('leadNumberNew').value;
  var sharers = document.getElementById('sharerNumbersArea').value;
  var generatedScript = document.getElementById('generatedScriptArea');
  var sharersArray = sharers.split(/\n/);
  var finalScript = "";
  var valueBundle = newTest.valueBundle;
  var tempLeadCode = newTest.tempCode;
  var tempSharerCode = newTestTwo.tempCodeSharer;
  var groupCode = newTestTwo.groupCode;
  for(i=0;i<sharersArray.length;i++){
    var sharerNumber = sharersArray[i];
    finalScript += `MIGRATE ${tempSharerCode} ${sharerNumber} ${newLead} CD300400\n`;
  }
  var lineOne = `CHANGE VALUEBUNDLE ${currentLead} GPZ091\n\n`;
  var lineTwo = `MIGRATE ${tempLeadCode} ${newLead} CD300400\n\n`;
  var lineThree = `MIGRATE ${tempSharerCode} ${currentLead} ${newLead} CD300400\n`;
  var lineFour = `\nMIGRATE PFGROUP ${groupCode} ${newLead}\n`;
  var lineFive = `\nCHANGE VALUEBUNDLE ${newLead} ${valueBundle}\n`;
  if (tariff === "") {
    generatedScript.innerHTML = "Please select a tariff";
  } else if (currentLead === "") {
    generatedScript.innerHTML = "Please enter current lead number";
  } else if (newLead === "") {
    generatedScript.innerHTML = "Please enter new lead number";
  } else if (sharers === "") {
    generatedScript.innerHTML = "Please enter sharer numbers";
  } else {
    generatedScript.innerHTML = lineOne + lineTwo + finalScript + lineThree + lineFour + lineFive;
  }
}
                       
//This updates object properties for tariff and valuebundle when tariff is selected
var selectOne = document.getElementById('selectTariff');
var test = {
  GPM33: "VF SB Sharer 500 Minutes",
  GPM34: "VF SB Sharer 1000 Minutes",
  GPM35: "VF SB Sharer 1500 Minutes",
  GPM36: "VF SB Sharer 2000 Minutes",
  GPM37: "VF SB Sharer 2500 Minutes",
  GPM38: "VF SB Sharer 3000 Minutes",
  GPM39: "VF SB Sharer 3500 Minutes",
  GPM40: "VF SB Sharer 4000 Minutes",
  GPM41: "VF SB Sharer 4500 Minutes",
  GPM42: "VF SB Sharer 5000 Minutes",
  GPM47: "VF SB Sharer 5500 Minutes",
  GPM48: "VF SB Sharer 6000 Minutes",
  GPM49: "VF SB Sharer 6500 Minutes",
  GPM50: "VF SB Sharer 7000 Minutes",
  GPM51: "VF SB Sharer 7500 Minutes",
  GPM52: "VF SB Sharer 8000 Minutes",
  GPM53: "VF SB Sharer 8500 Minutes",
  GPM54: "VF SB Sharer 9000 Minutes",
  GPM55: "VF SB Sharer 9500 Minutes",
  GPM56: "VF SB Sharer 10000 Minutes",
  GPM57: "VF SB Sharer 10500 Minutes",
  GPM58: "VF SB Sharer 11000 Minutes",
  GPM59: "VF SB Sharer 11500 Minutes",
  GPM60: "VF SB Sharer 12000 Minutes",
  GPM60: "VF SB Sharer 12500 Minutes",
  GPM60: "VF SB Sharer 13000 Minutes",
  GPM60: "VF SB Sharer 13500 Minutes",
  GPM60: "VF SB Sharer 14000 Minutes",
  GPM60: "VF SB Sharer 14500 Minutes",
  GPM60: "VF SB Sharer 15000 Minutes",
  GPM60: "VF SB Sharer 16000 Minutes",
  GPM60: "VF SB Sharer 17000 Minutes",
  GPM60: "VF SB Sharer 18000 Minutes",
  GPM60: "VF SB Sharer 19000 Minutes",
  GPM60: "VF SB Sharer 20000 Minutes",
  GPM60: "VF SB Sharer 21000 Minutes",
  GPM60: "VF SB Sharer 22000 Minutes",
  GPM60: "VF SB Sharer 23000 Minutes",
  GPM60: "VF SB Sharer 24000 Minutes",
  GPM60: "VF SB Sharer 25000 Minutes",
  GPM68: "VF SB Sharer 30000 Minutes",
  GPM68: "VF SB Sharer 36000 Minutes",
  GPM68: "VF SB Sharer 42000 Minutes",
  GPM68: "VF SB Sharer 48000 Minutes"
};
var testTwo = {
  VFGFZ374: "VF SB Sharer 500 Minutes",
  VFGFZ375: "VF SB Sharer 1000 Minutes",
  VFGFZ376: "VF SB Sharer 1500 Minutes",
  VFGFZ377: "VF SB Sharer 2000 Minutes",
  VFGFZ378: "VF SB Sharer 2500 Minutes",
  VFGFZ379: "VF SB Sharer 3000 Minutes",
  VFGFZ380: "VF SB Sharer 3500 Minutes",
  VFGFZ381: "VF SB Sharer 4000 Minutes",
  VFGFZ382: "VF SB Sharer 4500 Minutes",
  VFGFZ383: "VF SB Sharer 5000 Minutes",
  VFGFZ384: "VF SB Sharer 5500 Minutes",
  VFGFZ385: "VF SB Sharer 6000 Minutes",
  VFGFZ386: "VF SB Sharer 6500 Minutes",
  VFGFZ387: "VF SB Sharer 7000 Minutes",
  VFGFZ388: "VF SB Sharer 7500 Minutes",
  VFGFZ389: "VF SB Sharer 8000 Minutes",
  VFGFZ390: "VF SB Sharer 8500 Minutes",
  VFGFZ391: "VF SB Sharer 9000 Minutes",
  VFGFZ392: "VF SB Sharer 9500 Minutes",
  VFGFZ393: "VF SB Sharer 10000 Minutes",
  VFGFZ394: "VF SB Sharer 10500 Minutes",
  VFGFZ395: "VF SB Sharer 11000 Minutes",
  VFGFZ396: "VF SB Sharer 11500 Minutes",
  VFGFZ397: "VF SB Sharer 12000 Minutes",
  VFGFZ454: "VF SB Sharer 12500 Minutes",
  VFGFZ455: "VF SB Sharer 13000 Minutes",
  VFGFZ456: "VF SB Sharer 13500 Minutes",
  VFGFZ457: "VF SB Sharer 14000 Minutes",
  VFGFZ458: "VF SB Sharer 14500 Minutes",
  VFGFZ459: "VF SB Sharer 15000 Minutes",
  VFGFZ460: "VF SB Sharer 16000 Minutes",
  VFGFZ461: "VF SB Sharer 17000 Minutes",
  VFGFZ462: "VF SB Sharer 18000 Minutes",
  VFGFZ463: "VF SB Sharer 19000 Minutes",
  VFGFZ464: "VF SB Sharer 20000 Minutes",
  VFGFZ465: "VF SB Sharer 21000 Minutes",
  VFGFZ466: "VF SB Sharer 22000 Minutes",
  VFGFZ467: "VF SB Sharer 23000 Minutes",
  VFGFZ468: "VF SB Sharer 24000 Minutes",
  VFGFZ469: "VF SB Sharer 25000 Minutes",
  VFGFZ470: "VF SB Sharer 30000 Minutes",
  VFGFZ471: "VF SB Sharer 36000 Minutes",
  VFGFZ472: "VF SB Sharer 42000 Minutes",
  VFGFZ473: "VF SB Sharer 48000 Minutes"
};

var testThree = {
  VFGFZ375: "VF SB Sharer 500 Minutes",
  VFGFZ376: "VF SB Sharer 1000 Minutes",
  VFGFZ377: "VF SB Sharer 1500 Minutes",
  VFGFZ378: "VF SB Sharer 2000 Minutes",
  VFGFZ379: "VF SB Sharer 2500 Minutes",
  VFGFZ380: "VF SB Sharer 3000 Minutes",
  VFGFZ381: "VF SB Sharer 3500 Minutes",
  VFGFZ382: "VF SB Sharer 4000 Minutes",
  VFGFZ383: "VF SB Sharer 4500 Minutes",
  VFGFZ384: "VF SB Sharer 5000 Minutes",
  VFGFZ385: "VF SB Sharer 5500 Minutes",
  VFGFZ386: "VF SB Sharer 6000 Minutes",
  VFGFZ387: "VF SB Sharer 6500 Minutes",
  VFGFZ388: "VF SB Sharer 7000 Minutes",
  VFGFZ389: "VF SB Sharer 7500 Minutes",
  VFGFZ390: "VF SB Sharer 8000 Minutes",
  VFGFZ391: "VF SB Sharer 8500 Minutes",
  VFGFZ392: "VF SB Sharer 9000 Minutes",
  VFGFZ393: "VF SB Sharer 9500 Minutes",
  VFGFZ394: "VF SB Sharer 10000 Minutes",
  VFGFZ395: "VF SB Sharer 10500 Minutes",
  VFGFZ396: "VF SB Sharer 11000 Minutes",
  VFGFZ397: "VF SB Sharer 11500 Minutes",
  VFGFZ454: "VF SB Sharer 12000 Minutes",
  VFGFZ455: "VF SB Sharer 12500 Minutes",
  VFGFZ456: "VF SB Sharer 13000 Minutes",
  VFGFZ457: "VF SB Sharer 13500 Minutes",
  VFGFZ458: "VF SB Sharer 14000 Minutes",
  VFGFZ459: "VF SB Sharer 14500 Minutes",
  VFGFZ460: "VF SB Sharer 15000 Minutes",
  VFGFZ461: "VF SB Sharer 16000 Minutes",
  VFGFZ462: "VF SB Sharer 17000 Minutes",
  VFGFZ463: "VF SB Sharer 18000 Minutes",
  VFGFZ464: "VF SB Sharer 19000 Minutes",
  VFGFZ465: "VF SB Sharer 20000 Minutes",
  VFGFZ466: "VF SB Sharer 21000 Minutes",
  VFGFZ467: "VF SB Sharer 22000 Minutes",
  VFGFZ468: "VF SB Sharer 23000 Minutes",
  VFGFZ469: "VF SB Sharer 24000 Minutes",
  VFGFZ470: "VF SB Sharer 25000 Minutes",
  VFGFZ471: "VF SB Sharer 30000 Minutes",
  VFGFZ472: "VF SB Sharer 36000 Minutes",
  VFGFZ473: "VF SB Sharer 42000 Minutes",
  VFGFZ472: "VF SB Sharer 48000 Minutes",
};

var newTest = {
  tariff: "",
  valueBundle: "",
  leadCode: "AAAA",
  tempCode: "BBBB"
};

var newTestTwo = {
  sharerCode: newTest.leadCode.replaceAt(3, "A"),
  tempCodeSharer: newTest.tempCode.replaceAt(3, "A"),
  groupCode: newTest.leadCode.replaceAt(3, "S")
};

function onSelectOneChanged() {
  var tariff = document.getElementById('selectTariff').value;
  newTest.tariff = tariff;
  for (var property in test) {
    if (test[property] == newTest.tariff) {
      newTest.valueBundle = property;
    }
  }
  for (var propertyTwo in testTwo) {
    if (testTwo[propertyTwo] == newTest.tariff) {
      newTest.leadCode = propertyTwo;
    }
  }
  for (var propertyThree in testThree) {
    if (testThree[propertyThree] == newTest.tariff) {
      newTest.tempCode = propertyThree;
    }
  }
  newTestTwo = {
    sharerCode: newTest.leadCode.replaceAt(3, "A"),
    tempCodeSharer: newTest.tempCode.replaceAt(3, "A"),
    groupCode: newTest.leadCode.replaceAt(3, "S")
  };
}

//This is an event listener for when the tariff is changed
if (selectOne.addEventListener)
{
  selectOne.addEventListener('change', onSelectOneChanged, true);
}
else
{
  selectOne.attachEvent('onchange', onSelectOneChanged, true);
}


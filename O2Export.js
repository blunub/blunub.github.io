//Variables
var selectOne = document.getElementById('selectRNO');

var RNO = '';

var RNOCode = '';

var RNONameIndex = '';

//This is a function to update variables when the RNO is changed
function onSelectOneChanged() {
  var RNO = document.getElementById('selectRNO').value;
  var RNONameIndex = RNONames.indexOf(RNO);
  var RNOCode = RNOCodes[RNONameIndex];
}

//This function generates the script once the Generate Script button is pressed
function go() {
  var RNO = document.getElementById('selectRNO').value;
  var RNONameIndex = RNONames.indexOf(RNO);
  var RNOCode = RNOCodes[RNONameIndex];
  var mobileNumbers = document.getElementById('mobileNumberArea').value;
  var generatedScript = document.getElementById('generatedScriptArea');
  var mobileNumbersArray = mobileNumbers.split(/\n/);
  var finalScript = "";
  for(i=0;i<mobileNumbersArray.length;i++){
    var mobileNumber = mobileNumbersArray[i];
    finalScript += "POUT " + mobileNumber + " " + RNOCode + " Y" + "\n";
  }
  if (mobileNumbers === "") {
    generatedScript.innerHTML = "Please enter mobile numbers";
  } else if (RNO === '') {
    generatedScript.innerHTML = "Please select RNO";
  } else {
    generatedScript.innerHTML = finalScript;
  }
}

//Arrays for RNO name and the associated ABS code
var RNONames = ['BT', 'Cable and Wireless', 'Cellnet', 'Cloud9', 'Gamma', 'Hay Systems Ltd', 'Limitless Mobile', 'Lleida', 'LYCA Mobile', 'MCom/Mundio', 'Orange', 'Resilient Plc', 'Sky', 'Stour Marine', 'Teleena', 'Three', 'TISMI', 'T-Mobile', 'Truphone', 'Vectone', 'Virgin', 'Vodafone'];

var RNOCodes = ['BT', 'CW', 'CN', 'CM', 'GA', 'HY', 'LI', 'LL', 'LM', 'MC', 'HM', 'RN', 'SK', 'SM', 'TE', 'TG', 'TS', 'ME', 'TR', 'VC', 'VM', 'VF'];

//This is an event listener for when the RNO is changed
if (selectOne.addEventListener)
{
  selectOne.addEventListener('change', onSelectOneChanged, true);
}
else
{
  selectOne.attachEvent('onchange', onSelectOneChanged, true);
}

//Function to copy text from generated script area
let copyGeneratedScript = () => {
  var copyText = document.getElementById("generatedScriptArea");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
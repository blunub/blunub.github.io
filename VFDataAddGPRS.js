//This function generates the script once the Generate Script button is pressed
function go() {
  var mobileNumbers = document.getElementById('mobileNumberArea').value;
  var generatedScript = document.getElementById('generatedScriptArea');
  var mobileNumbersArray = mobileNumbers.split(/\n/);
  mobileNumbers = mobileNumbers.replaceAll(" ", "");
  mobileNumbersArray = mobileNumbersArray.filter(item => item != "");
  var finalScript = "";
  for(i=0;i<mobileNumbersArray.length;i++){
    var mobileNumber = mobileNumbersArray[i];
    finalScript += "ADD CAGPRS " + mobileNumber + " GPZ53 INTERNET" + "\n" + "ADD APN " + mobileNumber + " WAP" + "\n" + "\n" + "ADD APN " + mobileNumber + " ACCINT" + "\n" + "\n" + "ADD 4G " + mobileNumber + "\n" + "ADD MMS " + mobileNumber + "\n" + "ADD WIFI " + mobileNumber + "\n" + "\n" + "\n";
  }
  if (mobileNumbers === "") {
    generatedScript.innerHTML = "Please enter mobile numbers";
  } else {
    generatedScript.innerHTML = finalScript;
  }
}

//Function to copy text from generated script area
let copyGeneratedScript = () => {
  var copyText = document.getElementById("generatedScriptArea");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
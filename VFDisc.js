//This function generates the script once the Generate Script button is pressed
function go() {
    var mobileNumbers = document.getElementById('mobileNumberArea').value;
    var generatedScript = document.getElementById('generatedScriptArea');
    var mobileNumbersArray = mobileNumbers.split(/\n/);
    var finalScript = "";
    for(i=0;i<mobileNumbersArray.length;i++){
      var mobileNumber = mobileNumbersArray[i];
  finalScript += `UNBAR STOLEN ${mobileNumber}
  MIGRATE VFBUS ${mobileNumber} CD300400
  DISCO VFBUS ${mobileNumber}
  
  `
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
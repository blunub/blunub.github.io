//This generates the script once the Generate Script button is pressed
function go() {
    var mobileNumbers = document.getElementById('mobileNumbersArea').value;
    var generatedScript = document.getElementById('generatedScriptArea');
    var mobileNumbersArray = mobileNumbers.split(/\n/);
    var finalScript = "";
    var finalScriptTwo = "";
    for(i=0;i<mobileNumbersArray.length;i++){
      var mobileNumber = mobileNumbersArray[i];
      finalScript += `'${mobileNumber}',
  `;
    }
    finalScript = finalScript.slice(0, finalScript.length - 2)
    for(i=0;i<mobileNumbersArray.length;i++){
      var mobileNumber = mobileNumbersArray[i];
      finalScriptTwo += `${mobileNumber},
  `;
    }
    finalScriptTwo = finalScriptTwo.slice(0, finalScriptTwo.length - 2)
    if (mobileNumbers === "") {
      generatedScript.innerHTML = "Please enter mobile numbers";
    } else if (selectedRadio === 'Data') {
      generatedScript.innerHTML = finalScriptTwo;
    } else {
      generatedScript.innerHTML = finalScript;
    }
  }
  
  //Event listener to check whether Voice or Data is selected
  
  var selectedRadio = '';
  
  var radios = document.forms["formA"].elements["option"];
  for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
      if (this.value === '1') {
        selectedRadio = 'Voice';
      } else {
        selectedRadio = 'Data';
      }
    }
  }
  
  //Function to copy text from generated script area
  let copyGeneratedScript = () => {
    var copyText = document.getElementById("generatedScriptArea");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  
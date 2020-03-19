//This generates the script once the Generate Script button is pressed
function go() {
  var mobileNumbers = document.getElementById('mobileNumbersArea').value;
  var generatedScript = document.getElementById('generatedScriptArea');
  var mobileNumbersArray = mobileNumbers.split(/\n/);
  var finalScript = "";
  var finalScriptTwo = "";
  for(i=0;i<mobileNumbersArray.length;i++){
    var mobileNumber = mobileNumbersArray[i];
    finalScript += "Transfer " + mobileNumber + " 095/serv=+DC+gs=476+gp=2041,,N,2+gp=58,,N,2+gp=985,,N,2+gp=986,,N,2+MV+mm+d Y" + "\n" + "\n";
  }
  for(i=0;i<mobileNumbersArray.length;i++){
    var mobileNumber = mobileNumbersArray[i];
    finalScriptTwo += "Transfer " + mobileNumber + " 691/serv=+YX+gs=467+gp=2041,,N,2+gp=58,,N,2+gp=985,,N,2+gp=986,,N,2 y" + "\n" + "\n";
  }
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


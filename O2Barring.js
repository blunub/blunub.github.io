//This generates the script once the Generate Script button is pressed
function go() {
  //Below changes the HTML option value for wifi calling based on 
    var x = document.getElementById("selectTariff");
    if (selectedRadio === "+") {
      x.options[x.options.length-1].value = "vl+vw+gp=1729,,N,2";
      x.options[x.options.length-2].value = "gp=2041,,N,2";
      x.options[x.options.length-4].value = "gp=1174,,N,2";
      x.options[x.options.length-5].value = "gp=986,,N,2";
      x.options[x.options.length-11].value = "gp=58,,N,2";
      x.options[x.options.length-18].value = "gp=985,,N,2";
    } else {
      x.options[x.options.length-1].value = "vl-vw-gp=1729";
      x.options[x.options.length-2].value = "gp=2041";
      x.options[x.options.length-4].value = "gp=1174";
      x.options[x.options.length-5].value = "gp=986";
      x.options[x.options.length-11].value = "gp=58";
      x.options[x.options.length-18].value = "gp=985";
    }
    
  //Below gets values of selected services options and adds them to a string  
    var servicesObj = document.getElementsByTagName('select')[0];
    var servicesArray = [];
    var options = servicesObj && servicesObj.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        servicesArray.push(opt.value);
      }
    }
  
    var servicesStr = "/services=" + selectedRadio + servicesArray.join(selectedRadio);
    
  //Below splits mobile numbers and creates the generated script
    var mobileNumbers = document.getElementById('mobileNumbersArea').value;
    var generatedScript = document.getElementById('generatedScriptArea');
    var mobileNumbersArray = mobileNumbers.split(/\n/);
    var finalScript = "";
    
    for(i=0;i<mobileNumbersArray.length;i++){
      var mobileNumber = mobileNumbersArray[i];
      finalScript += "CHANGE " + mobileNumber + servicesStr + " Y" + "\n";
    }
    
    if (mobileNumbers === "") {
      generatedScript.innerHTML = "Please enter mobile numbers";
    } else if (servicesStr === "=" + selectedRadio) {
      generatedScript.innerHTML = "Please select a bar or service";
    } else {
      generatedScript.innerHTML = finalScript;
    }
  }
  
  //Event listener to check whether Add or Remove is selected
  
  var selectedRadio = '+';
  
  var radios = document.forms["formA"].elements["option"];
  for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
      if (this.value === '1') {
        selectedRadio = '+';
      } else {
        selectedRadio = '-';
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
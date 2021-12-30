// This parses snbv or view gprs info for one connection and returns the information in an object

// Need update to be able to parse for all APNs, Products and Facilities

const parser = (conInfo) => {

  let conObj = {};

  if (conInfo.includes("snbv")) {
      try {
          conObj.cli = conInfo.match(/(?<=Subscriber No    : )([^\s]+)/)[0];
      } catch (error) {
          try {
              conObj.cli = conInfo.match(/(?<=snbv ).*/)[0];
          } catch (error){
              conObj.cli = "Error";
          }
      }
      try {
          conObj.sim = conInfo.match(/(?<=SIM Serial No    : ).*/)[0].replaceAll(" ","");
      } catch (error) {
          conObj.sim = "Error";
      }
      try {
          conObj.tariff = conInfo.match(/(?<=Subscription Type: ).*/)[0];
      } catch (error) {
          conObj.tariff = "Error";
      }
      try {
          conObj.serviceLevels = conInfo.match(/(?<=Service Level : ......).*/)[0];
          conObj.serviceLevels.includes("H") ? conObj.stolenBar = "Active" : conObj.stolenBar = "Inactive";
          conObj.serviceLevels.includes("A") ? conObj.adminBar = "Active" : conObj.adminBar = "Inactive";
          conObj.serviceLevels.includes("t") ? conObj.mms = "Active" : conObj.mms = "Inactive";
          conObj.serviceLevels.includes("S") ? conObj.voicemail = "Active" : conObj.voicemail = "Inactive";
      }  catch (error) {
          conObj.serviceLevels = "Error";
          conObj.stolenBar = "Error";
          conObj.adminBar = "Error";
          conObj.mms = "Error";
          conObj.voicemail = "Error";
      }
      try {
          conObj.serviceLevelTariffCode = conInfo.match(/(?<=Service Level : ).*(?= )/)[0];
      } catch (error) {
          conObj.serviceLevelTariffCode = "Error";
      }
      try {
          conObj.serviceProvider = conInfo.match(/(?<=Service Provider : ).*/)[0];
      } catch (error) {
          conObj.serviceProvider = "Error";
      }
      try {
          conObj.lastOperation = conInfo.match(/(?<=Last Operation   : ).*/)[0];
      } catch (error) {
          conObj.lastOperation = "Error";
      }
      try {
          conObj.lastOpReqDate = conInfo.match(/(?<=Request Date     : ).*/)[0];
      } catch (error) {
          conObj.lastOpReqDate = "Error";
      }
      try {
          conObj.lastOpCompDate = conInfo.match(/(?<=Completed Date   : ).*/)[0];
      } catch (error) {
          conObj.lastOpCompDate = "Error";
      }
      try {
          conObj.connectDate = conInfo.match(/(?<=Connect Date     : ).*/)[0];
      } catch (error) {
          conObj.connectDate = "Error";
      }
  } else if (conInfo.includes("view gprs")) {
      try {
          conObj.cli = conInfo.match(/(?<=Subscriber No      : 44).*/)[0];
          conObj.cli = `0${conObj.cli}`
      } catch (error) {
          try {
            conObj.cli = conInfo.match(/(?<=view gprs ).*/)[0];
          } catch (error) {
             conObj.cli = "Error"; 
          }
      }
      try {
          conObj.gprsTariff = conInfo.match(/(?<=GPRS Tariff        : ).*/)[0];
      } catch (error) {
          conObj.gprsTariff = "Error";
      }
      try {
          conObj.serviceProvider = conInfo.match(/(?<=Service Provider   : ).*/)[0];
      } catch (error) {
          conObj.serviceProvider = "Error";
      }
      try {
          conObj.gprsBarStatus = conInfo.match(/(?<=GPRS Bar           : ).*/)[0];
          conObj.gprsBarStatus == "Y" ? conObj.gprsBarStatus = "Active" : conObj.gprsBarStatus = "Inactive";
      } catch (error) {
          conObj.gprsBarStatus = "Error";
      }
      try {
          conObj.gprsRoamBarStatus = conInfo.match(/(?<=GPRS Roam Bar      : ).*/)[0];
          conObj.gprsRoamBarStatus == "Y" ? conObj.gprsRoamBarStatus = "Active" : conObj.gprsRoamBarStatus = "Inactive";
      } catch (error) {
          conObj.gprsRoamBarStatus = "Error";
      }
      try {
          conObj.wap = conInfo.match(/(?<=APN Id : WAP                APN Status  : ).*/)[0];
          conObj.wap == "A" ? conObj.wap = "Active" : conObj.wap = "Inactive";
      } catch (error) {
          conObj.wap = "Error";
      }
  }
  return conObj;
}

// This takes a connection object from the parser function and adds it to an array
// If the cli already exists in the array the respective array element will be
// updated rather than being added as a new element

let conArr = [];

const arrGenerator = (conObj) => {

  let foundConObj = conArr.find(o => o.cli === conObj.cli);
  const foundConObjIndex = conArr.findIndex(o => o.cli === conObj.cli);

  if (!foundConObj) {
      conArr.push(conObj);
  } else {
      const deleteObjectItemByValue = (Obj, val) => {
          for (var key in Obj) {
              if (Obj[key] == val) {
                  delete Obj[key];
              }
          }
          return Obj;
      };
          
      deleteObjectItemByValue(conObj, 'Error');

      Object.assign(conArr[foundConObjIndex], conObj);

  }
}

// Function to change object to string of desired services

const objToStr = (obj) => {
  let objStr = "";
  if (selectedServices.includes("cli")) {objStr += `${obj.cli},`;}
  if (selectedServices.includes("sim")) {objStr += `${obj.sim},`;}
  if (selectedServices.includes("tariff")) {objStr += `${obj.tariff},`;}
  if (selectedServices.includes("serviceLevels")) {objStr += `${obj.serviceLevels},`;}
  if (selectedServices.includes("stolenBar")) {objStr += `${obj.stolenBar},`;}
  if (selectedServices.includes("adminBar")) {objStr += `${obj.adminBar},`;}
  if (selectedServices.includes("mms")) {objStr += `${obj.mms},`;}
  if (selectedServices.includes("voicemail")) {objStr += `${obj.voicemail},`;}
  if (selectedServices.includes("serviceLevelTariffCode")) {objStr += `${obj.serviceLevelTariffCode},`;}
  if (selectedServices.includes("serviceProvider")) {objStr += `${obj.serviceProvider},`;}
  if (selectedServices.includes("lastOperation")) {objStr += `${obj.lastOperation},`;}
  if (selectedServices.includes("lastOpReqDate")) {objStr += `${obj.lastOpReqDate},`;}
  if (selectedServices.includes("lastOpCompDate")) {objStr += `${obj.lastOpCompDate},`;}
  if (selectedServices.includes("connectDate")) {objStr += `${obj.connectDate},`;}
  if (selectedServices.includes("gprsTariff")) {objStr += `${obj.gprsTariff},`;}
  if (selectedServices.includes("gprsBarStatus")) {objStr += `${obj.gprsBarStatus},`;}
  if (selectedServices.includes("gprsRoamBarStatus")) {objStr += `${obj.gprsRoamBarStatus},`;}
  if (selectedServices.includes("wap")) {objStr += `${obj.wap},`;}
  objStr = objStr.substring(0, objStr.length - 1);
  objStr = objStr + "\n";
  return objStr;
}

// Below needs to change based on user selection

let selectedServices = [];

// Function to get the names of the selected services desired by the user
const getSelectedServices = () => {
selectedServices = [];
let allServices = document.getElementsByTagName("select")[0].options;
for (let i = 0; i < allServices.length; i++) {
  if (allServices[i].selected) {selectedServices.push(allServices[i].value)}
}
console.log(selectedServices);
return selectedServices;
}

const interpretData = (data) => {
getSelectedServices();
let header = "";
let information = document.getElementById("mobileNumbersArea").value;
let splitInfo = information.split("ISAAC>")

splitInfo = splitInfo.filter(item => item.includes("07"))

for (let i = 0; i < splitInfo.length; i++) {
  let testObj = parser(splitInfo[i]);
  arrGenerator(testObj);
}

for (let i = 0; i < selectedServices.length; i++) {
  header += `${selectedServices[i]},`;
}

header = header.substring(0, header.length - 1);
header = header + "\n";

let finalString = header;

for (let i = 0; i < conArr.length; i++) {
  finalString += objToStr(conArr[i]);
}

document.getElementById("generatedScriptArea").value = finalString;
}

//Function to copy text from generated script area
let copyGeneratedScript = () => {
var copyText = document.getElementById("generatedScriptArea");
copyText.select();
copyText.setSelectionRange(0, 99999999);
document.execCommand("copy");
}
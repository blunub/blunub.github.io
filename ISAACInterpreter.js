// This object will hold information about the mobile connection.

let mobCon = {
  CLI: "",
  SIM: "",
  Tariff: "",
  ServiceLevels: "",
  StolenBar: "",
  AdminBar: "",
  MMS: "",
  Voicemail: "",
  ServiceLevelTariffCode: "",
  ServiceProvider: "",
  SPID: "",
  LastOperation: "",
  LastOperationRequestDate: "",
  LastOperationCompletedDate: "",
  ConnectDate: "",
  GPRSTariff: "",
  GPRSBar: "",
  GPRSRoamBar: "",
  WAP: "",
  Internet: "",
  RawMobInfo: ""
};

// This array will hold all mobCon objects.
let mobConArr = [];
// This is the parsed data that will be returned to the user on the webpage.
let mobInfo = "";
// This will hold the ISAAC data pasted in by the user.
let data = "";
// This will hold mobInfo data split into an array on either snbv or view gprs.
let splitDataArr = [];
// This is a test array to hold whether the mobInfo is from snbv or view gprs.
let testArray = [];
// These are to be added to testArray to show whether mobInfo is snbv or view gprs.
let SNBV = "SNBV";
let GPRS = "GPRS";
// This is the index of the CLI within mobInfo.
let CLIIndex = 0;
// This is the CLI with mobInfo.
let CLI = "";
// This is the idex of the SIM within the mobInfo.
let SIMIndex = 0;
// This is the SIM within mobInfo with spaces.
let SIMWithSpaces = "";
// This is the SIM within mobInfo.
let SIM = "";
// This holds the data returned to the user per connection.
let ouputPerMobCon = "";
// This is an array of outputPerMobCon
let ouputPerMobConArr = [];

//Module to get selected services
var getServices = (function() {
  var servicesObj = document.getElementsByTagName("select")[0];
  var servicesArray = [];
  var options = servicesObj && servicesObj.options;
  var opt;

  return {
    servicesList: function() {
      var servicesArray = [];
      for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
          servicesArray.push(opt.value);
        }
      }
      servicesArray = servicesArray.map(i => "mobCon." + i);
      return servicesArray;
    },

    pureServicesList: function() {
      var servicesArray = [];
      for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
          servicesArray.push(opt.value);
        }
      }
      return servicesArray.join(",");
    }
  };
})();

//Module to split ISAAC data into an array and remove values that do not contain a mobile number
var splittingISAACData = (function() {
  const splittingISAACDataRegExp = new RegExp("snbv|view gprs", "i");

  return {
    splitISAACData: function() {
      var ISAACData = document.getElementById("mobileNumbersArea").value;
      var ISAACDataArray = ISAACData.split(splittingISAACDataRegExp);
      ISAACDataArray.splice(0, 1);
      return ISAACDataArray;
    }
  };
})();

//Module to check whether value in ISAAC data array is SNBV or View GPRS or neither
var SNBVOrViewGPRS = (function() {
  return {
    SNBVOrViewGPRS: function(data) {
      if (data.includes("Service Level")) {
        return "SNBV";
      } else if (data.includes("GPRS Tariff")) {
        return "GPRS";
      } else {
        return "None";
      }
    }
  };
})();

//Module to parse an SNBV value in the ISAAC data array and return an object with the details
var SNBVToObject = (function() {
  return {
    SNBVToObject: function(string) {
      var mobCon = {
        CLI: "",
        SIM: "",
        Tariff: "",
        ServiceLevels: "",
        StolenBar: "",
        AdminBar: "",
        MMS: "",
        Voicemail: "",
        ServiceLevelTariffCode: "",
        ServiceProvider: "",
        SPID: "",
        LastOperation: "",
        LastOperationRequestDate: "",
        LastOperationCompletedDate: "",
        ConnectDate: "",
        GPRSTariff: "",
        GPRSBar: "",
        GPRSRoamBar: "",
        WAP: "",
        Internet: "",
        RawMobInfo: ""
      };

      let mobInfo = string;
      //CLI
      CLIIndex = mobInfo.indexOf("Subscriber No    : ");
      mobCon.CLI = mobInfo.substr(CLIIndex + 19, 11);
      //SIM
      SIMIndex = mobInfo.indexOf("SIM Serial No    : ");
      SIMWithSpaces = mobInfo.substr(SIMIndex + 19, 24);
      mobCon.SIM = SIMWithSpaces.replace(/\s/g, "");
      //Tariff name
      let tariffNameRegExp = new RegExp("Subscription Type: .*\n", "i");
      mobCon.Tariff = mobInfo
        .match(tariffNameRegExp)[0]
        .replace("\n", "")
        .replace("Subscription Type: ", "");
      //Service Levels
      let serviceLevelsRegExpFull = new RegExp("Service Level : .* .*\n", "i");
      let serviceLevelsRegExp = new RegExp("Service Level : .* ", "i");
      let serviceLevels = mobInfo
        .match(serviceLevelsRegExpFull)[0]
        .replace(serviceLevelsRegExp, "")
        .replace("\n", "");
      mobCon.ServiceLevels = serviceLevels;
      //Stolen Bar
      serviceLevels.includes("H")
        ? (mobCon.StolenBar = "Active")
        : (mobCon.StolenBar = "Inactive");
      //Admin Bar
      if (serviceLevels.includes("A")) {
        mobCon.AdminBar = "Active";
      } else {
        mobCon.AdminBar = "Inactive";
      }
      //MMS
      if (serviceLevels.includes("t")) {
        mobCon.MMS = "Active";
      } else {
        mobCon.MMS = "Inactive";
      }
      //Voicemail
      if (serviceLevels.includes("S")) {
        mobCon.Voicemail = "Active";
      } else {
        mobCon.Voicemail = "Inactive";
      }
      //Service Level Tariff Code
      mobCon.ServiceLevelTariffCode = mobInfo
        .match(serviceLevelsRegExp)[0]
        .replace("Service Level : ", "")
        .replace(" ", "");
      //Service Provider
      let SPRowRegExp = new RegExp("Service Provider : .*\n", "i");
      let SPIDRegExp = new RegExp("Service Provider : .* - ", "i");
      mobCon.ServiceProvider = mobInfo
        .match(SPRowRegExp)[0]
        .replace(SPIDRegExp, "")
        .replace("\n", "");
      //SPID
      mobCon.SPID = mobInfo
        .match(SPIDRegExp)[0]
        .replace("Service Provider : ", "")
        .replace(" - ", "");
      //Last Operation
      let lastOperationRegExp = new RegExp("Last Operation   : .*\n", "i");
      mobCon.LastOperation = mobInfo
        .match(lastOperationRegExp)[0]
        .replace("Last Operation   : ", "")
        .replace("\n", "");
      //Last Operation Request Date
      let lastOperationRequestDateRegExp = new RegExp(
        "Request Date     : .*\n",
        "i"
      );
      mobCon.LastOperationRequestDate = mobInfo
        .match(lastOperationRequestDateRegExp)[0]
        .replace("Request Date     : ", "")
        .replace("\n", "");
      //Last Operation Completed Date
      let lastOperationCompletedDateRegExp = new RegExp(
        "Completed Date   : .*\n",
        "i"
      );
      mobCon.LastOperationCompletedDate = mobInfo
        .match(lastOperationCompletedDateRegExp)[0]
        .replace("Completed Date   : ", "")
        .replace("\n", "");
      //Connect Date
      let connectDateRegExp = new RegExp("Connect Date     : .*\n", "i");
      mobCon.ConnectDate = mobInfo
        .match(connectDateRegExp)[0]
        .replace("Connect Date     : ", "")
        .replace("\n", "");
      //Facilities (Need to find a way to deal with these)

      //Raw mobInfo
      mobCon.RawMobInfo = mobInfo;
      //return mobCon;
      return mobCon;
    }
  };
})();

//Module to parse a GPRS value in the ISAAC data array and return an object with the details
var GPRSToObject = (function() {
  return {
    GPRSToObject: function(string) {
      var mobCon = {
        CLI: "",
        SIM: "",
        Tariff: "",
        ServiceLevels: "",
        StolenBar: "",
        AdminBar: "",
        MMS: "",
        Voicemail: "",
        ServiceLevelTariffCode: "",
        ServiceProvider: "",
        SPID: "",
        LastOperation: "",
        LastOperationRequestDate: "",
        LastOperationCompletedDate: "",
        ConnectDate: "",
        GPRSTariff: "",
        GPRSBar: "",
        GPRSRoamBar: "",
        WAP: "",
        Internet: "",
        RawMobInfo: ""
      };

      let mobInfo = string;
      //CLI
      let CLIRegExp = new RegExp("Subscriber No      : .*\n", "i");
      mobCon.CLI = mobInfo
        .match(CLIRegExp)[0]
        .replace("\n", "")
        .replace("Subscriber No      : 44", "0");
      //GPRS Tariff
      let GPRSRegExp = new RegExp("GPRS Tariff        : .*\n", "i");
      mobCon.GPRSTariff = mobInfo
        .match(GPRSRegExp)[0]
        .replace("\n", "")
        .replace("GPRS Tariff        : ", "");
      //SPID
      let SPIDRegExp = new RegExp("Service Provider   : .*\n", "i");
      mobCon.SPID = mobInfo
        .match(SPIDRegExp)[0]
        .replace("\n", "")
        .replace("Service Provider   : ", "");
      //GPRS Bar
      let GPRSBarRegExp = new RegExp("GPRS Bar           : .*\n", "i");
      let GPRSBarStatus = mobInfo
        .match(GPRSBarRegExp)[0]
        .replace("\n", "")
        .replace("GPRS Bar           : ", "");
      if (GPRSBarStatus == "Y") {
        mobCon.GPRSBar = "Active";
      } else {
        mobCon.GPRSBar = "Inactive";
      }
      //GPRS Roaming Bar
      let GPRSRoamBarRegExp = new RegExp("GPRS Roam Bar      : .*\n", "i");
      let GPRSRoamBarStatus = mobInfo
        .match(GPRSRoamBarRegExp)[0]
        .replace("\n", "")
        .replace("GPRS Roam Bar      : ", "");
      if (GPRSRoamBarStatus == "Y") {
        mobCon.GPRSRoamBar = "Active";
      } else {
        mobCon.GPRSRoamBar = "Inactive";
      }
      //WAP
      let WAPRegExp = new RegExp("APN Id : WAP .*\n", "i");
      let WAPStatus = mobInfo.match(WAPRegExp);
      if (WAPStatus == undefined) {
        mobCon.WAP = "Inactive";
      } else {
        mobCon.WAP = "Active";
      }
      //Internet APN
      let InternetRegExp = new RegExp("APN Id : INTERNET.*\n", "i");
      let InternetStatus = mobInfo.match(InternetRegExp);
      if (InternetStatus == undefined) {
        mobCon.Internet = "Inactive";
      } else {
        mobCon.Internet = "Active";
      }
      //Find a way to deal with APNs and Products

      //Raw mobInfo
      mobCon.RawMobInfo = mobInfo;
      //return mobCon;
      return mobCon;
    }
  };
})();

//Module that takes services array and mobCon object then returns an array with the selected services variables
var featureVariableFromString = (function() {
  return {
    featureVariableFromString: function(array, object) {
      let featureArrayVariables = [];
      mobCon = object;

      for (var i = 0, iLen = array.length; i < iLen; i++) {
        let arrayValue = array[i];

        if (arrayValue == "mobCon.CLI") {
          featureArrayVariables.push(mobCon.CLI);
        } else if (arrayValue == "mobCon.GPRSTariff") {
          featureArrayVariables.push(mobCon.GPRSTariff);
        } else if (arrayValue == "mobCon.SPID") {
          featureArrayVariables.push(mobCon.SPID);
        } else if (arrayValue == "mobCon.GPRSBar") {
          featureArrayVariables.push(mobCon.GPRSBar);
        } else if (arrayValue == "mobCon.GPRSRoamBar") {
          featureArrayVariables.push(mobCon.GPRSRoamBar);
        } else if (arrayValue == "mobCon.WAP") {
          featureArrayVariables.push(mobCon.WAP);
        } else if (arrayValue == "mobCon.Internet") {
          featureArrayVariables.push(mobCon.Internet);
        } else if (arrayValue == "mobCon.RawMobInfo") {
          featureArrayVariables.push(mobCon.RawMobInfo);
        } else if (arrayValue == "mobCon.SIM") {
          featureArrayVariables.push(mobCon.SIM);
        } else if (arrayValue == "mobCon.Tariff") {
          featureArrayVariables.push(mobCon.Tariff);
        } else if (arrayValue == "mobCon.ServiceLevels") {
          featureArrayVariables.push(mobCon.ServiceLevels);
        } else if (arrayValue == "mobCon.StolenBar") {
          featureArrayVariables.push(mobCon.StolenBar);
        } else if (arrayValue == "mobCon.AdminBar") {
          featureArrayVariables.push(mobCon.AdminBar);
        } else if (arrayValue == "mobCon.MMS") {
          featureArrayVariables.push(mobCon.MMS);
        } else if (arrayValue == "mobCon.Voicemail") {
          featureArrayVariables.push(mobCon.Voicemail);
        } else if (arrayValue == "mobCon.ServiceLevelTariffCode") {
          featureArrayVariables.push(mobCon.ServiceLevelTariffCode);
        } else if (arrayValue == "mobCon.ServiceProvider") {
          featureArrayVariables.push(mobCon.ServiceProvider);
        } else if (arrayValue == "mobCon.LastOperation") {
          featureArrayVariables.push(mobCon.LastOperation);
        } else if (arrayValue == "mobCon.LastOperationRequestDate") {
          featureArrayVariables.push(mobCon.LastOperationRequestDate);
        } else if (arrayValue == "mobCon.LastOperationCompletedDate") {
          featureArrayVariables.push(mobCon.LastOperationCompletedDate);
        } else if (arrayValue == "mobCon.ConnectDate") {
          featureArrayVariables.push(mobCon.ConnectDate);
        } else {
          featureArrayVariables.push("Error");
        }
      }

      return featureArrayVariables.join(",");
    }
  };
})();

//Some sort of check
var check = (function(array, mobCon) {
  return {
    check: function(array, mobCon) {
      let mobNum = mobCon.CLI;
      let { length } = array;
      let id = length + 1;
      let found = array.some(el => el.CLI === mobNum);
      return found;
    }
  };
})();

//Module to check if mobCon.CLI in mobConArr. If in array this will update the object, if not in array it will add the object to the array
var checkCLIInArr = (function(arr) {
  return {
    checkCLIInArr: function(arr) {
      var newArr = [];
      var i;

      for (i = 0; i < arr.length; i++) {
        let mobCon = arr[i];
        let CLI = mobCon.CLI;
        let found = check.check(newArr, mobCon);
        if (!found) {
          newArr.push(mobCon);
        } else {
          let mobConIndex = newArr.findIndex(x => x.CLI === CLI);
          updateObject.updateObject(newArr[mobConIndex], mobCon);
        }
      }
      return newArr;
    }
  };
})();

//Module to compare two mobCon objects and update any blank values
var updateObject = (function(objectOne, objectTwo) {
  return {
    updateObject: function(objectOne, objectTwo) {
      if (objectOne.SIM != objectTwo.SIM && objectTwo.SIM != "") {
        objectOne.SIM = objectTwo.SIM;
      }
      if (objectOne.Tariff != objectTwo.Tariff && objectTwo.SIM != "") {
        objectOne.Tariff = objectTwo.Tariff;
      }
      if (
        objectOne.ServiceLevels != objectTwo.ServiceLevels &&
        objectTwo.ServiceLevels != ""
      ) {
        objectOne.ServiceLevels = objectTwo.ServiceLevels;
      }
      if (
        objectOne.StolenBar != objectTwo.StolenBar &&
        objectTwo.StolenBar != ""
      ) {
        objectOne.StolenBar = objectTwo.StolenBar;
      }
      if (
        objectOne.AdminBar != objectTwo.AdminBar &&
        objectTwo.AdminBar != ""
      ) {
        objectOne.AdminBar = objectTwo.AdminBar;
      }
      if (objectOne.MMS != objectTwo.MMS && objectTwo.MMS != "") {
        objectOne.MMS = objectTwo.MMS;
      }
      if (
        objectOne.Voicemail != objectTwo.Voicemail &&
        objectTwo.Voicemail != ""
      ) {
        objectOne.Voicemail = objectTwo.Voicemail;
      }
      if (
        objectOne.ServiceLevelTariffCode != objectTwo.ServiceLevelTariffCode &&
        objectTwo.ServiceLevelTariffCode != ""
      ) {
        objectOne.ServiceLevelTariffCode = objectTwo.ServiceLevelTariffCode;
      }
      if (
        objectOne.ServiceProvider != objectTwo.ServiceProvider &&
        objectTwo.ServiceProvider != ""
      ) {
        objectOne.ServiceProvider = objectTwo.ServiceProvider;
      }
      if (objectOne.SPID != objectTwo.SPID && objectTwo.SPID != "") {
        objectOne.SPID = objectTwo.SPID;
      }
      if (
        objectOne.LastOperation != objectTwo.LastOperation &&
        objectTwo.LastOperation != ""
      ) {
        objectOne.LastOperation = objectTwo.LastOperation;
      }
      if (
        objectOne.LastOperationRequestDate !=
          objectTwo.LastOperationRequestDate &&
        objectTwo.LastOperationRequestDate != ""
      ) {
        objectOne.LastOperationRequestDate = objectTwo.LastOperationRequestDate;
      }
      if (
        objectOne.LastOperationCompletedDate !=
          objectTwo.LastOperationCompletedDate &&
        objectTwo.LastOperationCompletedDate != ""
      ) {
        objectOne.LastOperationCompletedDate =
          objectTwo.LastOperationCompletedDate;
      }
      if (
        objectOne.ConnectDate != objectTwo.ConnectDate &&
        objectTwo.ConnectDate != ""
      ) {
        objectOne.ConnectDate = objectTwo.ConnectDate;
      }
      if (
        objectOne.GPRSTariff != objectTwo.GPRSTariff &&
        objectTwo.GPRSTariff != ""
      ) {
        objectOne.GPRSTariff = objectTwo.GPRSTariff;
      }
      if (objectOne.GPRSBar != objectTwo.GPRSBar && objectTwo.GPRSBar != "") {
        objectOne.GPRSBar = objectTwo.GPRSBar;
      }
      if (
        objectOne.GPRSRoamBar != objectTwo.GPRSRoamBar &&
        objectTwo.GPRSRoamBar != ""
      ) {
        objectOne.GPRSRoamBar = objectTwo.GPRSRoamBar;
      }
      if (objectOne.WAP != objectTwo.WAP && objectTwo.WAP != "") {
        objectOne.WAP = objectTwo.WAP;
      }
      if (
        objectOne.Internet != objectTwo.Internet &&
        objectTwo.Internet != ""
      ) {
        objectOne.Internet = objectTwo.Internet;
      }
      if (
        objectOne.RawMobInfo != objectTwo.RawMobInfo &&
        objectTwo.RawMobInfo != ""
      ) {
        objectOne.RawMobInfo = objectTwo.RawMobInfo;
      }
      return objectOne;
    }
  };
})();

//Module to create array of mobCon objects
var mobConObjectArray = (function() {
  return {
    mobConObjectArray: function() {
      let servicesList = [];
      let servicesNamesList = [];
      let ISAACDataArray = [];
      let mobConArray = [];
      let refinedMobConArray = [];
      let mobCon = {};
      servicesList = getServices.servicesList();
      servicesNamesList = getServices.pureServicesList();
      ISAACDataArray = splittingISAACData.splitISAACData();
      var i;
      for (i = 0; i < ISAACDataArray.length; i++) {
        if (SNBVOrViewGPRS.SNBVOrViewGPRS(ISAACDataArray[i]) === "SNBV") {
          mobCon = SNBVToObject.SNBVToObject(ISAACDataArray[i]);
          mobConArray.push(mobCon);
        } else if (
          SNBVOrViewGPRS.SNBVOrViewGPRS(ISAACDataArray[i]) === "GPRS"
        ) {
          mobCon = GPRSToObject.GPRSToObject(ISAACDataArray[i]);
          mobConArray.push(mobCon);
        } else {
          console.log("Error determining SNBV or GPRS");
        }
        refinedMobConArray = checkCLIInArr.checkCLIInArr(mobConArray);
      }
      return refinedMobConArray;
    }
  };
})();

//Module to change array of mobCon objects to readable strings
var arrayToOutput = (function(array) {
  return {
    arrayToOutput: function(array) {
      let servicesList = [];
      let servicesNamesList = [];
      let output = document.getElementById("generatedScriptArea");
      servicesList = getServices.servicesList();
      servicesNamesList = getServices.pureServicesList();
      let mobConStringArray = [];
      var i;
      for (i = 0; i < array.length; i++) {
        let mobConString = featureVariableFromString.featureVariableFromString(
          getServices.servicesList(),
          array[i]
        );
        mobConStringArray.push(mobConString);
      }
      let finalScript = mobConStringArray.join("\n");
      if (document.getElementById("mobileNumbersArea").value == "") {
        output.value = "No ISAAC data entered";
      } else if (servicesNamesList == "") {
        output.value = "No services selected";
      } else {
        output.value = servicesNamesList + "\n" + finalScript;
      }
    }
  };
})();

//Function to copy text from generated script area
let copyGeneratedScript = () => {
  var copyText = document.getElementById("generatedScriptArea");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

/*
get selected services to return -- getServices.servicesList();
get isaac data and split isaac data into array -- splittingISAACData.splitISAACData();
for each item in array check if snbv or gprs -- SNBVOrViewGPRS.SNBVOrViewGPRS();
	if snbv run SNBVToObject -- SNBVToObject.SNBVToObject();
		check if cli already in mobConArr -- checkCLIInArr.checkCLIInArr();
			if cli already in mobConArr update the respective object -- checkCLIInArr.checkCLIInArr();
			if cli not in mobConArr add object to it -- checkCLIInArr.checkCLIInArr();
	if gprs run GPRSToObject -- GPRSToObject.GPRSToObject();
		check if cli already in mobConArr -- checkCLIInArr.checkCLIInArr();
			if cli already in mobConArr update the respective object -- checkCLIInArr.checkCLIInArr();
			if cli not in mobConArr add object to it -- checkCLIInArr.checkCLIInArr();
return selected services names (comma separated) -- getServices.pureServicesList();
for each mobCon in mobConArr return mobCon.service for selected services (comma separated) -- featureVariableFromString.featureVariableFromString();
*/

/*
ISAAC Example Data

ISAAC>
ISAAC> snbv 07876744980
Subscriber No    : 07876744980                 Service Level : HL601 GtS
Service Provider : CD300400 - ABZORB SB
Last Operation   : Connect Non-Subscription Recall
Request Date     :  5-DEC-2017 08:55
Completed Date   :  5-DEC-2017 19:03
Subscription Type: SB Single - 3000 minutes with World 24
SIM Serial No    : 8944 1000 3007 9608 4949
Connect Date     : 26-APR-2005 09:20
Call Barring Code: 1919
Facility #01     : Data Notification Opt Out
Facility #02     : Data Controls profile 1
Facility #03     : 4G allowed feature
ISAAC>
ISAAC>
ISAAC> view gprs 07876744980
 Subscriber No      : 447876744980
 GPRS Tariff        : GPZ09
 Payment Type       : C
 Service Provider   : CD300400
 Wildcard APN Bar   : N
 Premium APN Bar    : N
 GPRS Bar           : N
 GPRS Roam Bar      : N
 SOFTGPRS Bar       : N
 Number of APNs     : 4
 Number of Products : 4
 APN Id : V3BH1              APN Status  : A
 APN Id : EUINTERNET         APN Status  : A
 APN Id : WAP                APN Status  : A
 APN Id : INTERNET           APN Status  : A
Do you wish to view more information ? [Y]:
 Product Id  : MRD21
 Product Id  : WTRDC
 Product Id  : IRWDC
 Product Id  : V2WT3
ISAAC>
ISAAC>
ISAAC>
ISAAC> snbv 07825666331
Subscriber No    : 07825666331                 Service Level : HL601 GtS
Service Provider : CD300400 - ABZORB SB
Last Operation   : Connect Non-Subscription Recall
Request Date     :  5-DEC-2017 08:55
Completed Date   :  5-DEC-2017 19:03
Subscription Type: SB Single - 3000 minutes with World 24
SIM Serial No    : 8944 1000 3007 9608 4949
Connect Date     : 26-APR-2005 09:20
Call Barring Code: 1919
Facility #01     : Data Notification Opt Out
Facility #02     : Data Controls profile 1
Facility #03     : 4G allowed feature
ISAAC>
ISAAC>
ISAAC> view gprs 07825666331
 Subscriber No      : 447825666331
 GPRS Tariff        : GPZ09
 Payment Type       : C
 Service Provider   : CD300400
 Wildcard APN Bar   : N
 Premium APN Bar    : N
 GPRS Bar           : N
 GPRS Roam Bar      : N
 SOFTGPRS Bar       : N
 Number of APNs     : 4
 Number of Products : 4
 APN Id : V3BH1              APN Status  : A
 APN Id : EUINTERNET         APN Status  : A
 APN Id : WAP                APN Status  : A
 APN Id : INTERNET           APN Status  : A
Do you wish to view more information ? [Y]:
 Product Id  : MRD21
 Product Id  : WTRDC
 Product Id  : IRWDC
 Product Id  : V2WT3
ISAAC>
ISAAC>
ISAAC>
ISAAC> snbv 07414988232
Subscriber No    : 07414988232                 Service Level : HL601 GtS
Service Provider : CD300400 - ABZORB SB
Last Operation   : Connect Non-Subscription Recall
Request Date     :  5-DEC-2017 08:55
Completed Date   :  5-DEC-2017 19:03
Subscription Type: SB Single - 3000 minutes with World 24
SIM Serial No    : 8944 1000 3007 9608 4949
Connect Date     : 26-APR-2005 09:20
Call Barring Code: 1919
Facility #01     : Data Notification Opt Out
Facility #02     : Data Controls profile 1
Facility #03     : 4G allowed feature
ISAAC>
ISAAC>
ISAAC> view gprs 07414988232
 Subscriber No      : 447414988232
 GPRS Tariff        : GPZ09
 Payment Type       : C
 Service Provider   : CD300400
 Wildcard APN Bar   : N
 Premium APN Bar    : N
 GPRS Bar           : N
 GPRS Roam Bar      : N
 SOFTGPRS Bar       : N
 Number of APNs     : 4
 Number of Products : 4
 APN Id : V3BH1              APN Status  : A
 APN Id : EUINTERNET         APN Status  : A
 APN Id : WAP                APN Status  : A
 APN Id : INTERNET           APN Status  : A
Do you wish to view more information ? [Y]:
 Product Id  : MRD21
 Product Id  : WTRDC
 Product Id  : IRWDC
 Product Id  : V2WT3
ISAAC>
ISAAC>

*/

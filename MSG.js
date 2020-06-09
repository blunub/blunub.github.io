//This generates the script once the Generate Script button is pressed
function go() {
  var mobileNumbers = document.getElementById("mobileNumberArea").value;
  var simNumbers = document.getElementById("simNumberArea").value;
  var generatedScript = document.getElementById("generatedScriptArea");
  var selectTariff = document.getElementById("selectTariff").value;
  var selectConnectionType = document.getElementById("selectConnectionType")
    .value;
  var mobileNumbersArray = mobileNumbers.split(/\n/);
  var simNumbersArray = simNumbers.split(/\n/);
  var finalScript = "";
  var bothArray = [];
  var DNO = document.getElementById("selectDNO").value;
  var DNONameIndex = DNONames.indexOf(DNO);
  var DNOCode = DNOCodes[DNONameIndex];
  var tariff = document.getElementById("selectTariff").value;
  var tariffNameIndex = sbSharerTariffNames.indexOf(tariff);
  var tariffCode = sbSharerTariffCodes[tariffNameIndex];
  var leadTariffNameIndex = sbSharerTariffLeadNames.indexOf(tariff);
  var leadTariffCode = sbSharerTariffLeadCodes[leadTariffNameIndex];
  var leadTariffValuebundle = sbSharerTariffValuebundle[leadTariffNameIndex];
  var leadHandsetNumber = document.getElementById("leadHandsetNumber").value;
  for (i = 0; i < mobileNumbersArray.length; i++) {
    bothArray.push([mobileNumbersArray[i], simNumbersArray[i]]);
  }
  for (i = 0; i < bothArray.length; i++) {
    var mobileNumber = bothArray[i][0];
    var simNumber = bothArray[i][1];
    if (selectConnectionType == "Migration") {
      if (selectTariff in redTariffs) {
        finalScript +=
          "MIGRATE VFVSZ713 " +
          mobileNumber +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in o2VoiceTariffs) {
        finalScript +=
          "change " +
          mobileNumber +
          "/serv=+gs=476+gp=2041,,N,2+gp=58,,N,2+gp=985,,N,2+gp=986,,N,2+mm+MV+d+5G y" +
          "\n";
      } else if (selectTariff in o2DataTariffs) {
        finalScript +=
          "Transfer " +
          mobileNumber +
          " 691/serv=+YX+gs=467+gp=2041,,N,2+gp=58,,N,2+gp=985,,N,2+gp=986,,N,2 y" +
          "\n";
      } else if (selectTariff in vfDataTariffs) {
        finalScript +=
          "MIGRATE DATA " +
          mobileNumber +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "CHANGE GPRS " +
          mobileNumber +
          " GPZ53" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n";
      } else if (selectTariff in vfDataTariffs5G) {
        finalScript +=
          "MIGRATE DATA " +
          mobileNumber +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "CHANGE GPRS " +
          mobileNumber +
          " GPZ53" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n";
      } else if (selectTariff in sbSharerTariffs) {
        finalScript +=
          "MIGRATE " +
          tariffCode +
          " " +
          mobileNumber +
          " " +
          leadHandsetNumber +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD WO " +
          mobileNumber +
          " 1" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in sbSharerLeadTariffs) {
        finalScript +=
          "MIGRATE " +
          leadTariffCode +
          " " +
          mobileNumber +
          " " +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " " +
          leadTariffValuebundle +
          "\n" +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD WO " +
          mobileNumber +
          " 1" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in vfPPMTariffs) {
        finalScript +=
          "MIGRATE VFVSZ685 " +
          mobileNumber +
          "/ORGID=ABZORBPPM CD300400" +
          "\n";
      } else if (selectTariff in vfGigaCubeTariffs) {
        finalScript +=
          "MIGRATE DATA1 " +
          mobileNumber +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "CHANGE GPRS " +
          mobileNumber +
          " GPZ53" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "BAR GPRSROAM " +
          mobileNumber +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffs) {
        finalScript +=
          "MIGRATE VFVSZ713 " +
          mobileNumber +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffs5G) {
        finalScript +=
          "MIGRATE VFVSZ713 " +
          mobileNumber +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffsDataBar) {
        finalScript +=
          "MIGRATE VFVSZ713 " +
          mobileNumber +
          " CD300400" +
          "\n" +
          "\n" +
          "SERV CD300400 USER" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "BAR GPRS " +
          mobileNumber +
          "\n" +
          "\n" +
          "BAR GPRSROAM " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else {
        finalScript = "Please select a tariff";
      }
    } else if (selectConnectionType == "New") {
      if (selectTariff in redTariffs) {
        finalScript +=
          "CON/SNB VFVSZ713 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in o2VoiceTariffs) {
        finalScript +=
          "INS " +
          mobileNumber +
          " " +
          simNumber +
          " 095 +DC+24+gs=476+gp=2041,,N,2+gp=58,,N,2+gp=985,,N,2+gp=986,,N,2+mm+MV+d+5G y" +
          "\n";
      } else if (selectTariff in o2DataTariffs) {
        finalScript +=
          "INS " +
          mobileNumber +
          " " +
          simNumber +
          " 691 +YX+gs=467+gp=2041,,N,2+gp=58,,N,2+gp=985,,N,2+gp=986,,N,2+5G y" +
          "\n";
      } else if (selectTariff in sbSharerTariffs) {
        finalScript +=
          "CON/SNB " +
          tariffCode +
          " " +
          simNumber +
          " " +
          mobileNumber +
          " " +
          leadHandsetNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD WO " +
          mobileNumber +
          " 1" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in sbSharerLeadTariffs) {
        finalScript +=
          "CON/SNB " +
          leadTariffCode +
          " " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " " +
          leadTariffValuebundle +
          "\n" +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD WO " +
          mobileNumber +
          " 1" +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in vfPPMTariffs) {
        finalScript +=
          "CON/SNB VFVSZ685 " +
          simNumber +
          " " +
          mobileNumber +
          " ABZORBPPM 1919" +
          "\n" +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD WO " +
          mobileNumber +
          " 1" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in vfDataTariffs) {
        finalScript +=
          "CON/SNB DATA " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n";
      } else if (selectTariff in vfDataTariffs5G) {
        finalScript +=
          "CON/SNB DATA " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n";
      } else if (selectTariff in vfGigaCubeTariffs) {
        finalScript +=
          "CON/SNB DATA1 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "BAR GPRSROAM " +
          mobileNumber +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffs) {
        finalScript +=
          "CON/SNB VFVSZ713 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffs5G) {
        finalScript +=
          "CON/SNB VFVSZ713 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffsDataBar) {
        finalScript +=
          "CON/SNB VFVSZ713 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "BAR GPRS " +
          mobileNumber +
          "\n" +
          "BAR GPRSROAM " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else {
        finalScript = "Please select a tariff";
      }
    } else if (selectConnectionType == "Port") {
      if (selectTariff in redTariffs) {
        finalScript +=
          "IMPORT VFVSZ713 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in o2VoiceTariffs) {
        if (DNO == "") {
          finalScript = "Please select a DNO";
        } else {
          finalScript +=
            "PIN " +
            mobileNumber +
            " " +
            simNumber +
            " 095 +DC+gs=476+gp=2041,,N,2+gp=58,,N,2+gp=985,,N,2+gp=986,,N,2+mm+MV+d+5G " +
            DNOCode +
            " 536 y" +
            "\n" +
            "\n";
        }
      } else if (selectTariff in o2DataTariffs) {
        if (DNO == "") {
          finalScript = "Please select a DNO";
        } else {
          finalScript +=
            "PIN " +
            mobileNumber +
            " " +
            simNumber +
            " 691 +YX+gs=467+gp=2041,,N,2+gp=58,,N,2+gp=985,,N,2+gp=986,,N,2+5G " +
            DNOCode +
            " 536 y" +
            "\n" +
            "\n";
        }
      } else if (selectTariff in vfDataTariffs) {
        finalScript +=
          "IMPORT DATA " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n";
      } else if (selectTariff in vfDataTariffs5G) {
        finalScript +=
          "IMPORT DATA " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n";
      } else if (selectTariff in sbSharerTariffs) {
        finalScript +=
          "IMPORT " +
          tariffCode +
          " " +
          simNumber +
          " " +
          mobileNumber +
          " " +
          leadHandsetNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD WO " +
          mobileNumber +
          " 1" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in sbSharerLeadTariffs) {
        finalScript +=
          "IMPORT " +
          leadTariffCode +
          " " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " " +
          leadTariffValuebundle +
          "\n" +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD WO " +
          mobileNumber +
          " 1" +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in vfPPMTariffs) {
        finalScript +=
          "IMPORT VFVSZ685 " +
          simNumber +
          " " +
          mobileNumber +
          " ABZORBPPM 1919" +
          "\n" +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD WO " +
          mobileNumber +
          " 1" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in vfGigaCubeTariffs) {
        finalScript +=
          "IMPORT DATA1 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ53 INTERNET" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "ADD WIFI " +
          mobileNumber +
          "\n" +
          "\n" +
          "BAR GPRSROAM " +
          mobileNumber +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffs) {
        finalScript +=
          "IMPORT VFVSZ713 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffs5G) {
        finalScript +=
          "IMPORT VFVSZ713 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD 5G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else if (selectTariff in redExecTariffsDataBar) {
        finalScript +=
          "IMPORT VFVSZ713 " +
          simNumber +
          " " +
          mobileNumber +
          " 1919" +
          "\n" +
          "\n" +
          "ADD CAGPRS " +
          mobileNumber +
          " GPZ09 INTERNET" +
          "\n" +
          "CHANGE VALUEBUNDLE " +
          mobileNumber +
          " GPZ09" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " WAP" +
          "\n" +
          "\n" +
          "ADD 4G " +
          mobileNumber +
          "\n" +
          "ADD MMS " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " ACCINT" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " V2WT3" +
          "\n" +
          "\n" +
          "ADD APN " +
          mobileNumber +
          " V3BH1" +
          "\n" +
          "\n" +
          "ADD DNOO " +
          mobileNumber +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " IRWDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " WTRDC" +
          "\n" +
          "\n" +
          "ADD APNBUNDLE " +
          mobileNumber +
          " MRD21" +
          "\n" +
          "\n" +
          "CONNECT RECALL " +
          mobileNumber +
          "\n" +
          "\n" +
          "BAR GPRS " +
          mobileNumber +
          "\n" +
          "BAR GPRSROAM " +
          mobileNumber +
          "\n" +
          "TRANSFER SNB OC600000 CD300400 " +
          mobileNumber +
          "\n" +
          "Y" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n";
      } else {
        finalScript = "Please select a tariff";
      }
    } else {
      finalScript = "Please select a connection type";
    }
  }
  generatedScript.innerHTML = finalScript;
}

//Variables
var selectOne = document.getElementById("selectTariff");
var selectTwo = document.getElementById("selectConnectionType");
var selectThree = document.getElementById("selectDNO");
var textboxOne = document.getElementById("leadHandsetNumber");
var divOne = document.getElementById("selectDNODiv");
var divTwo = document.getElementById("selectLeadhandsetDiv");
var divThree = document.getElementById("simNumberDiv");
var DNO = "";
var DNOCode = "";
var DNONameIndex = "";

//This enables lead handset textarea when a valid tariff is selected
var leadhandsetDisabled = {
  tariff: "",
  connectionType: "",
  isDisabled: true
};

function onSelectOneChanged() {
  leadhandsetDisabled.tariff = selectOne.value;
  leadhandsetDisabled.connectionType = selectTwo.value;
  if (leadhandsetDisabled.tariff in sbSharerTariffs) {
    leadhandsetDisabled.isDisabled = false;
    divTwo.style.visibility = "";
  } else {
    leadhandsetDisabled.isDisabled = true;
    divTwo.style.visibility = "hidden";
  }
  if (
    leadhandsetDisabled.tariff.includes("O2") &&
    leadhandsetDisabled.connectionType == "Port"
  ) {
    divOne.style.visibility = "";
  } else {
    divOne.style.visibility = "hidden";
  }
  textboxOne.disabled = leadhandsetDisabled.isDisabled === true;
  var tariff = document.getElementById("selectTariff").value;
  var tariffNameIndex = sbSharerTariffNames.indexOf(tariff);
  var tariffCode = sbSharerTariffCodes[tariffNameIndex];
  var leadTariffNameIndex = sbSharerTariffLeadNames.indexOf(tariff);
  var leadTariffCode = sbSharerTariffLeadCodes[leadTariffNameIndex];
  var leadTariffValuebundle = sbSharerTariffValuebundle[leadTariffNameIndex];
}

//This is an event listener for when the tariff is changed
if (selectOne.addEventListener) {
  selectOne.addEventListener("change", onSelectOneChanged, true);
} else {
  selectOne.attachEvent("onchange", onSelectOneChanged, true);
}

//This enables the DNO select when the connection type is set to port an O2 tariff is selected
function onSelectTwoChanged() {
  leadhandsetDisabled.tariff = selectOne.value;
  leadhandsetDisabled.connectionType = selectTwo.value;
  if (
    leadhandsetDisabled.tariff.includes("O2") &&
    leadhandsetDisabled.connectionType == "Port"
  ) {
    divOne.style.visibility = "";
    divThree.style.visibility = "";
  } else {
    divOne.style.visibility = "hidden";
    divThree.style.visibility = "hidden";
  }
  textboxOne.disabled = leadhandsetDisabled.isDisabled === true;
  if (
    leadhandsetDisabled.connectionType == "Port" ||
    leadhandsetDisabled.connectionType == "New"
  ) {
    divThree.style.visibility = "";
  } else {
    divThree.style.visibility = "hidden";
  }
}

//This is an event listener for when connection type is changed
if (selectTwo.addEventListener) {
  selectTwo.addEventListener("change", onSelectTwoChanged, true);
} else {
  selectTwo.attachEvent("onchange", onSelectTwoChanged, true);
}

//This is a function to update variables when the DNO is changed
function onSelectThreeChanged() {
  var DNO = document.getElementById("selectDNO").value;
  var DNONameIndex = DNONames.indexOf(DNO);
  var DNOCode = DNOCodes[DNONameIndex];
}

//This is an event listener for when DNO is changed
if (selectThree.addEventListener) {
  selectThree.addEventListener("change", onSelectThreeChanged, true);
} else {
  selectThree.attachEvent("onchange", onSelectThreeChanged, true);
}

//Arrays for DNO name and the associated ABS code
var DNONames = [
  "BT",
  "Cable and Wireless",
  "Cellnet",
  "Cloud9",
  "Gamma",
  "Hay Systems Ltd",
  "Limitless Mobile",
  "Lleida",
  "LYCA Mobile",
  "MCom/Mundio",
  "Orange",
  "Resilient Plc",
  "Sky",
  "Stour Marine",
  "Teleena",
  "Three",
  "TISMI",
  "T-Mobile",
  "Truphone",
  "Vectone",
  "Virgin",
  "Vodafone"
];

var DNOCodes = [
  "BT",
  "CW",
  "CN",
  "CM",
  "GA",
  "HY",
  "LI",
  "LL",
  "LM",
  "MC",
  "HM",
  "RN",
  "SK",
  "SM",
  "TE",
  "TG",
  "TS",
  "ME",
  "TR",
  "VC",
  "VM",
  "VF"
];

//Arrays for Business Share tariff name and the associated tariff code/valuebundle
var sbSharerTariffNames = [
  "VF SB Sharer 500 Minutes Passport-Sharer 24",
  "VF SB Sharer 1000 Minutes Passport-Sharer 24",
  "VF SB Sharer 1500 Minutes Passport-Sharer 24",
  "VF SB Sharer 2000 Minutes Passport-Sharer 24",
  "VF SB Sharer 2500 Minutes Passport-Sharer 24",
  "VF SB Sharer 3000 Minutes Passport-Sharer 24",
  "VF SB Sharer 3500 Minutes Passport-Sharer 24",
  "VF SB Sharer 4000 Minutes Passport-Sharer 24",
  "VF SB Sharer 4500 Minutes Passport-Sharer 24",
  "VF SB Sharer 5000 Minutes Passport-Sharer 24",
  "VF SB Sharer 5500 Minutes Passport-Sharer 24",
  "VF SB Sharer 6000 Minutes Passport-Sharer 24",
  "VF SB Sharer 6500 Minutes Passport-Sharer 24",
  "VF SB Sharer 7000 Minutes Passport-Sharer 24",
  "VF SB Sharer 7500 Minutes Passport-Sharer 24",
  "VF SB Sharer 8000 Minutes Passport-Sharer 24",
  "VF SB Sharer 8500 Minutes Passport-Sharer 24",
  "VF SB Sharer 9000 Minutes Passport-Sharer 24",
  "VF SB Sharer 9500 Minutes Passport-Sharer 24",
  "VF SB Sharer 10000 Minutes Passport-Sharer 24",
  "VF SB Sharer 10500 Minutes Passport-Sharer 24",
  "VF SB Sharer 11000 Minutes Passport-Sharer 24",
  "VF SB Sharer 11500 Minutes Passport-Sharer 24",
  "VF SB Sharer 12000 Minutes Passport-Sharer 24",
  "VF SB Sharer 500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 1000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 1500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 2000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 2500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 3000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 3500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 4000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 4500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 5000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 5500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 6000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 6500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 7000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 7500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 8000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 8500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 9000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 9500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 10000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 10500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 11000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 11500 Minutes VF-World-Sharer 24",
  "VF SB Sharer 12000 Minutes VF-World-Sharer 24",
  "VF SB Sharer 12500 VF World 24 Add",
  "VF SB Sharer 13000 VF World 24 Add",
  "VF SB Sharer 13500 VF World 24 Add",
  "VF SB Sharer 14000 VF World 24 Add",
  "VF SB Sharer 14500 VF World 24 Add",
  "VF SB Sharer 15000 VF World 24 Add",
  "VF SB Sharer 16000 VF World 24 Add",
  "VF SB Sharer 17000 VF World 24 Add",
  "VF SB Sharer 18000 VF World 24 Add",
  "VF SB Sharer 19000 VF World 24 Add",
  "VF SB Sharer 20000 VF World 24 Add",
  "VF SB Sharer 21000 VF World 24 Add",
  "VF SB Sharer 22000 VF World 24 Add",
  "VF SB Sharer 23000 VF World 24 Add",
  "VF SB Sharer 24000 VF World 24 Add",
  "VF SB Sharer 25000 VF World 24 Add",
  "VF SB Sharer 12500 VF Passport 24 Add",
  "VF SB Sharer 13000 VF Passport 24 Add",
  "VF SB Sharer 13500 VF Passport 24 Add",
  "VF SB Sharer 14000 VF Passport 24 Add",
  "VF SB Sharer 14500 VF Passport 24 Add",
  "VF SB Sharer 15000 VF Passport 24 Add",
  "VF SB Sharer 16000 VF Passport 24 Add",
  "VF SB Sharer 17000 VF Passport 24 Add",
  "VF SB Sharer 18000 VF Passport 24 Add",
  "VF SB Sharer 19000 VF Passport 24 Add",
  "VF SB Sharer 20000 VF Passport 24 Add",
  "VF SB Sharer 21000 VF Passport 24 Add",
  "VF SB Sharer 22000 VF Passport 24 Add",
  "VF SB Sharer 23000 VF Passport 24 Add",
  "VF SB Sharer 24000 VF Passport 24 Add",
  "VF SB Sharer 25000 VF Passport 24 Add",
  "VF SB Sharer 30000 VF World 24 Add",
  "VF SB Sharer 36000 VF World 24 Add",
  "VF SB Sharer 42000 VF World 24 Add",
  "VF SB Sharer 48000 VF World 24 Add",
  "VF SB Sharer 30000 VF Passport 24 Add",
  "VF SB Sharer 36000 VF Passport 24 Add",
  "VF SB Sharer 42000 VF Passport 24 Add",
  "VF SB Sharer 48000 VF Passport 24 Add"
];

var sbSharerTariffCodes = [
  "VFGAZ350",
  "VFGAZ351",
  "VFGAZ352",
  "VFGAZ353",
  "VFGAZ354",
  "VFGAZ355",
  "VFGAZ356",
  "VFGAZ357",
  "VFGAZ358",
  "VFGAZ359",
  "VFGAZ360",
  "VFGAZ361",
  "VFGAZ362",
  "VFGAZ363",
  "VFGAZ364",
  "VFGAZ365",
  "VFGAZ366",
  "VFGAZ367",
  "VFGAZ368",
  "VFGAZ369",
  "VFGAZ370",
  "VFGAZ371",
  "VFGAZ372",
  "VFGAZ373",
  "VFGAZ374",
  "VFGAZ375",
  "VFGAZ376",
  "VFGAZ377",
  "VFGAZ378",
  "VFGAZ379",
  "VFGAZ380",
  "VFGAZ381",
  "VFGAZ382",
  "VFGAZ383",
  "VFGAZ384",
  "VFGAZ385",
  "VFGAZ386",
  "VFGAZ387",
  "VFGAZ388",
  "VFGAZ389",
  "VFGAZ390",
  "VFGAZ391",
  "VFGAZ392",
  "VFGAZ393",
  "VFGAZ394",
  "VFGAZ395",
  "VFGAZ396",
  "VFGAZ397",
  "VFGAZ454",
  "VFGAZ455",
  "VFGAZ456",
  "VFGAZ457",
  "VFGAZ458",
  "VFGAZ459",
  "VFGAZ460",
  "VFGAZ461",
  "VFGAZ462",
  "VFGAZ463",
  "VFGAZ464",
  "VFGAZ465",
  "VFGAZ466",
  "VFGAZ467",
  "VFGAZ468",
  "VFGAZ469",
  "VFGAZ470",
  "VFGAZ471",
  "VFGAZ472",
  "VFGAZ473",
  "VFGAZ474",
  "VFGAZ475",
  "VFGAZ476",
  "VFGAZ477",
  "VFGAZ478",
  "VFGAZ479",
  "VFGAZ480",
  "VFGAZ481",
  "VFGAZ482",
  "VFGAZ483",
  "VFGAZ484",
  "VFGAZ485",
  "VFGAZ486",
  "VFGAZ487",
  "VFGAZ488",
  "VFGAZ489",
  "VFGAZ490",
  "VFGAZ491",
  "VFGAZ492",
  "VFGAZ493"
];

var sbSharerTariffLeadNames = [
  "VF SB Sharer 500 Minutes Passport 24",
  "VF SB Sharer 1000 Minutes Passport 24",
  "VF SB Sharer 1500 Minutes Passport 24",
  "VF SB Sharer 2000 Minutes Passport 24",
  "VF SB Sharer 2500 Minutes Passport 24",
  "VF SB Sharer 3000 Minutes Passport 24",
  "VF SB Sharer 3500 Minutes Passport 24",
  "VF SB Sharer 4000 Minutes Passport 24",
  "VF SB Sharer 4500 Minutes Passport 24",
  "VF SB Sharer 5000 Minutes Passport 24",
  "VF SB Sharer 5500 Minutes Passport 24",
  "VF SB Sharer 6000 Minutes Passport 24",
  "VF SB Sharer 6500 Minutes Passport 24",
  "VF SB Sharer 7000 Minutes Passport 24",
  "VF SB Sharer 7500 Minutes Passport 24",
  "VF SB Sharer 8000 Minutes Passport 24",
  "VF SB Sharer 8500 Minutes Passport 24",
  "VF SB Sharer 9000 Minutes Passport 24",
  "VF SB Sharer 9500 Minutes Passport 24",
  "VF SB Sharer 10000 Minutes Passport 24",
  "VF SB Sharer 10500 Minutes Passport 24",
  "VF SB Sharer 11000 Minutes Passport 24",
  "VF SB Sharer 11500 Minutes Passport 24",
  "VF SB Sharer 12000 Minutes Passport 24",
  "VF SB Sharer 500 Minutes VF-World 24",
  "VF SB Sharer 1000 Minutes VF-World 24",
  "VF SB Sharer 1500 Minutes VF-World 24",
  "VF SB Sharer 2000 Minutes VF-World 24",
  "VF SB Sharer 2500 Minutes VF-World 24",
  "VF SB Sharer 3000 Minutes VF-World 24",
  "VF SB Sharer 3500 Minutes VF-World 24",
  "VF SB Sharer 4000 Minutes VF-World 24",
  "VF SB Sharer 4500 Minutes VF-World 24",
  "VF SB Sharer 5000 Minutes VF-World 24",
  "VF SB Sharer 5500 Minutes VF-World 24",
  "VF SB Sharer 6000 Minutes VF-World 24",
  "VF SB Sharer 6500 Minutes VF-World 24",
  "VF SB Sharer 7000 Minutes VF-World 24",
  "VF SB Sharer 7500 Minutes VF-World 24",
  "VF SB Sharer 8000 Minutes VF-World 24",
  "VF SB Sharer 8500 Minutes VF-World 24",
  "VF SB Sharer 9000 Minutes VF-World 24",
  "VF SB Sharer 9500 Minutes VF-World 24",
  "VF SB Sharer 10000 Minutes VF-World 24",
  "VF SB Sharer 10500 Minutes VF-World 24",
  "VF SB Sharer 11000 Minutes VF-World 24",
  "VF SB Sharer 11500 Minutes VF-World 24",
  "VF SB Sharer 12000 Minutes VF-World 24",
  "VF SB Sharer 12500 VF World 24",
  "VF SB Sharer 13000 VF World 24",
  "VF SB Sharer 13500 VF World 24",
  "VF SB Sharer 14000 VF World 24",
  "VF SB Sharer 14500 VF World 24",
  "VF SB Sharer 15000 VF World 24",
  "VF SB Sharer 16000 VF World 24",
  "VF SB Sharer 17000 VF World 24",
  "VF SB Sharer 18000 VF World 24",
  "VF SB Sharer 19000 VF World 24",
  "VF SB Sharer 20000 VF World 24",
  "VF SB Sharer 21000 VF World 24",
  "VF SB Sharer 22000 VF World 24",
  "VF SB Sharer 23000 VF World 24",
  "VF SB Sharer 24000 VF World 24",
  "VF SB Sharer 25000 VF World 24",
  "VF SB Sharer 12500 VF Passport 24",
  "VF SB Sharer 13000 VF Passport 24",
  "VF SB Sharer 13500 VF Passport 24",
  "VF SB Sharer 14000 VF Passport 24",
  "VF SB Sharer 14500 VF Passport 24",
  "VF SB Sharer 15000 VF Passport 24",
  "VF SB Sharer 16000 VF Passport 24",
  "VF SB Sharer 17000 VF Passport 24",
  "VF SB Sharer 18000 VF Passport 24",
  "VF SB Sharer 19000 VF Passport 24",
  "VF SB Sharer 20000 VF Passport 24",
  "VF SB Sharer 21000 VF Passport 24",
  "VF SB Sharer 22000 VF Passport 24",
  "VF SB Sharer 23000 VF Passport 24",
  "VF SB Sharer 24000 VF Passport 24",
  "VF SB Sharer 25000 VF Passport 24",
  "VF SB Sharer 30000 VF World 24",
  "VF SB Sharer 36000 VF World 24",
  "VF SB Sharer 42000 VF World 24",
  "VF SB Sharer 48000 VF World 24",
  "VF SB Sharer 30000 VF Passport 24",
  "VF SB Sharer 36000 VF Passport 24",
  "VF SB Sharer 42000 VF Passport 24",
  "VF SB Sharer 48000 VF Passport 24"
];

var sbSharerTariffLeadCodes = [
  "VFGFZ350",
  "VFGFZ351",
  "VFGFZ352",
  "VFGFZ353",
  "VFGFZ354",
  "VFGFZ355",
  "VFGFZ356",
  "VFGFZ357",
  "VFGFZ358",
  "VFGFZ359",
  "VFGFZ360",
  "VFGFZ361",
  "VFGFZ362",
  "VFGFZ363",
  "VFGFZ364",
  "VFGFZ365",
  "VFGFZ366",
  "VFGFZ367",
  "VFGFZ368",
  "VFGFZ369",
  "VFGFZ370",
  "VFGFZ371",
  "VFGFZ372",
  "VFGFZ373",
  "VFGFZ374",
  "VFGFZ375",
  "VFGFZ376",
  "VFGFZ377",
  "VFGFZ378",
  "VFGFZ379",
  "VFGFZ380",
  "VFGFZ381",
  "VFGFZ382",
  "VFGFZ383",
  "VFGFZ384",
  "VFGFZ385",
  "VFGFZ386",
  "VFGFZ387",
  "VFGFZ388",
  "VFGFZ389",
  "VFGFZ390",
  "VFGFZ391",
  "VFGFZ392",
  "VFGFZ393",
  "VFGFZ394",
  "VFGFZ395",
  "VFGFZ396",
  "VFGFZ397",
  "VFGFZ454",
  "VFGFZ455",
  "VFGFZ456",
  "VFGFZ457",
  "VFGFZ458",
  "VFGFZ459",
  "VFGFZ460",
  "VFGFZ461",
  "VFGFZ462",
  "VFGFZ463",
  "VFGFZ464",
  "VFGFZ465",
  "VFGFZ466",
  "VFGFZ467",
  "VFGFZ468",
  "VFGFZ469",
  "VFGFZ470",
  "VFGFZ471",
  "VFGFZ472",
  "VFGFZ473",
  "VFGFZ474",
  "VFGFZ475",
  "VFGFZ476",
  "VFGFZ477",
  "VFGFZ478",
  "VFGFZ479",
  "VFGFZ480",
  "VFGFZ481",
  "VFGFZ482",
  "VFGFZ483",
  "VFGFZ484",
  "VFGFZ485",
  "VFGFZ486",
  "VFGFZ487",
  "VFGFZ488",
  "VFGFZ489",
  "VFGFZ490",
  "VFGFZ491",
  "VFGFZ492",
  "VFGFZ493"
];

var sbSharerTariffValuebundle = [
  "GPM33",
  "GPM34",
  "GPM35",
  "GPM36",
  "GPM37",
  "GPM38",
  "GPM39",
  "GPM40",
  "GPM41",
  "GPM42",
  "GPM47",
  "GPM48",
  "GPM49",
  "GPM50",
  "GPM51",
  "GPM52",
  "GPM53",
  "GPM54",
  "GPM55",
  "GPM56",
  "GPM57",
  "GPM58",
  "GPM59",
  "GPM60",
  "GPM33",
  "GPM34",
  "GPM35",
  "GPM36",
  "GPM37",
  "GPM38",
  "GPM39",
  "GPM40",
  "GPM41",
  "GPM42",
  "GPM47",
  "GPM48",
  "GPM49",
  "GPM50",
  "GPM51",
  "GPM52",
  "GPM53",
  "GPM54",
  "GPM55",
  "GPM56",
  "GPM57",
  "GPM58",
  "GPM59",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM60",
  "GPM68",
  "GPM68",
  "GPM68",
  "GPM68",
  "GPM68",
  "GPM68",
  "GPM68",
  "GPM68"
];

//These are tariff groups stored as objects
var redTariffs = {
  "VF Abzorb Unlimited 10GB (4G)": "",
  "VF Abzorb Unlimited 20GB (4G)": "",
  "VF Abzorb Unlimited 2GB (4G)": "",
  "VF Abzorb Unlimited 6GB (4G)": "",
  "VF Business Advance Basic BT Child": "",
  "VF Business Advance Basic BT Lead": "",
  "VF Business Advance Basic Child": "",
  "VF Business Advance Basic Lead": "",
  "VF Business Advance Extra BT Child": "",
  "VF Business Advance Extra BT Lead": "",
  "VF Business Advance Extra Child": "",
  "VF Business Advance Extra Lead": "",
  "VF Business Value 1GB + 250Mb WiFi": "",
  "VF Business Value 3GB + 250Mb WiFi": "",
  "VF Business Value 500MB + 250Mb WiFi": "",
  "VF EU Red Bundle 12GB + 1GB WiFi": "",
  "VF EU Red Bundle 12GB + 2GB WiFi": "",
  "VF EU Red Bundle 12GB + 3GB WiFi": "",
  "VF EU Red Bundle 12GB + 4GB WiFi": "",
  "VF EU Red Bundle 12GB + 5GB WiFi": "",
  "VF EU Red Bundle 1GB + 1GB WiFi": "",
  "VF EU Red Bundle 1GB + 2GB WiFi": "",
  "VF EU Red Bundle 1GB + 3GB WiFi": "",
  "VF EU Red Bundle 1GB + 4GB WiFi": "",
  "VF EU Red Bundle 1GB + 5GB WiFi": "",
  "VF EU Red Bundle 24GB + 1GB WiFi": "",
  "VF EU Red Bundle 24GB + 2GB WiFi": "",
  "VF EU Red Bundle 24GB + 3GB WiFi": "",
  "VF EU Red Bundle 24GB + 4GB WiFi": "",
  "VF EU Red Bundle 24GB + 5GB WiFi": "",
  "VF EU Red Bundle 2GB + 1GB WiFi": "",
  "VF EU Red Bundle 3GB + 1GB WiFi": "",
  "VF EU Red Bundle 3GB + 2GB WiFi": "",
  "VF EU Red Bundle 3GB + 3GB WiFi": "",
  "VF EU Red Bundle 3GB + 4GB WiFi": "",
  "VF EU Red Bundle 3GB + 5GB WiFi": "",
  "VF EU Red Bundle 4GB + 1GB WiFi": "",
  "VF EU Red Bundle 6GB + 1GB WiFi": "",
  "VF EU Red Bundle 6GB + 2GB WiFi": "",
  "VF EU Red Bundle 6GB + 3GB WiFi": "",
  "VF EU Red Bundle 6GB + 4GB WiFi": "",
  "VF EU Red Bundle 6GB + 5GB WiFi": "",
  "VF EU Red Standard Bundle 500min 500MB + 1GB WiFi": "",
  "VF EU Red Standard Bundle 500min 500MB + 2GB WiFi": "",
  "VF EU Red Standard Bundle 500min 500MB + 3GB WiFi": "",
  "VF EU Red Standard Bundle 500min 500MB + 4GB WiFi": "",
  "VF EU Red Standard Bundle 500min 500MB + 5GB WiFi": "",
  "VF EU Red Value Bundle 10GB + 1GB WiFi": "",
  "VF EU Red Value Bundle 10GB + 2GB WiFi": "",
  "VF EU Red Value Bundle 10GB + 3GB WiFi": "",
  "VF EU Red Value Bundle 10GB + 4GB WiFi": "",
  "VF EU Red Value Bundle 10GB + 5GB WiFi": "",
  "VF EU Red Value Bundle 12GB + 1GB WiFi": "",
  "VF EU Red Value Bundle 20GB + 1GB WiFi": "",
  "VF EU Red Value Bundle 20GB + 1GB WiFi": "",
  "VF EU Red Value Bundle 20GB + 2GB WiFi": "",
  "VF EU Red Value Bundle 20GB + 3GB WiFi": "",
  "VF EU Red Value Bundle 20GB + 4GB WiFi": "",
  "VF EU Red Value Bundle 20GB + 5GB WiFi": "",
  "VF EU Red Value Bundle 2GB + 1GB WiFi": "",
  "VF EU Red Value Bundle 2GB + 2GB WiFi": "",
  "VF EU Red Value Bundle 2GB + 3GB WiFi": "",
  "VF EU Red Value Bundle 2GB + 4GB WiFi": "",
  "VF EU Red Value Bundle 2GB + 5GB WiFi": "",
  "VF EU Red Value Bundle 30GB + 1GB WiFi": "",
  "VF EU Red Value Bundle 30GB + 2GB WiFi": "",
  "VF EU Red Value Bundle 30GB + 3GB WiFi": "",
  "VF EU Red Value Bundle 30GB + 4GB WiFi": "",
  "VF EU Red Value Bundle 30GB + 5GB WiFi": "",
  "VF EU Red Value Bundle 5GB + 1GB WiFi": "",
  "VF EU Red Value Bundle 5GB + 2GB WiFi": "",
  "VF EU Red Value Bundle 5GB + 3GB WiFi": "",
  "VF EU Red Value Bundle 5GB + 4GB WiFi": "",
  "VF EU Red Value Bundle 5GB + 5GB WiFi": "",
  "VF EU Red Value Bundle 8GB + 1GB WiFi": "",
  "VF Red": "",
  "VF Red 10GB DATA + 2GB WiFi": "",
  "VF Red 10GB DATA + 4GB WiFi": "",
  "VF Red 13GB DATA + 2GB WiFi": "",
  "VF Red 13GB DATA + 4GB WiFi": "",
  "VF Red 20Gb DATA + 2Gb WiFi": "",
  "VF Red 20Gb DATA + 4Gb WiFi": "",
  "VF Red 4G": "",
  "VF Red 4G 16GB": "",
  "VF Red 4G L": "",
  "VF Red 4G XL": "",
  "VF Red 4GB DATA + 2GB WiFi": "",
  "VF Red 4GB DATA + 4GB WiFi": "",
  "VF Red 7GB DATA + 2GB WiFi": "",
  "VF Red 7GB DATA + 4GB WiFi": "",
  "VF Red Basic 600mins 1GB DATA + 2GB WiFi": "",
  "VF Red Basic 600mins 1GB DATA + 4GB WiFi": "",
  "VF Red Bundle 10GB + 2GB WiFi": "",
  "VF Red Bundle 10GB + 3GB WiFi": "",
  "VF Red Bundle 10GB + 4GB WiFi": "",
  "VF Red Bundle 10GB + 5GB WiFi": "",
  "VF Red Bundle 20GB + 2GB WiFi": "",
  "VF Red Bundle 20GB + 3GB WiFi": "",
  "VF Red Bundle 20GB + 4GB WiFi": "",
  "VF Red Bundle 20GB + 5GB WiFi": "",
  "VF Red Bundle 2GB + 2GB WiFi": "",
  "VF Red Bundle 2GB + 3GB WiFi": "",
  "VF Red Bundle 2GB + 4GB WiFi": "",
  "VF Red Bundle 2GB + 5GB WiFi": "",
  "VF Red Bundle 6GB + 2GB WiFi": "",
  "VF Red Bundle 6GB + 3GB WiFi": "",
  "VF Red Bundle 6GB + 4GB WiFi": "",
  "VF Red Bundle 6GB + 5GB WiFi": "",
  "VF Red Business Share 4G": "",
  "VF Red Business Share 4G + 2GB WiFi": "",
  "VF Red Business Share 4G L": "",
  "VF Red Business Share 4G L + 2GB WiFi": "",
  "VF Red Business Share 4G XL": "",
  "VF Red Business Share 4G XL + 2GB WiFi": "",
  "VF Red Essentials 250MB + 250MB WiFi": "",
  "VF Red Essentials 500MB + 250MB WiFi": "",
  "VF Red Extra 16GB + 250MB WiFi": "",
  "VF Red Extra 1GB + 250MB WiFi": "",
  "VF Red Extra 40GB + 1GB WiFi": "",
  "VF Red Extra 4GB + 250MB WiFi": "",
  "VF Red L": "",
  "VF Red Sharer 2GB": "",
  "VF Red Sharer 3GB": "",
  "VF Red Sharer 4GB": "",
  "VF Red Standard Bundle 1000min 1GB + 2GB WiFi": "",
  "VF Red Standard Bundle 1000min 1GB + 3GB WiFi": "",
  "VF Red Standard Bundle 1000min 1GB + 4GB WiFi": "",
  "VF Red Standard Bundle 1000min 1GB + 5GB WiFi": "",
  "VF Red Standard Bundle 500min 500MB + 2GB WiFi": "",
  "VF Red Standard Bundle 500min 500MB + 3GB WiFi": "",
  "VF Red Standard Bundle 500min 500MB + 4GB WiFi": "",
  "VF Red Standard Bundle 500min 500MB + 5GB WiFi": "",
  "VF Red Value 4GB": "",
  "VF Red Value Bundle 15GB + 2GB WiFi": "",
  "VF Red Value Bundle 15GB + 3GB WiFi": "",
  "VF Red Value Bundle 15GB + 4GB WiFi": "",
  "VF Red Value Bundle 15GB + 5GB WiFi": "",
  "VF Red Value Bundle 25GB + 2GB WiFi": "",
  "VF Red Value Bundle 25GB + 3GB WiFi": "",
  "VF Red Value Bundle 25GB + 4GB WiFi": "",
  "VF Red Value Bundle 25GB + 5GB WiFi": "",
  "VF Red Value Bundle 2GB + 2GB WiFi": "",
  "VF Red Value Bundle 2GB + 3GB WiFi": "",
  "VF Red Value Bundle 2GB + 4GB WiFi": "",
  "VF Red Value Bundle 2GB + 5GB WiFi": "",
  "VF Red Value Bundle 4GB + 2GB WiFi": "",
  "VF Red Value Bundle 4GB + 3GB WiFi": "",
  "VF Red Value Bundle 4GB + 4GB WiFi": "",
  "VF Red Value Bundle 4GB + 5GB WiFi": "",
  "VF Red Value Bundle 8GB + 2GB WiFi": "",
  "VF Red Value Bundle 8GB + 3GB WiFi": "",
  "VF Red Value Bundle 8GB + 4GB WiFi": "",
  "VF Red Value Bundle 8GB + 5GB WiFi": "",
  "VF Red XL": ""
};

var redExecTariffs = {
  "VF Red Executive 10GB": "",
  "VF Red Executive 16GB": "",
  "VF Red Executive 1GB": "",
  "VF Red Executive 20GB": "",
  "VF Red Executive 250MB": "",
  "VF Red Executive 2GB": "",
  "VF Red Executive 32GB + 250MB WiFi": "",
  "VF Red Executive 40GB": "",
  "VF Red Executive 4GB": "",
  "VF Red Executive 500MB": "",
  "VF Red Executive 5GB": "",
  "VF Red Executive 60GB + 250MB WiFi": "",
  "VF Red Executive 8GB": "",
  "VF Red Executive 8GB + 250MB WiFi": "",
  "VF Red Executive 20GB (2019)": "",
  "VF Unlimited Data Flex": "",
  "VF Unlimited Data Flex (2020)": "",
  "VF Red Executive EU 25GB (2019)": "",
  "VF Red Executive EU 50GB (2019)": "",
  "VF Red Executive EU 100GB (2019)": "",
  "VF Red Executive 1GB (2019)": "",
  "VF Bus Adv - Value Base 1GB": "",
  "VF Bus Adv - Value Base 2GB": "",
  "VF Bus Adv - Value Trav 1GB": "",
  "VF Bus Adv - Value Trav 2GB": ""
};

var redExecTariffsDataBar = {
  "VF Bus Adv - Value Base 0GB": "",
  "VF Bus Adv - Value Trav 0GB": ""
};

var redExecTariffs5G = {
  "VF 5G Red Executive 5GB (2019)": "",
  "VF 5G Red Executive 15GB (2019)": "",
  "VF 5G Red Executive 30GB (2019)": "",
  "VF 5G Red Executive 60GB (2019)": "",
  "VF 5G Red Executive EU 25GB (2019)": "",
  "VF 5G Red Executive EU 50GB (2019)": "",
  "VF 5G Red Executive EU 100GB (2019)": "",
  "VF 5G Business Advance Basic BT 5GB Lead": "",
  "VF 5G Business Advance Basic BT 5GB Child": "",
  "VF 5G Business Advance Extra BT 5GB Lead": "",
  "VF 5G Business Advance Extra BT 5GB Child": "",
  "VF Red Executive 5GB (5G) (2019)": "",
  "VF Red Executive 20GB (5G) (2019)": "",
  "VF Red Executive 20GB (5G) Plus (2019)": "",
  "VF 5G Business Unlimited Max": "",
  "VF 5G Business Unlimited Max Plus": "",
  "VF Red 2GB - (2020)": "",
  "VF Red 6GB - (2020)": "",
  "VF Red 12GB - (2020)": "",
  "VF Red 24GB - (2020)": "",
  "VF Red Int 6GB - (2020)": "",
  "VF Red Int 12GB - (2020)": "",
  "VF Red Int 24GB - (2020)": "",
  "VF Red Unlimited - (2020)": "",
  "VF Red Int Unlimited - (2020)": "",
  "VF Bus Opt Voice and Data 50": "",
  "VF Bus Opt Voice and Data 500": "",
  "VF Bus Opt Voice and Data 750": "",
  "VF Bus Adv - Value Base 5GB": "",
  "VF Bus Adv - Value Base 10GB": "",
  "VF Bus Adv - Value Trav 5GB": "",
  "VF Bus Adv - Value Trav 10GB": ""
};

var vfDataTariffs = {
  "VF Business Advance Basic BT MBB": "",
  "VF Business Advance Basic MBB": "",
  "VF Business Advance Extra BT MBB": "",
  "VF Business Advance Extra MBB": "",
  "VF Mobile Broadband 10GB + 1GB WiFi": "",
  "VF Mobile Broadband 15GB (4G)": "",
  "VF Mobile Broadband 1GB (3G) + 1GB WiFi": "",
  "VF Mobile Broadband 1GB (4G) + 1GB WiFi": "",
  "VF Mobile Broadband 1GB + 1GB WiFi": "",
  "VF Mobile Broadband 2GB (4G)": "",
  "VF Mobile Broadband 30GB (4G)": "",
  "VF Mobile Broadband 30GB + 1GB WiFi": "",
  "VF Mobile Broadband 3GB (4G) + 1GB WiFi": "",
  "VF Mobile Broadband 3GB + 1GB WiFi": "",
  "VF Mobile Broadband 50GB (4G)": "",
  "VF Mobile Broadband 50GB + 1GB WiFi": "",
  "VF Mobile Broadband 5GB (4G)": "",
  "VF Mobile Broadband 5GB (4G) + 1GB WiFi": "",
  "VF Mobile Broadband 8GB (4G) + 1GB WiFi": "",
  "VF Red Data Sharer": "",
  "VF Mobile Broadband 1GB (2019)": "",
  "VF Mobile Broadband 5GB (2019)": "",
  "VF Mobile Broadband 20GB (2019)": "",
  "VF Mobile Broadband 50GB (2019)": "",
  "VF Mobile Broadband 2GB - (2020)": ""
};

var vfDataTariffs5G = {
  "VF 5G Business Advance Basic BT 5GB MBB": "",
  "VF 5G Business Advance Extra BT 5GB MBB": "",
  "VF Mobile Broadband 6GB - (2020)": "",
  "VF Mobile Broadband 24GB - (2020)": "",
  "VF Mobile Broadband Unlimited - (2020)": "",
  "VF Bus Opt Data Only 50": "",
  "VF Bus Opt Data Only 500": "",
  "VF Bus Opt Data Only 750": "",
  "VF Bus Adv - MBB Value 4GB": ""
};

var sbSharerTariffs = {
  "VF SB Sharer 500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 1000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 1500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 2000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 2500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 3000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 3500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 4000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 4500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 5000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 5500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 6000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 6500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 7000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 7500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 8000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 8500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 9000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 9500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 10000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 10500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 11000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 11500 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 12000 Minutes Passport-Sharer 24": "",
  "VF SB Sharer 500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 1000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 1500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 2000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 2500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 3000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 3500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 4000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 4500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 5000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 5500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 6000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 6500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 7000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 7500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 8000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 8500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 9000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 9500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 10000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 10500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 11000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 11500 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 12000 Minutes VF-World-Sharer 24": "",
  "VF SB Sharer 12500 VF World 24 Add": "",
  "VF SB Sharer 13000 VF World 24 Add": "",
  "VF SB Sharer 13500 VF World 24 Add": "",
  "VF SB Sharer 14000 VF World 24 Add": "",
  "VF SB Sharer 14500 VF World 24 Add": "",
  "VF SB Sharer 15000 VF World 24 Add": "",
  "VF SB Sharer 16000 VF World 24 Add": "",
  "VF SB Sharer 17000 VF World 24 Add": "",
  "VF SB Sharer 18000 VF World 24 Add": "",
  "VF SB Sharer 19000 VF World 24 Add": "",
  "VF SB Sharer 20000 VF World 24 Add": "",
  "VF SB Sharer 21000 VF World 24 Add": "",
  "VF SB Sharer 22000 VF World 24 Add": "",
  "VF SB Sharer 23000 VF World 24 Add": "",
  "VF SB Sharer 24000 VF World 24 Add": "",
  "VF SB Sharer 25000 VF World 24 Add": "",
  "VF SB Sharer 12500 VF Passport 24 Add": "",
  "VF SB Sharer 13000 VF Passport 24 Add": "",
  "VF SB Sharer 13500 VF Passport 24 Add": "",
  "VF SB Sharer 14000 VF Passport 24 Add": "",
  "VF SB Sharer 14500 VF Passport 24 Add": "",
  "VF SB Sharer 15000 VF Passport 24 Add": "",
  "VF SB Sharer 16000 VF Passport 24 Add": "",
  "VF SB Sharer 17000 VF Passport 24 Add": "",
  "VF SB Sharer 18000 VF Passport 24 Add": "",
  "VF SB Sharer 19000 VF Passport 24 Add": "",
  "VF SB Sharer 20000 VF Passport 24 Add": "",
  "VF SB Sharer 21000 VF Passport 24 Add": "",
  "VF SB Sharer 22000 VF Passport 24 Add": "",
  "VF SB Sharer 23000 VF Passport 24 Add": "",
  "VF SB Sharer 24000 VF Passport 24 Add": "",
  "VF SB Sharer 25000 VF Passport 24 Add": "",
  "VF SB Sharer 30000 VF World 24 Add": "",
  "VF SB Sharer 36000 VF World 24 Add": "",
  "VF SB Sharer 42000 VF World 24 Add": "",
  "VF SB Sharer 48000 VF World 24 Add": "",
  "VF SB Sharer 30000 VF Passport 24 Add": "",
  "VF SB Sharer 36000 VF Passport 24 Add": "",
  "VF SB Sharer 42000 VF Passport 24 Add": "",
  "VF SB Sharer 48000 VF Passport 24 Add": ""
};

var sbSharerLeadTariffs = {
  "VF SB Sharer 500 Minutes Passport 24": "",
  "VF SB Sharer 1000 Minutes Passport 24": "",
  "VF SB Sharer 1500 Minutes Passport 24": "",
  "VF SB Sharer 2000 Minutes Passport 24": "",
  "VF SB Sharer 2500 Minutes Passport 24": "",
  "VF SB Sharer 3000 Minutes Passport 24": "",
  "VF SB Sharer 3500 Minutes Passport 24": "",
  "VF SB Sharer 4000 Minutes Passport 24": "",
  "VF SB Sharer 4500 Minutes Passport 24": "",
  "VF SB Sharer 5000 Minutes Passport 24": "",
  "VF SB Sharer 5500 Minutes Passport 24": "",
  "VF SB Sharer 6000 Minutes Passport 24": "",
  "VF SB Sharer 6500 Minutes Passport 24": "",
  "VF SB Sharer 7000 Minutes Passport 24": "",
  "VF SB Sharer 7500 Minutes Passport 24": "",
  "VF SB Sharer 8000 Minutes Passport 24": "",
  "VF SB Sharer 8500 Minutes Passport 24": "",
  "VF SB Sharer 9000 Minutes Passport 24": "",
  "VF SB Sharer 9500 Minutes Passport 24": "",
  "VF SB Sharer 10000 Minutes Passport 24": "",
  "VF SB Sharer 10500 Minutes Passport 24": "",
  "VF SB Sharer 11000 Minutes Passport 24": "",
  "VF SB Sharer 11500 Minutes Passport 24": "",
  "VF SB Sharer 12000 Minutes Passport 24": "",
  "VF SB Sharer 500 Minutes VF-World 24": "",
  "VF SB Sharer 1000 Minutes VF-World 24": "",
  "VF SB Sharer 1500 Minutes VF-World 24": "",
  "VF SB Sharer 2000 Minutes VF-World 24": "",
  "VF SB Sharer 2500 Minutes VF-World 24": "",
  "VF SB Sharer 3000 Minutes VF-World 24": "",
  "VF SB Sharer 3500 Minutes VF-World 24": "",
  "VF SB Sharer 4000 Minutes VF-World 24": "",
  "VF SB Sharer 4500 Minutes VF-World 24": "",
  "VF SB Sharer 5000 Minutes VF-World 24": "",
  "VF SB Sharer 5500 Minutes VF-World 24": "",
  "VF SB Sharer 6000 Minutes VF-World 24": "",
  "VF SB Sharer 6500 Minutes VF-World 24": "",
  "VF SB Sharer 7000 Minutes VF-World 24": "",
  "VF SB Sharer 7500 Minutes VF-World 24": "",
  "VF SB Sharer 8000 Minutes VF-World 24": "",
  "VF SB Sharer 8500 Minutes VF-World 24": "",
  "VF SB Sharer 9000 Minutes VF-World 24": "",
  "VF SB Sharer 9500 Minutes VF-World 24": "",
  "VF SB Sharer 10000 Minutes VF-World 24": "",
  "VF SB Sharer 10500 Minutes VF-World 24": "",
  "VF SB Sharer 11000 Minutes VF-World 24": "",
  "VF SB Sharer 11500 Minutes VF-World 24": "",
  "VF SB Sharer 12000 Minutes VF-World 24": "",
  "VF SB Sharer 12500 VF World 24": "",
  "VF SB Sharer 13000 VF World 24": "",
  "VF SB Sharer 13500 VF World 24": "",
  "VF SB Sharer 14000 VF World 24": "",
  "VF SB Sharer 14500 VF World 24": "",
  "VF SB Sharer 15000 VF World 24": "",
  "VF SB Sharer 16000 VF World 24": "",
  "VF SB Sharer 17000 VF World 24": "",
  "VF SB Sharer 18000 VF World 24": "",
  "VF SB Sharer 19000 VF World 24": "",
  "VF SB Sharer 20000 VF World 24": "",
  "VF SB Sharer 21000 VF World 24": "",
  "VF SB Sharer 22000 VF World 24": "",
  "VF SB Sharer 23000 VF World 24": "",
  "VF SB Sharer 24000 VF World 24": "",
  "VF SB Sharer 25000 VF World 24": "",
  "VF SB Sharer 12500 VF Passport 24": "",
  "VF SB Sharer 13000 VF Passport 24": "",
  "VF SB Sharer 13500 VF Passport 24": "",
  "VF SB Sharer 14000 VF Passport 24": "",
  "VF SB Sharer 14500 VF Passport 24": "",
  "VF SB Sharer 15000 VF Passport 24": "",
  "VF SB Sharer 16000 VF Passport 24": "",
  "VF SB Sharer 17000 VF Passport 24": "",
  "VF SB Sharer 18000 VF Passport 24": "",
  "VF SB Sharer 19000 VF Passport 24": "",
  "VF SB Sharer 20000 VF Passport 24": "",
  "VF SB Sharer 21000 VF Passport 24": "",
  "VF SB Sharer 22000 VF Passport 24": "",
  "VF SB Sharer 23000 VF Passport 24": "",
  "VF SB Sharer 24000 VF Passport 24": "",
  "VF SB Sharer 25000 VF Passport 24": "",
  "VF SB Sharer 30000 VF World 24": "",
  "VF SB Sharer 36000 VF World 24": "",
  "VF SB Sharer 42000 VF World 24": "",
  "VF SB Sharer 48000 VF World 24": "",
  "VF SB Sharer 30000 VF Passport 24": "",
  "VF SB Sharer 36000 VF Passport 24": "",
  "VF SB Sharer 42000 VF Passport 24": "",
  "VF SB Sharer 48000 VF Passport 24": ""
};

var o2VoiceTariffs = {
  "O2 Best for Business (2016)": "",
  "O2 Business Shared 1300 (2016)": "",
  "O2 Business Shared 1300 (2017)": "",
  "O2 Business Shared 1300 Sharer (2016)": "",
  "O2 Business Shared 1300 Sharer (2017)": "",
  "O2 Business Shared 2000 (2016)": "",
  "O2 Business Shared 2000 (2017)": "",
  "O2 Business Shared 2000 Sharer (2016)": "",
  "O2 Business Shared 2000 Sharer (2017)": "",
  "O2 Business Shared 500 (2017)": "",
  "O2 Business Shared 500 Lead (2016)": "",
  "O2 Business Shared 500 Sharer (2016)": "",
  "O2 Business Shared 500 Sharer (2017)": "",
  "O2 Business Shared 5000 (2016)": "",
  "O2 Business Shared 5000 (2017)": "",
  "O2 Business Shared 5000 Sharer (2016)": "",
  "O2 Business Shared 5000 Sharer (2017)": "",
  "O2 EU Small Biz 12GB": "",
  "O2 EU Small Biz 15GB": "",
  "O2 EU Small Biz 20GB": "",
  "O2 EU Small Biz 25GB": "",
  "O2 EU Small Biz 2GB": "",
  "O2 EU Small Biz 300Mb": "",
  "O2 EU Small Biz 3GB": "",
  "O2 EU Small Biz 4GB": "",
  "O2 EU Small Biz 500Mb": "",
  "O2 EU Small Biz 750Mb": "",
  "O2 EU Small Biz 7GB": "",
  "O2 EU Small Biz 8GB": "",
  "O2 Small Biz 12GB (12m)": "",
  "O2 Small Biz 12GB (2016)": "",
  "O2 Small Biz 12GB (2017)": "",
  "O2 Small Biz 12Gb +10Gb (2017 Promo)": "",
  "O2 Small Biz 1Gb (2016)": "",
  "O2 Small Biz 1Gb (2017)": "",
  "O2 Small Biz 20GB (12m)": "",
  "O2 Small Biz 20GB (2016)": "",
  "O2 Small Biz 25GB (2017)": "",
  "O2 Small Biz 25Gb +10Gb (2017 Promo)": "",
  "O2 Small Biz 2GB (12m)": "",
  "O2 Small Biz 2GB (2016)": "",
  "O2 Small Biz 300MB (2016)": "",
  "O2 Small Biz 3Gb (2016)": "",
  "O2 Small Biz 3Gb (2017)": "",
  "O2 Small Biz 500MB (2016)": "",
  "O2 Small Biz 500MB (2017)": "",
  "O2 Small Biz 500Mins + 500MB (2016)": "",
  "O2 Small Biz 50Gb (2017)": "",
  "O2 Small Biz 50Gb +10Gb (2017 Promo)": "",
  "O2 Small Biz 5Gb (2016)": "",
  "O2 Small Biz 6GB (12m)": "",
  "O2 Small Biz 6GB (2016)": "",
  "O2 Small Biz 6GB (2017)": "",
  "O2 Small Biz 8Gb (2016)": "",
  "O2 Small Biz Data Share - Child": "",
  "O2 Small Biz Data Share - Child (2017)": "",
  "O2 Small Biz Data Share - Lead": "",
  "O2 Small Biz Data Share - Lead (2017)": "",
  "O2 Small Biz SIMO 12GB (2017)": "",
  "O2 Small Biz SIMO 20GB (2017)": "",
  "O2 Small Biz SIMO 2GB (2017)": "",
  "O2 Small Biz SIMO 300MB (2017)": "",
  "O2 Small Biz SIMO 4Gb (2017)": "",
  "O2 Small Biz SIMO 500MB (2017)": "",
  "O2 Small Biz SIMO 7Gb (2017)": "",
  "O2 wholesale PPM (2016)": "",
  "O2 wholesale PPM (2017)": "",
  "O2 Unlimited Data Flex": "",
  "O2 Unlimited Data Flex (2020)": "",
  "O2 Small Biz Unlimited (2019)": "",
  "O2 Small Biz EU Unlimited (2019)": "",
  "O2 Small Biz 2GB (2020)": "",
  "O2 Small Biz 8GB (2020)": "",
  "O2 Small Biz 24GB (2020)": "",
  "O2 Small Biz 50GB (2020)": ""
};

var vfPPMTariffs = {
  "VF Wholesale PPM Tariff": ""
};

var o2DataTariffs = {
  "O2 Mobile Broadband 1GB (2016)": "",
  "O2 Mobile Broadband 3GB (2016)": "",
  "O2 Mobile Broadband 5GB (2016)": "",
  "O2 Mobile Broadband 8GB (2016)": "",
  "O2 Mobile Broadband 20GB (2016)": "",
  "O2 Mobile Broadband 1GB (2017)": "",
  "O2 Mobile Broadband 2GB (2017)": "",
  "O2 Mobile Broadband 4GB (2017)": "",
  "O2 Mobile Broadband 8GB (2017)": "",
  "O2 Mobile Broadband 20GB (2017)": "",
  "O2 Mobile Broadband 30GB (2017)": "",
  "O2 Mobile Broadband 2GB (2020)": "",
  "O2 Mobile Broadband 8GB (2020)": "",
  "O2 Mobile Broadband 24GB (2020)": "",
  "O2 Mobile Broadband 60GB (2020)": "",
  "O2 Mobile Broadband 100GB (2020)": ""
};

var vfGigaCubeTariffs = {
  "VF GigaCube UK 60": "",
  "VF GigaCube UK 100": "",
  "VF GigaCube UK 200": "",
  "VF GigaCube UK 300": ""
};

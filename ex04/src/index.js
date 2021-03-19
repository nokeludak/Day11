//Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
//End of monitorsListArray array
function myMonitorsFunction(arr) {
  monitorsList = [...arr];
  monitorsList = [];
  var i;
  for (i = 0; i < 3; i++) {
    monitorsList.push ([monitorsListArray[i+0],i+1]);
    monitorsList.push ([monitorsListArray[i+1],i+2]);
    monitorsList.push ([monitorsListArray[i+2],i+3]);
  return monitorsList;
}
}
myMonitorsFunction(monitorsListArray);
console.log(myMonitorsFunction(monitorsList));
module.exports = myMonitorsFunction;
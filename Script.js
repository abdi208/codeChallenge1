var johnWeight = 68.0 
var markWeight = 90.71

var johnHeight = 1.82
var markHeight = 1.70


var johnBMI = johnWeight/ (johnHeight * johnHeight)
console.log(johnBMI)
var markBMI = markWeight / (markHeight * markHeight)
console.log(markBMI)

var higherBMI = markBMI < johnBMI;
console.log(higherBMI)
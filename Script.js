// var johnWeight = 68.0 
// var markWeight = 90.71

// var johnHeight = 1.82
// var markHeight = 1.70


// var johnBMI = johnWeight/ (johnHeight * johnHeight)
// console.log(johnBMI)
// var markBMI = markWeight / (markHeight * markHeight)
// console.log(markBMI)

// var higherBMI = markBMI < johnBMI;
// console.log(higherBMI)

var johnsAvg = (89 + 120 + 103) / 3;
var marksAvg = (116 + 94 + 123) / 3;
var marysAvg = (97 + 134 + 105) / 3;
console.log(johnsAvg)
console.log(marksAvg)
console.log(marysAvg)
if ( marksAvg > johnsAvg && marksAvg > marysAvg){
    console.log('Mark has a higher average with ' + marksAvg + ' points per game')
} else if( johnsAvg > marysAvg && johnsAvg > marksAvg) {
    console.log('John has a higher average with ' + johnsAvg + ' points per game')
} else if(marysAvg > marksAvg && marysAvg > johnsAvg){
    console.log('Mary has a higher average with ' + marysAvg + ' points per game')
}

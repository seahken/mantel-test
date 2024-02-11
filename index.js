var fs = require('fs');

var path = process.cwd();
var buffer = fs.readFileSync(path + "/programming-task-example-data.log");

const splittedString = buffer.toString().split('\n')

// parse log 
const parsedObjArray = splittedString.map((string => {
    const splitObj = string.split(' ')
    return {
        ipAddress: splitObj[0],
        resource: splitObj[6],
    }
})).filter(obj => obj.ipAddress)

// find number of unique IP addresses
function getNumberOfUniqueProp(arr, propName) {
    var counts = {};
    for (var i = 0; i < arr.length; i++) {
        counts[arr[i][propName]] = 1 + (counts[arr[i][propName]] || 0);
    }

    return counts
}


    // top 3 most visted URL
    // top 3 IP addresses


console.log(parsedObjArray)

const ipAddressObj = getNumberOfUniqueProp(parsedObjArray, 'resource') 

const array = []
for (const [key, value] of Object.entries(ipAddressObj)) {
    array.push({
        value: key,
        count: value
    })
  }

  console.log(array)




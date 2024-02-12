const fs = require('fs');

// parse log 
function parseLogIntoArrayFromFile(filename) {
    const path = process.cwd();
    const buffer = fs.readFileSync(path + filename);
    const splittedString = buffer.toString().split('\n')

    const parsedObjArray = splittedString.map((string => {
        const splitObj = string.split(' ')
        return {
            ipAddress: splitObj[0],
            resource: splitObj[6],
        }
    })).filter(obj => obj.ipAddress)

    return parsedObjArray
}

function getArrayNumberOfUniqueProp(arr, propName) {
    const countObj = {};
    for (let i = 0; i < arr.length; i++) {
        countObj[arr[i][propName]] = 1 + (countObj[arr[i][propName]] || 0);
    }

    // convert object into array
    const array = []
    for (const [key, value] of Object.entries(countObj)) {
        array.push({
            value: key,
            count: value
        })
    }
    return array
}

// sort array according to count
function sortAccordingToCount(array) {
    return array.sort((a, b) => b.count - a.count)
}

// return top three values, accourding to count
function returnTopThreeAccordingToCount(array) {
    const countLimit = 3
    const returnArray = []
    let currentCount = undefined
    const valueArray = []

    for (let i = 0; i < array.length; i++) {
        currentCount = array[i].count        
        
        if (currentCount !== array[i + 1]?.count) {
            valueArray.push(array[i].value)
            returnArray.push({
                count: currentCount,
                value: [...valueArray]
            })
            valueArray.splice(0,valueArray.length)
        } else {
            valueArray.push(array[i].value)
        }
    }

    return returnArray.slice(0, countLimit)
}

function getNumberOfUnique(filename, propName) {
    const array = parseLogIntoArrayFromFile(filename)   
    return getArrayNumberOfUniqueProp(array, propName).length
}

function getTop3CountValues(filename, propName) {
    const array = parseLogIntoArrayFromFile(filename)   
    const threeMostVisitedUrls = sortAccordingToCount(getArrayNumberOfUniqueProp(array, propName))
    return returnTopThreeAccordingToCount(threeMostVisitedUrls)
}

// find number of unique IP addresses
console.log('The number of unique IP addresses', getNumberOfUnique('/programming-task-example-data.log', 'ipAddress'))

// top 3 most visted URL
console.log('The top 3 most visited URLs', getTop3CountValues('/programming-task-example-data.log', 'resource'))

// // top 3 IP addresses
console.log('The top 3 most active IP addresses', getTop3CountValues('/programming-task-example-data.log', 'ipAddress'))


module.exports = { getNumberOfUnique, getTop3CountValues }
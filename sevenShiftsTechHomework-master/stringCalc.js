const convertToNumArray = strNums => {                                  // Converts input string of numbers into an array of ints to add
    let numArray; 
    let delims = /[\,\\\n]+/;

    if (strNums=="" || !strNums) {                                      // If input is empty or null, array to add is 0
        numArray = [0];
    }
    else if (strNums.substring(0,2) == '//') {                          // If input includes a custom delimiter as per the instructions (starting with //)...
    let customDelim = `${strNums.slice(2,strNums.indexOf('\n')+1)}`;    // ***NOTE: For the last bonus (#2 - allow for multiple custom delimiters), would collect an array of them from the slice, then use a loop to add each to the regex expression below. Alas, I need more experience with regex...
    delims = new RegExp(`[\,\\n` + customDelim + `]+`);                 // ...the list of delimiters includes the custom one
    strSlice = strNums.slice(strNums.indexOf('\n')+1);
    numArray = strSlice.split(delims);                                  //Array is the slice of the input, starting AFTER \n
    }
    else {                                                              // Otherwise array is delimited by a , or \n
        numArray = strNums.split(delims)                          
    };

    numArray.forEach((strNum,index) => {                                // Parse number strings into ints
        numArray[index] = parseInt(strNum);
    })
    return numArray;
}

const add = input => {                                                  // Adds array of ints together
    let numArray = convertToNumArray(input)
    let numSum = 0;
    numArray.forEach(num => {
        if(num < 0) {                                                   // If one of the values is negative, collect all negative values in the array and throw an error listing them
            let negArray = [];
            numArray.forEach(checkNegNum => {
                if(checkNegNum < 0) {
                    negArray.push(checkNegNum);
                };
            });
            throw negativeException(`Negatives not allowed. Please replace number(s): ${negArray}`)
        }
        else if (num > 1000) {                                          // If one of the values is >1000, ignore it
            return;
        }
        else { numSum = numSum + num; }
    });
    return numSum;
}



const negativeException = (message) => {
    const error = new Error(message);
    return error;
}

module.exports = {convertToNumArray,add,negativeException};
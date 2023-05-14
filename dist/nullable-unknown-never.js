"use strict";
//null types
const searchName = (value) => {
    if (value === null) {
        console.log('there is nothing to search');
    }
    else {
        console.log('searching');
    }
};
searchName(null);
//unknown types
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedspeed = (speed * 1000) / 3600;
        console.log(convertedspeed);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' '); //['10','km^-1']//split kore string take alada kore felbo
        const convertedspeed = (parseFloat(value) * 1000) / 3600;
        console.log(convertedspeed);
    }
};
getMyCarSpeed(10);
getMyCarSpeed('10 km^-1');
//Never types
function throwError(message) {
    throw new Error(message); //never types means kono return korbe na
}
throwError('Error hoyeche');

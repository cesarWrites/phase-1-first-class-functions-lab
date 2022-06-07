// Code your solution in this file!
const returnFirstTwoDrivers = (drivers=['Antonia', 'Nuru', 'Amari', 'Mo']) =>{
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier){
    return fn = (fare) => {
    return fare * multiplier ;
};
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}
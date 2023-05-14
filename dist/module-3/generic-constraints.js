"use strict";
const myInfo = {
    name: 'rafi',
    age: 58,
    salary: 12000,
    other1: false,
    other2: null,
};
const addInmycrushMind = (myInfo) => {
    const crush = 'sunny';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result5 = addInmycrushMind(myInfo);

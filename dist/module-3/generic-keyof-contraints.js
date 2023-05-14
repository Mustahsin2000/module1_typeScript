"use strict";
// const a: newtype = 'age';
// const b:newTypeKeyOf = 'address'
//({name:'rafi',age:100},'age) to get a property
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'rsfi', age: 45 }, 'age');

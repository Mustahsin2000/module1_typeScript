"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makesleep(hours) {
        return `This ${this.name} sleep ${hours}`;
    }
}
//parent class gulo common .tay shegulo
//inherit hobe children class a
class student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new student('Mr.', 15, 'uganda');
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(classes) {
        return `This ${this.name} will take ${classes} classes`;
    }
}
const teacher1 = new Teacher('Mr.', 15, 'uganda', 'teacher');

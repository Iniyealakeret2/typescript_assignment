"use strict";
// prompt set up
const ps = require("prompt-sync");
let value = ps({ sigint: true });
// class
class Person {
    constructor(data) {
        this.personDetails = data;
    }
    formatDetails() {
        return `my name is ${this.personDetails.firstName} ${this.personDetails.lastName}, I am a ${this.personDetails.occupation} at Decagon, my work Id is ${this.personDetails.id}.`;
    }
    aboutMe(arg) {
        if (typeof arg === "string") {
            return `I speak ${arg} fluently`;
        }
        if (typeof arg === "number") {
            return `I have ${arg} hobbies`;
        }
    }
}
class Student extends Person {
    //method overriding
    formatDetails() {
        return `my name is ${this.personDetails.firstName} ${this.personDetails.lastName}, I am a ${this.personDetails.occupation} at Decagon, my student Id is ${this.personDetails.id}.`;
    }
}
console.log("-------------------------------------");
console.log();
console.log("WELCOME TO THE ADMIN DASHBOARD...");
console.log();
console.log("-------------------------------------");
console.log();
console.log("For employee Enter: 1");
console.log();
console.log("For student Enter: 2");
console.log();
let option = value("Enter your option: ");
if (option == 1) {
    // AN INSTANCE OF PERSON
    console.log();
    console.log("Enter your details as an Employee of Decagon. ");
    console.log();
    let _firstname = value("Enter your first name: ");
    let _lastname = value("Enter your last name: ");
    let _occupation = value("Enter your occuation: ");
    let _id = value("Enter your Id: ");
    const employee = new Person({
        firstName: _firstname,
        lastName: _lastname,
        occupation: _occupation,
        id: _id,
    });
    console.log("---------------------------------------------------------------------------------------");
    console.log();
    console.log(employee.formatDetails());
    console.log();
    console.log(employee.aboutMe(20));
    console.log();
    console.log("---------------------------------------------------------------------------------------");
}
else if (option == 2) {
    console.log();
    console.log("Enter your details as a student of Decagon. ");
    console.log();
    let fname = value("Enter your first name: ");
    let lname = value("Enter your last name: ");
    let sOccupation = value("Enter your occuation: ");
    let sId = value("Enter your Id: ");
    const student = new Student({
        firstName: fname,
        lastName: lname,
        occupation: sOccupation,
        id: sId,
    });
    console.log("---------------------------------------------------------------------------------------");
    console.log();
    console.log(student.formatDetails());
    console.log();
    console.log(student.aboutMe("Ijaw"));
    console.log();
    console.log("---------------------------------------------------------------------------------------");
}

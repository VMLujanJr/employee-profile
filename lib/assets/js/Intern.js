const Employee = require("./Employee.js");

class Intern extends Employee { // extend Employee
    constructor(school = '') {
        // call constructor parent
        super(school);
        
        this.school = school;
    }

    getSchool() { // this.name is a property of Employee parent
        return `${this.school}.`
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
const Employee = require('./Employee.js');

class Intern extends Employee { // extend Employee
    constructor(name, email, id, school = '') {
        // call constructor parent
        super(name, email, id);

        this.school = school;
    }

    getSchool() { // this.name is a property of Employee parent
        /* console.log(this.name, this.school, 'HEY RECEIVING THIS!'); */
        return `${this.name}'s attends ${this.school}.`
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;
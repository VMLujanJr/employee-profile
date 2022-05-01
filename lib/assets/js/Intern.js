class Intern { // extend Employee
    constructor(school = '') {
        // call constructor parent
        // ...

        /*         this.name = name;
        this.id = Math.floor(Math.random() * 7 + 6); // ID should contain at minimum 6 characters up to 12.
        this.email = email; */
        this.school = school;
    }

    getSchool() { // this.name is a property of Employee parent
        /* console.log(this.name, this.school, 'HEY RECEIVING THIS!'); */
        return `${this.name}'s attends ${this.school}.`
    }

/*     getRole() {
        return 'Intern';
    } */
}

module.exports = Intern;
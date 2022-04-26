class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getRole() {
        console.log(this.role);
    }
}

const joey = new Employee("Joey", 12345, "joey@gmail.com");

joey.getName();
joey.getId();
joey.getEmail();
joey.getRole();

module.exports = Employee;
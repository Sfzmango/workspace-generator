class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
}

Employee.prototype.getName = function () {
    console.log("Name: " + this.name);
};

Employee.prototype.getId = function () {
    console.log("ID: " + this.id);
};

Employee.prototype.getEmail = function () {
    console.log("Email: " + this.email);
};

Employee.prototype.getRole = function () {
    console.log("Role: " + this.role);
};

module.exports = Employee;
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();
        this.name = name
        this.id = id;
        this.email = email;
        this.githubUsername = github;
        this.role = "Engineer";
    }
}

Engineer.prototype.getGithub = function () {
    console.log("Github Username: " + this.githubUsername);
};

// const mary = new Engineer("Mary", 67890, "mary@gmail.com", "marycodes");

// mary.getName();
// mary.getId();
// mary.getEmail();
// mary.getRole();
// mary.getGithub();

module.exports = Engineer;
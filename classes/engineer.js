const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.githubUsername = github;
        this.role = "Engineer";
    }
}

Engineer.prototype.getGithub = function () {
    console.log("Github Username: " + this.githubUsername);
};

module.exports = Engineer;
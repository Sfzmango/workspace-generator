const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");

const rolesArr = ["Engineer", "Intern", "Done"];
const engineerArr = [];
const internArr = [];

// loops if the user is not done inputting people to the workspace
async function askRole() {
    inquirer
        .prompt([
            {
                name: "selectedRole",
                type: "list",
                message: "Add team member?",
                choices: rolesArr,
            }
        ])

        // checks what type of employee the user wants to input and selects the correct prompt for it.
        .then((ans) => {
            console.log(ans.selectedRole);
            if (ans.selectedRole === "Engineer") {
                inquirer
                    .prompt([
                        {
                            name: "name",
                            type: "input",
                            message: "What is the engineer's name?",
                        },
                        {
                            name: "email",
                            type: "input",
                            message: "What is the engineer's email?",
                        },
                        {
                            name: "id",
                            type: "input",
                            message: "What is the engineer's ID?",
                        },
                        {
                            name: "github",
                            type: "input",
                            message: "What is the engineer's GitHub Username?",
                        },
                    ])
                    .then((response) => {
                        var engineerInfo = response;
                        engineerArr.push(new Engineer(`${engineerInfo.name}`, `${engineerInfo.id}`, `${engineerInfo.email}`, `${engineerInfo.github}`));
                        console.log(engineerArr);
                        askRole();
                    })
            }
            else if (ans.selectedRole === "Intern") {
                inquirer
                    .prompt([
                        {
                            name: "name",
                            type: "input",
                            message: "What is the intern's name?",
                        },
                        {
                            name: "email",
                            type: "input",
                            message: "What is the intern's email?",
                        },
                        {
                            name: "id",
                            type: "input",
                            message: "What is the intern's ID?",
                        },
                        {
                            name: "school",
                            type: "input",
                            message: "What is the intern's school?",
                        },
                    ])
                    .then((response) => {
                        var internInfo = response;
                        internArr.push(new Intern(`${internInfo.name}`, `${internInfo.id}`, `${internInfo.email}`, `${internInfo.school}`));
                        console.log(internArr);
                        askRole();
                    })
            }
        })
}

inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is the manager's name?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the manager's email?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the manager's ID?",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office Number?",
        },
        {
            name: "selectedRole",
            type: "list",
            message: "Confirm that this is the manager?",
            choices: ["Manager"]
        }
    ])
    .then((response) => {
        var managerInfo = response;
        const teamManager = new Manager(`${managerInfo.name}`, `${managerInfo.id}`, `${managerInfo.email}`, `${managerInfo.officeNumber}`);
        console.log(teamManager);
        askRole()
    })



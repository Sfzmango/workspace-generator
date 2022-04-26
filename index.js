const inquirer = require("inquirer");

const rolesArr = ["Engineer", "Intern", "Done"];

function askRole(ans) {
    if (ans === "Engineer") {
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
                {
                    name: "selectedRole",
                    type: "list",
                    message: "Add team member?",
                    choices: rolesArr,
                }
            ])
            .then((response) => {
                console.log(response.selectedRole);
                if (response.selectedRole !== "Done") {
                    askRole(response.selectedRole);
                }
            })
    }
    else if (ans === "Intern") {
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
                {
                    name: "selectedRole",
                    type: "list",
                    message: "Add team member?",
                    choices: rolesArr,
                }
            ])
            .then((response) => {
                console.log(response.selectedRole);
                if (response.selectedRole !== "Done") {
                    askRole(response.selectedRole);
                }
            })
    }
};

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
            message: "Add team member?",
            choices: rolesArr,
        }
    ])
    .then((response) => {
        console.log(response.selectedRole);
        if (response.selectedRole !== "Done") {
            askRole(response.selectedRole);
        }


    })
const inquirer = require("inquirer");

// utils allows us to be able to view lower levels of a node object
const util = require('util')
const fs = require("fs");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");

// array for the roles that the user can select;
const rolesArr = ["Engineer", "Intern", "Done"];

//empty arrays to push employee data to
const engineerArr = [];
const internArr = [];
const managerArr = [];

// loops if the user is not done inputting people to the workspace. takes in an argument to save added employees
async function askRole(elem) {

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

                        //pushes the engineer information into engineer array which will be able to store multiple engineers
                        engineerArr.push(new Engineer(`${engineerInfo.name}`, `${engineerInfo.id}`, `${engineerInfo.email}`, `${engineerInfo.github}`));
                        console.log(engineerArr);
                        askRole(elem);
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

                        //pushes the intern information into intern array which will be able to store multiple interns
                        internArr.push(new Intern(`${internInfo.name}`, `${internInfo.id}`, `${internInfo.email}`, `${internInfo.school}`));
                        console.log(internArr);
                        askRole(elem);
                    })
            }

            // continues the code if the user hits done
            if (ans.selectedRole === "Done") {
                console.log(util.inspect({ 'The following users have been created': { engineers: JSON.stringify(engineerArr), interns: JSON.stringify(internArr), managers: JSON.stringify(managerArr) } }, true, 10))

                // Deconstructs each of the keys from the managerArr into a variable that is usable
                let allManager = [];
                for (const element of managerArr) {
                    // ------- deconstructs out of class and pushes it into an array of all managers
                    allManager.push({ name: element.name, role: element.role, id: element.id, email: element.email, officeNumber: element.officeNumber })
                }

                // Deconstructs each of the keys from the engineerArr into a variable that is usable
                let allEng = [];
                for (const element of engineerArr) {
                    // ------- deconstructs out of class and pushes it into an array of all engineers
                    allEng.push({ name: element.name, role: element.role, id: element.id, email: element.email, github: element.githubUsername })
                }

                // Deconstructs each of the keys from the internArr into a variable that is usable
                let allInt = [];
                for (const element of internArr) {
                    // ------- deconstructs out of class and pushes it into an array of all interns
                    allInt.push({ name: element.name, role: element.role, id: element.id, email: element.email, school: element.school })
                }

                console.log("manager =>", allManager, "engineer(s) =>", allEng, "intern(s) =>", allInt)
                // ------------- add to html here


                return allManager, allEng, allInt;
            }
        })
}

// function to start the inquirer function on node by asking for the manager first
async function start() {
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

            // stores the manager information into an array
            managerArr.push(new Manager(`${managerInfo.name}`, `${managerInfo.id}`, `${managerInfo.email}`, `${managerInfo.officeNumber}`));

            // we return the managerArr in order to be able to call it higher in the call stack
            return managerArr;
        }).then((manager) => {
            console.log(manager);
            askRole(manager)
        })
}


// runs the start function
start();

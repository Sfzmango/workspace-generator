const Engineer = require("../classes/engineer");

describe("EmployeeTest", () => {
    describe("Initialization", () => {
        it("Checks if the name input works for Engineer class", () => {
            let mary = new Engineer("Mary", 67890, "mary@gmail.com", "marycodes");
            let maryName = mary.name;
            expect(maryName).toEqual("Mary");
        });
        it("Checks if the id input works for Engineer class", () => {
            let mary = new Engineer("Mary", 67890, "mary@gmail.com", "marycodes");
            let maryId = mary.id;
            expect(maryId).toEqual(67890);
        });
        it("Checks if the email input works for Engineer class", () => {
            let mary = new Engineer("Mary", 67890, "mary@gmail.com", "marycodes");
            let maryEmail = mary.email;
            expect(maryEmail).toEqual("mary@gmail.com");
        });
        it("Checks if the github input works for Engineer class", () => {
            let mary = new Engineer("Mary", 67890, "mary@gmail.com", "marycodes");
            let maryGithub = mary.githubUsername;
            expect(maryGithub).toEqual("marycodes");
        });
        it("Checks if the role input works for Engineer class", () => {
            let mary = new Engineer("Mary", 67890, "mary@gmail.com", "marycodes");
            let maryRole = mary.role;
            expect(maryRole).toEqual("Engineer");
        });
    });
});
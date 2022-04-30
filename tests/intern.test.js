const Intern = require("../classes/intern");

describe("EmployeeTest", () => {
    describe("Initialization", () => {
        it("Checks if the name input works for Intern class", () => {
            let mary = new Intern("Mary", 67890, "mary@gmail.com", "UC Berkeley");
            let maryName = mary.name;
            expect(maryName).toEqual("Mary");
        });
        it("Checks if the id input works for Intern class", () => {
            let mary = new Intern("Mary", 67890, "mary@gmail.com", "UC Berkeley");
            let maryId = mary.id;
            expect(maryId).toEqual(67890);
        });
        it("Checks if the email input works for Intern class", () => {
            let mary = new Intern("Mary", 67890, "mary@gmail.com", "UC Berkeley");
            let maryEmail = mary.email;
            expect(maryEmail).toEqual("mary@gmail.com");
        });
        it("Checks if the github input works for Intern class", () => {
            let mary = new Intern("Mary", 67890, "mary@gmail.com", "UC Berkeley");
            let marySchool = mary.school;
            expect(marySchool).toEqual("UC Berkeley");
        });
        it("Checks if the role input works for Intern class", () => {
            let mary = new Intern("Mary", 67890, "mary@gmail.com", "UC Berkeley");
            let maryRole = mary.role;
            expect(maryRole).toEqual("Intern");
        });
    });
});
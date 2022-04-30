const Manager = require("../classes/manager");

describe("EmployeeTest", () => {
    describe("Initialization", () => {
        it("Checks if the name input works for Manager class", () => {
            let mary = new Manager("Mary", 67890, "mary@gmail.com", 206);
            let maryName = mary.name;
            expect(maryName).toEqual("Mary");
        });
        it("Checks if the id input works for Manager class", () => {
            let mary = new Manager("Mary", 67890, "mary@gmail.com", 206);
            let maryId = mary.id;
            expect(maryId).toEqual(67890);
        });
        it("Checks if the email input works for Manager class", () => {
            let mary = new Manager("Mary", 67890, "mary@gmail.com", 206);
            let maryEmail = mary.email;
            expect(maryEmail).toEqual("mary@gmail.com");
        });
        it("Checks if the office number input works for Manager class", () => {
            let mary = new Manager("Mary", 67890, "mary@gmail.com", 206);
            let maryOfficeNumber = mary.officeNumber;
            expect(maryOfficeNumber).toEqual(206);
        });
        it("Checks if the role input works for Manager class", () => {
            let mary = new Manager("Mary", 67890, "mary@gmail.com", 206);
            let maryRole = mary.role;
            expect(maryRole).toEqual("Manager");
        });
    });
});
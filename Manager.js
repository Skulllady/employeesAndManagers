
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, title, salary, boss, eArray) {
    super(name, title, salary, boss);
    newArray = [];
    eArray.forEach(element => {
      if (element.boss === this.name) {
        newArray.push(element.name);
      }
    });

    //if true => push Employee.name into array
  }

}


// module.exports = {
//   Employee: Employee
// }

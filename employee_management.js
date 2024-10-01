//TASK 1 - Create an Employee Class:

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    //created employee class
    }

    getDetails() {
        return (`${this.name} is a ${this.position}, who is earning $${this.salary} per year`);
    //using the get method to 'get' the data properties from the class employee
    }
} 


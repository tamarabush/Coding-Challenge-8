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
        return (`${this.name} is a ${this.position}, who is earning $${this.salary} per year.`);
    //using the get method to 'get' the data properties from the class employee
    }
} 

const employee1 = new Employee("Robb Stark", 175000, "Westeros King");
console.log(employee1.getDetails()); 



//TASK 2 - Create a Department Class:

class department {
    constructor(name) {
        this.name = name
        this.employees = []
    //initialize name and employees in the class
    }

    addEmployees(employee) {
        this.employees.push(employee);
    //pushing the employee class in to the employees array 
    }

    get getDepartmentSalary() {
        return this.employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
    //using the reduce method to calculate the total salary 
    }
}
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
    }
} 

const employee1 = new Employee("Robb Stark", 175000, "Designer");
console.log(employee1.getDetails()); 



//TASK 2 - Create a Department Class:

class Department {
    constructor(name) {
        this.name = name
        this.employees = []
    //initialize name and employees in the class
    }

    addEmployees(employee) {
        this.employees.push(employee);
    //pushing the employee class in to the employees array 
    }

    getDepartmentSalary() {
        return this.employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
    //using the reduce method to calculate the total salary 
    }

//TASK 4 - Handle Bonuses for Managers:

    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((totalSalary, emp) => {
            return totalSalary + emp.salary + (emp.bonus ? emp.bonus : 0);
        }, 0);
    }
    //created a method that calculates the total salary with bonuses
    
}



//TASK 3 - Create a Manager Class that Inherits from Employee:

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus; 
    //created manager class that inherits the employee class, then added the bonus property 
    }

    getDetails() {
        return (`Name: ${this.name} Salary: $${this.salary} Position: ${this.position} Department: ${this.department} Bonus: $${this.bonus}`);
    }
    //returning the details from the class
}

const manager1 = new Manager("Cersei", 120000, "Analyst", "Business", 1000)
console.log(manager1.getDetails());







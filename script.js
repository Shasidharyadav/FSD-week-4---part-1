let employees = [];

function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

function addEmployee() {
    let { value: name } = document.getElementById("employeeName");
    let { value: age } = document.getElementById("employeeAge");
    let { value: department } = document.getElementById("employeeDepartment");
    let { value: salary } = document.getElementById("employeeSalary");

    employees.push(new Employee(name, parseInt(age), department, parseInt(salary)));
    displayEmployees();
}

function displayEmployees() {
    let employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = employees.map(emp => `<li>${emp.name} - ${emp.age} - ${emp.department} - ₹${emp.salary}</li>`).join('');
}

function calculateAverageSalary() {
    let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
    alert(`Average Salary: ₹${(totalSalary / employees.length).toFixed(2)}`);
}

function findEmployeesByDepartment() {
    let departmentName = document.getElementById("departmentInput").value;
    displayFilteredEmployees(employees.filter(emp => emp.department === departmentName));
}

function displayFilteredEmployees(filteredEmployees) {
    let employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = filteredEmployees.map(emp => `<li>${emp.name} - ${emp.age} - ${emp.department} - ₹${emp.salary}</li>`).join('');
}

function increaseSalary() {
    let percentageIncrease = parseInt(document.getElementById("percentageInput").value);
    
    employees.forEach(emp => emp.salary += emp.salary * (percentageIncrease / 100));
    
    displayEmployees();
}

function sortEmployeesByAge() {
    employees.sort((a, b) => a.age - b.age);
    
    displayEmployees();
}
document.getElementById("myGithubLink").addEventListener("click", function() {
    window.open("https://github.com/Shasidharyadav", "_blank");
});
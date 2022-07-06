class EmployeePayroll
{
    id; 
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1]
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() 
    {
        return this._name;
    }
    set name(name)
    {
        this._name = name;
    }

    Employee()
    {
        
        return "Id: " + this.id + ",Name: " + this.name + ",Salary: " + this.salary + ",Gender: " + this.gender + ",StartDate: " + this.startDate;
    }
}
{
    let employeePayroll = new EmployeePayroll(1, "Elavarasu", 20000);
    console.log(employeePayroll.Employee());
    employeePayroll.id = 2;
    employeePayroll.name = "Appusamy";
    employeePayroll.salary = 20000;
    console.log(employeePayroll.Employee());
    const date = new Date();
    let EmployeeData = new EmployeePayroll(3, "Jaya Sudha", 25000, "M", date.toLocaleDateString());
    console.log(EmployeeData.Employee());
}
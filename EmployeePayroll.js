class EmployeePayroll
{
    id; 
    salary;

    constructor(id, name, salary)
    {
        this.id = id;
        this.name = name
        this.salary = salary;
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
        return "Id: " + this.id + "\t\tName: " + this.name + "\t\tSalary: " + this.salary;
    }
}
{
    let employeePayroll = new EmployeePayroll(1, "Elavarasu", 20000);
    console.log(employeePayroll.Employee());
    employeePayroll.name = "Appusamy";
    console.log(employeePayroll.Employee());
}
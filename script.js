var totalEmployeeSalary = 0;
function handleSubmit(event) {

    //prevents default behavior of form
    event.preventDefault();

    //creates array to store inputted employee attributes from html form 
    let employee = []
    if (employee[0] != "" || employee[1] != "" || employee[2] != "" || employee[3] != "" || employee[4] != "") {

        employee.push(document.getElementById('firstName').value);
        employee.push(document.getElementById('lastName').value);
        employee.push(document.getElementById('ID').value);
        employee.push(document.getElementById('Title').value);
        employee.push(document.getElementById('Annual Salary').value);


        //make sure to use Number function to 
        totalEmployeeSalary += Number(employee[4]);

    }

    let tableBody = document.getElementById('tableBody');


    //be careful to use tableBody.innerHTML to refrence the 
    //innerHTML of tableBody variable that we drew from 
    //the HTML document

    //if statement prevents empty employee rows on table 
    if (employee[0] != "" || employee[1] != "" || employee[2] != "" || employee[3] != "" || employee[4] != "") {


        tableBody.innerHTML = tableBody.innerHTML + `
        <tr>
        <td>${employee[0]}</td>
        <td>${employee[1]}</td>
        <td>${employee[2]}</td>
        <td>${employee[3]}</td>
        <td id >${employee[4]}</td>
        <td><button id="delete" onClick="deletex(event)">Delete</button></td>
        </tr>
        `;

    }

    //querySelector worked but the getelementbyclassname didn't


    updateFooter();
    //update footer with totalsalry/12
    //call the update footer function 
}

/* displays good coding practice by having different method
to update footer */
function updateFooter() {

    //to be called upon removing or adding an employee 
    //posibily only when the annualsalary is not blank
    let newFooter = document.querySelector('footer');


    //console.log(ansalcol);

    newFooter.innerHTML = `${totalEmployeeSalary / 12}`;

}


function deletex(event) {

    //method needs to take in the click of the 
    //delete button and delete entire table row associated with it
    //by calling parent element

    //check if there are other ways to write this command outside of 
    //parentElement is called a selctor, can also use prviousSibling
    let toDelete = event.target.parentElement.parentElement;

    //returns the annual salary of the employee that we were deleting
    //returns the adjacent table <td>
    let sAnnualsal = Number(event.target.parentElement.previousSibling.previousSibling.innerHTML);
    


    totalEmployeeSalary -= sAnnualsal;

    toDelete.remove();


    updateFooter()

}
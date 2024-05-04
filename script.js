var totalEmployeeSalary = 0;
function handleSubmit(event) {

    //prevents default behavior of form
    event.preventDefault();

    //creates array to store inputted employee attributes from html form 
    let employee = []
    if (employee[0] != "" || employee[1] != "" || employee[2] != "" || employee[3] != "" || employee[4] != "") {

        employee[0] = document.getElementById('firstName').value;
        employee[1] = document.getElementById('lastName').value;
        employee[2] = document.getElementById('ID').value;
        employee[3] = document.getElementById('Title').value;
        employee[4] = document.getElementById('Annual Salary').value;

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
        <td>${employee[4]}</td>
        </tr>
        `;

    }

    //querySelector worked but the getelementbyclassname didn't
    

    updateFooter();
    //update footer with totalsalry/12
    //call the update footer function 
}

function updateFooter(){

    //to be called upon removing or adding an employee 
    //posibily only when the annualsalary is not blank
    let newFooter = document.querySelector('footer');
   
    newFooter.innerHTML = `${totalEmployeeSalary/12}`;


}
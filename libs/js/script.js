/* Preloader*/
$(window).on('load', function() {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});

/*Document Load*/

function showIntroductionModal(){
    $('#introductionModal').modal('show');
}

$(document).ready(function() {

    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            //console.log(result);

            if (result.status.name == "ok") {

                /*Populate Dropdown Menu*/

                $('#selectDepartment').append($("<option> Department </option>"));

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#selectDepartment').append($("<option>", {

                        value: result.data[index].name,
                        text: result.data[index].id + '. ' + result.data[index].name
                    }));
                    
                });
              
                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#editDepartmentID').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                    
                });

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#addDepartment').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                    
                });

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#currentDepartmentName').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#deleteDepartmentID').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#newDepartmentLocation').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });
            }
        },
        /*error: function(jqXHR, textStatus, errorThrown) {
            console.log(`This request returned an error jqHXR: ${jqXHR}, 
            textStatus: ${textStatus}, 
            errorThrown: ${errorThrown}`);
        }*/
    }),

    $.ajax({
        url: "libs/php/getAllLocations.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            //console.log(result);

            if (result.status.name == "ok") {

                /*Populate Dropdown Menu*/

                $('#selectLocation').append($("<option> Location </option>"));

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#selectLocation').append($("<option>", {

                        value: result.data[index].name,
                        text: result.data[index].id + '. ' + result.data[index].name
                    }));
                });

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#currentLocationName').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });
                
                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#deleteLocationID').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });
            }
        }
    }),

    $.ajax({
        url: "libs/php/getAll.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            if (result.status.name == "ok") {

                $('#directory').empty();
                                       
                /*Create Table With All Data*/
     
                for(let i = 0; i < result['data'].length; i++) {
                    var id = result['data'][i]['id'];
                    var firstName = result['data'][i]['firstName'];
                    var surname = result['data'][i]['lastName'];
                    var jobTitle = result['data'][i]['jobTitle'];
                    var email = result['data'][i]['email'];
                    var department = result['data'][i]['department'];
                    var location = result['data'][i]['location'];
         
                $('#directory').append( `
                    <tr>
                        <td id="id" style="display: none;">${id}</td>
                        <td id="firstName">${firstName}</td>
                        <td id="surname">${surname}</td>
                        <td id="jobTitle">${jobTitle}</td>
                        <td id="email">${email}</td>
                        <td id="department">${department}</td>
                        <td id="location">${location}</td>
                        <td id="edit"><a  href="#" data-toggle="modal" data-target="#editModal"><img id ="editPencil" src = "libs/images/pencil.png"></a></td>
                        <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img id = "deleteBin" src = "libs/images/delete.png"></a></td>
                    </tr>`)
        
                } 
        }

        }
    }),

    $.ajax({
        url: "libs/php/getAllEmployees.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            //console.log(result);

            if (result.status.name == "ok") {

                $('#selectEmployee').append($("<option> Employee </option>"));

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#selectEmployee').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].lastName + ', ' + result.data[index].firstName
                    }));                    
                });
                
                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#deleteEmployeeID').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].lastName + ', ' + result.data[index].firstName
                    }));                    
                });    
        }

        }
    });

        showIntroductionModal();

    });

/*Get Info By Department*/

$('#selectDepartment').change(function() {

    var departmentName = $('#selectDepartment').val() 

    $.ajax({
        url: "libs/php/getEmployeeByDepartment.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            if (result.status.name == "ok") {

                $('#directory').empty();
                                       
                /*Create Table With Employee Data By Department*/
     
                for(let i = 0; i < result['data'].length; i++) {
                    if(result['data'][i]['department'] === departmentName){
                    var id = result['data'][i]['id'];
                    var firstName = result['data'][i]['firstName'];
                    var surname = result['data'][i]['lastName'];
                    var jobTitle = result['data'][i]['jobTitle'];
                    var email = result['data'][i]['email'];
                    var department = result['data'][i]['department'];
                    var location = result['data'][i]['location'];
         
                $('#directory').append( `
                    <tr>
                        <td id="id" style="display: none;">${id}</td>
                        <td id="firstName">${firstName}</td>
                        <td id="surname">${surname}</td>
                        <td id="jobTitle">${jobTitle}</td>
                        <td id="email">${email}</td>
                        <td id="department">${department}</td>
                        <td id="location">${location}</td>
                        <td id="edit"><a href="#" data-toggle="modal" data-target="#editModal"><img id ="editPencil" src = "libs/images/pencil.png"></a></td>
                        <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img id = "deleteBin" src = "libs/images/delete.png"></a></td>
                    </tr>`)
        
                }
                $.ajax({
                    url: "libs/php/getAllLocations.php",
                    type: 'POST',
                    dataType: 'json',
            
                    success: function(result) {
            
                        if (result.status.name == "ok") {
                            
                            $('#selectLocation').empty();

                            /*Populate Dropdown Menu*/
            
                            $('#selectLocation').append($("<option> Location </option>"));
            
                            $.each(result.data, function(index) {
                                $('#selectLocation').append($("<option>", {
            
                                    value: result.data[index].name,
                                    text: result.data[index].id + '. ' + result.data[index].name
                                }));
                            });
            
                        }
                    }
                }),

                $.ajax({
                    url: "libs/php/getAllEmployees.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {
            
                        //console.log(result);
            
                        if (result.status.name == "ok") {

                            $('#selectEmployee').empty();
                            
                            $('#selectEmployee').append($("<option> Employee </option>"));
            
                            $.each(result.data, function(index) {
                                $('#selectEmployee').append($("<option>", {
            
                                    value: result.data[index].id,
                                    text: result.data[index].lastName + ', ' + result.data[index].firstName
                                }));                    
                            });    
                    }
            
                    }
                });

                }
                       
        }

        }
    });
    
});

/*Get Info By Location */

$('#selectLocation').change(function() {

    var locationName = $('#selectLocation').val() 

    $.ajax({
        url: "libs/php/getEmployeeByDepartment.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            //console.log(result);

            if (result.status.name == "ok") {

                $('#directory').empty();
                                       
                /*Create Table With Employee Data By Department*/
     
                for(let i = 0; i < result['data'].length; i++) {
                    if(result['data'][i]['location'] === locationName){
                    var id = result['data'][i]['id'];
                    var firstName = result['data'][i]['firstName'];
                    var surname = result['data'][i]['lastName'];
                    var jobTitle = result['data'][i]['jobTitle'];
                    var email = result['data'][i]['email'];
                    var department = result['data'][i]['department'];
                    var location = result['data'][i]['location'];
         
                $('#directory').append( `
                    <tr>
                        <td id="id" style="display: none;">${id}</td>
                        <td id="firstName">${firstName}</td>
                        <td id="surname">${surname}</td>
                        <td id="jobTitle">${jobTitle}</td>
                        <td id="email">${email}</td>
                        <td id="department">${department}</td>
                        <td id="location">${location}</td>
                        <td id="edit"><a href="#" data-toggle="modal" data-target="#editModal"><img id ="editPencil" src = "libs/images/pencil.png"></a></td>
                        <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img id = "deleteBin" src = "libs/images/delete.png"></a></td>
                    </tr>`)
                    
                }

                $.ajax({
                    url: "libs/php/getAllDepartments.php",
                    type: 'POST',
                    dataType: 'json',
            
                    success: function(result) {
            
                        //console.log(result);
            
                        if (result.status.name == "ok") {
                            
                            $('#selectDepartment').empty();

                            /*Populate Dropdown Menu*/
            
                            $('#selectDepartment').append($("<option> Department </option>"));
            
                            $.each(result.data, function(index) {
                                //console.log(result.data[index].id);
                                //console.log(result.data[index].name);
                                $('#selectDepartment').append($("<option>", {
            
                                    value: result.data[index].name,
                                    text: result.data[index].id + '. ' + result.data[index].name
                                }));
                                
                            });
                          
                        }
                    }
                })

                }     
        }

        $.ajax({
            url: "libs/php/getAllEmployees.php",
            type: 'GET',
            dataType: 'json',
    
            success: function(result) {
    
                //console.log(result);
    
                if (result.status.name == "ok") {
    
                    $('#selectEmployee').empty();
    
                    $('#selectEmployee').append($("<option> Employee </option>"));
    
                    $.each(result.data, function(index) {
                        //console.log(result.data[index].id);
                        //console.log(result.data[index].name);
                        $('#selectEmployee').append($("<option>", {
    
                            value: result.data[index].id,
                            text: result.data[index].lastName + ', ' + result.data[index].firstName
                        }));                    
                    });
                       
            }
    
            }
        })

        }
    });
    
});

/*Get Info By Employee */

$('#selectEmployee').change(function() {

    var employeeName = $('#selectEmployee').val() 

    $.ajax({
        url: "libs/php/getEmployeeByDepartment.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            if (result.status.name == "ok") {

                $('#directory').empty();
                                       
                /*Create Table With Employee Data By Department*/
     
                for(let i = 0; i < result['data'].length; i++) {
                    if(result['data'][i]['id'] === employeeName){
                    var id = result['data'][i]['id']; 
                    var firstName = result['data'][i]['firstName'];
                    var surname = result['data'][i]['lastName'];
                    var jobTitle = result['data'][i]['jobTitle'];
                    var email = result['data'][i]['email'];
                    var department = result['data'][i]['department'];
                    var location = result['data'][i]['location'];
         
                $('#directory').append( `
                    <tr>
                        <td id="id" style="display: none;">${id}</td>
                        <td id="firstName">${firstName}</td>
                        <td id="surname">${surname}</td>
                        <td id="jobTitle">${jobTitle}</td>
                        <td id="email">${email}</td>
                        <td id="department">${department}</td>
                        <td id="location">${location}</td>
                        <td id="edit"><a href="#" data-toggle="modal" data-target="#editModal"><img id ="editPencil" src = "libs/images/pencil.png"></a></td>
                        <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img id = "deleteBin" src = "libs/images/delete.png"></a></td>
                    </tr>`)                    
                } 
                }

                $.ajax({
                    url: "libs/php/getAllDepartments.php",
                    type: 'POST',
                    dataType: 'json',
            
                    success: function(result) {
            
                        if (result.status.name == "ok") {
                            
                            $('#selectDepartment').empty();

                            /*Populate Dropdown Menu*/
            
                            $('#selectDepartment').append($("<option> Department </option>"));
            
                            $.each(result.data, function(index) {
                                $('#selectDepartment').append($("<option>", {
            
                                    value: result.data[index].name,
                                    text: result.data[index].id + '. ' + result.data[index].name
                                }));
                                
                            });
                          
                        }
                    }
                }),

                $.ajax({
                    url: "libs/php/getAllLocations.php",
                    type: 'POST',
                    dataType: 'json',
            
                    success: function(result) {
            
                        if (result.status.name == "ok") {
                            
                            $('#selectLocation').empty();

                            /*Populate Dropdown Menu*/
            
                            $('#selectLocation').append($("<option> Location </option>"));
            
                            $.each(result.data, function(index) {
                                $('#selectLocation').append($("<option>", {
            
                                    value: result.data[index].name,
                                    text: result.data[index].id + '. ' + result.data[index].name
                                }));
                            });
            
                        }
                    }
                })
                         
        }

        }
    });
    
});

/*Reset filter*/

$('#resetBtn').on('click', function() {

    $.ajax({
        url: "libs/php/getAllDepartments.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            if (result.status.name == "ok") {

                $('#selectDepartment').empty();
                $('#editDepartmentID').empty();
                $('#addDepartment').empty();
                $('#currentDepartmentName').empty();
                $('#deleteDepartmentID').empty();
                $('#newDepartmentLocation').empty();

                /*Populate Dropdown Menu*/

                $('#selectDepartment').append($("<option> Department </option>"));

                $.each(result.data, function(index) {
                    $('#selectDepartment').append($("<option>", {
                        value: result.data[index].name,
                        text: result.data[index].id + '. ' + result.data[index].name
                    }));
                    
                });
              
                $.each(result.data, function(index) {
                    $('#editDepartmentID').append($("<option>", {
                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                    
                });

                $.each(result.data, function(index) {
                    $('#addDepartment').append($("<option>", {
                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                    
                });

                $.each(result.data, function(index) {
                    $('#currentDepartmentName').append($("<option>", {
                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });

                $.each(result.data, function(index) {
                    $('#deleteDepartmentID').append($("<option>", {
                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });

                $.each(result.data, function(index) {
                    //console.log(result.data[index].id);
                    //console.log(result.data[index].name);
                    $('#newDepartmentLocation').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });
            }
        }
    }),

    $.ajax({
        url: "libs/php/getAllLocations.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

           if (result.status.name == "ok") {

                $('#selectLocation').empty();
                $('#currentLocationName').empty();
                $('#deleteLocationID').empty();

                /*Populate Dropdown Menu*/

                $('#selectLocation').append($("<option> Location </option>"));

                $.each(result.data, function(index) {
                    $('#selectLocation').append($("<option>", {

                        value: result.data[index].name,
                        text: result.data[index].id + '. ' + result.data[index].name
                    }));
                });

                $.each(result.data, function(index) {
                    $('#currentLocationName').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });
                
                $.each(result.data, function(index) {
                    $('#deleteLocationID').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].name
                    }));
                });
            }
        }
    }),

    $.ajax({
        url: "libs/php/getAll.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            //console.log(result);

            if (result.status.name == "ok") {

                $('#directory').empty();
                                       
                /*Create Table With All Data*/
     
                for(let i = 0; i < result['data'].length; i++) {
                    var id = result['data'][i]['id'];
                    var firstName = result['data'][i]['firstName'];
                    var surname = result['data'][i]['lastName'];
                    var jobTitle = result['data'][i]['jobTitle'];
                    var email = result['data'][i]['email'];
                    var department = result['data'][i]['department'];
                    var location = result['data'][i]['location'];
         
                $('#directory').append( `
                    <tr>
                        <td id="id" style="display: none;">${id}</td>
                        <td id="firstName">${firstName}</td>
                        <td id="surname">${surname}</td>
                        <td id="jobTitle">${jobTitle}</td>
                        <td id="email">${email}</td>
                        <td id="department">${department}</td>
                        <td id="location">${location}</td>
                        <td id="edit"><a  href="#" data-toggle="modal" data-target="#editModal"><img id ="editPencil" src = "libs/images/pencil.png"></a></td>
                        <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img id = "deleteBin" src = "libs/images/delete.png"></a></td>
                    </tr>`)
        
                }
        }

        }
    }),

    $.ajax({
        url: "libs/php/getAllEmployees.php",
        type: 'GET',
        dataType: 'json',

        success: function(result) {

            //console.log(result);

            if (result.status.name == "ok") {

                $('#selectEmployee').empty();
                $('#deleteEmployeeID').empty();                
                
                $('#selectEmployee').append($("<option> Employee </option>"));

                $.each(result.data, function(index) {
                    $('#selectEmployee').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].lastName + ', ' + result.data[index].firstName
                    }));                    
                });
                
                $.each(result.data, function(index) {
                    $('#deleteEmployeeID').append($("<option>", {

                        value: result.data[index].id,
                        text: result.data[index].lastName + ', ' + result.data[index].firstName
                    }));                    
                });    
        }

        }
    });

    });

/*Searchbar search*/

$('#searchbar').on("keyup", function() {

    var value = $('#searchbar').val().toLowerCase();
    $.each($("#searchresulttable tbody tr"), function() {
        if($(this).text().toLowerCase().indexOf(value) === -1)
           $(this).hide();
        else
           $(this).show();                
    });
    
});

/*Add Employee*/

$("#btn-update-add-employee").on("click", function() {
        
        $.ajax({
            url: "libs/php/insertPersonnel.php",
            type: 'POST',
            dataType: 'json',
            data: {
                firstName: $('#addFirstName').val(),
                lastName: $('#addLastName').val(),
                jobTitle: $('#addJobTitle').val(),
                email: $('#addEmail').val(),
                department: $("#addDepartment").val()
            },
            success: function(result){

                if(result.status.code == 200){
                    
                    $('#addOptionModal').modal('hide');
                    $('#addPersonnelModal').modal('hide');
                    $('#check-edit2').prop("checked", false); 
                    $(`#successModal`).modal('show');                    

                    $.ajax({
                        url: "libs/php/getAll.php",
                        type: 'GET',
                        dataType: 'json',
                
                        success: function(result) {
                
                            //console.log(result);
                
                            if (result.status.name == "ok") {
                                
                                $('#directory').empty();
                                
                                var lastName = $('#addLastName').val()
                                
                                /*Create Table With All Data*/
                     
                                for(let i = 0; i < result['data'].length; i++) {
                                    if(result['data'][i]['lastName'] === lastName){
                                    var id = result['data'][i]['id'];
                                    var firstName = result['data'][i]['firstName'];
                                    var surname = result['data'][i]['lastName'];
                                    var jobTitle = result['data'][i]['jobTitle'];
                                    var email = result['data'][i]['email'];
                                    var department = result['data'][i]['department'];
                                    var location = result['data'][i]['location'];
                         
                                $('#directory').append( `
                                    <tr>
                                        <td id="id" style="display: none;">${id}</td>
                                        <td id="firstName">${firstName}</td>
                                        <td id="surname">${surname}</td>
                                        <td id="jobTitle">${jobTitle}</td>
                                        <td id="email">${email}</td>
                                        <td id="department">${department}</td>
                                        <td id="location">${location}</td>
                                        <td id="edit"><a  href="#" data-toggle="modal" data-target="#editModal"><img id ="editPencil" src = "libs/images/pencil.png"></a></td>
                                        <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img id = "deleteBin" src = "libs/images/delete.png"></a></td>
                                    </tr>`)
                                    }

                                }
                                
                        }                       
                
                        }
                    }),

                    $.ajax({
                        url: "libs/php/getAllEmployees.php",
                        type: 'GET',
                        dataType: 'json',
                
                        success: function(result) {
                
                            if (result.status.name == "ok") {
                
                                $('#selectEmployee').empty();
                                $('#deleteEmployeeID').empty();                
                                
                                $('#selectEmployee').append($("<option> Employee </option>"));
                
                                $.each(result.data, function(index) {
                                    $('#selectEmployee').append($("<option>", {
                
                                        value: result.data[index].id,
                                        text: result.data[index].lastName + ', ' + result.data[index].firstName
                                    }));                    
                                });
                                
                                $.each(result.data, function(index) {
                                    $('#deleteEmployeeID').append($("<option>", {
                
                                        value: result.data[index].id,
                                        text: result.data[index].lastName + ', ' + result.data[index].firstName
                                    }));                    
                                });    
                        }
                
                        }
                    });

                } 
            }
        });
    }
);

/*Delete Employee*/

// Set temporary variables

let tempFirstName = "";
let tempLastName = "";
let tempJobTitle = "";
let tempDepartment = "";
let tempEmail = "";
let tempDepartmentID = 0;
let tempEmployeeID = 0;

let firstNameHeader = '';
let lastNameHeader = '';
let jobTitleHeader = '';
let departmentIDHeader = '';
let emailHeader = '';

//Fill edit form input fields

function PrepareEditForm(){
    $('#editFirstName').val(tempFirstName);
    $('#editLastName').val(tempLastName);
    $('#editjobTitle').val(tempJobTitle);
    $('#editEmail').val(tempEmail);
    $("#editDepartmentID").val(tempDepartmentID);
    $('#editID').val(tempEmployeeID)
    $('#deleteEmployeeID1').val(tempEmployeeID)
    $('#deleteEmployeeID2').val(tempFirstName + ' ' + tempLastName)
}

//Dependent on department, set department id value

function DepartmentIDConverter(department){
    switch(department){
        case "Human Resources":
            tempDepartmentID = 1;
            break;
        case "Sales":
            tempDepartmentID = 2;
            break;
        case "Marketing":
            tempDepartmentID = 3;
            break;
        case "Legal":
            tempDepartmentID = 4;
            break;
        case "Services":
            tempDepartmentID = 5;
            break;
        case "Research and Development":
            tempDepartmentID = 6;
            break;
        case "Product Management":
            tempDepartmentID = 7;
            break;
        case "Training":
            tempDepartmentID = 8;
            break;
        case "Support":
            tempDepartmentID = 9;
            break;
        case "Engineering":
            tempDepartmentID = 10;
            break;
        case "Accounting":
            tempDepartmentID = 11;
            break;
        case "Business Development":
            tempDepartmentID =  12;
            break;
    }
}

//set temporary variable values

function SetTempVars(arr){
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]['id']){
            case "id":
                tempEmployeeID = arr[i]['innerHTML'];
                break;
            case "firstName":
                tempFirstName = arr[i]['innerHTML'];
                break;
            case "surname":
                tempLastName =  arr[i]['innerHTML'];
                break;
            case "jobTitle":
                tempJobTitle =  arr[i]['innerHTML'];
                break;
            case "email":
                tempEmail = arr[i]['innerText'];
                break;
            case "location":
                tempLocation = arr[i]['innerHTML'];
                break;
            case "department":
                tempDepartment = arr[i]['innerHTML'];
                break;
            default:
                break;
        }
    }
}

 //This event gets the event, creates an array that is the row and its children, and then assigns it temp variables for prepopulating the form.
 $('#directory').on('click', (e) => {    
    let parentInfo = $(e.target).parent().parent().parent().children().toArray();
    
    SetTempVars(parentInfo);

    DepartmentIDConverter(tempDepartment);

    PrepareEditForm();
})

$("#btn-update-delete-employee").on("click", function() {

    var deletedEmployeeID = $('#deleteEmployeeID1').val();

    $(`#deleteEmployeeWarningModal`).modal('show');
    $(`#deleteOptionModal`).modal('hide');

    $("#btn-delete-employee-warning").on("click", function() {
        $.ajax({
            url: "libs/php/deletePersonnelByID.php",
            type: 'POST',
            dataType: 'json',
            data: {
                id: deletedEmployeeID
            },
            success: function(result){
                if(result.status.code == 200){
                    //console.log(result);                    
                $.ajax({
                    url: "libs/php/getAll.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {
            
                        //console.log(result);
            
                        if (result.status.name == "ok") {

                            $(`#deleteEmployeeWarningModal`).modal('hide');
                            $(`#deleteEmployeeModal`).modal('hide');
                            $(`#successModal`).modal('show'); 
                            
                            $('#directory').empty();
                                                   
                            /*Create Table With All Data*/
                 
                            for(let i = 0; i < result['data'].length; i++) {
                                var id = result['data'][i]['id'];
                                var firstName = result['data'][i]['firstName'];
                                var surname = result['data'][i]['lastName'];
                                var jobTitle = result['data'][i]['jobTitle'];
                                var email = result['data'][i]['email'];
                                var department = result['data'][i]['department'];
                                var location = result['data'][i]['location'];
                     
                            $('#directory').append( `
                                <tr>
                                    <td id="id" style="display: none;">${id}</td>
                                    <td id="firstName">${firstName}</td>
                                    <td id="surname">${surname}</td>
                                    <td id="jobTitle">${jobTitle}</td>
                                    <td id="email">${email}</td>
                                    <td id="department">${department}</td>
                                    <td id="location">${location}</td>
                                    <td id="edit"><a  href="#" data-toggle="modal" data-target="#editModal"><img id ="editPencil" src = "libs/images/pencil.png"></a></td>
                                    <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img id = "deleteBin" src = "libs/images/delete.png"></a></td>
                                </tr>`)
                                }
                            
                    }             
                    }
                }),
                $.ajax({
                    url: "libs/php/getAllEmployees.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {
            
                        //console.log(result);
            
                        if (result.status.name == "ok") {
            
                            $('#selectEmployee').empty();
                            $('#deleteEmployeeID').empty();                
                            
                            $('#selectEmployee').append($("<option> Employee </option>"));
            
                            $.each(result.data, function(index) {
                                $('#selectEmployee').append($("<option>", {
            
                                    value: result.data[index].id,
                                    text: result.data[index].lastName + ', ' + result.data[index].firstName
                                }));                    
                            });
                            
                            $.each(result.data, function(index) {
                                $('#deleteEmployeeID').append($("<option>", {
            
                                    value: result.data[index].id,
                                    text: result.data[index].lastName + ', ' + result.data[index].firstName
                                }));                    
                            });    
                    }
            
                    }
                });
                } else {
                    $(`#deleteEmployeeModal`).modal('hide');
                    $(`#deleteEmployeeWarningModal`).modal('hide');
                    alert('Deletion unsuccessful. This employee erequires a unique ID Number.');
                }
            }
        });
})
    
})

/*Edit Employee*/

//Check for chnges to data before making ajax call
function FormChangeChecker(){
    if($('#editFirstName').val() != tempFirstName){
        firstNameHeader = $('#editFirstName').val();
    } else {
        firstNameHeader = tempFirstName;
    }

    if($('#editLastName').val() != tempLastName) {
        lastNameHeader = $('#editLastName').val();
    } else {
        lastNameHeader = tempLastName;
    }

    if($('#editjobTitle').val() != tempJobTitle){
        jobTitleHeader = $('#editjobTitle').val();
    } else {
        jobTitleHeader = tempJobTitle;
    }

    if($("#editDepartmentID").val() != tempDepartmentID){
        departmentIDHeader = $("#editDepartmentID").val();
    } else {
        departmentIDHeader = tempDepartmentID;
    }

    if($('#editEmail').val() != tempEmail){
        emailHeader = $('#editEmail').val();
    } else {
        emailHeader = tempEmail;
    }
}

//Make Ajax call to update the personnel table and refresh the full table
$("#btn-update-edit-employee").on("click", function() {
    FormChangeChecker();

    $.ajax({
        url: "libs/php/updatePersonnel.php",
        type: 'POST',
        dataType: 'json',
        data: {
            firstName: firstNameHeader,
            lastName: lastNameHeader,
            jobTitle: jobTitleHeader,
            email: emailHeader,
            departmentID: departmentIDHeader,
            id: tempEmployeeID,
        },
        success: function(result){

            if(result.status.code == 200){
                
                $('#editModal').modal('hide');
                $('#editOptionModal').modal('hide');
                $('#check-edit2').prop("checked", false); 
                $(`#successModal`).modal('show'); 
                
                $('#directory').empty();

                $.ajax({
                    url: "libs/php/getAll.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {
            
                        //console.log(result);
            
                        if (result.status.name == "ok") {
                            
                                                   
                            /*Create Table With All Data*/
                 
                            for(let i = 0; i < result['data'].length; i++) {
                                var id = result['data'][i]['id'];
                                var firstName = result['data'][i]['firstName'];
                                var surname = result['data'][i]['lastName'];
                                var jobTitle = result['data'][i]['jobTitle'];
                                var email = result['data'][i]['email'];
                                var department = result['data'][i]['department'];
                                var location = result['data'][i]['location'];
                     
                            $('#directory').append( `
                                <tr>
                                    <td id="id" style="display: none;">${id}</td>
                                    <td id="firstName">${firstName}</td>
                                    <td id="surname">${surname}</td>
                                    <td id="jobTitle">${jobTitle}</td>
                                    <td id="email">${email}</td>
                                    <td id="department">${department}</td>
                                    <td id="location">${location}</td>
                                    <td id="edit"><a href="#" data-toggle="modal" data-target="#editModal"><img src = "libs/images/pencil.png"></a></td>
                                    <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img src = "libs/images/delete.png"></a></td>
                                </tr>`)
                                
                            }
                            
                    }
            
                    }}),
                    
                $.ajax({
                    url: "libs/php/getAllEmployees.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {
            
                        //console.log(result);
            
                        if (result.status.name == "ok") {
            
                            $('#selectEmployee').empty();
                            $('#deleteEmployeeID').empty();                
                            
                            $('#selectEmployee').append($("<option> Employee </option>"));
            
                            $.each(result.data, function(index) {
                                $('#selectEmployee').append($("<option>", {
            
                                    value: result.data[index].id,
                                    text: result.data[index].lastName + ', ' + result.data[index].firstName
                                }));                    
                            });
                            
                            $.each(result.data, function(index) {
                                $('#deleteEmployeeID').append($("<option>", {
            
                                    value: result.data[index].id,
                                    text: result.data[index].lastName + ', ' + result.data[index].firstName
                                }));                    
                            });    
                    }
            
                    }
                });

            } else if(tempEmployeeID == null){
                $(`#editEmployeeModal`).modal('hide');
                $(`#editEmployeeWarningModal`).modal('hide');
                alert('Edit unsuccessful. This employee erequires a unique ID Number.');
            }
        }
    });
}
);

/*Add Location*/

$("#btn-update-add-location").on("click", function() {

    $.ajax({
            url: "libs/php/insertLocation.php",
            type: 'POST',
            dataType: 'json',
            data: {
                name: $('#addLocationName').val()
            },
            success: function(result){
                if(result.status.code == 200){
                    $('#addOptionModal').modal('hide');
                    $('#addLocationModal').modal('hide');
                    $(`#successModal`).modal('show');

                    $('#selectLocation').empty();
                    $('#currentLocationName').empty();
                    $('#deleteLocationID').empty();

                    $.ajax({
                        url: "libs/php/getAllLocations.php",
                        type: 'POST',
                        dataType: 'json',
                
                        success: function(result) {
                
                            if (result.status.name == "ok") {
                
                                /*Populate Dropdown Menu*/
                
                                $('#selectLocation').append($("<option> Location </option>"));
                
                                $.each(result.data, function(index) {
                                    $('#selectLocation').append($("<option>", {
                
                                        value: result.data[index].name,
                                        text: result.data[index].id + '. ' + result.data[index].name
                                    }));
                                });

                                $.each(result.data, function(index) {
                                    $('#currentLocationName').append($("<option>", {
                
                                        value: result.data[index].id,
                                        text: result.data[index].name
                                    }));
                                });

                                $.each(result.data, function(index) {
                                    $('#deleteLocationID').append($("<option>", {
                
                                        value: result.data[index].id,
                                        text: result.data[index].name
                                    }));
                                });
                            
                            }
                        }
                    })

                }
            } 
        });
    }
);

/*Delete Location*/

$("#btn-update-delete-location").on("click", function() {

    var deletedLocationID = $('#deleteLocationID').val();

    $(`#deleteLocationWarningModal`).modal('show');
    $(`#deleteOptionModal`).modal('hide');

    $("#btn-delete-location-warning").on("click", function() {

            $.ajax({
                    url: "libs/php/getLocationByID.php",
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        id: deletedLocationID
                    },
                    success: function(result){
                        if(result.status.code == 200){
                            if(result['data'][0]['id'] <= 5){
                                alert('This Location cannot be deleted as it contains existing data');
                            } else {
                                $.ajax({
                                    url: "libs/php/deleteLocationByID.php",
                                    type: 'POST',
                                    dataType: 'json',
                                    data: {
                                        id: deletedLocationID
                                    },
                                    success: function(result){
                                        if(result.status.code == 200){
                                            
                                            $('#deleteLocationWarningModal').modal('hide');
                                            $('#deleteLocationModal').modal('hide');
                                            $(`#successModal`).modal('show');    
                                            
                                            $('#selectLocation').empty();
                                            $('#currentLocationName').empty();
                                            $('#deleteLocationID').empty();
                                            $('#newDepartmentLocation').empty();
                                                                    
                                            $.ajax({
                                                url: "libs/php/getAllLocations.php",
                                                type: 'POST',
                                                dataType: 'json',
                                        
                                                success: function(result) {                                        
                                        
                                                    if (result.status.name == "ok") {
                                        
                                                        /*Populate Dropdown Menu*/
                                        
                                                        $('#selectLocation').append($("<option> Location </option>"));
                                        
                                                        $.each(result.data, function(index) {
                                                            $('#selectLocation').append($("<option>", {
                                        
                                                                value: result.data[index].name,
                                                                text: result.data[index].id + '. ' + result.data[index].name
                                                            }));
                                                        });
                                                        
                                                        $.each(result.data, function(index) {
                                                            $('#currentLocationName').append($("<option>", {
                                        
                                                                value: result.data[index].id,
                                                                text: result.data[index].name
                                                            }));
                                                        });
                                
                                                        $.each(result.data, function(index) {
                                                            $('#deleteLocationID').append($("<option>", {
                                        
                                                                value: result.data[index].id,
                                                                text: result.data[index].name
                                                            }));
                                                        });
                                
                                                        $.each(result.data, function(index) {
                                                        
                                                            $('#newDepartmentLocation').append($("<option>", {
                                        
                                                                value: result.data[index].id,
                                                                text: result.data[index].name
                                                            }));
                                                        });  
                                                    }
                                                }
                                            })
                                
                                        } 
                                    }
                                });
                            }
                    }
                }
            })
})
});

/*Edit Location*/

$("#btn-update-edit-location").on("click", function() {

    $.ajax({
        url: "libs/php/updateLocation.php",
        type: 'POST',
        dataType: 'json',
        data: {
            name: $('#newLocationName').val(),
            locationID: $('#currentLocationName').val(),
        },
        success: function(result){

            if(result.status.code == 200){
                $('#editOptionModal').modal('hide');
                $('#editLocationModal').modal('hide');
                $(`#successModal`).modal('show');                    

                $.ajax({
                    url: "libs/php/getAll.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {
            
                        //console.log(result);
            
                        if (result.status.name == "ok") {
            
                            $('#directory').empty();
                                                   
                            /*Reload Table With All Data*/
                 
                            for(let i = 0; i < result['data'].length; i++) {
                                var id = result['data'][i]['id'];
                                var firstName = result['data'][i]['firstName'];
                                var surname = result['data'][i]['lastName'];
                                var jobTitle = result['data'][i]['jobTitle'];
                                var email = result['data'][i]['email'];
                                var department = result['data'][i]['department'];
                                var location = result['data'][i]['location'];
                     
                            $('#directory').append( `
                                <tr>
                                    <td id="id" style="display: none;">${id}</td>
                                    <td id="firstName">${firstName}</td>
                                    <td id="surname">${surname}</td>
                                    <td id="jobTitle">${jobTitle}</td>
                                    <td id="email">${email}</td>
                                    <td id="department">${department}</td>
                                    <td id="location">${location}</td>
                                    <td id="edit"><a href="#" data-toggle="modal" data-target="#editModal"><img src = "libs/images/pencil.png"></a></td>
                                    <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img src = "libs/images/delete.png"></a></td>
                                </tr>`)   
                            
                            }                                 
                    } 
            
                    }
                });

                $('#selectLocation').empty();
                $('#currentLocationName').empty();
                $('#deleteLocationID').empty();
                $('#newDepartmentLocation').empty();

                $.ajax({
                    url: "libs/php/getAllLocations.php",
                    type: 'POST',
                    dataType: 'json',
            
                    success: function(result) {
            
                        if (result.status.name == "ok") {
            
                            /*Populate Dropdown Menu*/
            
                            $('#selectLocation').append($("<option> Location </option>"));
            
                            $.each(result.data, function(index) {
                                
                                $('#selectLocation').append($("<option>", {
            
                                    value: result.data[index].name,
                                    text: result.data[index].id + '. ' + result.data[index].name
                                }));
                            });

                            $.each(result.data, function(index) {
                                
                                $('#currentLocationName').append($("<option>", {
            
                                    value: result.data[index].id,
                                    text: result.data[index].name
                                }));
                            });
                            
                            $.each(result.data, function(index) {
                                
                                $('#deleteLocationID').append($("<option>", {
            
                                    value: result.data[index].id,
                                    text: result.data[index].name
                                }));
                            });

                            $.each(result.data, function(index) {
                               
                                $('#newDepartmentLocation').append($("<option>", {
            
                                    value: result.data[index].id,
                                    text: result.data[index].name
                                }));
                            });  
                          
                        }
                    }
                })
            } 
        }
    });
}
);

/*Add Department*/

$("#btn-update-add-department").on("click", function() {

    $.ajax({
            url: "libs/php/insertDepartment.php",
            type: 'POST',
            dataType: 'json',
            data: {
                name: $('#addDepartmentName').val(),
                locationID: $('#addDepartmentID').val()
            },
            success: function(result){
                if(result.status.code == 200){
                    $('#addOptionModal').modal('hide');
                    $('#addDepartmentModal').modal('hide');
                    $(`#successModal`).modal('show');
                    
                    $('#selectDepartment').empty();
                    $('#currentDepartmentName').empty();
                    $('#deleteDepartmentID').empty();
                    
                    $.ajax({
                        url: "libs/php/getAllDepartments.php",
                        type: 'POST',
                        dataType: 'json',
                
                        success: function(result) {
                
                            if (result.status.name == "ok") {
                
                                /*Populate Dropdown Menu*/
                
                                $('#selectDepartment').append($("<option> Department </option>"));
                
                                $.each(result.data, function(index) {
                                    $('#selectDepartment').append($("<option>", {
                
                                        value: result.data[index].name,
                                        text: result.data[index].id + '. ' + result.data[index].name
                                    }));
                                });

                                $.each(result.data, function(index) {
                                    $('#currentDepartmentName').append($("<option>", {
                
                                        value: result.data[index].id,
                                        text: result.data[index].name
                                    }));
                                });

                                $.each(result.data, function(index) {
                                    $('#deleteDepartmentID').append($("<option>", {
                
                                        value: result.data[index].id,
                                        text: result.data[index].name
                                    }));
                                });
                                    
                            }
                        }
                    })

                    $('#editDepartmentID').append($("<option>", {

                        value: $('#addDepartmentName').val(),
                        text: $('#addDepartmentName').val()
                    }));
                    $('#addDepartment').append($("<option>", {
    
                        value: $('#addDepartmentName').val(),
                        text: $('#addDepartmentName').val()
                    }));

                } 
            }
        });
    }
);

/*Delete Department*/

$("#btn-update-delete-department").on("click", function() {
    
    var deletedDepartmentID = $('#deleteDepartmentID').val();

    $(`#deleteDepartmentWarningModal`).modal('show');
    $(`#deleteOptionModal`).modal('hide');

        $("#btn-delete-department-warning").on("click", function() {
        
        $.ajax({
            url: "libs/php/getDepartmentByID.php",
            type: 'GET',
            dataType: 'json',
            data: {
                id: deletedDepartmentID
            },
            success: function(result){
                if(result.status.code == 200){
                    if(result['data'][0]['id'] <= 12){
                        alert('Deletion of this table is not possible. There is existing data in this table')
                    } else {
                        $.ajax({
                            url: "libs/php/deleteDepartmentByID.php",
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                id: deletedDepartmentID
                            },
                            success: function(result){
                                if(result.status.code == 200){
                                    
                                    $('#deleteDepartmentWarningModal').modal('hide');
                                    $('#deleteDepartmentModal').modal('hide');
                                    $(`#successModal`).modal('show'); 
                                    
                                    $('#selectDepartment').empty();
                                    $('#editDepartmentID').empty();
                                    $('#addDepartment').empty();
                                    $('#currentDepartmentName').empty();
                                    $('#deleteDepartmentID').empty();
                                    
                                    $.ajax({
                                        url: "libs/php/getAllDepartments.php",
                                        type: 'POST',
                                        dataType: 'json',
                                
                                        success: function(result) {
                                
                                            if (result.status.name == "ok") {
                                
                                                /*Populate Dropdown Menu*/
                                
                                                $('#selectDepartment').append($("<option> Department </option>"));
                                
                                                $.each(result.data, function(index) {
                                                    $('#selectDepartment').append($("<option>", {
                                
                                                        value: result.data[index].name,
                                                        text: result.data[index].id + '. ' + result.data[index].name
                                                    }));
                                                });
                
                                                $.each(result.data, function(index) {
                                                    $('#editDepartmentID').append($("<option>", {
                                
                                                        value: result.data[index].id,
                                                        text: result.data[index].name
                                                    }));
                                                    
                                                });
                                
                                                $.each(result.data, function(index) {
                                                   $('#addDepartment').append($("<option>", {
                                
                                                        value: result.data[index].id,
                                                        text: result.data[index].name
                                                    }));
                                                    
                                                });
                                
                                                $.each(result.data, function(index) {
                                                   $('#currentDepartmentName').append($("<option>", {
                                
                                                        value: result.data[index].id,
                                                        text: result.data[index].name
                                                    }));
                                                });
                                
                                                $.each(result.data, function(index) {
                                                   $('#deleteDepartmentID').append($("<option>", {
                                
                                                        value: result.data[index].id,
                                                        text: result.data[index].name
                                                    }));
                                                });
                                            }
                                        }
                                    })
                
                                } 
                            }
                        });
                    }
                }
            }           
        });
           
})
}
);

/*Edit Department*/

$("#btn-update-edit-department").on("click", function() {
    $('#editOptionModal').modal('hide');

    $.ajax({
        url: "libs/php/updateDepartment.php",
        type: 'POST',
        dataType: 'json',
        data: {
            name: $('#newDepartmentName').val(),
            locationID: $('#newDepartmentLocation').val(),
            departmentID: $('#currentDepartmentName').val()
        },
        success: function(result){

            if(result.status.code == 200){
                $('#editDepartmentModal').modal('hide');
                
                $(`#successModal`).modal('show');                    

                $.ajax({
                    url: "libs/php/getAll.php",
                    type: 'GET',
                    dataType: 'json',
            
                    success: function(result) {
            
                        if (result.status.name == "ok") {
            
                            $('#directory').empty();
                                                   
                            /*Reload Table With All Data*/
                 
                            for(let i = 0; i < result['data'].length; i++) {
                                var id = result['data'][i]['id'];
                                var firstName = result['data'][i]['firstName'];
                                var surname = result['data'][i]['lastName'];
                                var jobTitle = result['data'][i]['jobTitle'];
                                var email = result['data'][i]['email'];
                                var department = result['data'][i]['department'];
                                var location = result['data'][i]['location'];
                     
                            $('#directory').append( `
                                <tr>
                                    <td id="id" style="display: none;">${id}</td>
                                    <td id="firstName">${firstName}</td>
                                    <td id="surname">${surname}</td>
                                    <td id="jobTitle">${jobTitle}</td>
                                    <td id="email">${email}</td>
                                    <td id="department">${department}</td>
                                    <td id="location">${location}</td>
                                    <td id="edit"><a href="#" data-toggle="modal" data-target="#editModal"><img src = "libs/images/pencil.png"></a></td>
                                    <td id="delete"><a href="#" data-toggle="modal" data-target="#deleteEmployeeModal"><img src = "libs/images/delete.png"></a></td>
                                </tr>`)
                                
                            }
                        
                            $('#selectDepartment').empty();
                            $('#editDepartmentID').empty();
                            $('#addDepartment').empty();
                            $('#currentDepartmentName').empty();

                            $.ajax({
                                url: "libs/php/getAllDepartments.php",
                                type: 'POST',
                                dataType: 'json',
                        
                                success: function(result) {
                        
                                    if (result.status.name == "ok") {
                        
                                        /*Populate Dropdown Menu*/
                        
                                        $('#selectDepartment').append($("<option> Department </option>"));
                        
                                        $.each(result.data, function(index) {
                                            $('#selectDepartment').append($("<option>", {
                        
                                                value: result.data[index].name,
                                                text: result.data[index].id + '. ' + result.data[index].name
                                            }));
                                            });

                                        $.each(result.data, function(index) {
                                            $('#editDepartmentID').append($("<option>", {
                        
                                                value: result.data[index].id,
                                                text: result.data[index].name
                                            }));
                                            
                                        });
                        
                                        $.each(result.data, function(index) {
                                            $('#addDepartment').append($("<option>", {
                        
                                                value: result.data[index].id,
                                                text: result.data[index].name
                                            }));
                                            
                                        });
                        
                                        $.each(result.data, function(index) {
                                            $('#currentDepartmentName').append($("<option>", {
                        
                                                value: result.data[index].id,
                                                text: result.data[index].name
                                            }));
                                        });                                            
                                        
                                    }
                                }
                            })

                            
                        } 
                
                        }
                    });

                } 
            }
        });
    }
    );
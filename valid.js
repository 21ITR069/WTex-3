function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var lastname = document.Form.lastname.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var pass1 = document.Form.pass1.value;
    var pass2 = document.Form.pass2.value;
    var department = document.Form.department.value;
    var gender = document.Form.gender.value;
    var rollno = document.Form.rollno.value;
    
    

    var nameErr = lastnameErr = emailErr = mobileErr = pass1Err = pass2Err = departmentErr = genderErr = rollnoErr = true;
    

    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }

    if(lastname == "") {
        printError("lastnameErr", "Please enter your lastname");
        var elem = document.getElementById("lastname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            printError("lastnameErr", "Please enter a valid lastname");
            var elem = document.getElementById("lastname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("lastnameErr", "");
            lastnameErr = false;
            var elem = document.getElementById("lastname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    if(name==lastname)
    {
        printError("lastnameErr", "Firstname and last name must be different");
        var elem = document.getElementById("lastname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(pass1 == "") {
        printError("pass1Err", "Please enter your Password");
        var elem = document.getElementById("pass1");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[A-Za-z]\w{7,14}$/;
        if(regex.test(pass1) === false) {
            printError("pass1Err", "Password must be greater than 7 characters");
            var elem = document.getElementById("pass1");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("pass1Err", "");
            pass1Err = false;
            var elem = document.getElementById("pass1");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(pass2 == "") {
        printError("pass2Err", "Please enter your Password");
        var elem = document.getElementById("pass2");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[A-Za-z]\w{7,14}$/;
        if(regex.test(pass2) === false) {
            printError("pass2Err", "Password must be greater than 7 characters");
            var elem = document.getElementById("pass2");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("pass2Err", "");
            pass2Err = false;
            var elem = document.getElementById("pass2");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(pass1 != pass2)
    {
        printError("pass2Err", "Password must be same");
        var elem = document.getElementById("pass2");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }

    if(rollno == "") {
        printError("rollnoErr", "Please enter your rollno");
        var elem = document.getElementById("rollno");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^21ITR\d{3}$/;
        if(regex.test(rollno) === false) {
            printError("rollnoErr", "Invalid rollno");
            var elem = document.getElementById("rollno");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("rollnoErr", "");
            rollnoErr = false;
            var elem = document.getElementById("rollno");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    
    

    if(department == "Select") {
        printError("departmentErr", "Please select your department");
        var elem = document.getElementById("department");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("departmentErr", "");
        departmentErr = false;
        var elem = document.getElementById("department");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    

    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }

    
    
    
    
    if((nameErr || lastnameErr|| emailErr || mobileErr || pass1Err || pass2Err || departmentErr || genderErr || rollnoErr) == true) {
        return false;
    }
    alert("Registered successfully");
};
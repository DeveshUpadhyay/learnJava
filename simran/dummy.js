var x = document.getElementById("sumbit")

function resetting() {
    document.getElementById("username").innerHTML = "";
    document.getElementById("mobileno").innerHTML ="";
    document.getElementById("address").innerHTML ="";
    document.getElementById("emailids").innerHTML ="";
    document.getElementById("radio").innerHTML = "";
    document.getElementById("zip").innerHTML ="";
    document.getElementById("check").innerHTML =""
}

function retriveData(){
    var formData=JSON.parse(localStorage.getItem('formData'));
    // var username,gender,phone_no,preferance,address,zipcode,country,email;
    console.log(formData['gender']);
    console.log("Hello World");
}



function storeData() {

    var fname = document.getElementById("user").value;
    var ggender = document.querySelector('input[name="gender"]:checked').value;
    var nno = document.getElementById("mobileNumber").value;
    var ppref = document.querySelector('input[name="preference"]:checked').value;
    var aadd = document.getElementById("add").value;
    var zzip = document.getElementById("ZipCode").value;
    var ccountry = document.getElementById("country").value;
    var eemail = document.getElementById("emails").value;

    let formData = {
        name: fname,
        gender: ggender,
        phone_no: nno,
        preferance: ppref,
        address: aadd,
        zipcode: zzip,
        country: ccountry,
        email: eemail
    }

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
}


x.addEventListener("click", (e) => {
    e.preventDefault()
    var user = document.getElementById("user").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked
    // var female = document.getElementById("female").name;
    var Add_ress = document.getElementById("add").value;
    var zip_code = document.getElementById("ZipCode").value;
    var emails = document.getElementById("emails").value;
    red = document.getElementById("Red").checked
    green = document.getElementById("Green").checked
    blue = document.getElementById("Blue").checked
    var select = document.getElementById('country');
    var text = select.options[select.selectedIndex].text;
    console.log(Add_ress.length)



    console.log(user, mobileNumber, Add_ress, zip_code, emails, male, red, text)


    if (user == "" && mobileNumber == "" && Add_ress == "" && zip_code == "" && emails == "" && male == false && female == false && red == false && green == false && blue == false && text == "Select Country") {
        document.getElementById("username").innerHTML = " ** Please fill the username field";
        document.getElementById("mobileno").innerHTML =
            " ** Please fill the mobile NUmber field";
        document.getElementById("address").innerHTML =
            " Address Cannot be empty";
        document.getElementById("emailids").innerHTML =
            " ** Please fill the email id field";

        document.getElementById("radio").innerHTML = "please select at least one"

        document.getElementById("zip").innerHTML =
            " ** Please fill the Zipcode field"

        document.getElementById("check").innerHTML =
            " ** please select atleast one check"
        // document.getElementById("Country").innerHTML =
        //              " ** please select Country"    

        return false;

    }
    else {
        if (user == "") {
            document.getElementById("username").innerHTML = " ** Please fill the username field";
        }
        else {
            document.getElementById("username").innerHTML = "";
        }
        if (mobileNumber == "") {
            document.getElementById("mobileno").innerHTML =
                " ** Please fill the mobile NUmber field";
        }
        else if (isNaN(mobileNumber)) {
            document.getElementById("mobileno").innerHTML =
                " ** user must write digits only not characters";
        }
        else if (mobileNumber.length != 10) {
            document.getElementById("mobileno").innerHTML =
                " ** Mobile Number must be 10 digits only";
        }
        else {
            document.getElementById("mobileno").innerHTML = "";
        }

        if (Add_ress == "") {
            document.getElementById("address").innerHTML =
                " Address Cannot be empty";
        }
        else if (Add_ress.length > 40) {
            document.getElementById("address").innerHTML =
                " only 40 characters are allowed";
        }
        else {
            document.getElementById("address").innerHTML =
                "";
        }
        if (zip_code == "") {
            document.getElementById("zip").innerHTML =
                " ** Please fill the Zipcode field"
        }
        else if (isNaN(zip_code)) {
            document.getElementById("zip").innerHTML =
                " ** user must write digits only not characters";
        }

        else if (zip_code.length != 6) {
            document.getElementById("zip").innerHTML =
                " ** Zip code must be 6 digits only";
        }
        else {
            document.getElementById("zip").innerHTML =
                "";
        }
        if (emails == "") {
            document.getElementById("emailids").innerHTML =
                " ** Please fill the email id field"
        }

        else if (emails.includes("@") != true) {
            document.getElementById("emailids").innerHTML = " ** Email must contain @";

        }
        else if (emails.charAt(emails.length - 4) != "." && emails.charAt(emails.length - 3) != ".") {
            document.getElementById("emailids").innerHTML = " ** Invalid Email";
        }
        else {
            document.getElementById("emailids").innerHTML =
                "";
        }

        if (male == false && female == false) {
            document.getElementById("radio").innerHTML = "please select at least one"
        } else if (male == true || female == true) {
            document.getElementById("radio").innerHTML = ""
        }

        if (red == false && green == false && blue == false) {
            document.getElementById("check").innerHTML =
                " ** please select atleast one check"
        } else if ((red == true && green == true) || (red == true && blue == true) || (green == true && blue == true)) {
            document.getElementById("check").innerHTML =
                " Please select only one check"
        } else {
            document.getElementById("check").innerHTML = ""
        }

    }


    if (!(user == "" && mobileNumber == "" && Add_ress == "" && zip_code == "" && emails == "" && male == false && female == false && red == false && green == false && blue == false && text == "Select Country")) {
        storeData();
    }





})



// function validation() {
//     var user = document.getElementById("user").value;
//     var mobileNumber = document.getElementById("mobileNumber").value;
//     var color = document.getElementById("chk").value;
//     var Add_ress = document.getElementById("add").value;
//     var zip_code = document.getElementById("ZipCode").value;
//     var emails = document.getElementById("emails").value;

//     if (user == "") {
//         document.getElementById("username").innerHTML = " ** Please fill the username field";
//         return false;
//     }
//     if (mobileNumber == "") {
//         document.getElementById("mobileno").innerHTML =
//             " ** Please fill the mobile NUmber field";
//         return false;
//     }
//     if (!isNaN(user)) {
//         document.getElementById("username").innerHTML = " ** only characters are allowed";
//         return false;
//     }




//     if (isNaN(mobileNumber)) {
//         document.getElementById("mobileno").innerHTML =
//             " ** user must write digits only not characters";
//         return false;
//     }
//     if (mobileNumber.length != 10) {
//         document.getElementById("mobileno").innerHTML =
//             " ** Mobile Number must be 11 digits only";
//         return false;
//     }
//     if (color == "") {
//         document.getElementById("prefer").innerHTML = "please select at least one"
//         return false;
//     }
//     if (Add_ress == "") {
//         document.getElementById("address").innerHTML =
//             " Address Cannot be empty";
//         return false;
//     }
//     if (Add_ress.length > 10) {
//         document.getElementById("address").innerHTML =
//             " only 40 characters are allowed";
//         return false;
//     }

//     if (zip_code == "") {
//         document.getElementById("zip").innerHTML =
//             " ** Please fill the Zipcode field";
//         return false;
//     }
//     if (isNaN(zip_code)) {
//         document.getElementById("zip").innerHTML =
//             " ** user must write digits only not characters";
//         return false;
//     }
//     if (zip_code.length != 6) {
//         document.getElementById("zip").innerHTML =
//             " ** Zip code must be 6 digits only";
//         return false;
//     }

//     if (emails == "") {
//         document.getElementById("emailids").innerHTML =
//             " ** Please fill the email id field";
//         return false;
//     }
//     if (emails.indexOf("@") <= 0) {
//         document.getElementById("emailids").innerHTML = " ** Email must contain @";
//         return false;
//     }

//     if (
//         emails.charAt(emails.length - 4) != "." &&
//         emails.charAt(emails.length - 3) != "."
//     ) {
//         document.getElementById("emailids").innerHTML = " ** Invalid Email";
//         return false;
//     }

// }
// function storeData() {

//     var fname = document.getElementById("user").value;
//     var ggender = document.querySelector('input[name="genders"]:checked').value;
//     var nno = document.getElementById("MobileNumber").value;
//     var pred = document.getElementById("chk").value;
//     var pgreen = document.getElementById("chk").value;
//     var pblue = document.getElementById("chk").value;
//     var aadd = document.getElementById("Add").value;
//     var zzip = document.getElementById("ZipCode").value;
//     var ccountry = document.getElementById("country").value;
//     var eemail = document.getElementById("emails").value;

//     let formData = {
//         user: fname,
//         genders: ggender,
//         mobileNumber: nno,
//         chk: pred,
//         chk: pgreen,
//         chk: pblue,
//         Add: aadd,


//         ZipCode: zzip,
//         country: ccountry,
//         emails: eemail
//     }

//     localStorage.setItem('formData', JSON.stringify(formData));
//     console.log(localStorage.getItem('formData'));
// }



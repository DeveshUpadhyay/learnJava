var x = document.getElementById("sumbit");

var userName = document.getElementById("username");
var mobileNo = document.getElementById("mobileno");
var addressUser = document.getElementById("address");
var emailId = document.getElementById("emailids");
var genderCheck = document.getElementById("radio");
var preferanceCheck = document.getElementById("check");
var zipCodeCheck = document.getElementById("zip");




function resetting() {
    userName.innerHTML = "";
    mobileNo.innerHTML = "";
    addressUser.innerHTML = "";
    emailId.innerHTML = "";
    genderCheck.innerHTML = "";
    zipCodeCheck.innerHTML = "";
    preferanceCheck.innerHTML = ""
}

function storeData() {

    var fname = document.getElementById("user").value;
    fname = fname.trim()
    var ggender = document.querySelector('input[name="gender"]:checked').value;
    var nno = document.getElementById("mobileNumber").value;
    nno = nno.trim()
    var ppref = document.querySelector('input[name="preference"]:checked').value;
    var aadd = document.getElementById("add").value;
    aadd = aadd.trim()
    var zzip = document.getElementById("ZipCode").value;
    zzip = zzip.trim()
    var ccountry = document.getElementById("c_ountry").value;
    var eemail = document.getElementById("emails").value;
    eemail = eemail.trim()
    //var pred = document.getElementById("Red").checked
    //var pgreen = document.getElementById("Green").checked
    // var pblue = document.getElementById("Blue").checked



    let formData = {
        name: fname,
        gender: ggender,
        phone_no: nno,
        preferance: ppref,
        //  preferanceRed: pred,
        // preferanceGreen: pgreen,
        // preferanceBlue: pblue,
        address: aadd,
        zipcode: zzip,
        country: ccountry,
        email: eemail
    }

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
}
function retrieveData() {

    var n = localStorage.getItem('formData');
    var v = JSON.parse(n);
    if (n !== null) {
        var v = JSON.parse(n);
        document.getElementById("user").value = v["name"];

        document.getElementById("mobileNumber").value = v["phone_no"];
        document.getElementById("add").value = v["address"];
        document.getElementById("ZipCode").value = v["zipcode"];
        document.getElementById("c_ountry").value = v["country"];
        document.getElementById("emails").value = v["email"];
        if (document.getElementById("male").value == v["gender"]) {
            document.getElementById("male").checked = true;

        } else if (document.getElementById("female").value == v["gender"]) {
            document.getElementById("female").checked = true;

        }
        var p = v["preferance"].split(",")
        for (var i = 0; i < p.length; i++) {
            if (document.getElementById("Red").value == p[i]) {
                document.getElementById("Red").checked = true;
            }
            if (document.getElementById("Green").value == p[i]) {
                document.getElementById("Green").checked = true;
            }
            if (document.getElementById("Blue").value == p[i]) {
                document.getElementById("Blue").checked = true;
            }
        }

    }
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
    var red = document.getElementById("Red").checked
    var green = document.getElementById("Green").checked
    var blue = document.getElementById("Blue").checked
    var select = document.getElementById('c_ountry');
    var text = select.options[select.selectedIndex].text;
    console.log(Add_ress.length)


    console.log(user, mobileNumber, Add_ress, zip_code, emails, male, red, text)


    if (user === "" && mobileNumber === "" && Add_ress === "" && zip_code === "" && emails === "" && male === false && female === false && red === false && green === false && blue === false && text === "Select Country") {
        userName.innerHTML = " fill the username field";


        mobileNo.innerHTML =
            "  fill the mobile Number field";
        addressUser.innerHTML =
            " Address Cannot be empty";
        emailId.innerHTML =
            "   fill the email id field";

        genderCheck.innerHTML = " select at least one gender"

        zipCodeCheck.innerHTML =
            "  fill the Zipcode field"

        preferanceCheck.innerHTML =
            "   select atleast one preference"
        //  document.getElementById("c_ountry").innerHTML =
        //                " please select Country"    

        return false;

    }
    else {
        if (user == "") {
            userName.innerHTML = "fill the username field";
        }
        else if (!/^[a-zA-Z]+$/.test(user)) {
            userName.innerHTML = "Only characters are allowed";
        }
        else {
            userName.innerHTML = "";
        }
        if (mobileNumber == "") {
            mobileNo.innerHTML =
                "Please fill the mobile NUmber field";
        }
        else if (isNaN(mobileNumber)) {
            mobileNo.innerHTML =
                " Only numbers are allowed";
        }
        else if (mobileNumber.length != 10) {
            mobileNo.innerHTML =
                "  Mobile Number must be 10 digits only";
        }
        else {
            mobileNo.innerHTML = "";
        }

        if (Add_ress == "") {
            addressUser.innerHTML =
                " Address Cannot be empty";
        }
        else if (Add_ress.length > 40) {
            addressUser.innerHTML =
                " only 40 characters are allowed";
        }
        else {
            addressUser.innerHTML =
                "";
        }
        if (zip_code == "") {
            zipCodeCheck.innerHTML =
                " Please fill the Zipcode field"
        }
        else if (isNaN(zip_code)) {
            zipCodeCheck.innerHTML =
                " Only numbers are allowed";
        }

        else if (zip_code.length != 6) {
            zipCodeCheck.innerHTML =
                "  Zip code must be 6 digits only";
        }
        else {
            zipCodeCheck.innerHTML =
                "";
        }
        if (emails == "") {
            emailId.innerHTML =
                "  Please fill the email id field"
        }

        else if (emails.includes("@") != true) {
            emailId.innerHTML = "  Email must contain @";

        }
        else if (emails.charAt(emails.length - 4) != "." && emails.charAt(emails.length - 3) != ".") {
            emailId.innerHTML = " Invalid Email";
        }
        else {
            emailId.innerHTML =
                "";
        }

        if (male == false && female == false) {
            genderCheck.innerHTML = "select at least one gender"
        } else if (male == true || female == true) {
            genderCheck.innerHTML = ""
        }

        if (red == false && green == false && blue == false) {
            preferanceCheck.innerHTML =
                " select atleast one preference"
        }
        // else if((red==true && green==true) || (red==true && blue==true) || (green==true && blue==true)){
        //  preferanceCheck.innerHTML =""


        else {
            preferanceCheck.innerHTML = ""
        }

    }
    if (!(user == "" && mobileNumber == "" && Add_ress == "" && zip_code == "" && emails == "" && male == false && female == false && red == false && green == false && blue == false && text == "Select Country")) {
        storeData();
    }
})




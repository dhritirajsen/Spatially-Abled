function membership() {

    //join us
    var j_email = document.getElementById("join_email").value;
    var j_memberstatus = document.getElementById("join_memberstatus").value;
    var j_name= document.getElementById("join_name").value;
    var j_institution = document.getElementById("join_institution").value;
    var j_department = document.getElementById("join_department").value;
    var j_state = document.getElementById("join_state").value;
    var j_city = document.getElementById("join_city").value;
    var j_street = document.getElementById("join_street").value;
    var j_postalcode = document.getElementById("join_postalcode").value;
    var j_country = document.getElementById("join_country").value;
    var j_phone = document.getElementById("join_phone").value;
    var j_fiedspecialization = document.getElementById("join_fieldSpecialization").value;
    var formType = "Want to Join"; 
   

    $.post("https://formspree.io/f/mbjpokbw",
        {
            email: j_email,
            memberstatus: j_memberstatus,
            message: j_name,
            institution: j_institution,
            department: j_department,
            state: j_state,
            city: j_city,
            street: j_street,
            postalcode: j_postalcode,
            country: j_country,
            phone: j_phone,
            specializationAbout: j_fiedspecialization,
            For : formType,
        },
        function () {
           // alert("Data: " + data + "\nStatus: " + status);
        });
    document.getElementById("successfulSubmitMembership").innerHTML = " Sucessfully-Submitted Please Wait...";
    setInterval(function () {

        location.reload();
    }, 10000);

}
function contactUs() {

    //Contact us
   var c_name = document.getElementById("CName").value;
   var c_email = document.getElementById("CEmail").value;
   var c_message = document.getElementById("CEmail").value;
    
console.log("sending contactus");
    $.post("https://formspree.io/f/xjvpwold",
        {
           Name : c_name,
           Email : c_email,
           message : c_message,
           For : "Query Purpose"
        },
        function () {
            //alert("Data: " + data + "\nStatus: " + status);
        });
    document.getElementById("successfulcontactus").innerHTML = " Sucessfully submitted Please Wait we will get back to you";
   
}


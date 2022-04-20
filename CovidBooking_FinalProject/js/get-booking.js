$(document).ready(function() {
//    Bring focus to the textbox when page loads
    $("#booking-id").focus();
    
//    Function to construct a table using patient data
    function buildTable(bookedPatientObj) {
        $("#p_name").html("Patient Name: " + bookedPatientObj.patientName);
        $("#booked_date").html("Appointment Date: " + bookedPatientObj.bookedDate);
        $("#g_name").html("Guardian Name: " + bookedPatientObj.guardianName);
        $("#p_age").html("Patient Age: " + bookedPatientObj.patientAge);
        $("#g_number").html("Contact Number: " + bookedPatientObj.guardianNumber);
        $("#p_gender").html("Patient Gender: " + bookedPatientObj.patientGender);
        
//        Show the element when data is filled
        $("#patient-table").css({display: "block"});
    }
    
    $("#fetch-booking").button();
    $("#fetch-booking").click(function() {
        var bookingID = $("#booking-id").val();
        var bookedPatientObj = JSON.parse(localStorage.getItem(bookingID));
        buildTable(bookedPatientObj);
    });
});

window.onload = function() {
    
    // Custom function to return the element by Id
    var $1 = function(id) { 
        return document.getElementById(id); 
    };
        
    // Focus on first field on load
    $1("p_name").focus();
    
    var submitButton = $1("submit_button");
   
    $1("retrieve_button").onclick = function() {
        window.location.replace("get-booking.html");
    };
    
    // On click of submit button, first validate and then store in local storage
    submitButton.addEventListener("click" , function(){
        var patientName = $1("p_name").value;
        var guardianName = $1("g_name").value;
        var patientAge = parseInt($1("p_age").value);
        var patientGender = $("input[name=gender]:checked").val();
        var guardianNumber = $1("g_number").value;
      
        //Validations start
        if (patientName == null || patientName.length == 0) {
            $1("p_name_error").innerHTML = "Please enter patient name";
        } else {
            $1("p_name_error").innerHTML = "";
        }
        
        if (guardianName == null || guardianName.length == 0) {
            $1("g_name_error").innerHTML = "Please enter father name";
        } else {
            $1("g_name_error").innerHTML = "";
        }
        
        if (patientAge == null || patientAge.length == 0) {
            $1("p_age_error").innerHTML = "Please enter patient age";
        } else if (isNaN(patientAge) || patientAge <= 0) {
            $1("p_age_error").innerHTML = "Please enter a valid age";
        } else {
            $1("p_age_error").innerHTML = "";
        }
        
        if (guardianNumber == null || guardianNumber.length == 0) {
            $1("g_number_error").innerHTML = "Please enter parent contact no";
        } else if (guardianNumber.length != 10 || isNaN(guardianNumber)) {
            $1("g_number_error").innerHTML = "Please enter correct contact no";
        } else {
            $1("g_number_error").innerHTML = "";
        }
                
        if (!patientName.length == 0 && !guardianName.length == 0 && !isNaN(patientAge) && !guardianNumber.length == 0 && !guardianNumber.length != 10 && !isNaN(guardianNumber)) {
            patientDetailsObj = {
                patientName,
                guardianName,
                patientAge,
                patientGender,
                guardianNumber
            };

            //Localstorage has key patientDetails        
            localStorage.setItem("patientDetails", JSON.stringify(patientDetailsObj));
            window.location.replace("covid-questions.html");
        }
        //Validations end

    });
    
};
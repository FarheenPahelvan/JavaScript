$(document).ready(function() {
    

    var messages = {
        nocovid: {
            heading: "Book your Appointment now!",
            message: "Based on your answers we think you are not infected from covid-19. <br>We still recommend you to be causious and follow your Public Health official guidlines. <br>Maintain physical distancing at all times. If its not possible wear a mask!",
            booking: true
        },
        asymptomatic: {
            heading: "You might be infected with covid-19 and not have symptoms!",
            message: "Your answers indicate that you have possible symptoms of COVID-19 or that you've had close contact with someone who has the condition. <br>Based on this information, you should speak to your health care provider. <br>You may be directed to a testing site!",
            booking: false
        },
        symptomatic: {
            heading: "You are infected with covid-19 and have symptoms!",
            message: "Based on your answers we think you are infected from covid-19. <br>We recommend you to be cautious and follow your Public Health official guidlines. <br>Seek medical advice if required. Stay home!",
            booking: false
        },
        emergency: {
            heading: "You are infected with covid-19 and need medical help IMMIDIATELY!",
            message: "Call 911 or your local emergency number!",
            booking: false
        },
        error: {
            heading: "Something went wrong!",
            message: "Please start from first!",
            booking: false
        }
    };


    try {
        var patientDetailsObj = JSON.parse(localStorage.getItem("patientDetails"));
        var symptomType = patientDetailsObj.symptoms;
        var patientName = patientDetailsObj.patientName;
    } catch(e) {
        symptomType = "error";
    }


    function buildMessageBox(messageObj) {
        $("#message-box h1").html(messageObj.heading);
        $("#message-box p").html(messageObj.message);
    }


    function buildBookingSection(bool) {
        if(bool) {
            $("#booking-section h2").html("Hello " + patientName);
            $("#booking-section p").html("Please select a suitable date for your appointment.");
        } else {
            $("#booking-section").html('<img src="images/alert.png" alt="Alert">');
        }
    }

    switch(symptomType) {
        case "nocovid":
            buildMessageBox(messages.nocovid);
            buildBookingSection(true);
            break;
        case "asymptomatic":
            buildMessageBox(messages.asymptomatic);
            buildBookingSection(false);
            break;
        case "symptomatic":
            buildMessageBox(messages.symptomatic);
            buildBookingSection(false);
            break;
        case "emergency":
            buildMessageBox(messages.emergency);
            buildBookingSection(false);
            break;
        default:
            buildMessageBox(messages.error);
            buildBookingSection(false);
    }


    $("#datepicker").datepicker({
        inline: true,
        minDate: 0
    });


    $("#dialog").dialog({
        autoOpen: false,
        width: 400,
        buttons: [
            {
                text: "OK",
                click: function() {
                    $(this).dialog("close");
                    window.location.replace("home.html");
                }
            }
        ]
    });

    
    $("#book-now").button();


    $("#book-now").click(function() {
        var date = $("#datepicker").val();
        var bookingID = Math.floor((Math.random() * 10000) + 1);
        patientDetailsObj.bookedDate = date;
        patientDetailsObj.bookingId = bookingID;
        localStorage.setItem(bookingID, JSON.stringify(patientDetailsObj));
        $("#dialog p span").html(bookingID);
        $("#dialog").dialog("open");
    });
});
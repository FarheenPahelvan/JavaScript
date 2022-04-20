$(document).ready(function() {
//    Global variables that will store API data(3rd Party)
    var totalConfirmed = 0;
    var totalRecovered = 0;
    

    var symptomsSet = new Set();
    

    var patientDetailsObj = JSON.parse(localStorage.getItem("patientDetails"));


    $(".slider").bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 500
    });


    (function() {

        var xhttp = new XMLHttpRequest();
        

        xhttp.onreadystatechange = function() {

            if(this.readyState == 4 && this.status == 200) {

                var data = JSON.parse(this.responseText);
                var html = "";
                html += '<h2>Covid Questions:</h2>';
                for(var i = 0; i < data.length; i++) {
                    html += '<div id="covid-questions-section">';
                    html += '<p>' + (i+1) + '. ' + data[i].question + '</p> ';
                    for(var j = 0; j < data[i].options.length; j++) {
                        html += '<input type="' + data[i].type + '" id="' + (i+1) + (j+1) + '" name="question' + (i+1) + '" value="' + data[i].options[j] + '"> ' + '<label for="' + data[i].options[j] + '">' + data[i].options[j] + '</label><br>';
                    }
                    html += '</div>';
                }
                html += '<button id="covid-questions-btn">Continue</button>';
                html += ' <span id="covid-questions-error" class="red"></span>';
                $("#covid-questions").html(html);
                $("#covid-questions-btn").button();
                

                $("input[type='checkbox']").click(function() {
                    if($(this).prop("checked") == true) {
                        symptomsSet.add(this.id);
                    } else if($(this).prop("checked") == false) {
                        symptomsSet.delete(this.id);
                    }
                });
                
                $("#covid-questions-btn").click(function() {
                    var questionOne = $("input[name=question1]:checked").val();
                    if(questionOne === undefined || !$("input[name=question2]:checked").length > 0 || !$("input[name=question3]:checked").length > 0) {
                       $("#covid-questions-error").html("Answer all the questions to continue");
                    } else if(questionOne === "No" && symptomsSet.has("210") && symptomsSet.has("33")) {
                        patientDetailsObj.symptoms = "nocovid";
                        $("#covid-questions-error").html("");
                    } else if(symptomsSet.has("21") || symptomsSet.has("22") || symptomsSet.has("23") || symptomsSet.has("26") || symptomsSet.has("28")) {
                        patientDetailsObj.symptoms = "symptomatic";
                        $("#covid-questions-error").html("");
                    } else {
                        patientDetailsObj.symptoms = "asymptomatic";
                        $("#covid-questions-error").html("");
                    }
                    

                    if(symptomsSet.has("31") || symptomsSet.has("32")) {
                        patientDetailsObj.symptoms = "emergency";
                    }
                    
                    if(questionOne !== undefined && $("input[name=question2]:checked").length > 0 && $("input[name=question3]:checked").length > 0) {
    
                        localStorage.setItem("patientDetails", JSON.stringify(patientDetailsObj));
                        window.location.replace("booking.html");
                    }
                });
            }
        };
        

        xhttp.open("GET", "covid-questions.json", true);
        

        xhttp.send();
    })();

    $.ajax({
        type: "get",
        url: "https://covid19-api.org/api/status/ca",
        timeout: 0,
        dataType: "json",
        success: function(data) {
            totalConfirmed = data.cases;
            totalRecovered = data.recovered;
        }
    });

    
    $.ajax({
        type: "get",
        url: "https://covid19-api.org/api/diff/ca",
        beforeSend: function() {
            $("#covid-stats").html("<h2>Loading...<h2>");
        },
        timeout: 0,
        dataType: "json",
        success: function(data) {
            var html = '<h2>Covid Situation in Canada:</h2>' +
                '<p>Total Confirmed: ' + totalConfirmed + '</p>' +
                '<p>Total Recovered: ' + totalRecovered + '</p>' +
                '<p>New Confirmed Today: ' + data.new_cases + '</p>' +
                '<p>New Recovered Today: ' + data.new_recovered + '</p>';
            $("#covid-stats").html(html);
        }
    });
});
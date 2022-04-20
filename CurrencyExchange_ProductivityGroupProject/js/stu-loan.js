//This Web Application was developed by Parth Shah.
//For JavaScript Group Project


//getElementbyId function
var $ = function (id) {
return document.getElementById(id);
};

//calculate function
function calcint() {
                 //validations
                    if ($("amt").value == null || $("amt").value.length == 0) {
                        $("e1").innerHTML = "Amount is missing.";
                     } else {
                         $("e1").innerHTML = "";
                     }

                    if($("timemo").value == null || $("timemo").value.length == 0)  {
                        $("e3").innerHTML = "Time period is missing.";
                    } else {
                        $("e3").innerHTML = "";
                    }

                     if($("int").value == null || $("int").value.length == 0) {
                         $("e2").innerHTML = "Rate is missing."
                     } else {
                         $("e2").innerHTML = "";
                         
                         //caculating monthly payments code
                         var amt = $("amt").value;
                         var timemo  = $("timemo").value;
                         var int   = $("int").value / 1200;
                         
                         //logic for monthly amount calculation
                         var monthlyin = (amt * int / (1 - (Math.pow(1/(1 + int), timemo)))).toFixed(2);
                         $("monthlyin").value = "$" + monthlyin;
                    }

}

//reset button
function resetbtn(){
    $("e1").innerHTML = " ";
    $("e2").innerHTML = " ";
    $("e3").innerHTML = " ";
}
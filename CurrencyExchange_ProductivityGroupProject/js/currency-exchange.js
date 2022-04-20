/**
This Web Application was developed by Meshwa Patel.
For JavaScript Group Project
*/
$(document).ready(function() {
//    Set Indian Rupee and Canadian Dollar as default currencies
    var fromCurrency = "INR";
    var toCurrency = "CAD";
    var exchangeRate;

    var currencyCode = fromCurrency + "_" + toCurrency;
    var url = "https://free.currconv.com/api/v7/convert?q=" + currencyCode + "&compact=ultra&apiKey=453fb82c23cb68130dfc";

    function callAPI() {
//        Make an ajax API call to get current exchange rate
        $.ajax({
            type: "get",
            url: url,
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                exchangeRate = data[currencyCode];
            }
      });
    }

//    Get the default curriecies exchange rate
    callAPI();

//    Set currency of home currency of the user
    $("#from-currency").change(function() {
        fromCurrency = $("#from-currency").val();
        currencyCode = fromCurrency + "_" + toCurrency;
        url = "https://free.currconv.com/api/v7/convert?q=" + currencyCode + "&compact=ultra&apiKey=453fb82c23cb68130dfc";
        $("#from-currency-value").val("");
        $("#to-currency-value").val("");
        $("#from-currency-value").focus();
        callAPI();
    });

//    On typing, paste and change the value of CAD is calculated
    $("#from-currency-value").on("keyup paste change", function() {
        var value = $("#from-currency-value").val();
        $("#to-currency-value").val(value * exchangeRate);
    });

    $("#from-currency-value").focus();
});
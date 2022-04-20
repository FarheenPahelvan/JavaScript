function coins(cents){
    this.cents = cents;
    
    this.isValid = function(){
        return !(isNaN(cents) || cents < 0 || cents > 99);
    }

    this.getNumber = function(divisor){
        var i = Math.floor(cents/divisor);
        cents = cents - i * divisor;
        return i;
    }
}
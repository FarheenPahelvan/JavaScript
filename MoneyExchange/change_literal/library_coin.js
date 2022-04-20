"use strict";

    var coins={
        cents:"",
        
        isValid :function(){
        if (isNaN(this.cents) || this.cents < 0 || this.cents > 99) {
            return false;
        }
        else{
            return true;
        }
    },

        getNumber :function(divisor){
            var coins=this.cents/divisor;
            if(this.cents>0){
                 this.cents = this.cents % divisor;
            }
           
            return Math.floor(coins);
        }
    };
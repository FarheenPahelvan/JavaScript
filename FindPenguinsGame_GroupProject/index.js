
var Score = 0;
$(document).ready( function(){

    $("#yeti").on("click",function() {
        $('#yeti').css('background', 'url(images/yeti.png)');
        alert("Opppsss, Yeti Ate YOU !");
    });

      var audio1 = document.getElementById("audioID")

      function playAudio() {
        audio1.play();
        audio2.play();
      }
       
    var Highest_Score=0;
          function high() {
              Score += 1;
              HS();
              document.getElementById("Score").innerHTML = Score;
          };

    function HS(){
        if(Score>=Highest_Score){
        	Highest_Score = Score;
            document.getElementById("Highest_Score").innerHTML = Highest_Score;
        }
    }

      $('[id^=pngn]').each(function (i,e){
           		e.onclick=(function(t){
      			if (e.isclicked!="1"){
      				high();
      				$(e).css('background', 'url(images/pngn'+e.id.slice(-1)+'.png)');
      			}
      			e.isclicked="1";
      		});
      	 });
});

    function reset() {
        Score =0 ;
              document.getElementById("Score").innerHTML = Score;
 
        $('[id^=pngn]').each(function (i,e){
            e.isclicked="0";
          $(e).css('background', 'url(images/mound_1.png)');
          $('#yeti').css('background', 'url(images/mound_1.png)');
        });
          
        var parent = $("#gameContainer");
            var divs = parent.children();
                while (divs.length) {
                    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
            }

              }













function reset(){
      $('#tekst1').hide();
	  $('#tekst2').hide();
	  $('#guzik').hide();
	  $('#guzik2').hide();
	  $('#wynik').hide();
	  $('#opisZad').show();
}


$("#z1").click(function(){
	
	   document.getElementById("polecenie").innerHTML = "Podaj 2 liczby (pierwsza mniejsza od drugiej)";
	   document.getElementById("guzik").innerHTML = "Oblicz";
	   reset();
	   $('#tekst1').show();
	   $('#tekst2').show();
	   $('#guzik').show();
	   $("#guzik").click(function(){
	   
	   
	   var liczba1 = parseInt(document.getElementById("tekst1").value);
	   var liczba2 = parseInt(document.getElementById("tekst2").value);
	   var liczba3 = "";
	   
	   if(liczba1 >= liczba2){
	   document.getElementById("wynik").innerHTML = "Podane złe wartości";
	   }
	   
	   else {
	   for(i=liczba1; i<=liczba2; i++)
	   {
	   liczba3 = liczba3 + i + " ";
	   }
	   document.getElementById("wynik").innerHTML = liczba3;
	   }
	   $('#wynik').show();
	   
	   });
	});
    
	
	
$("#z2").click(function currentTime(){
   
   
    document.getElementById("polecenie").innerHTML = "Aktualna godzina";
	reset();
	  
	  
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("wynik").innerText = hour + " : " + min + " : " + sec;
    $('#wynik').show();
	
    });
	

    function updateTime(k) {
       if (k < 10) {
        return "0" + k;
       }
    else {
       return k;
    }
}
	
   
   
   
   
	
	
   $("#z3").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Tło zmienione";
   
 
   
   $('body').css('background', losujKolor() );
  
   
   });
   
   
   
   
   
   
   
   
   
   
   
   
   
   function losujKolor(){
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
   }
   
   
   
   
   
   
   
   
   $("#z4").click(function(){
   
   reset();
   
   document.getElementById("polecenie").innerHTML = "Powiadomienie włączone";
   
   alert("Buuuuuuuu!")});
   
   
   
   
   $("#z5").click(function(){
   
   reset();
   
   document.getElementById("polecenie").innerHTML = "Czcionka zwiększona";
   
   var size = $('body').css('font-size');
   $('body').css('font-size', parseInt(size)+2)});
   
   
      
   
   $("#z6").click(function(){
   
   reset();
   
   document.getElementById("polecenie").innerHTML = "Czcionka zmniejszona";
   
   var size = $('body').css('font-size');
   $('body').css('font-size', parseInt(size)-2)});
   
   
   
   
   
   $("#z7").click(function(){
   
   reset();
   
   document.getElementById("polecenie").innerHTML = "Reklama włączona";
   $('#reklama').show();
   
   
   
   
   
   });
   
   
   
   
   
   
   
   
   
   $("#z8").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Pozdrowienia włączone";
   
   
   config='toolbar=no,location=no,directories=no,status=no,menubar=no,width=200,height=170'
   config += 'scrollbars=no,resizable=no'
   pop = window.open ("","pop",config)
   pop.document.write('<script language="javascript">');
   pop.document.write('setTimeout("self.close()",3000)');
   pop.document.write('</');
   pop.document.write('script>');
   pop.document.write('<body bgcolor=#fffef4>');
   pop.document.write('<center><b><h1>Witaj</h2></b></center>');
   pop.document.write('<center><b><h4><font color="#0f0f0f">Życzę miłego dnia</font></h3></b></center>');
   pop.document.write('<center><h5>okienko zamknie się za chwilę samo...</h5></center>');
   pop.document.write('</body>');

});



   
   
   $("#z9").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Zmiana wykonana";
   
   let x = document.getElementsByClassName("btn-purple");
   x[0].innerHTML = "W"; 
   x[1].innerHTML = "i"; 
   x[2].innerHTML = "t"; 
   x[3].innerHTML = "a"; 
   x[4].innerHTML = "m"; 
});




      
   
   $("#z10").click(function(){
   reset();
   document.getElementById("polecenie").innerHTML = "Zad2 przesunięte";
   document.getElementById("layzad1").className = "col-md-8 col-xl-6"; 
   
});

   
   
   
   

   
   $("#z11").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Ramki przekolorowane";
   
   var x = document.getElementsByClassName("card");
   for (i = 0; i < x.length; i++) {
     x[i].style.backgroundColor = "#e0ffff";
	 
   }
});

   
   
 
   
   
   $("#z12").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Ramki wyłączone";
   
    var v = document.getElementsByClassName("card");
	for (i = 0; i < v.length; i++) {
     v[i].className += " border-0";
	 
   }
	
	
   
});

   
    
   
   
   $("#z13").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Wysrodkowanie zakończone";
   
    var v = document.getElementsByClassName("card");
	
	
	for (i = 0; i < v.length; i++) {
     v[i].className += " text-center";
	 
   }
	
});


    
   
   
   $("#z14").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Przyciski menu wyłączone";
   
    var v = document.getElementsByClassName("btn-rounded");
	
	
	for (i = 0; i < v.length; i++) {
     v[i].className += " disabled";
	 
   }
	
});





   $("#z15").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Goń przycisk";
   
    $("#z15").css({
                left:(Math.random()*60)+"px",
                top:(Math.random()*60)+"px",
            });
	
   
   });




   $("#z16").click(function(){
   reset();
   location.reload(true);
   });






   $("#z17").click(function(){
   reset();
   document.getElementById("polecenie").innerHTML = "Czcionka zmieniona";
   $('body').css('font-family', 'Montserrat');
   });




   
   
   $("#z18").click(function(){
   
   var n = 0;
   reset();
   document.getElementById("polecenie").innerHTML = "Klikaj!";
   
   $('#guzik2').show();
   $("#guzik2").click(function(){
   n++;
   if(n < 6) document.getElementById("polecenie").innerHTML = "Klikaj! Wynik - " + n;
   else if(n >=6 && n<20) document.getElementById("polecenie").innerHTML = "Dobrze Ci idzie! Wynik - " + n;
   else  document.getElementById("polecenie").innerHTML = "Idziesz na rekord! Wynik - " + n;
   });
   
   
   });



 $("#z19").click(function(){
   
   reset();
   document.getElementById("polecenie").innerHTML = "Ciemny motyw włączony";
   document.body.className = 'bg-dark text-white';
   
   var z = document.getElementsByClassName('card');
   var w = document.getElementsByClassName('list-group-item');
   for (i = 0; i < z.length ; i++) {
     z[i].className += " bg-secondary"; 
   }
   for (i = 0; i < w.length ; i++) {
     w[i].className += " bg-secondary"; 
   }
   
   
   
   });


  



$("#z20").click(function(){
$('#z20').hide();
});



var przeszkoda = document.getElementById("przeszkoda");
var dziura = document.getElementById("dziura");
var model = document.getElementById("postac");
var skacz = 0;
var ostatniWynik = 0;

var wynik = 0;

dziura.addEventListener("animationiteration", () =>{ 

	var losuj = Math.random()*3;
	var top = (losuj *37)+90;
	dziura.style.top = -(top) + "px";
	wynik = wynik + 1;
	document.getElementById("wynik4").innerHTML ="Best score: " + ostatniWynik + " Score: " + wynik;
	
}); 

setInterval(function(){
	
	var wysokosc = parseInt(window.getComputedStyle(model).getPropertyValue("top"));
	if(skacz == 0){
		model.style.top = (wysokosc+1)+"px";
	}

	var przeszkodaZ = parseInt(window.getComputedStyle(przeszkoda).getPropertyValue("left"));
	var dziuraW = parseInt(window.getComputedStyle(dziura).getPropertyValue("top"));

	console.log("przeszkodaZ " + przeszkodaZ);
	var modWys = -(199-wysokosc);


	console.log("wysokosc ( model top) - " + wysokosc);
	console.log("przeszkodaZ ( przeszkoda lewo) - " + przeszkodaZ);
	console.log("modWys ( wysokosc - 199) - " + modWys);
	console.log("dziuraW ( dziura top) - " + dziuraW);
	

	




if((wysokosc>229||wysokosc<55) || ((przeszkodaZ < 36) && (przeszkodaZ > -14)) &&(( modWys<dziuraW+53)||( modWys>dziuraW+120)  ))
	{
		
		if(wynik > ostatniWynik){
		    ostatniWynik = String(wynik);
		}
		document.getElementById("wynik4").innerHTML ="Best score: " + ostatniWynik + " Score: 0";
		model.style.top = 100 + "px";
		wynik = 0;

	}
},10);


function skok(){
	skacz = 1;
	var skokLicz = 0;
	var skokInt = setInterval(function(){
		var wysokosc = parseInt(window.getComputedStyle(model).getPropertyValue("top"));
		if((wysokosc>10)&&(skokLicz<15)){
			model.style.top = (wysokosc-2)+"px";

		}

		if(skokLicz>20){
			clearInterval(skokInt);
			skacz = 0;
			skokLicz=0;
		}
		skokLicz++;
	},10);
}






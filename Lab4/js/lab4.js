var przeszkoda = document.getElementById("przeszkoda");
var dziura = document.getElementById("dziura");
var model = document.getElementById("postac");
var skacz = 0;
var ostatniWynik = 0;

var wynik = 0;

dziura.addEventListener("animationiteration", () =>{ 

	var losuj = Math.random()*3;//
	var top = (losuj *37)+90;// losuj liczbę między 90 a 201 ( zakres wystąpienia górnej części "białej" krawędzi)
	dziura.style.top = -(top) + "px"; // wygenerowanie nowej wysokości luki do przelotu
	wynik = wynik + 1; // jeżeli generuje się nowa przeszkoda (stara w tym momencie znika) -> +1 do wyniku
	document.getElementById("wynik4").innerHTML ="Best score: " + ostatniWynik + " Score: " + wynik;// wyświetlanie wyniku
	
}); 

setInterval(function(){
	
	var wysokosc = parseInt(window.getComputedStyle(model).getPropertyValue("top")); // wysokość związana z górnym punktem modelu
	if(skacz == 0){ 
		model.style.top = (wysokosc+1)+"px"; // grawitacja, jeżeli skok nie jest aktywny, zniżaj model o 1 piksel co 10 ms
	}

	var przeszkodaZ = parseInt(window.getComputedStyle(przeszkoda).getPropertyValue("left"));   //lewa krawędź przeszkody
	var dziuraW = parseInt(window.getComputedStyle(dziura).getPropertyValue("top"));// górna krawędź "luki"
	var modWys = -(199-wysokosc); //zamieniona wysokość względem odwrotnego punktu odniesienia


if((wysokosc>229||wysokosc<55) || ((przeszkodaZ < 36) && (przeszkodaZ > -14)) &&(( modWys<dziuraW+53)||( modWys>dziuraW+120)  )) //wykrywanie kolizji - przegrana jeśli:
																																 // 1. (wysokosc>229||wysokosc<55)  - granica górnej lub dolnej ramki
																																 // 2. (przeszkodaZ < 36) && (przeszkodaZ > -14)   - szerokość przeszkody
																																 // &
																																 // ( modWys<dziuraW+53) - kolizja związana z "górną częścią"
																																 // ||
																																 // ( modWys>dziuraW+120) - kolizja związana z "dolną częścią"
	{
		
		if(wynik > ostatniWynik){
		    ostatniWynik = String(wynik); //nadpisanie najlepszego wyniku
		}
		document.getElementById("wynik4").innerHTML ="Best score: " + ostatniWynik + " Score: 0";
		model.style.top = 100 + "px"; //reset postaci
		wynik = 0;

	}
},10);

function skok(){
	skacz = 1; //skok aktywny (do grawitacji)
	var skokLicz = 0;
	var skokInt = setInterval(function(){
		var wysokosc = parseInt(window.getComputedStyle(model).getPropertyValue("top"));
		if((wysokosc>10)&&(skokLicz<15)){
			model.style.top = (wysokosc-2)+"px"; //skok o 2 pixele do góry

		}

		if(skokLicz>20){
			clearInterval(skokInt);
			skacz = 0;
			skokLicz=0;
		}
		skokLicz++;
	},10);
}






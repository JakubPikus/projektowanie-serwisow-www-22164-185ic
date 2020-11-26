
//<!-- 1 - click -->


function klik(){
	var tekst = document.getElementById("3zad1");
	document.getElementById("wynik3z1").innerHTML = zwracanie(tekst);
}


//<!-- 2 - copy -->


function kopiowanie(){
	alert("Skopiowano tekst");
}

//<!-- 3 - keydown -->





function potega() {

	if(parseInt(document.getElementById("3zad21").value,10) < 10 && parseInt(document.getElementById("3zad22").value,10) < 10 && event.keyCode==40){

		var text1 = parseInt(document.getElementById("3zad21").value,10);
		var text2 = parseInt(document.getElementById("3zad22").value,10);

	    
		if(text2 == 0 || text1 == 1){
			document.getElementById("wynik3z2").innerHTML = 1;
		}
		

		else if(text1 != 0 && text2 != 0){
		    var max = text2;
		    var tablica = new Array(max);
		    for(var i = 0;i < Math.pow(text1,text2-1);i++ ){
				tablica[i] = text1;
			}
	        document.getElementById("wynik3z2").innerHTML = sumowanieTablicy(tablica);
		}


		else if(text1 == 0){
			document.getElementById("wynik3z2").innerHTML = 0;
	    }
	    
	}


	if ((parseInt(document.getElementById("3zad21").value,10) >= 10 || parseInt(document.getElementById("3zad22").value,10) >= 10) && event.keyCode==40){
		document.getElementById("wynik3z2").innerHTML = "Zła wartość";
	}
}







//<!-- 4 - change -->


function zmianaTekstu(){
	var zdanie = document.getElementById("3zad3").value;
	document.getElementById("3zad3").value = duzeLitery(zdanie);
	console.log("Zad 3 - przed - " + zdanie);
	console.log("      -   po  - " + duzeLitery(zdanie));
}


//<!-- 5 - input -->

function zmianaLive(){
	var zdanie = document.getElementById("3zad3").value;
	document.getElementById("3zad3wynik").innerHTML = duzeLitery(zdanie);
}
	

//<!-- 6 - ended -->



function wylaczPlayer(){
	alert("Player zostanie wyłączony");
	$('#player').hide();
}

function wlaczPlayer(){
	$('#player').show();
}


//<!-- 7 - contextmenu -->




function zadAla(){
	var imie = document.getElementById("3zad51").value;
	var miesiac = document.getElementById("3zad52").value;
	console.log("Zad 5 - " + coRobisz(imie,miesiac));
	document.getElementById("3zad5wynik").innerHTML = coRobisz(imie,miesiac);
}


//<!-- 8 - keyup -->



function ileKobiet(){

	const users = [
		"Ania Nowak",
		"Piotr Kowalski",
		"Bartek Kosecki",
		"Natalia Nowak",
		"Weronika Piotrowska",
		"Agata Beatczak",
		"Tomasz Nowak",
		"Mateusz Kowalski",
		"Marcin Kotecki",
		"Beata Lecka",
		"Katarzyna Melecka"
	]

	

	if(event.keyCode==38)

	document.getElementById("3zad9wynik").innerHTML = "Liczba kobiet - " + countWomanInTable(users);
	
}


//<!-- 9 - cut -->

function cut(){
	alert("Imię zostało skradzione");
}


//<!-- 10 - mousedown -->

function zmianaKoloru(){
	document.getElementById("3z4").style.color = "red";
}


//<!----------------------------------------------------------->




function czyLiczby(){
	var liczba1 = document.getElementById("3zad41").value;
	var liczba2 = document.getElementById("3zad42").value;
	document.getElementById("3zad4wynik").innerHTML = mnozenie(liczba1,liczba2);
	console.log("Zad 4 - " + mnozenie(liczba1,liczba2));
	
}

function uporzadkowanieImion(){

	const imionaPrzed = document.getElementById("3zad61").value;
	var znak = document.getElementById("3zad62").value; 
    document.getElementById("3zad6wynik").innerHTML = sortowanie(imionaPrzed,znak);
	console.log("Zad 6 - " + sortowanie(imionaPrzed,znak));


}


function tablicaDuze(){
	const imiona = document.getElementById("3zad7").value;
	const imionaTab = imiona.split(',');

	console.log("Zad 7 - Duze - ");
	console.log(podniesLitery(imionaTab));
	document.getElementById("3zad7wynik").innerHTML = podniesLitery(imionaTab);
	
}




function tablicaMix(){
	const imiona = document.getElementById("3zad7").value;
	const imionaTab = imiona.split(',');
	console.log("Zad 7 -  Mix - ");
	console.log(mieszajLitery(imionaTab));
	document.getElementById("3zad7wynik").innerHTML = mieszajLitery(imionaTab);
}

function plec(){
	const imie = document.getElementById("3zad8").value;
	document.getElementById("3zad8wynik").innerHTML = checkFemale(imie);
	console.log("Zad 8 - " + imie);
	console.log(checkFemale(imie));

}

function rozwin(x){
	
	var lista = document.getElementById('row' + String(x));
    if (lista.style.display == 'none') {
		lista.style.display = 'block';
		document.getElementById('icon' + String(x)).src ='scr/buttons/arrowUp.png';
		
    } else {
		lista.style.display = 'none';
		document.getElementById('icon' + String(x)).src='scr/buttons/arrowDown.png';
	}
	
}



document.getElementById("3z4").addEventListener("click", czyLiczby);
document.getElementById("3z6").addEventListener("click", uporzadkowanieImion);
document.getElementById("3z71").addEventListener("click", tablicaDuze);
document.getElementById("3z72").addEventListener("click", tablicaMix);
document.getElementById("3z8").addEventListener("click", plec);
document.getElementById("z21").addEventListener("click", wlaczPlayer);



document.getElementById("3z4").addEventListener("mousedown", zmianaKoloru);
window.addEventListener("keyup", ileKobiet);
document.getElementById("3zad8").addEventListener("cut", cut);
document.getElementById("3z5").addEventListener("contextmenu", zadAla);
document.getElementById("player").addEventListener("ended", wylaczPlayer);
document.getElementById("3zad3").addEventListener("input", zmianaLive);
document.getElementById("3zad3").addEventListener("change", zmianaTekstu);
document.getElementById("wynik3z2").addEventListener("copy", kopiowanie); 
document.getElementById("3z1").addEventListener("click", klik); 
window.addEventListener("keydown", potega);



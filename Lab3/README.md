# Lab3





<h3>Jakub Pikus</h3>
<h3>185IC_B1</h3>
<h3>22164</h3>


# index.html

<img src="zrzuty/index.png" alt="index"  style="float: left;" />

<p>Plik index.html został uzupełniony o dodatkową kartę z zadaniami</p>

<p>Wszystkie zadania wywoływane są przez EventListener</p>





# Zadania


<h3>Zad 1.</h3>

<p>Napisz funkcję, która przyjmie jeden parametr - dowolny tekst. <br><br>Funkcja niech ZWRACA tekst Liczba liter: .... gdzie .... to liczba liter tekstu. Wynik jej użycia wypisz w konsoli za pomocą console.info()</p>
<br>


function zwracanie(n) {

	var answer = "Liczba liter: " + n.value.length;
	console.log("Zad 1 - ");
	console.log(answer);
	return answer;
}

<br>
<img src="zrzuty/zad1.png" alt="zad1" style="float: left;" />
<br>
<p>1. EventListener - click</p>
<br><br>


<h3>Zad 2.</h3>

<p>Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę. Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.</p>
<br>


function sumowanieTablicy(tablica) {

	var suma = 0;

	for(i = 0; i < tablica.length; i++){
		suma = suma + Number(tablica[i]);
	}
	console.log("Zad 2 - " + suma);
	return suma;
}

<br>
<img src="zrzuty/zad2.png" alt="zad2" style="float: left;" />
<br>
<p>2. EventListener - keydown<br>3. EventListener - copy</p>
<img src="zrzuty/copy.png" alt="copy" style="float: left;" />
<br><br>




<h3>Zad 3.</h3>

<p>Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:<br>

input -> Ala ma kota<br>
output -> AlA Ma kOtA<br>
Dla ułatwienia spacje liczmy jako literę.</p>
<br>


function duzeLitery(w){
	
	var zdanieTablica = w.split('',w.length);
	var gotowe= "";
	for(i = 0; i < w.length;i++){

	  if(i % 2 == 0){
		zdanieTablica[i] = zdanieTablica[i].toUpperCase();
	  }
	  gotowe += zdanieTablica[i];
	}
	
	return gotowe;
}

<br>
<img src="zrzuty/zad3.png" alt="zad3" style="float: left;" />
<br>
<p>4. EventListener - input<br>5. EventListener - change</p>
<br><br>


<h3>Zad 4.</h3>

<p>Napisz funkcje, która będzie wymagać 2 atrybutów. Funkcja niech sprawdza, czy oba atrybuty są liczbami. Funkcja ma zwracać iloczyn (*) obu liczb. Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.</p>
<br>


function mnozenie(a,b){

	var wartosc1 = parseInt(a);
	var wartosc2 = parseInt(b);

	if(isNaN(wartosc1) || isNaN(wartosc2) ){
		return false;
	}
	else return wartosc1*wartosc2;
}

<br>
<img src="zrzuty/zad4.png" alt="zad4" style="float: left;" />
<br>
<p>6. EventListener - mousedown</p>


<br><br>



<h3>Zad 5.</h3>

<p>Napisz funkcje, która przyjmuje 2 parametry:<br>

imię - np: Ala<br>
miesiac - np: styczen<br>
Funkcja ma zwracac:<br>

jezeli miesiac to grudzien, styczen, luty: "Ala jezdzi na sankach"<br>
jezeli miesiac to marzec, kwiecien, maj: "Ala chodzi po kaluzach"<br>
jezeli miesiac to czerwiec, lipiec, sierpien: "Ala sie opala"<br>
jezeli miesiac to wrzesien, pazdziernik, listopad: "Ala zbiera liscie"<br>
Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.<br>

Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami. Jeżeli miesiac jest "innym słowem", funkcja niech zwraca "Ala uczy się JS"</p>
<br>


function coRobisz(a,b){

	if(b =='grudzien' || b =='styczen' ||b =='luty'){
		return a + " jezdzi na sankach";
	}

	else if(b =='marzec' || b =='kwiecien' ||b =='maj'){
		return a + " chodzi po kaluzach";
	}

	else if(b =='czerwiec' || b =='lipiec' ||b =='sierpien'){
		return a + " sie opala";
	}

	else if(b =='wrzesien' || b =='pazdziernik' ||b =='listopad'){
		return a + " zbiera liscie";
	}

	else {
		return a + " uczy się JS";
	}
}

<br>
<img src="zrzuty/zad5.png" alt="zad5" style="float: left;" />
<br>
<p>7. EventListener - contextmenu</p>
<br><br>


<h3>Zad 6.</h3>

<p>Mamy przykładowy tekst:<br><br><br>

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";<br>
Napisz funkcję, która przyjmie 2 atrybuty:<br>

- tekst<br>
- znak rozdziału (np. |)<br><br>
Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać<br> tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału.<br> Skorzystaj tutaj z innej odpowiedniej metody js.<br>

input -> "Ania|Marcin|Bartek" <br>output -> "Ania|Bartek|Marcin"<br>

Wywołaj tę funkcję przekazując do niej str z początku zadania</p>
<br>


function sortowanie(a,b){

	const tab = a.split(b);
	var tablicaNowa = tab.sort();
	return tablicaNowa.join([separator = b])

}

<br>
<img src="zrzuty/zad6.png" alt="zad6" style="float: left;" />
<br>
<br><br>


<h3>Zad 7.</h3>

<p>Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.<br>

Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.<br>

input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]<br><br>
output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]<br>
output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]</p>
<br>


function podniesLitery(tekst){
	
	var duzaTablica = tekst.map(imie => imie.toUpperCase());
	return duzaTablica;
}



function mieszajLitery(tab){

	
	var ciagElementow = tab.join();
	var ciagLiter = [...ciagElementow];
	ciagZmieniony = '';

	for(i = 0; i < ciagLiter.length;i++){

	  if(i % 2 == 0){
		ciagLiter[i] = ciagLiter[i].toUpperCase();
	  }
	  ciagZmieniony += ciagLiter[i];
	}
	var wymieszanaTablica = ciagZmieniony.split(',');

	
	return wymieszanaTablica
	
}

<br>
<img src="zrzuty/zad7.png" alt="zad7" style="float: left;" />
<br>
<br><br>


<h3>Zad 8.</h3>

<p>Napisz funkcję checkFemale, która sprawdza przekazane do niej imię. <br>Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a" to jest to żeńskie imię, w przeciwnym wypadku męskie. Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie. Przykładowo:<br><br>

checkFemale("Ania") === true<br>
checkFemale("Marcin") === false</p>
<br>


function checkFemale(n){

	var ciagLiter = [...n];
	if(ciagLiter[ciagLiter.length - 1] == "a"){
		return true
	}
	else{
		return false
	}
}

<br>
<img src="zrzuty/zad8.png" alt="zad8" style="float: left;" />
<br>
<p>8. EventListener - cut</p>
<img src="zrzuty/cut.png" alt="cut" style="float: left;" />
<br><br>


<h3>Zad 9.</h3>

<p>Napisz funkcję countWomanInTable(arr), do której przekażesz tablicę userów, którą masz poniżej. Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet. Wykorzystaj tutaj funkcję z poprzedniego zadania. Jak pobrać imię z usera? Możesz to osiągnąć za pomocą metody split(). Podziel string na 2 części - uzyskasz tablicę 2 elementów. Pierwszy to imię, drugi to nazwisko<br>

const users = [<br>
    "Ania Nowak",<br>
    "Piotr Kowalski",<br>
    "Bartek Kosecki",<br>
    "Natalia Nowak",<br>
    "Weronika Piotrowska",<br>
    "Agata Beatczak",<br>
    "Tomasz Nowak",<br>
    "Mateusz Kowalski",<br>
    "Marcin Kotecki",<br>
    "Betata Lecka",<br>
    "Katarzyna Melecka"<br>
]</p>
<br>


function countWomanInTable(arr){

	var licz = 0;

	for(i = 0; i < arr.length;i ++ ){
		arr[i] = arr[i].split(" ");
		if( checkFemale(arr[i][0]) ){
			licz = licz + 1;

		}
	}

		console.log("Zad 9 - " + licz);
		return licz
}

<br>
<img src="zrzuty/zad9.png" alt="zad9" style="float: left;" />
<br>
<p> 9. EventListener - keyup</p>




<h3>10. EventListener - ended</h3>
<img src="zrzuty/ended.png" alt="ended" style="float: left;" />

<p> Następuje wyłączenie playera po zakończeniu piosenki.</p>







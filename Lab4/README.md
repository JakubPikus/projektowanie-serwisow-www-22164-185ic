# Lab4





<h3>Jakub Pikus</h3>
<h3>185IC_B1</h3>
<h3>22164</h3>


# Flappy Bird

<img src="zrzuty/gra.png" alt="gra"  style="float: left;" />

<p>Plik index.html został uzupełniony o dodatkową kartę z grą</p>

<p>Gra polega na przelatywaniu ptaszka przez luki </p>

<p>Funkcje zostały dokładnie opisane w skrypcie</p>


# Działanie gry


<p>Przeszkoda to 2 divy, 1 generujący się regularnie po całej wysokości ramki, drugi jest narzucony na niego w kolorze białym.
Animacja ich jest zapisana w pliku style.css. Generowanie kolejnych luk polega na wylosowaniu liczby w dziedzinie <90;201> (minimalna wartość
to wysokość luki, ponieważ punkt odniesienia leży w górnej jej krawędzi; najwieksza wartosc to górna granica ramki).</p>
  
  
<p> Skaczemy lewym przyciskiem myszy, wtedy wartość "skacz" zmienia się z 0 na 1 (potrzebne do grawitacji), a sam model zostanie przesunięty
do góry. Jeżeli skok nie jest aktywny, model spada o 1 piksel do dołu co 10 ms.</p>


<p> Kolizje możemy podzielić na 2 kategorie:<br>
1 - jeśli model dotyka górnej/dolnej krawędzi ramki gry -    "(wysokosc>229||wysokosc<55)"<br>
  lub<br>
2 - (szerokość przeszkody) * górna przeszkoda    lub    (szerokość przeszkody) * dolna przeszkoda
  </p>


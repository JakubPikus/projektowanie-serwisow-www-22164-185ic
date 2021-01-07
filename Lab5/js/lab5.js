var json = {

	"gra":{
		"nazwa": "Cyberpunk 2077",
		"wydawca": "CD Projekt RED",
		"typ": "RPG",
		"pegi": 18,
		"konsole": {
			"xbox": [
				{
					"model": "One",
					"cena": 150,
					"ocena": 58,
				},
				{
					"model": "X/S",
					"cena": 220,
					"ocena": 83,
				},
			],
			"playstation": [
				{
					"model": "PS4",
					"cena": 160,
					"ocena": 61,
				},
				{
					"model": "PS5",
					"cena": 240,
					"ocena": 88,
				}
			]
		}
	}
}

console.log(json);

//Zad1

//task1


function dodawanieLiczb(a, b, fn){
	const suma = a + b;
	fn(suma);
}


dodawanieLiczb(json.gra.konsole.playstation[0].cena, json.gra.konsole.xbox[0].cena, function(wynik){
	console.log("Zad 1 - Task 1 - Obie gry na starą generację konsol kosztują " + wynik + " zł");
});

//task2


function stworzLancuchZnakowy(a, b, fn){
	const nazwaGry = a;
	const nazwaWydawcy = b;
	const zdanie = `Zad 1 - Task 2 - Grę ${nazwaGry} wydał ${nazwaWydawcy}`
	fn(zdanie);
}

stworzLancuchZnakowy(json.gra.nazwa, json.gra.wydawca, function(gra){
console.log(gra);
});


//Zad2
//task1

const posty = fetch('https://jsonplaceholder.typicode.com/posts');

function getPost(response) {
    return new Promise((resolve, reject) => {
        if (response !== 101) {
            resolve(response);
   
        } else {
            reject('Zad 2 - Task 1 - Błąd we wczytywaniu artykułu');
        }
    });
}

getPost(posty).then(response => response.json().then(function(data) {
		var mnozenie = data[10].id * data[15].id;
        console.log('Zad 2 - Task 1 - Mnożenie wynosi ' + mnozenie);
      }))
.catch(blad => console.log("Zad 2 - Task 1 - Błąd: ",blad))
.finally(() => console.log('Zad 2 - Task 1 - Done'));

//task2

const postyString = fetch('https://jsonplaceholder.typicode.com/posts');


function getPostString(response) {
    return new Promise((resolve, reject) => {
        if (response !== 101) {
            resolve(response);
   
        } else {
            reject('Zad 2 - Task 2 - Błąd we wczytywaniu artykułu');
        }
    });
}


getPostString(postyString).then(response => response.json().then(function(data) {
		var string = "Zad 2 - Task 2 - TYTUŁ - " + data[1].title + " TREŚĆ - " + data[2].body;
        console.log(string);
      }))
.catch(blad => console.log("Zad 2 - Task 2 - Błąd: ",blad))
.finally(() => console.log('Zad 2 - Task 2 - Done'));


//Zad3
//task 1
async function setPost(posty) {
    const article = await getPost(posty);
    console.log("Zad 3 - Task 1 - work");
}
setPost(posty);

//task 2
async function setPostString(posty_str) {
    const article = await getPostString(postyString);
    console.log("Zad 3 - Task 2 - work");
}
setPostString(postyString);


//Zad 4


let post2 = 'https://jsonplaceholder.typicode.com/posts/20';
        let req = new XMLHttpRequest();

        req.open('GET', post2);

        req.responseType = 'json';
        req.send();

        req.onload = function () {
            let responseObj = req.response;
            console.log("Zad 4 - Task 1 - Mnożenie liczb - " + (responseObj.userId * responseObj.id));
			console.log("Zad 4 - Task 2 - Dodawanie stringow - " + responseObj.title + responseObj.body);
			console.log("Zad 4 - Done!");
        };
        req.onerror = function () {
            console.log("Zad 4 - Błąd"); 
        }



//Zad 5

const post3 = fetch('https://jsonplaceholder.typicode.com/posts');

        post3.then(function (response) {
                    if (response.status !== 200) {
                        console.log('Zad 5 - Wystąpił błąd : ' + response.status);
                        return;
                    }

                    response.json().then(function (data) {
                        console.log('Zad 5 - Task 1 - Mnożenie liczb - ' + (data[2].id * data[7].id));
                        console.log('Zad 5 - Task 2 - Dodawanie stringow - ' + (data[3].title, data[9].title));

                    });
                }
            )
            .catch(function (blad) {
                console.log('Zad 5 - Błąd: ', blad);
            })


			.finally(() => console.log("Zad 5 - Done!"));





//Zad 6
axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                console.log("Zad 6 - Task 1 - Mnożenie liczb - " + (response.data[4].id * response.data[7].id));
                console.log("Zad 6 - Task 2 - Dodawanie stringow - " + response.data[7].title + response.data[56].title);
            })
            .catch(function (blad) {
                console.log("Zad 6 - Błąd: ", blad);
            })
            .finally(() => console.log('Zad 6 - Done!'));
			


	









// //Création de la promesse
// const maPromesse = new Promise((resolve, reject) => {
//         if (typeof users != undefined) {
//             resolve(users)
//         } else {
//             reject("Promesse non résolu !!!")
//         }
//     })
//     //Capter l'état de la promesse
// maPromesse.then((res) => {
//         let liste = `<ul>`
//         for (let util of res) {
//             liste += `<li>${util.name}</li>`
//         }
//         liste += `</ul>`
//         document.querySelector("#util").innerHTML += liste;


//     })
//     .catch((error) => { console.log(error) });

// // Construction de la promesse News
// const promesseNews = new Promise((resolve, reject) => {
//     if (typeof News != undefined) {
//         resolve(News)

//     } else {
//         reject("Acces a news impossible")
//     }
// })
// promesseNews.then(res => {
//     let actu = `<ul>`;
//     for (let i of News) {
//         actu += `<li>${i.title}</li>`
//         const elmtHtml = document.getElementById("act");
//         elmtHtml.innerHTML = actu
//     }
//     actu += `</ul>`
// })


// //Switch (Exemple)
// // let voitures = prompt("Veuillez choir la marque de voiture (Peugeo,Bmw,Twingo)").toLowerCase();

// // let km = prompt("Combien de km souhaiterez-vous faire ?");

// // let prix = {
// //     peugeot: 0.6,
// //     bmw: 0.7,
// //     twingot: 0.8
// // };
// // switch (voitures) {
// //     case "peugeot":
// //         {
// //             alert("le prix est de : " + prix.peugeot * km + "€")
// //         }
// //         break;
// //     case "bmw":
// //         {
// //             alert("le prix est de : " + prix.bmw * km + "€")
// //         }
// //         break;
// //     case "twingot":
// //         {
// //             alert("le prix est de : " + prix.twingot * km + "€")
// //         }
// //         break;
// //     default:
// //         {
// //             alert("Veuillez saisir une marque mentionnez ci dessus")
// //         }
// // }


// // const questions = [{
// //         question: "Quels sont les composants d'un burgur?\n 1.pain\n 2.mozart",
// //         reponse: 1
// //     },
// //     {
// //         question: "Quels sont les composants d'un pain?\n 1.pain\n 2.sel",
// //         reponse: 2
// //     },
// //     {
// //         question: "Quels sont les composants d'un thieb?\n 1.pain\n 2.thieb",
// //         reponse: 2
// //     }
// // ]

// // let nbrReponse = 0;
// // questions.forEach(el => {
// //     let repUser = prompt(el.question);
// //     if (repUser == el.reponse) {
// //         alert("Bonne réponse")
// //         nbrReponse += 1
// //     } else {
// //         alert("Mauvaise réponse")
// //     }
// // });

// // //Cas ou on aurait une bonne réponse
// // if (nbrReponse <= 1) {
// //     alert(`Vous avez ${nbrReponse} / ${questions.length} réponse`)
// // }
// // //Cas de plus d'une réponse
// // else {
// //     alert(`Vous avez ${nbrReponse} / ${questions.length} réponses`)
// // }
// console.log(innerWidth)
// console.log(document.documentURI + "le chemain de luri");
// const title = document.getElementById("title");
// //Récupére uniqment le texte
// console.log(title.innerText)

// console.log(title.textContent += "new tittle")

// let citation = document.getElementsByClassName("citation")
// console.log(citation[1])

// //Récupération par le nom de la balise
// let para = document.getElementsByTagName('p')
// console.log(para[0].innerText);

// let query = document.querySelectorAll(".citation")
// console.log(query[1].innerText)

// const a = document.querySelector("a")
// console.log(a.getAttribute("href"))
// a.setAttribute('href', 'https://www.weformyou.fr/')


// let p1 = document.querySelector("p");

// //Ajouter une classe css à un element html
// p1.classList.add("fondVert")
//     //Supprimer une classe css à un element html
// p1.classList.remove("fondVert")

// //Séléction des élements paires
// const elmtLi = document.querySelectorAll("ul li:nth-child(even)");
// //Ajout d'une classe à ces elmts
// elmtLi.forEach(coul => {
//     coul.classList.add("fondVert")
// })

// //Selection des classes impaires
// const elmtLiImp = document.querySelectorAll("ul li:nth-child(odd)");
// elmtLiImp.forEach(x => {
//     x.classList.add("chapitre")
// })

// //Tester la présence d'une classe avec classList.contains
// if (document.querySelector("li:nth-child(2)").classList.contains("fondVert")) {
//     console.log("la classe verte est affectée")
// }
// //Changer la classe d'une balise Html avec toggle (il effectue l'opération inverse que contient la balise)
// document.querySelector("p").classList.toggle("fondVert")

// //Déplacer un element de HTML avec appenchild
// document.querySelector("p").appendChild(document.querySelector("#title"))

// const premierTr = document.querySelector(" tbody tr");
// premierTr.addEventListener("click", function() {
//     this.classList.toggle("gris")
//     console.log(this)
// })


//------------------------------- Check List -----------------------------
// const check = `<span class="choix"><i class="fas fa-check"></i></span>`;

// const li = document.querySelectorAll("ul li");

// li.forEach(el => {
//     el.addEventListener("click", function() {
//         this.classList.toggle("active")
//         if (this.classList.contains("active")) {
//             this.innerHTML = this.innerText + check
//         } else {
//             this.innerHTML = this.innerText
//         }
//     })
// })

//--------------------------- Systeme d'onglets ----------------------------
// const onglet = document.querySelectorAll("ul li");
// onglet.forEach(el => {
//     el.addEventListener("click", function() {
//         const numTitle = this.getAttribute("data-title")
//             //On masque la div n1
//         document.querySelector("#container > div.active").classList.remove("active")
//             //On affiche à la place la div n2
//         document.querySelector("#texte" + numTitle).classList.add("active")
//             //On enleve le style par défaut de l'onglet n1
//         document.querySelector("#container ul li.active").classList.remove("active")
//             //On remet le style à l'onglet cliqué
//         this.classList.add("active")
//     })
// })

//------------------------------- Le temps en JS ------------------------------------
// const horloge = () => {
//     const date = new Date();
//     let heures = date.getHours()
//     let minutes = date.getMinutes()
//     let secondes = date.getSeconds()

//     if (secondes < 10) {
//         secondes = "0" + secondes
//     }
//     if (minutes < 10) {
//         minutes = "0" + minutes
//     }
//     let affichage = `<p><strong>${heures} : ${minutes} : ${secondes} </strong></p>`;
//     document.querySelector(".temps").innerHTML = affichage
// }
// setInterval(function() {
//     horloge()
// })
//----------------------------------Galerie photos dynamique ---------------------------------------
//On récupère toutes les photos
// const photos = document.querySelectorAll(".contener-photo img")


// //On masque toutes les autres images et on affichage la premiere d'ou i = 1
// for (let i = 1; i < photos.length; i++) {

//     photos[i].classList.add("hidden");
// }
// //On récupére le click de la fléche avant
// const btnAvant = document.getElementById("play-right");

// //J'unitialise une variable à 0 pour ensuite incrémenter à chaque cliqe
// let imgActive = 0;
// photos[imgActive].classList.add("show")
//     //on écoute le clique du btn
// btnAvant.addEventListener("click", function() {
//     next();
// })

// const next = function() {
//     photos[imgActive].classList.remove("show")
//     photos[imgActive].classList.add("hidden");
//     imgActive += 1;
//     if (imgActive >= photos.length) {
//         imgActive = 0
//     }
//     photos[imgActive].classList.remove("hidden")
//     setTimeout(() => { photos[imgActive].classList.add("show") }, 300)
// }


// //Quand on appuie sur le bouton arriere

// const btnArriere = document.getElementById("play-left");

// photos[imgActive].classList.add("show")
//     //on écoute le clique du btn
// btnArriere.addEventListener("click", function() {
//     retour();
// })

// const retour = function() {
//     photos[imgActive].classList.remove("show")
//     photos[imgActive].classList.add("hidden");
//     imgActive -= 1;
//     if (imgActive < 0) {
//         imgActive = photos.length - 1;
//     }
//     photos[imgActive].classList.remove("hidden")
//     setTimeout(() => { photos[imgActive].classList.add("show") }, 300)
// }

// //Clic sur le bouton play 
// let interval = "";
// //Ecoute du clic bouton play avec notre fonction next avec une intervale de temps de 2s
// document.getElementById("play").addEventListener("click", function() {
//         interval = setInterval(next, 1000)
//     })
//     //Ecoute du btn pause et on efface l'interval de temps
// document.getElementById("pause").addEventListener("click", function() {
//     clearInterval(interval)
// })

// //Avec les touches du clavier
// window.addEventListener("keydown", function(e) {
//     if (e.key == "ArrowRight") {
//         next()
//     }
// })
// window.addEventListener("keydown", function(e) {
//     if (e.key == "ArrowLeft") {
//         retour()
//     }
// })

// ------------------------------------------- RegExp -------------------------------------------------------------------
// const form = document.getElementById("loginform");
// // ------- control MAil --------
// form.email.addEventListener("change", function() {
//     validEmail(this)
// })
// let smal = form.email.nextElementSibling;

// const validEmail = function(inputEmail) {
//         let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (regexEmail.test(inputEmail.value)) {
//             smal.classList.remove("refus");
//             smal.classList.add("validate");
//             let valid = `<i class="fas fa-check-circle"></i>`
//             smal.innerHTML = valid
//             return true
//         } else {
//             smal.classList.add("validate");
//             smal.classList.add("refus");
//             let refus = `<i class="fas fa-check-circle"></i>`
//             smal.innerHTML = refus
//             return false
//         }
//     }
//  ------- control Password --------
// form.password.addEventListener("change", function() {
//     validPassword(this)
// })

// const validPassword = function(inputPassword) {
//         let msg
//         let val = false;
//         //Au moins 3 caracteres
//         if (inputPassword.value.length < 3) {
//             msg = "Le mot de passe doit contenir au moins 3 caracteres"
//         }
//         //Au mos 1 Maj
//         else if (!/[A-Z]/.test(inputPassword.value)) {
//             msg = "Le mot de passe doit contenir au moins 1 maj"

//         }
//         //Au Moins 1 miniscule
//         else if (!/[a-z]/.test(inputPassword.value)) {
//             msg = "Le mot de passe doit contenir au moins 1 min"

//         }
//         //Au moins un chiffre
//         else if (!/[0-9]/.test(inputPassword.value)) {
//             msg = "Le mot de passe doit contenir au moins 1 chiffre"

//         } else {
//             msg = "Le mot de passe est valide"
//             val = true

//         }
//         let smalPassword = form.password.nextElementSibling;
//         let valid = `<i class="fas fa-check-circle"></i>`
//         if (val) {
//             smalPassword.innerHTML = valid
//             smalPassword.classList.remove("mdpInvalid")
//             smalPassword.classList.add("mdpvalid")
//             return true
//         } else {
//             smalPassword.innerHTML = msg
//             smalPassword.classList.remove("mdpvalid")
//             smalPassword.classList.add("mdpInvalid")
//             return false
//         }
//     }
//--------------  Valider les infos avant envoie du form ------------
// form.addEventListener("submit", function(e) {
//     e.preventDefault()
//     if (validEmail(form.email) && validPassword(form.password)) {
//         form.submit()
//     } else {
//         alert("Veuillez bien saisir le formulaire")
//         window.location = "index.html"
//     }
// })



// const longestWord = (str) => {
//     const splitStr = str.split(' ');
//     const strLength = splitStr.map(string => string.length);
//     console.log(Math.max(...strLength));
// };
// let mot = "Js c'est top complexe"
// longestWord(mot)
// const longMot = function(s) {
//     let motSplite = s.split(" ")
//     let tab = []
//     for (let k = 0; k < motSplite.length; k++) {
//         tab.push(motSplite[k].length)
//     }
//     console.log(Math.max(...tab))


// }
// let mot = "Je suis nullllllllllccccccccccccccl"
// longMot(mot)

///////////////////////////////////////////  API METEO ////////////////////////////////////////////////
// const apiKey = "8c2c1dc972a910e174bdce770934f494";
// const appelApi = function(v) {

//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${v}&appid=${apiKey}&units=metric&lang=fr`;
//     fetch(url)
//         .then(
//             res => res.json()
//             .then(datas => {

//                 let town = document.getElementById("town")
//                 town.innerHTML = datas.name

//                 let temp = document.getElementById("temp")
//                 let icon = `<i class="fas fa-thermometer-three-quarters"></i>`
//                 temp.innerHTML = icon + datas.main.temp + "°"
//                 let vent = document.getElementById("vent")
//                 let iconVent = `<i class="fas fa-wind"></i>`
//                 vent.innerHTML = iconVent + datas.wind.speed + " KM/H"
//                 let humidity = document.getElementById("humidity")
//                 let iconHumidity = `<i class="fas fa-tint"></i>`
//                 humidity.innerHTML = iconHumidity + datas.main.humidity + " %";



//             })
//             .catch(err => {
//                 window.location = "index.html"
//             })

//         )
// }

// appelApi("paris")
// let form = document.getElementById("form-group")
// form.addEventListener("submit", function(e) {
//     e.preventDefault()
//     let inputUser = form.ville.value
//     let regexInput = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
//     if (regexInput.test(inputUser)) {
//         appelApi(inputUser)
//     }

// })

//------------------------------------------ Appel avec saisie de l'utilisateur ---------------------------
let pluie = `<i class="fas fa-cloud-rain"></i>`; // Rain
let nuage = `<i class="fas fa-cloud"></i>`; //Clouds
let clair = `<i class="fas fa-sun"></i>`; //Clear
let neige = `<i class="fas fa-snowflake"></i>`; // Snow
let brouillard = `<i class="fas fa-smog"></i>`; //mist
let pluieFine = `<i class="fas fa-cloud-showers-heavy"></i>`; //Drizzle
let apikey = "a14abbd0-3a47-11ec-84d7-03f1a2529588";
let apikeyMet = "8c2c1dc972a910e174bdce770934f494";

const main = async function(avecIp = true) {
    try {
        let ville
        if (avecIp) {
            const ip = await fetch("https://api.ipify.org?format=json")
                .then(res => res.json())
                .then(datas => datas.ip)
            ville = await fetch(`https://api.freegeoip.app/json/${ip}?apikey=a14abbd0-3a47-11ec-84d7-03f1a2529588`)
                .then(res => res.json())
                .then(datas => datas.city)
        } else {
            ville = document.getElementById("ville").textContent;

        }

        const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apikeyMet}&units=metric&lang=fr`)
            .then(res => res.json())
            .then(datas => datas)


        display(meteo)
    } catch (e) {
        alert("Veuillez saisir une ville correcte")
        window.location = "index.html"
    }


}
const display = function(data) {
    let temperature = data.main.temp;
    let conditions = data.weather[0].main;
    let descriptions = data.weather[0].description;
    document.getElementById("temperature").textContent = Math.round(temperature) + " C°";
    document.querySelector("h2 #descrip").textContent = descriptions;
    document.querySelector("body").classList.add(conditions.toLowerCase())
    if (conditions === "Rain") {

    } else if (conditions === "Rain") {
        document.getElementById("icone").innerHTML = pluie
    } else if (conditions === "Clouds") {
        document.getElementById("icone").innerHTML = nuage
    } else if (conditions === "Clear") {
        document.getElementById("icone").innerHTML = clair
    } else if (conditions === "Snow") {
        document.getElementById("icone").innerHTML = neige
    } else if (conditions === "Mist") {
        document.getElementById("icone").innerHTML = brouillard
    } else if (conditions === "Drizzle") {
        document.getElementById("icone").innerHTML = pluieFine
    }
}

const ville = document.getElementById("ville")
ville.addEventListener("click", function() {
    this.contentEditable = true
})
ville.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault()
        ville.contentEditable = false
        main(false)
    }
})

main()
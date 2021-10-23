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
const horloge = () => {
    const date = new Date();
    let heures = date.getHours()
    let minutes = date.getMinutes()
    let secondes = date.getSeconds()

    if (secondes < 10) {
        secondes = "0" + secondes
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    let affichage = `<p><strong>${heures} : ${minutes} : ${secondes} </strong></p>`;
    document.querySelector(".temps").innerHTML = affichage
}
setInterval(function() {
    horloge()
})
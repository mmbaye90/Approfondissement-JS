//Création de la promesse
const maPromesse = new Promise((resolve, reject) => {
        if (typeof users != undefined) {
            resolve(users)
        } else {
            reject("Promesse non résolu !!!")
        }
    })
    //Capter l'état de la promesse
maPromesse.then((res) => {
        let liste = `<ul>`
        for (let util of res) {
            liste += `<li>${util.name}</li>`
        }
        liste += `</ul>`
        document.querySelector("#util").innerHTML += liste;


    })
    .catch((error) => { console.log(error) });

// Construction de la promesse News
const promesseNews = new Promise((resolve, reject) => {
    if (typeof News != undefined) {
        resolve(News)

    } else {
        reject("Acces a news impossible")
    }
})
promesseNews.then(res => {
    let actu = `<ul>`;
    for (let i of News) {
        actu += `<li>${i.title}</li>`
        const elmtHtml = document.getElementById("act");
        elmtHtml.innerHTML = actu
    }
    actu += `</ul>`
})


//Switch (Exemple)
// let voitures = prompt("Veuillez choir la marque de voiture (Peugeo,Bmw,Twingo)").toLowerCase();

// let km = prompt("Combien de km souhaiterez-vous faire ?");

// let prix = {
//     peugeot: 0.6,
//     bmw: 0.7,
//     twingot: 0.8
// };
// switch (voitures) {
//     case "peugeot":
//         {
//             alert("le prix est de : " + prix.peugeot * km + "€")
//         }
//         break;
//     case "bmw":
//         {
//             alert("le prix est de : " + prix.bmw * km + "€")
//         }
//         break;
//     case "twingot":
//         {
//             alert("le prix est de : " + prix.twingot * km + "€")
//         }
//         break;
//     default:
//         {
//             alert("Veuillez saisir une marque mentionnez ci dessus")
//         }
// }


const questions = [{
        question: "Quels sont les composants d'un burgur?\n 1.pain\n 2.mozart",
        reponse: 1
    },
    {
        question: "Quels sont les composants d'un pain?\n 1.pain\n 2.sel",
        reponse: 2
    },
    {
        question: "Quels sont les composants d'un thieb?\n 1.pain\n 2.thieb",
        reponse: 2
    }
]

let nbrReponse = 0;
questions.forEach(el => {
    let repUser = prompt(el.question);
    if (repUser == el.reponse) {
        alert("Bonne réponse")
        nbrReponse += 1
    } else {
        alert("Mauvaise réponse")
    }
});

//Cas ou on aurait une bonne réponse
if (nbrReponse <= 1) {
    alert(`Vous avez ${nbrReponse} / ${questions.length} réponse`)
}
//Cas de plus d'une réponse
else {
    alert(`Vous avez ${nbrReponse} / ${questions.length} réponses`)
}
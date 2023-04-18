// dato il seguente JSON:

// [
//     {
//         "name": "mario",
//         "active": true,
//         "feat": {
//             "role": "protagonist"
//         }
//     },
//     {
//         "name": "luigi",
//         "active": true,
//         "feat": {
//             "role": "protagonist"
//         }
//     },
//     {
//         "name": "wario",
//         "active": false,
//         "feat": {
//             "role": "antagonist"
//         }
//     },
//     {
//         "name": "yoshi",
//         "active": false,
//         "feat": {
//             "role": "protagonist"
//         }
//     }
// ]
// creare una funzione getInfo che, preso in ingresso l'array di oggetti ottenuto dal JSON, mi dice:
// - quanti protagonisti ci sono nell'array
// - quanti protagonisti attivi ci sono nell'array
// - quanti antagonisti ci sono nell'array

const json = 
` [
    {
        "name": "mario",
        "active": true,
        "feat": {
            "role": "protagonist"
        }
    },
    {
        "name": "luigi",
        "active": true,
        "feat": {
            "role": "protagonist"
        }
    },
    {
        "name": "wario",
        "active": false,
        "feat": {
            "role": "antagonist"
        }
    },
    {
        "name": "yoshi",
        "active": false,
        "feat": {
            "role": "protagonist"
        }
    }
] `

const jsonParsed = JSON.parse(json)

function getInfo(jsonParsed) {
    let activeProtagonist = 0
    let protagonist = 0

    for (let i = 0; i < jsonParsed.length; i++) {
        const obj = jsonParsed[i];
        if (obj.feat.role == "protagonist") {
            protagonist++
            if (obj.active == true) {
                activeProtagonist++
            }
        } 
    }

    let antagonist = jsonParsed.length - protagonist
    console.log("I protagonisti attivi sono: " + activeProtagonist);
    console.log("I protagonisti sono: " + protagonist);
    console.log("Gli antagonisti sono: " + antagonist);
}

getInfo(jsonParsed)
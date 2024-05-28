function randonNumber(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function tempoDeEspera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// tempoDeEspera('oi tempo de espera 1', randonNumber(1, 2))
//     .then(res => {
//         console.log(res);
//         return tempoDeEspera('ok esperando 2', randonNumber(1, 2))
//     })
//     .then(res => {
//         console.log(res);
//         return tempoDeEspera('ok esperado 3', randonNumber(1, 2))
//     }).then(res => {
//         console.log(res);
//     }).catch();

const promisesArray = [
    tempoDeEspera('task 2', randonNumber(1, 3)),
    tempoDeEspera('task 3', randonNumber(1, 3)),
    tempoDeEspera('task 4', randonNumber(1, 3)),
]


Promise.race(promisesArray).then(res => {console.log(res)}).catch()
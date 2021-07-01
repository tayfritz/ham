const jsonData = [
    {"cduAccessCode":"AECB3AEC","ufcAccessCode":"3PI1E42I"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"5I1KQGHN"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"IB1D1V1E"}
]

const practice = [];

for (const {cduAccessCode: a, ufcAccessCode:b} of jsonData) {
    // console.log(`${a}:${b}`);

    jsonData.forEach( () => {
        practice.push(a);
    });
}

console.log(practice);

// jsonData.forEach( () => {
//     practice.push(cduAccessCode);
// })

// console.log(practice);
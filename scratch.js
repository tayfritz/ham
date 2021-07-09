// const jsonData = [{"cduAccessCode":"AECB3AEC","ufcAccessCode":"3PI1E42I"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"5I1KQGHN"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"IB1D1V1E"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"NCY3MRMZ"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"75TCDVHU"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"R7IMURIW"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"SIZZHWWK"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"2VKJVXRM"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"QIASGH8X"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"6VUB9UHM"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"VA4LUVRN"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"IRKRED9E"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"DNW4G4ZM"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"1MC9JG57"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"6DYJSWA2"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"LEILSNE8"},{"cduAccessCode":"4127E445","ufcAccessCode":"PUQEC3UB"},{"cduAccessCode":"4127E445","ufcAccessCode":"JM3ZTNIB"},{"cduAccessCode":"4127E445","ufcAccessCode":"EWME3TKN"},{"cduAccessCode":"4127E445","ufcAccessCode":"E9SW868J"},{"cduAccessCode":"4127E445","ufcAccessCode":"J4IMAVK5"},{"cduAccessCode":"4127E445","ufcAccessCode":"GI7YZIBV"},{"cduAccessCode":"4127E445","ufcAccessCode":"HXAQWMKE"},{"cduAccessCode":"4127E445","ufcAccessCode":"N5KBY8FD"},{"cduAccessCode":"4127E445","ufcAccessCode":"4DFF4P3X"},{"cduAccessCode":"4127E445","ufcAccessCode":"3IGV6JTS"},{"cduAccessCode":"4127E445","ufcAccessCode":"D1LWW5CM"},{"cduAccessCode":"4127E445","ufcAccessCode":"AFC5HRQU"},{"cduAccessCode":"4127E445","ufcAccessCode":"V1ENUNWC"},{"cduAccessCode":"4127E445","ufcAccessCode":"BC979JVE"},{"cduAccessCode":"4127E445","ufcAccessCode":"GAJPQDTN"},{"cduAccessCode":"4127E445","ufcAccessCode":"KKLJEVF3"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"ESEF1DNJ"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"DYSMHXWP"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"A5R56XMG"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"J5DLFKG5"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"UDYY71EF"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"1EJ3S827"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"NWDTUHNL"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"SWCVGZNJ"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"RSNRV3ST"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"HH5JZK9W"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"RI7SSEPR"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"NMPXI6NY"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"PL8H2EX7"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"73YT8I8T"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"F2N6YV6X"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"UXHQBNHY"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"ZXVPKA5B"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"R2ARKS2U"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"56KFL7JI"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"ZLGHKVHS"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"W7KCAIFX"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"YG97QVL8"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"J69XX4D5"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"IP49P1MT"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"PQHS1PYS"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"EFR522L2"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"DVPQ8U6S"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"I8F4JUBG"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"ZXAJCQ3A"}];
// const coaches = {};

// jsonData.forEach((userMapped) => {
//     if(! (userMapped.cduAccessCode in coaches)) {
//         coaches[userMapped.cduAccessCode] = { users : [] } 
//     }
//     coaches[userMapped.cduAccessCode].users.push(userMapped.ufcAccessCode);
// });

// const keys = Object.keys(coaches);
// const values = Object.values(coaches);


// for (let i=0;i<keys.length;i++) {
//     const coachCdu = `Coach: ${keys[i]}`
//     console.log(coachCdu);
//     const userUfc = `Users Assigned:`
//     console.log(userUfc);
//     values[i].users.forEach( (p) => {
//         const users = p;
//         console.log(p);
//     });
// }




////////////                    SCRATCH                 ////////////  

// const coachesMapped = new Set();
// const usersAssigned = [];

// function coachDataOverview(arr, setName) {
//     for (let i=0; i<arr.length; i++) {
//         setName.add(arr[i]["cduAccessCode"]);
//     }
//     // console.log(`The HAM Tool mapped ${arr.length} users to ${setName.size} coaches.`);
//     // console.log(setName);
// }

// coachDataOverview(jsonData, coachesMapped);


// function hasKeySetTo(obj,key,value)
// {
//     return obj.hasOwnProperty(key) && obj[key]==value;
// }

// let matchingData = [];
// if(hasKeySetTo(jsonData, 'cduAccessCode', 'AECB3AEC')) {
//     matchingData.push(jsonData["ufcAccessCode"]);
// }

// console.log(matchingData);

// let matchingData = [];

// if (jsonData[cduAccessCode]=== 'AECB3AEC') {
//     matchingData.push(jsonData["ufcAccessCode"]);
// }

// console.log(matchingData);


// let newArray = jsonData.filter( ({obj}) => coachesMapped.has(obj["cduAccessCode"]));
// console.log(newArray);

// console.log(jsonData.find(() => {
//     if (coachesMapped.has(jsonData.cduAccessCode)) {
//         return jsonData.ufcAccessCode;
//     }
// }));


// function filterData(arr, query) {
//     if (coachesMapped.has(query)) {
//         return arr.filter((obj.ufcAccessCode))
//     }
// }

// console.log(filterData(jsonData,"AECB3AEC"));
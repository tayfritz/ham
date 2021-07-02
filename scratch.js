const jsonData = [
    {"cduAccessCode":"AECB3AEC","ufcAccessCode":"3PI1E42I"},
    {"cduAccessCode":"AAA","ufcAccessCode":"aaa"},
    {"cduAccessCode":"BBB","ufcAccessCode":"bbb"},
    {"cduAccessCode":"CCC","ufcAccessCode":"ccc"},
];
const coachesMapped = new Set();
const usersAssigned = [];
​
// Iterate over jsonData to grab unique cduAccessCodes
function coachDataOverview(arr, setName, newArray) {
    for (let i=0; i<arr.length; i++) {
        setName.add(arr[i]["cduAccessCode"]);
    }
    // setName.forEach( (item) => {
    //     newArray.push(item);
    
    console.log(`The HAM Tool mapped ${arr.length} users to ${setName.size} coaches.`);
    console.log(setName);
}
coachDataOverview(jsonData, coachesMapped, usersAssigned);
​
// Add some more values to JSON that don't match for testing.
jsonData.push({"cduAccessCode":"XXX","ufcAccessCode":"xxx"});
jsonData.push({"cduAccessCode":"YYY","ufcAccessCode":"yyy"});
jsonData.push({"cduAccessCode":"ZZZ","ufcAccessCode":"zzz"});
​
const matchingData = jsonData.filter((obj) => coachesMapped.has(obj.cduAccessCode));
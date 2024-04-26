//Find the name of a secret society based on the first letter of each member's name

const member1= ["Esperanza", "Franco", "Nia"];
const member2= ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const member3= ['Harry', 'Ron', 'Hermione'];

function secretName(arr){
    let res= [];
    arr.forEach ((e) => res.push(e.chartAt(0)));
    return res.sort().join ("");
}
console.log(secretName(member1));
console.log(secretName(member2));

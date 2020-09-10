const temperature = -45;
const raining = false

if(temperature < 0) {
  console.log('Make sure you pick out a scarf!')
} else if (temperature < 15) {
  console.log('Short sleeves won\'t cut it!');
} else {
  console.log('Short sleeves are fine.')
}

console.log('Now you\'re ready to go outside!')



const isCitizen = true;
let year = 26

if(isCitizen && year > 18) {
  console.log('You are eligible to vote.');
}

if(temperature < -40 || temperature > 40){
  console.log('Maybe going outside isn\'t such a great idea..');
}

if(!raining){
  console.log('Leave your umbrella at home!');
}


const wichSchool = function (age) {
  if (age < 13) {
    console.log('Elementary School');
    } else if (age >=13 && age <= 18){
      console.log('Secondary School')
    } else {
      console.log('Lighthouse Labs')
    } return wichSchool
  }

  let age = 23
  console.log(wichSchool(age));



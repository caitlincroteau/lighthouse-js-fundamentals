//helps learners decide which school to attend
//Elementary School if age is below 13
//Secondary School if age is between 13 and 18 (both inclusive)
//Lighthouse Labs in all other cases.


/*
const age = 200;

function whichSchool(age) {
  if(age < 13) {
    return "Elementary School";
  } else if(age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}

console.log("You should go to: " + whichSchool(age));
*/

age = 0

const whichSchool  = function (age) {
  if(age < 13) {
    return "Elementary School";
  } else if(age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}
console.log(whichSchool(age));
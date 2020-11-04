const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

let employeeBonus = [ 
  {
    name: '',
    bonusPercentage: '',
    totalCompensation: '',
    totalBonus: ''  
  }
];

bonusCaclulator (employees);

function bonusCaclulator( employeeArray ){

    for ( let i = 0; i<employeeArray.length; i++){
        //rating <2 no bonus

        let bonusPercentage = 0;
        if( employeeArray[i].reviewRating <= 2){
          bonusPercentage[i] = 0;
        }
        else if( employeeArray[i].reviewRating === 3){
          bonusPercentage[i] = 0.04;
          console.log('we are in 3 rating');
          
        }
        else if( employeeArray[i].reviewRating === 4){
          bonusPercentage[i] = 0.06;
        }
        else if( employeeArray[i].reviewRating === 5){
          bonusPercentage[i] = 0.1;
        }
        //arraynamepushinginto.push("info to be pushed")
        employeeBonus.push(employeeArray[i].name);
        employeeBonus.push(employeeArray[i].bonusPercentage);
        console.log('testing', employeeBonus);
        //objectName.keyvalueforpercent = bonuspercent
        //atticuus..03 = 3%
        //employeeBonus
          
          //employeeBonus[i].bonusPercentage = bonusPercentage;
    }

};



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

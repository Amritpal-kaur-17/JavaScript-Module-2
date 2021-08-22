// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
  for(let i =0; i<Object.keys(studentGrades).length; i++){
    //studentGrades.forEach( name 
      if(Object.values(studentGrades)[i]>18){
      var output =  Object.keys(studentGrades)[i].toUpperCase()+ " - " +  Object.values(studentGrades)[i];
      console.log(output);    
    }
  }
  

  Object.keys(studentGrades).forEach(key => {
    if( studentGrades[key]>18){
      var output =   key.toUpperCase()+ " - " +  studentGrades[key];
      console.log(output);    
    }
  });
  // Prints
  // TOM - 20
  // ABDUL - 19
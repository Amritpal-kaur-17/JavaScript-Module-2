const changeColor = function(jumboBackground, donateBackground, VolunteerBack, volunteerTcolor) {
    const jumbo = document.querySelector('.jumbotron');
    jumbo.style.backgroundColor = jumboBackground;
    
    const donateBtn = document.querySelector('.btn.btn-primary.btn-lrg')
    donateBtn.style.backgroundColor = donateBackground;

    const VoluntrBtn = document.querySelector('.btn.btn-secondary.btn-lrg')
    VoluntrBtn.style.backgroundColor = VolunteerBack;
    VoluntrBtn.style.color = volunteerTcolor
}

const blueBtn = document.querySelector('#blueBtn');
blueBtn.addEventListener('click', () => changeColor('#588fbd', '#ffa500', 'black', 'white'))


const orangeBtn = document.getElementById('orangeBtn')
orangeBtn.addEventListener('click', () => changeColor('#f0ad4e', '#5751fd', '#31b0d5', 'white'))

const greenBtn = document.getElementById('greenBtn')
greenBtn.addEventListener('click', () => changeColor('#87ca8a', 'black', '#8c9c08'))



//*********************************************************************************************************




const submitFunction = function (e){
    e.preventDefault() 
let mailField = document.querySelector('#exampleInputEmail1')
let nameField = document.querySelector('#example-text-input')
let describefield = document.querySelector('#exampleTextarea')
let invalidMail = (!mailField.value.includes('@'));
let invalidName = nameField.value.trim().length == 0;
let invalidDesc = describefield.value.trim().length === 0
let validMail = mailField.value.includes('@');
let validDesc = describefield.value.trim().length > 0;
let validName = nameField.value.trim().length > 0;
if ( validName && validDesc && validMail) {
    alert("Thank you for filling out the form")
    mailField.value = '';
    nameField.value = '';
    describefield.value = '';
    mailField.style.backgroundColor = 'white' 
    nameField.style.backgroundColor = 'white'                          
    describefield.style.backgroundColor = 'white'
} 
else if(invalidMail && invalidName && invalidDesc)  
    {mailField.classList.add('redBackground');
    nameField.classList.add('redBackground');
    describefield.classList.add('redBackground')
} 
    else if (validMail && validName && invalidDesc){
    describefield.classList.add('redBackground')
} 
    else if(validMail && invalidName && validDesc){
    nameField.classList.add('redBackground')
}  
    else if(invalidMail && validName && validDesc){
    mailField.classList.add('redBackground')
}  
}
//not quite describe me queda marcado en rojo 

let submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', submitFunction)

/*Task 1
=======*/

const pElement = document.getElementsByTagName("p");
console.log(pElement);

const Fdiv = document.querySelector("div");
console.log(Fdiv);

const idJum_text = document.getElementById("jumbotron-text");
console.log(idJum_text);


const pC = document.querySelector(".primary-content");
const pAllElement = pC.querySelectorAll("p"); 
console.log(pAllElement);

/*
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/


/*
Task 2
======*/

const alertBen = document.getElementById("alertBtn").addEventListener("click", function() {
   alert("Thanks for visiting Bikes for Refugees!");
   });
 



/*When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/


/*
Task 3
=======*/

const backgroundColor = document.getElementById("bgrChangeBtn").addEventListener("click", function(){
   document.body.style.backgroundColor = 'grey'});

   /*const ColorsArray = ["red", "green", "pink", "grey", "blue"];
   let index =0;
   let  changeColorButton = document.querySelector("#bgrChangebtn");
   changeColorButton.addEventListener("click", changeColor);
   function changeColor(){
      if(index >  (ColorsArray.length - 1)){
         index = 0;
         }
      document.querySelector("body").style.backgroundColor = `${ColorsArray(index)}`;
      index ++;
    }
 




/*
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/



//Task 4
//sss======

const addText = document.querySelector("#addTextBtn").addEventListener("click", function(){


const newParagraph = document.createElement("p");
const text = document.createTextNode("Add new paragraph in the page.");
newParagraph.appendChild(text);
const learnMoreSection = document.getElementById("mainArticles");
learnMoreSection.appendChild(newParagraph)
});
/*When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/



/*
Task 5
======*/

const largeLinkbtun = document.getElementById("largerLinksBtn").addEventListener("click", function(){
   const linksSize = document.getElementsByTagName("a");
   console.log(linksSize);
   for(var i=0; i<linksSize.length; i++){
      linksSize[i].style.fontSize = "22px";
   }
});



/*When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


/*
Task 6
======

const addText = document.querySelector("#addTextBtn").addEventListener("click", function(){
const newParagraph = document.createElement("p");
const text = document.createTextNode("Add new paragraph in the page.");
newParagraph.appendChild(text);
const learnMoreSection = document.getElementById("mainArticles");
learnMoreSection.appendChild(newParagraph);


});
*/
const addButton = document.querySelector("#addArticleBtn")
addButton.addEventListener('click', () =>{
    const whereIsShown = document.querySelector('#mainArticles')
    const userText = document.querySelector('.addArticle').value;
    const textInputF = document.createElement('p')
    textInputF.textContent = userText
    whereIsShown.prepend(textInputF)
    
})
const userText1 = document.getElementsByClassName('addArticle')
userText1.innerHTML = ""

/*Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/


let changeColorBtn = document.querySelector("#bgrChangeBtn")
let index = 0;
changeColorBtn.addEventListener('click', () => {
    let colors = ['yellow', 'blue', 'orange', 'purple'];
    let  assignBody = document.querySelector('body')
    if(index > (colors.length-1)){
       index = 0;     
    }
    assignBody.style.backgroundColor = colors[index];
    index ++;
    })



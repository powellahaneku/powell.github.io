
// First we select the Elementments and Caching it 
var Button = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.getElementById("list");

// these function declarations use the elements we cached for events 
function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("list-group-item");
    ul.appendChild(li);  
    input.value = "" 
}

function addListAfterCLick(){
    if (inputLength() > 0){
        createListElement()    
    }
    
}

function addListAfterKeypress(event){
    console.log("so far so good")
    if (inputLength() > 0 && event.key === "Enter" ){
        createListElement()    
    }
    
}



// Practicing script for custom button
var target = document.querySelectorAll("ul")
for (var i = 0; i < target.length; i++){
    var text = target[i].innerText;
    datalist.push(text)
    console.log("Works")
}

// Color Page script 
var css = document.querySelector("h3")
var body = document.getElementById("gradient")
var colorValue1 = document.getElementsByTagName("input")[0]
var colorValue2 = document.getElementsByTagName("input")[1];

function changeColors(){
    var color1 = colorValue1.value
    var color2 = colorValue2.value
    body.style.background = "linear-gradient(to right,"+ color1 + ","+ color2 +")";
    css.textContent = body.style.background + ";" ;

}


colorValue1.addEventListener("input", changeColors);

colorValue2.addEventListener("input", changeColors);


// here we call the functions and use the Element and we try not to repeat ourselves
Button.addEventListener("click", addListAfterCLick);

input.addEventListener("keypress", addListAfterKeypress);
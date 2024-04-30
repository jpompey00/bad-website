"use script";

//difference between document.body.onload vs window.onload
// document.body.onload = init;

window.onload = init;

//plan--------------------------
/*
have website ask you to enter the characters in your name.
It takes that number and makes that many dropdowns.
dropdowns have letters A - Z capital and lowercase, 0-9, all randomized.
Have an uninteractive textbox that updates with each letter and a submit button

Alternate Idea, have the dropdown appear, and when you select one letter, it creates the next dropdown. Always have the submit button there.
    for this idea I should use the onchange event attribute > works
    1. Figure out how to spawn a dropdown from javascript


TODO: rename all the functions when things start working, for clarity.
refactor the variabless to all be global
*/



const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z'];




//make the first one start with a space.
function init() {

    //dissapears if i try to make it global
    const testDiv = document.getElementById("test_div");
    const submitButton = document.getElementById("btnSubmit");
    
    


    //for the first call, it makes the dropdown with all the data.
    //ISSUE: not done with an eventHandler so i don't know if i can do it 
    //in a similar way to .onclick and the like, where I call the function without
    //the parenthesis and it runs. 
    dropDownLoop(testDiv);


    //once its changed, it creates the dropdowns for each following letter.
    //ISSUE: createDropDown and dropDownLoop do the same thing but dropDownLoop applies
    //ISSUE: if you change an already changed dropdown, it will create a new dropdown

    //testDiv.onchange = dropDownLoop;
    testDiv.onchange = createDropDown;

    submitButton.onclick = submitButtonClicked;

}



function createDropDown() {
    //Creats a new select element and assigns it to newDropdown
    const newDropdown = document.createElement("select");
    newDropdown.setAttribute("class", "dropdown");

    //this works, change this
    const currentDiv = document.getElementById("test_div");





    // this loops through the alphabet array and adds it to the dropdown.

    for (let i = 0; i <= alphabet.length; i++) {

        let optionMenu = document.createElement("option");
        if (i == 0) { //makes the first value in the dropdown " "

            optionMenu.setAttribute("value", " ");

        } else { //makes the rest of the values the alphabet array


            optionMenu.setAttribute("value", alphabet[i - 1])

            optionMenu.innerHTML = alphabet[i - 1];
        }
        //appends the created options to the Select element

        newDropdown.appendChild(optionMenu);
    }
    //appends the select element to the div holding the dropdowns
    currentDiv.appendChild(newDropdown);

}


function dropDownLoop(testDiv = 0) {

    //Creates a new select element and assigns it to newDropdown
    const newDropdown = document.createElement("select");
    newDropdown.setAttribute("class", "dropdown")


    //ISSUE: Does not work as inteded
    if (testDiv == 0) {

        testDiv = document.getElementById("test_div");
    }



    // this loops through the alphabet array and adds it to the dropdown.

    for (let i = 0; i <= alphabet.length; i++) {
        let optionMenu = document.createElement("option");
        if (i == 0) {     //makes the first value in the dropdown " "

            optionMenu.setAttribute("value", " ");
            optionMenu.innerHTML = " ";

        } else { //makes the rest of the values the alphabet array

            optionMenu.setAttribute("value", alphabet[i - 1])

            optionMenu.innerHTML = alphabet[i - 1];
        }

        //appends the created options to the Select element
        newDropdown.appendChild(optionMenu);
    }
    //appends the select element to the div holding the dropdowns
    testDiv.appendChild(newDropdown);
}



//Testing this as a concept before implementation
function submitButtonClicked(){
    //trying to get a list of the elements that are children of the test div
    //It would be option elements in this case. Trying to confirm that I have them.
    const textBox = document.createElement("p");
    textBox.setAttribute("style", "display:inline;")
    // textBox.innerHTML = "test1"

    const currentDiv = document.getElementById("test_div");
    const collection = currentDiv.children;

    let output = "";
    for(let i = 0; i < collection.length; i ++){
        output += collection[i].value;
    }

   console.log(output);



    //ISSUE: when I press submit again, it will print the string again with "output undefined"
    textBox.innerHTML = output;
    currentDiv.appendChild(textBox)
}
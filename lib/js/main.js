//References
let story_result = document.getElementById("story_result");
let formContainer = document.querySelector(".form_container");
//Update title and main title
const titleInput = document.querySelector("input");
const main_title = document.getElementById("main_title");
titleInput.addEventListener("change", updateValue);

function updateValue(e){
    main_title.textContent = e.target.value;
}

//Submit button function

submit_button.addEventListener("click", myFunction);

function myFunction(event){
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adjective = document.getElementById("adjective").value;

if (noun == "" | verb == "" | adjective == ""){
        alert("Please fill in all fields");
}
else {
    event.preventDefault();
    story_result.textContent = "Last night I ate a " + noun + ", and today I just had to " + verb + ". What a " + adjective + " day!"; 
    formContainer.style.display = "none";
    

}
}

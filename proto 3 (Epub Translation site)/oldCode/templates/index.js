// Get a reference to the element that you want to work with
var spans = document.querySelectorAll("span");
var textToUpdate = document.getElementById("blownupText");
var translation = document.getElementById("translationText");

var dic = {
    "作":
    {
        "simp":"作",
        "trad":"作",
        "pinyin":"zuō",
        "def": ["worker","workshop","(slang) troublesome","high-maintenance (person)"]
    },
    "実":
    {
        "simp":"実",
        "trad":"実",
        "pinyin":"test2",
        "def": ["Japanese variant of 實|实"]
    }
}

// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
spans.forEach(element => {
    element.addEventListener("mouseover", changeDef);
});

function changeDef(event){
  textToUpdate.innerText=event.target.innerText
    try
    {
        translation.innerText=dic[event.target.innerText]["def"][0]
    }
    catch(error)
    {
        translation.innerText="UNKNOWN"
    }
}
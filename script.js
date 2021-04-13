const charactersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
'\'', '*', '`', '´', '|', '\\', '/', '+', '?', '}', ']', '{', '[', '=', ')', '(', '&', '%', '#', '¤', '"', '!', '@', '£', '$', '¨', '^', '~', '-', '_', '.', ',', ':', ';', '½', '§'];
console.log(charactersArray.length);

document.querySelector('#number-form').addEventListener('submit', function(e) {
    
    e.preventDefault();
    const theInputValue = document.querySelector('#number-input').value;

    let theRandomCharactersGenerated = '';

    for ( let i = 0; i < theInputValue; i++ ) {
        const randomNumber = Math.floor(Math.random() * charactersArray.length);
        theRandomCharactersGenerated += charactersArray[randomNumber];
    }  
    
    document.querySelector('#random-characters').innerHTML = theRandomCharactersGenerated;

});
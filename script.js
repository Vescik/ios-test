let displayFromFormPost  = document.querySelector(".form-control");
let displayFromFormAge  = document.querySelector(".form-age");
let postValue = document.querySelector('.post-value');
let ageValue = document.querySelector('.age-value');
let postArray = [];

function addToArray(){
    postArray.push( displayFromFormPost.value);
    postArray.push(displayFromFormAge.value);
    console.log(postArray);
}

function setValue() {
    postValue.innerHTML = 'Tutaj treść posta: ' + displayFromFormPost.value ;
    console.log(displayFromFormPost.value);
    ageValue.innerHTML = 'Tutaj wiek: ' + displayFromFormAge.value;
    console.log(displayFromFormAge.value);
}


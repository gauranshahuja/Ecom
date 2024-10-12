const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const loginButton = document.getElementById('loginButton');
const signup_loginButton = document.getElementById('signup_loginButton');
const loginPopup = document.getElementById('loginpage');
const signupButton = document.getElementById('signupButton');
const signupPopup = document.getElementById('signuppage');
const closeButtons = document.querySelectorAll('.close');
var mainimg = document.getElementById("main_img")
var smallimg = document.getElementsByClassName("small_img")

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginPopup.style.display = 'block';
    });
}

if (signupButton) {
    signupButton.addEventListener('click', () => {
        signupPopup.style.display = 'block';
        loginPopup.style.display = 'none';
    });
}

if (signup_loginButton) {
  signup_loginButton.addEventListener('click', () => {
    loginPopup.style.display = 'block';
    signupPopup.style.display = 'none';
  });
}

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginPopup.style.display = 'none';
        signupPopup.style.display = 'none';
    });
});

window.onclick = function(event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
    if (event.target === signupPopup) {
        signupPopup.style.display = 'none';
    }
}

smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src
}

smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src
}

smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src
}

smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src
}
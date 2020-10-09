let currentScrollY = 0;
let showScrollButton = false;

function onScroll() {
  currentScrollY = window.pageYOffset;
  showScrollButton = Boolean(currentScrollY > 1);

  showScrollButton
    ? scrollButton.classList.remove('scroll-to-top-wrapper--hide')
    : scrollButton.classList.add('scroll-to-top-wrapper--hide');
}


window.onload = function() {
    main = document.getElementById('main');
    scrollButton = document.getElementById('scroll-to-top-wrapper');
    document.addEventListener('scroll', onScroll, false)
}


// modals

// document.getElementById('loginModal1').addEventListener('click', function() {
//     document.getElementById('loginModal1').style.display = 'block'
// }

let loginModal = document.getElementById('loginModal1');
let registerModal = document.getElementById('registerModal1');
let loginBtn = document.getElementById('login');
let registerBtn = document.getElementById('register');
let span = document.getElementsByClassName('close')[0];
let password = document.getElementsByName('password');
let password_confirm = document.getElementsByName('password_confirmation');
let eye = document.getElementsByName('eye');

// Password visiblity toggle
var passwordState = false;
eye.onclick = function toggle() {
    if (passwordState) {
        password.setAttribute('type', 'password');
        eye.style.color = '#7A797E';
        state = false;
    } else {
        password.setAttribute('type', 'text');
        eye.style.color = '#EF5B59';
        state = true;
    }
}

loginBtn.onclick = function () {
  loginModal.style.display = 'block';
};

registerBtn.onclick = function () {
  registerModal.style.display = 'block';
};

span.onclick = function () {
  if ((loginModal.style.display = 'block')) {
    loginModal.style.display = 'none';
  } else if ((registerModal.style.display = 'block')) {
    registerModal.style.display = 'none';
  }
};


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    } else if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}



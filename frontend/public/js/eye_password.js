let btn = document.querySelector('#eye');
console.log(btn)
btn.addEventListener('click', function() {
    let input = document.querySelector('.password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});
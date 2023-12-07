// select element
const butts = document.querySelector('.butts');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
butts.addEventListener('click', function (){
    document.getElementById('color').style.cssText = 'background-color: red;'
    
});

function reset(){
    document.getElementById('reset').reset();
}
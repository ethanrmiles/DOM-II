import './less/index.less'

// Your code goes here!
//DOM
const body = document.body;
const imgButton = document.querySelector(' img');
// const h2 = document.querySelectorAll('h2')
const navElements = document.querySelectorAll('.nav-link');
const text = document.querySelector('h2')



//Events 
//1 Page Load
window.onload = (event) => {
    alert('Just a warning: the font on this webpage is horrendous.');
    const heading = document.querySelector('h1')
    heading.textContent = 'Are you ready to be an instagram influencer?'
}
//2 Click
imgButton.addEventListener('click', (event) => {
    console.log('This is an image')
})
//3 Mouseover 
navElements.forEach(nav => {
   nav.addEventListener('mouseenter', function(event) {
       event.target.style.color = '#4BA0B5';
       setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
})
//4Keydown
function escKey (event) {
    if (event.key === 'Escape'){
        document.body.style.backgroundColor = '#EAD1BB'
    }
}
document.addEventListener('keydown', escKey)
//5 Double Click
text.addEventListener('dblclick', function(event)  {
    event.target.style.color = '#4BA0B5';
} )
//6 Copy 
window.addEventListener('copy', () => {
    navigator.clipboard.readText() 
    .then(text => {
       console.log(text)
    })
})


import './less/index.less'

// Your code goes here!
//DOM
const body = document.body;
const imgButton = document.querySelector(' img')
// const h2 = document.querySelectorAll('h2')
const navElements = document.querySelectorAll('.nav-link')



//Events 

window.onload = (event) => {
    alert('Just a warning: the font on this webpage is horrendous.');
    const heading = document.querySelector('h1')
    heading.textContent = 'Are you ready to be an instagram influencer?'
    // body.classList.remove('color-shift');
    // body.classList.remove('font-change');
    // h2.classList.remove('font-change')
}

imgButton.addEventListener('click', (event) => {
    console.log('This is an image')
})

navElements.forEach(nav => {
   nav.addEventListener('mouseenter', function(event) {
       event.target.style.color = '#4BA0B5';
       setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
})

// Array.from(document.links).forEach(link => {
//     link.addEventListener('click', function(evt) {
//         evt.preventDefault();
//         console.log(`The ${evt.target.textContent} link is a crypto SCAM!`)
//     })
// })
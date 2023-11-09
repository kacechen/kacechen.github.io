const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArray = ['/../img/kc-3.jpg','/../img/kc-5.jpg', '/../img/kc-10.jpg', '/../img/kc-12.jpg', '/../img/kc-13.jpg'];
const altText = {
    '/../img/kc-3.jpg' : 'ladybug',
    '/../img/kc-5.jpg' : 'flower',
    '/../img/kc-10.jpg' : 'mountain',
    '/../img/kc-12.jpg' : 'lake',
    '/../img/kc-13.jpg' : 'more mountains'
}


/* Looping through images */


for (i = 0; i < imgArray.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    newImage.setAttribute('alt', altText[i]);
    newImage.addEventListener('click',() => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
      });
    thumbBar.appendChild(newImage);
};

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
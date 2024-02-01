document.getElementById('stakeholder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    if (name.checkValidity() && email.checkValidity() && phone.checkValidity() && message.checkValidity()) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out the form correctly.');
    }
});


const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentImageIndex = 0;

function updateImage() {
    images.forEach((image, index) => {
        if (index === currentImageIndex) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
            if (index === currentImageIndex + 1) {
                image.classList.add('next');
            } else if (index === currentImageIndex - 1) {
                image.classList.add('prev');
            } else {
                image.classList.remove('next', 'prev');
            }
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

setInterval(() => {
    nextImage();
}, 5000);

var counter = 2;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
}, 5000);
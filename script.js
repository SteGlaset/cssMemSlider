const buttons = document.querySelector('.buttons');
const slider = document.querySelector('.slider');
const description = document.querySelector('.description');
const images = [
    {
        'src': './images/pets-freddie.webp',
        'alt': 'Freddie',
        'description': 'Freddie'
    },
    {
        'src': './images/pets-jennifer.webp',
        'alt': 'Jennifer',
        'description': 'Jennifer'
    },
    {
        'src': './images/pets-katrine.webp',
        'alt': 'Katrine',
        'description': 'Katrine'
    },
    {
        'src': './images/pets-scarlett.webp',
        'alt': 'Scarlett',
        'description': 'Scarlett'
    },
    {
        'src': './images/pets-sophia.webp',
        'alt': 'Sophia',
        'description': 'Sophia'
    },
    {
        'src': './images/pets-timmy.webp',
        'alt': 'Timmy',
        'description': 'Timmy'
    },
    {
        'src': './images/pets-woody.webp',
        'alt': 'Woody',
        'description': 'Woody'
    }
];

//Adding buttons
images.forEach(() => {
    const button = document.createElement('button');
    button.classList.add('button');
    const buttonInner = document.createElement('div');
    buttonInner.classList.add('btn-inner');
    button.append(buttonInner);
    buttons.append(button);
});

//Slider initialisation
function addImage(index) {
    if (slider.hasChildNodes()) {
        const firstChild = slider.childNodes[0];

        firstChild.style.opacity = 1;
        let left = 0;
        let timer = setInterval(() => {
            if (firstChild.style.opacity <= 0) {
                slider.removeChild(firstChild);
                clearInterval(timer);
            }
            left -= 8;
            firstChild.style.left = left + 'px';
            firstChild.style.opacity -= 0.02;
        }, 15);
        
    }
    
    const image = document.createElement('img');
    image.classList.add('image');
    image.setAttribute('src', images[index]['src']);
    image.setAttribute('alt', images[index]['alt']);

    slider.appendChild(image);

    let scale = 0.7;
    let timer = setInterval(() => {
        if (scale >= 1) {
            clearInterval(timer);
        }
        scale += 0.01 
        console.log(image.style.left)
        image.style.transform = 'scale(' + scale + ',' + scale + ')';
    }, 15);

    
}

function addDescription(index) {
    description.innerHTML = '';
    const text = document.createElement('p');
    text.classList.add('text');
    text.innerText = images[index]['description'];
    description.append(text);
}

if (images.length) {
    document.querySelector('.button').classList.add('active');
    addImage(0);
    addDescription(0);
};

//Buttons interactions
buttons.childNodes.forEach((el, index) => {
    el.addEventListener('click', (event) => {
        if (!el.classList.contains('active')) {
            buttons.childNodes.forEach((item) => {
                item.classList.remove('active');
            });
            el.classList.add('active');
    
            addImage(index);
            addDescription(index);
        } 
    });
});
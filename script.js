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
    },
    {
        'src': './images/ja-vas-unichtozhu-mem-1.jpg',
        'alt': 'Ponasenkov',
        'description': 'Meme slider'
    },
    {
        'src': './images/TJDDKISEqUNW05x9_DXLl4d5VTj3gQz4VpbOEdabnVqH7sjqynTnWbIBTTnzbT6EaezJ63DkJoLRmPUbI2ZYt6Tb.jpg',
        'alt': 'Slippy cat',
        'description': 'Meow'
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
function disableButtons() {
    buttons.childNodes.forEach((button) => {
        button.disabled = !button.disabled;
    });
}

function addImage(index) {
    disableButtons();

    const image = document.createElement('img');

    let offset = 0;
    if (slider.hasChildNodes()) {
        
        const firstChild = slider.childNodes[0];
        offset = -firstChild.width / 2;
        console.log(firstChild.width)
        image.style.transform = 'translate(' + offset + 'px) scale(' + 0.7 + ')';
        firstChild.style.opacity = 1;

        let left = 0;
        firstChild.style.transform = 'translate(' + left + '%)';
        let timer = setInterval(() => {
            if (firstChild.style.opacity <= 0) {
                slider.removeChild(firstChild);
                offset = 0;
                image.style.transform = 'translate(' + offset + 'px)';
                disableButtons();
                clearInterval(timer);
            }
            left -= 2;
            firstChild.style.transform = 'translate(' + left + '%)';
            firstChild.style.opacity -= 0.02;
        }, 15);
        
    }
    
    image.classList.add('image');
    image.setAttribute('src', images[index]['src']);
    image.setAttribute('alt', images[index]['alt']);

    slider.appendChild(image);

    

    let scale = 0.7;
    let timer = setInterval(() => {
        if (scale >= 0.99) {
            if (slider.childNodes.length === 1) disableButtons();
            clearInterval(timer);
        }
        scale += 0.01;
        image.style.transform = 'translate(' + offset + 'px) scale(' + scale + ',' + scale + ')';
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
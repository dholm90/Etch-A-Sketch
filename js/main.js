const main = document.querySelector('main');
const body = document.querySelector('body');

const header = document.createElement('header');
const slider = document.createElement('div');
const button = document.createElement('button');
const sliderNum = document.createElement('span');
const h2 = document.createElement('h2');

h2.textContent = "Grid Size";
slider.classList.add('slidecontainer');
sliderNum.classList.add('sliderNum');
slider.innerHTML += "<input type='range' min='1' max='100' value='16' class='slider' id='myRange'>";

button.textContent = "Create Grid";
sliderNum.innerText = "16 x 16";

slider.addEventListener('input', (num) => {
    num = document.getElementById("myRange").value;
    sliderNum.innerText = num + ' x ' + num;
});

button.addEventListener('click', (range) => {
    Clear();
    range = document.getElementById("myRange").value;
    CreateGrid(range);
    const articles = document.querySelectorAll('.article');

    articles.forEach((article) => {
        article.addEventListener('mouseover', () => {
            article.classList.add('articleHover');
        });
    });
});

body.insertBefore(header, body.children[0]);

header.innerHTML = '<h1>Etch-A-Sketch</h1>';
header.appendChild(h2);
header.appendChild(sliderNum);
header.appendChild(slider);

header.appendChild(button);

function CreateGrid(squares) {

    for (i = 0; i < squares; i++) {
        const section = document.createElement('div');
        section.classList.add('section');

        for (j = 0; j < squares; j++) {
            const article = document.createElement('div');
            section.appendChild(article);
            article.classList.add('article');
            article.addEventListener('mouseOver', () => {
                article.classList.add('articleHover');
            });
        }
        main.appendChild(section);
    }
}

function Clear() {
    const del = document.querySelectorAll('.section');
    del.forEach(article => {
        article.remove();
    });
}






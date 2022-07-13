const main = document.querySelector('main');
const body = document.querySelector('body');

const header = document.createElement('header');
const slider = document.createElement('div');
const button = document.createElement('button');
const sliderNum = document.createElement('span');

slider.classList.add('slidecontainer');
slider.innerHTML = "<h2>Grid Size:</h2>";
sliderNum.classList.add('sliderNum');
slider.innerHTML += "<input type='range' min='1' max='100' value='16' class='slider' id='myRange'>";

button.textContent = "Create Grid";

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
header.appendChild(slider);
header.appendChild(sliderNum);
header.appendChild(button);

//let rangeSlider = document.getElementById("myRange");
//let output = document.querySelector("sliderNum");
///output.innerHTML = rangeSlider.value; //Display the default slider value

// Update the current slider value (each time you drag the slider handle)


//CreateGrid(rangeSlider.value);

// const articles = document.querySelectorAll('.article');

// articles.forEach((article) => {
//     article.addEventListener('mouseover', () => {
//         article.classList.add('articleHover');
//     });
// });

function CreateGrid(squares) {
    sqrtOfSquares = Math.sqrt(squares);
    for (i = 0; i < sqrtOfSquares; i++) {
        const section = document.createElement('div');
        section.classList.add('section');

        for (j = 0; j < sqrtOfSquares; j++) {
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






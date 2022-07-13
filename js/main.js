const main = document.querySelector('main');

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


CreateGrid(144);

const articles = document.querySelectorAll('.article');

articles.forEach((article) => {
    article.addEventListener('mouseover', () => {
        article.classList.add('articleHover');
    });
});



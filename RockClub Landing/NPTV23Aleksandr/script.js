function addReview(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const reviewText = document.getElementById('anket').value.trim();

    if (name === '' || reviewText === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('anket-item');

    reviewItem.innerHTML = `
        <p class="name">${name}</p>
        <p class="anket-text">${reviewText}</p>
    `;

    const reviewsContainer = document.getElementById('anket-container');
    reviewsContainer.prepend(reviewItem);

    document.getElementById('name').value = '';
    document.getElementById('anket').value = '';
}

document.getElementById('anket-form').addEventListener('submit', addReview);

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }
});


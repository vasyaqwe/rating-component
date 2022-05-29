const form = document.querySelector('form');
const radios = document.querySelectorAll('input[type="radio"]');
const dialog = document.querySelector('dialog');
const ratingContainer = document.querySelector('.rating-container');
const info = document.querySelector('.info');

form.addEventListener('submit', () => {
    ratingContainer.remove();
    radios.forEach(radio => {
        if (radio.checked) {
            info.innerText = `You selected ${radio.value} out of 5`;
        }
    })

    dialog.showModal();
})

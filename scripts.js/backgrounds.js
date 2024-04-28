export const btnFloresta = document.getElementById('btn-floresta');
export const btnChuva = document.getElementById('btn-chuva');
export const btnCafeteria = document.getElementById('btn-cafeteria');
export const btnLareira = document.getElementById('btn-lareira');

btnFloresta.addEventListener('click', () => {
    document.body.classList.remove('chuva', 'cafeteria', 'lareira');
    document.body.classList.add('floresta');
});

btnChuva.addEventListener('click', () => {
    document.body.classList.remove('floresta', 'cafeteria', 'lareira');
    document.body.classList.add('chuva');
});

btnCafeteria.addEventListener('click', () => {
    document.body.classList.remove('floresta', 'chuva', 'lareira');
    document.body.classList.add('cafeteria');
});

btnLareira.addEventListener('click', () => {
    document.body.classList.remove('floresta', 'chuva', 'cafeteria');
    document.body.classList.add('lareira');
});

document.addEventListener('DOMContentLoaded', function() {
    let isCity = true;

    // Função para alternar entre cidade e campo
    function toggleView() {
        const citySection = document.getElementById('city');
        const fieldSection = document.getElementById('field');

        if (isCity) {
            citySection.style.display = 'none';
            fieldSection.style.display = 'block';
        } else {
            citySection.style.display = 'block';
            fieldSection.style.display = 'none';
        }

        isCity = !isCity;
    }

    // Inicialização: mostrar a cidade por padrão
    document.getElementById('city').style.display = 'block';
    document.getElementById('field').style.display = 'none';

    // Adicionando evento ao botão
    document.getElementById('toggleView').addEventListener('click', toggleView);
});

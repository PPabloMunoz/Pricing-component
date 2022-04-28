const priceBasic = document.getElementById ('priceBasic');

const priceProfessional = document.getElementById ('priceProfessional');

const priceMaster = document.getElementById ('priceMaster');

const checkbox = document.getElementById ('principalCheckbox');

checkbox.addEventListener ("click", function () {
    if (checkbox.checked) {
        priceBasic.textContent = '$19.99';
        priceProfessional.textContent = '$24.99';
        priceMaster.textContent = '$39.99';
    } else {
        priceBasic.textContent = '$199.99';
        priceProfessional.textContent = '$249.99';
        priceMaster.textContent = '$399.99';
    }
});


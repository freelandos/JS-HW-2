document.addEventListener('click', (event) => {
    const dropdownList = event.currentTarget.querySelector('.dropdown__list');
    const dropdownValue = event.currentTarget.querySelector('.dropdown__value');

    if (event.target.closest('.dropdown__value')) {
        dropdownList.classList.toggle('dropdown__list_active');
    } else {
        dropdownList.classList.remove('dropdown__list_active');
    }

    if (event.target.classList.contains('dropdown__link')) {
      event.preventDefault();
      dropdownValue.textContent = event.target.textContent;
      dropdownList.classList.remove('dropdown__list_active');
    }
})

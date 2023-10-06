const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    const activeTab = document.querySelector('.tab_active');
    const activeTabContent = document.querySelector('.tab__content_active');

    activeTab.classList.remove('tab_active');
    activeTabContent.classList.remove('tab__content_active');

    tab.classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
  })
})
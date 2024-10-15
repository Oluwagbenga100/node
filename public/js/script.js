// document.addEventListener('DOMContentLoaded', function(){
//     const allButtons = document.querySelectorAll('.searchBtn');
//     const searchBar = document.querySelector('.searchBar');
//     const searchInput = document.getElementById('.searchInput');
//     const searchClose = document.getElementById('.searchClose');

//     for  (vari = 0; i < allButtons.length; i++) {
//         allButtons[i].addEventListener('click', function() {
//             searchBar.style.visibility = 'visible';
//             searchBar.classList.add('open'); 
//             this.setAttribute('aria-expanded', 'true');
//             searchInput.focus();

//         });
//     };

//     searchClose.addEventListener('click', function() {
//     searchBar.style.visibility = 'hissen';
//     searchBar.classList.removre('open'); 
//     this.setAttribute('aria-expanded', 'false');
// });
// });

document.addEventListener('DOMContentLoaded', function() {
    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open'); 
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        });
    }

    searchClose.addEventListener('click', function() {
        searchBar.style.visibility = 'hidden';  // Corrected 'hissen' to 'hidden'
        searchBar.classList.remove('open');  // Corrected 'removre' to 'remove'
        this.setAttribute('aria-expanded', 'false');
    });
});

const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

const news = document.querySelector('.news');
news.style.backgroundColor = '#fff';
news.style.maxWidth = '60rem';

const title = document.querySelector('h1');
title.classList.add('news__title');
title.textContent = 'Aktuální novinky';

const firstArticle = document.getElementById('zprava1');
firstArticle.classList.add('post--main');

const thirdArticle = document.querySelector('#zprava3 img');
thirdArticle.src = 'images/zprava3-novy.jpg';
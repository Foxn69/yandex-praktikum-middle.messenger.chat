const pageLinks = document.querySelectorAll('.page-link');

pageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке

    const href = link.getAttribute('href');
    console.log('href', href)

    fetch(href) // Загружаем содержимое страницы с помощью fetch
      .then((response) => response.text())
      .then((html) => {
        console.log('html', html);
        document.body.innerHTML = html;
        // Обновляем URL в адресной строке без перезагрузки страницы
        history.pushState(null, null, href);
      })
      .catch((error) => console.error('Ошибка загрузки страницы:', error));
  });
});

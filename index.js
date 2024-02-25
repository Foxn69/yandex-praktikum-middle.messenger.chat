const pageLinks = document.querySelectorAll('.page-link');

pageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const href = link.getAttribute('href');
    console.log('href', href)

    fetch(href)
      .then((response) => response.text())
      .then((html) => {
        console.log('html', html);
        document.body.innerHTML = html;
        history.pushState(null, null, href);
      })
      .catch((error) => console.error('Ошибка загрузки страницы:', error));
  });
});

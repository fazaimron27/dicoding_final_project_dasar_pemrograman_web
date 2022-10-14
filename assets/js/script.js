const portfolio = document.getElementById('portfolio');
fetch('assets/data/portfolio.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      portfolio.innerHTML += `
        <div class="portfolio-card">
          <div class="portfolio-card-header">
            <h3>${item.title}</h3>
          </div>
          <div class="portfolio-card-content">
            <div class="technologies">
                ${item.technologies
                  .map((tech) => `<span>${tech}</span>`)
                  .join('')}
            </div>
            <p>${item.description}</p>
          </div>
          <div class="portfolio-card-footer">
            <a href="${item.link}" target="_blank">Read More</a>
          </div>
        </div>
      `;
    });
  });

const blog = document.getElementById('blog');
fetch('assets/data/blog.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      blog.innerHTML += `
        <div class="blog-item">
          <div class="blog-item-header">
            <h3>${item.title}</h3>
            <p>Posted on ${item.date}</p>
          </div>
          <div class="blog-item-content">
            <p>${item.description}</p>
          </div>
          <div class="blog-item-footer">
            <a href="${item.link}" target="_blank">Read More</a>
          </div>
        </div>
      `;
    });
  });

let btnToTop = document.getElementById('btnToTop');
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = 'block';
  } else {
    btnToTop.style.display = 'none';
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
btnToTop.addEventListener('click', topFunction);

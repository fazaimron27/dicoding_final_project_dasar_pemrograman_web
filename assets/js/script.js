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

const blog = document.getElementById('blog');
fetch('assets/data/blog.json')
  .then((response) => response.json())
  .then((data) => {
    data.slice(0, 2).forEach((item) => {
      blog.innerHTML += `
        <div class="blog-item">
          <div class="blog-item-header">
            <h3>${item.title}</h3>
            <p>${item.date} <i class="fas fa-calendar-alt"></i></p>
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

    if (data.length > 2) {
      blog.innerHTML += `
        <button id="load-more" class="load-more-btn">Load More <i class="fas fa-chevron-down"></i></button>
      `;
    }

    const loadMoreBtn = document.getElementById('load-more');
    loadMoreBtn.addEventListener('click', () => {
      data.slice(2).forEach((item) => {
        blog.innerHTML += `
          <div class="blog-item">
            <div class="blog-item-header">
              <h3>${item.title}</h3>
              <p>${item.date} <i class="fas fa-calendar-alt"></i></p>
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

      document.getElementById('load-more').remove();
    });
  });

const portfolio = document.getElementById('portfolio');
fetch('assets/data/portfolio.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      portfolio.innerHTML += `
        <div class="portfolio-card">
          <div class="portfolio-card-header">
            <h3><i class="fas fa-code"></i> ${item.title}</h3>
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

const howToReachMeBtn = document.getElementById('how-to-reach-me');
howToReachMeBtn.addEventListener('click', () => {
  const dialog = document.createElement('dialog');
  dialog.innerHTML = `
    <div class="dialog">
      <div class="dialog-header">
        <h3>How to reach me?</h3>
      </div>
      <div class="dialog-content">
        <p>
          You can reach me via email at <a href=""> fazaimanimron@gmail.com
          </a> or via social media.
        </p>
        <div class="social-media">
          <ul class="social-media-list">
            <li class="social-media-item">
              <i class="fab fa-instagram"></i> <a href="https://www.instagram.com/faza_imron27/" target="_blank"> @faza_imron27 </a>
            </li>
            <li class="social-media-item">
              <i class="fab fa-facebook"></i> <a href="https://www.facebook.com/fazaimanimron/" target="_blank"> @fazaimanimron </a>
            </li>
            <li class="social-media-item">
            <i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/fazaimron27/" target="_blank"> @fazaimron27 </a>
            </li>
            <li class="social-media-item"> 
              <i class="fab fa-github"></i> <a href="https://github.com/fazaimron27" target="_blank"> @fazaimron27 </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="dialog-footer">
        <button id="close-dialog" class="close-dialog-btn">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(dialog);
  dialog.showModal();

  const closeDialogBtn = document.getElementById('close-dialog');
  closeDialogBtn.addEventListener('click', () => {
    dialog.remove();
  });
});

const nameText = 'Faza Iman Imron';
const jobText = 'Backend Developer';

let i = 1;
let j = 1;

const runText = () => {
  document.getElementById('name').innerHTML = nameText.slice(0, i);
  document.getElementById('job').innerHTML = jobText.slice(0, j);

  i++;
  j++;

  if (i > nameText.length) {
    i = 1;
  }

  if (j > jobText.length) {
    j = 1;
  }

  document.getElementById('name').style.color = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

  document.getElementById('job').style.color = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

  document.getElementById('name').style.transition = 'all 0.5s ease';
  document.getElementById('job').style.transition = 'all 0.5s ease';

  setTimeout(runText, 400);
};

runText();

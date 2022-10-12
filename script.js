
const hamburger = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const close = document.querySelector('.fa-times');
const myProjects = [
    {
        name: "Tonic", 
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage: './assets/Snapshoot\ Portfolio.svg',
        languages: ['Canopy','backend'], 
        tags: ['HTML','CSS','Javascript'], 
        liveLink:'https://ernestkorir.github.io/my-portfolio/', 
        sourceLink: 'https://github.com/ernestkorir/my-portfolio.git',
        year: 2013
    },
    {
        name: "Multi-Post Stories", 
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage: './assets/Snapshoot\ Portfolio2.svg',
        languages: ['reactjs','frontend'], 
        tags: ['HTML','CSS','Javascript'], 
        liveLink:'https://ernestkorir.github.io/my-portfolio/', 
        sourceLink: 'https://github.com/ernestkorir/my-portfolio.git',
        year: 2017
    },
    {
        name: "Tonic", 
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage: './assets/Snapshoot\ Portfolio3.svg',
        languages: ['Backbonejs','typescript'], 
        tags: ['HTML','CSS','Javascript'],
        liveLink:'https://ernestkorir.github.io/my-portfolio/', 
        sourceLink: 'https://github.com/ernestkorir/my-portfolio.git',
        year: 2019
    },
    {
        name: "Tonic", 
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage: './assets/Snapshoot\ Portfolio4.svg',
        languages: ['RDBMS','backend'], 
        tags: ['HTML','CSS','Javascript'], 
        liveLink:'https://ernestkorir.github.io/my-portfolio/', 
        sourceLink: 'https://github.com/ernestkorir/my-portfolio.git',
        year: 2021
    }
    
]

const loadProjects = function() {
    let projectsDiv = document.querySelector('section#projects');
    let cardTemplate = projectsDiv.querySelector('#project-template');
    myProjects.forEach(proj => {
        let template = cardTemplate.cloneNode(true);
        template.removeAttribute('id');

        let heading = template.querySelector('h2.Tonic');
        let tag = template.querySelector('div.tags > a.languages');
        let language = template.querySelector('div.frame1 > p.canopy')
        let description = template.querySelector('p.desc');
        let projImg = template.querySelector('div.work-image');

        heading.textContent = proj.name;
        description.textContent = proj.description;
        projImg.style.backgroundImage = `url("${proj.featuredImage}")`;

        proj.tags.forEach(text => {
            let tagTemplate = tag.cloneNode(true);
            tagTemplate.textContent = text;
            tag.parentElement.appendChild(tagTemplate);
        })
        let year = tag.cloneNode(true);
        year.textContent = proj.year;
        tag.parentElement.appendChild(year);
        tag.remove();

        proj.languages.forEach(text => {
            let languageTemplate = language.cloneNode(true);
            languageTemplate.textContent = text;
            language.parentElement.appendChild(languageTemplate);
        })
        language.remove();


        template.style.display = 'flex';
        projectsDiv.appendChild(template);
    });
    cardTemplate.remove();

}

loadProjects();

hamburger.addEventListener("click", () => {
    if(!menu.style.display || menu.style.display === "none") {
    document.querySelector(".menu").style.display = "block";
    } else {
    document.querySelector(".menu").style.display = "none";
    }
});

document.querySelectorAll(".menu").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".menu").style.display = "none";
    });
});

close.addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
});

const mobileBtn1 = document.querySelector('#mobilebtn1');
const mobileBtn2 = document.querySelector('#mobilebtn2');
const mobileBtn3 = document.querySelector('#mobilebtn3');
const mobileBtn4 = document.querySelector('#mobilebtn4');
const popup = document.querySelector('.popup')

mobileBtn1.addEventListener("click", () => {
  if(!popup.style.display || popup.style.display === 'none') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
});

const closePopup = document.querySelector('#close')
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
})

//contact form

let email = document.querySelector('#email').value
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')

function isItUppercase(value) {
    if (value.match(/^[a-z@.]*$/)) {
      return true;
    }
    return false;
  };
isItUppercase(email)


form.addEventListener('submit', (e) => {
    if (isItUppercase(email.value)) {
      error.textContent = '';
    }else { e.preventDefault();
        error.textContent = 'Email needs to be in lowerCase';
    }
})

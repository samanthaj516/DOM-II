// Your code goes here
const welcomeTitle = document.querySelector(".container h2");
function updateWelcomeTitle(event) {
    if(event.type === 'mouseenter'){
        this.style.fontWeight = 'bold'; 
    } else if (event.type === 'mouseleave'){
        this.style.fontWeight = 'normal';
    }
};
welcomeTitle.addEventListener('mouseenter', updateWelcomeTitle);
welcomeTitle.addEventListener('mouseleave', updateWelcomeTitle);

const introImg = document.querySelector(".intro img");
function updateIntroImg(event) {
    if(event.type === 'mouseover'){
        introImg.style.boxShadow = "10px 10px 5px grey";
    } else if(event.type === 'mouseleave'){
        introImg.style.boxShadow = '0px 0px 0px';
    }
};
introImg.addEventListener('mouseover', updateIntroImg);
introImg.addEventListener('mouseleave', updateIntroImg);


const headerLink = document.querySelectorAll('.nav-link');
function updateHeaderLink(event) {
    if(event.type === 'mousedown'){
        this.style.transform = "scale(1.5)";
    } else if(event.type === 'mouseup'){
        this.style.transform = "scale(1)";
    }
}
headerLink.forEach((link) => {
    link.addEventListener('mousedown', updateHeaderLink);
    link.addEventListener('mouseup', updateHeaderLink);
    link.addEventListener('click', (event) => event.preventDefault());
    });

const buttons = document.querySelectorAll('.btn');
function updateButtons(event) {
    if(event.type === 'click'){
        this.style.backgroundColor = "yellow";
        this.style.color = "#17A2B8";
    } else if(event.type === 'mouseleave'){
        this.style.backgroundColor = "#17A2B8";
        this.style.color = "white";
    }
}
buttons.forEach((btn) => {
    btn.addEventListener('click', updateButtons);
    btn.addEventListener('mouseleave', updateButtons);
});

window.addEventListener('load', (event) => {
    alert('Welcome to the Fun Bus!');
  });


  addEventListener("keydown", function(event) {
    if (event.keyCode == 16)
      document.body.style.background = "violet";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 16)
      document.body.style.background = "";
  });










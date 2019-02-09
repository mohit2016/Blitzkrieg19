particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 00,
        "height": 00
      }
    },
    "opacity": {
      "value": 1.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 1,
        "sync": true
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 10,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },

  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      }
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "push": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
});

 // Timer Script 

const countdown = new Date("feb 27, 2019");

function getRemainingTime(endtime) {
  const milliseconds = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (milliseconds/1000) % 60 );
  const minutes = Math.floor( (milliseconds/1000/60) % 60 );
  const hours = Math.floor( (milliseconds/(1000*60*60)) % 24 );
  const days = Math.floor( milliseconds/(1000*60*60*24) );

  return {
    'total': milliseconds,
    'seconds': seconds,
    'minutes': minutes,
    'hours': hours,
    'days': days,
  };
}
  
function initClock(id, endtime) {
  const counter = document.getElementById(id);
  const daysItem = counter.querySelector('.js-countdown-days');
  const hoursItem = counter.querySelector('.js-countdown-hours');
  const minutesItem = counter.querySelector('.js-countdown-minutes');
  const secondsItem = counter.querySelector('.js-countdown-seconds');

  function updateClock() {
    const time = getRemainingTime(endtime);

    daysItem.innerHTML = time.days;
    hoursItem.innerHTML = ('0' + time.hours).slice(-2);
    minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
    secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

    if (time.total <= 0) {
      // clearInterval(timeinterval);
      daysItem.innerHTML = ('0');
    hoursItem.innerHTML = ('00')
    minutesItem.innerHTML = ('00');
    secondsItem.innerHTML = ('00');
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

initClock('js-countdown', countdown);

// add smoothness
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  // console.log(' Design By Tarun Kumar Kashyap ');
  $("nav a, footer a").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
});

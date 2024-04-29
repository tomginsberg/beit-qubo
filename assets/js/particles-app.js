/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

const config = {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0.1,
          "opacity_max": 0.9,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#0099ff",
        "opacity": 0.6,
        "width": 5
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
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
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  

config.particles.number.value = 100;
config.particles.number.density.value_area = 1000;
config.particles.color.value = ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"];
config.particles.shape.stroke.color = "#fff";
config.particles.opacity.value = 0.6;
config.particles.opacity.anim.enable = false;
config.particles.size.value = 2;
config.particles.line_linked.distance = 120;
config.particles.line_linked.color = "#ffffff";
config.particles.line_linked.opacity = 0.4;
config.particles.line_linked.width = 1;
delete config.particles.move;
config.interactivity.events.onhover.enable = true;
config.interactivity.events.onhover.mode = "grab";
config.interactivity.modes.grab.distance = 140;
config.interactivity.modes.repulse.duration = 0.4;

  
  console.log(config);
  particlesJS('particles-js', config);
  
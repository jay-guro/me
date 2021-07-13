'use strict';
// Tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll("#tab-content> div");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((item) => item.classList.remove("is-active"));
        tab.classList.add("is-active");
        const target = tab.dataset.target;
        tabContentBoxes.forEach((box) => {
            if (box.getAttribute("id") === target) {
                box.classList.remove("is-hidden");
            } else {
                box.classList.add("is-hidden");
            }
        });
    });
});

// Burger
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// ParticlesJS
window.onload = function () {
   particlesJS.load("tsparticles-js", "js/particles.json", function () {
   });
};

// Loader
$(document).ready(function () {
   setTimeout(function () {
      $('body').addClass('loaded');
   }, 1500);
});

// Modal
class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		this.close_data()
	}
	
	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}
	
	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}
	
	close_data() {
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {
				
				that.elem.classList.toggle('is-active')

				var event = new Event('modal:close')

				that.elem.dispatchEvent(event);
			})
		})
	}
	
	on_show() {
		var event = new Event('modal:show')
	
		this.elem.dispatchEvent(event);
	}
	
	on_close() {
		var event = new Event('modal:close')
	
		this.elem.dispatchEvent(event);
	}
	
	addEventListener(event, callback) {
		this.elem.addEventListener(event, callback)
	}
}

var modal1 = document.querySelector("#karmafixer")
var modal2 = document.querySelector("#tsande")
var modal3 = document.querySelector("#prepagohunters")
var resume = document.querySelector("#resumeSelector")
var kfm = new BulmaModal("#kfModal")
var tsem = new BulmaModal("#tseModal")
var phm = new BulmaModal("#phModal")
var resumeSelector = new BulmaModal("#resumeModal")

modal1.addEventListener("click", function () {
  kfm.show()
})

modal2.addEventListener("click", function () {
  tsem.show()
})

modal3.addEventListener("click", function () {
  phm.show()
})

resume.addEventListener("click", function () {
	resumeSelector.show()
  })

kfm.addEventListener('modal:show', function() {
	console.log("opened")
})

kfm.addEventListener("modal:close", function() {
	console.log("closed")
})

tsem.addEventListener('modal:show', function() {
	console.log("opened")
})

tsem.addEventListener("modal:close", function() {
	console.log("closed")
})

phm.addEventListener('modal:show', function() {
	console.log("opened")
})

phm.addEventListener("modal:close", function() {
	console.log("closed")
})

resumeSelector.addEventListener('modal:show', function() {
	console.log("opened")
})

resumeSelector.addEventListener("modal:close", function() {
	console.log("closed")
})
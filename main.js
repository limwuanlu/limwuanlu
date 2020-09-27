
$(document).ready(function() {
	$('.container--horizontal').pagepiling({
	    menu: null,
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        menu: '.menu',
	    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});


if(window.innerWidth < 1200){
    burger = document.querySelector(".menu-btn");
    console.log(burger);
    burger.addEventListener("click", function(){
        nav.classList.toggle("close");
    })
}

var submitted = false;

function validateName() {
    var name = document.getElementById('name').value;
    if(!name.match(/^[a-zA-Z]{3,}(?: [a-zA-z]+){0,2}$/)){
        alert("Please enter your correct name!");
        return false;
    }
    return true;
}

function validateForm() {
    if(!validateName()) {
        return false;
    }
    else {
        submitted = true;
        var thankyou = 'Your message was sent successfully. Thanks';
        document.getElementById('success').append(thankyou);
        return true;
    }
}



function resetForm() {
    document.getElementById('contact-form').reset();
    console.log('Reset');
}


(function($){
  // variables
  elementWidth = $('ul').width(),
  containerWidth = $('nav').width(),
  difference = elementWidth-containerWidth,
  finalWidth = difference * 1.5,
  element = $('ul');
  
  // active on click
  $('li').on('click', function(){
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  
})(jQuery);

// Toggle Menu Script
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

// Function to toggle the mobile menu
function toggleMenu() {
    // Toggle the 'show' class on the mobile menu
    mobileMenu.classList.toggle("show");
    
    // Update the menu button icon
    if (mobileMenu.classList.contains("show")) {
        menuButton.innerHTML = '&times;'; // Change to 'X' icon
        mobileMenu.setAttribute('aria-hidden', 'false'); // Accessibility attribute
    } else {
        menuButton.innerHTML = '&#9776;'; // Change back to hamburger icon
        mobileMenu.setAttribute('aria-hidden', 'true'); // Accessibility attribute
    }
}

// Add event listener to the menu button
menuButton.addEventListener("click", toggleMenu);

// Hide the menu when clicking outside the menu or button
document.addEventListener("click", (event) => {
    const isClickInsideMenuOrButton = mobileMenu.contains(event.target) || menuButton.contains(event.target);

    if (!isClickInsideMenuOrButton && mobileMenu.classList.contains("show")) {
        toggleMenu();
    }
});
// Hide the mobile menu when clicking on an item in the nav-bar
mobileMenu.addEventListener("click", (event) => {
    const targetElement = event.target;
    
    // Check if the clicked element is a link in the menu
    if (targetElement.tagName === "LI") {
        // If the link is clicked, hide the mobile menu
        if (mobileMenu.classList.contains("show")) {
            toggleMenu();
        }
    }
});

// set up text to print, each item in array is new line
var aText = new Array(
"Hello! I'm Shahzeb Alam, a seasoned Front-end Developer with over 4 years and 6 months of experience in crafting engaging digital experiences. My journey began during my graduation, and since then, I’ve honed my expertise in Design, Development, SEO, and Graphic Designing, bringing a versatile skill set to every project.

Throughout my career, I’ve successfully delivered over 120 web projects, combining my 3 years of freelancing experience with my time in the corporate sector. These projects span a wide range of industries, showcasing my ability to create high-quality, innovative, and user-friendly solutions tailored to diverse client needs.

My passion for web development extends beyond just coding—I take pride in creating websites that are not only visually appealing but also functional, responsive, and optimized for performance. Whether it’s building a website from scratch, optimizing an existing one, or solving complex technical challenges, I’m committed to delivering results that exceed expectations.

Now based in Noida, I continue to thrive in the dynamic world of web design and development. Let’s collaborate and bring your vision to life!"
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}
typewriter();

//PPH Script
(function(d, s) {
    var useSSL = 'https:' == document.location.protocol;
    var js, where = d.getElementsByTagName(s)[0],
    js = d.createElement(s);
    js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/4113407163/11511552.js?width=300&height=135&orientation=vertical&theme=dark&rnd='+parseInt(Math.random()*10000, 10);
    try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }
}(document, 'script'));

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
// set up text to print, each item in array is new line
var aText = new Array(
"Hello! I'm Shahzeb Alam, a seasoned Web Designer and WordPress Developer with a passion for crafting engaging digital experiences. With a solid background in SEO, Graphic Designing, and Microsoft Office, I bring a versatile skill set to every project. My journey began during my graduation, and over the past 4 years, I've honed my expertise, spending 3 years as a successful Freelancer before transitioning to the corporate sector and delivered more than 50 successful projects to my clients. Now based in Noida, I continue to thrive in the dynamic world of web design and development, delivering innovative solutions that exceed expectations. Let's collaborate and bring your vision to life!"
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

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/*const lu = document.getElementById("navbar__list");
const li = document.createElement("li");
li.appendChild("Mohamed Samir");
lu.appendChild(li);

/**
 * Define Global Variables
 * 
*/



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//variable to get the list
const headingMenu = document.getElementById("navbar__list");

// frag to improve the performance 
const frag =document.createDocumentFragment();

// varible to get the button
const myButtom = document.getElementById("myBtn");

//varible to catch all sections
const AllSections =document.querySelectorAll("section");

const sectionsfun = function(){
// loob in all section
AllSections.forEach((sec)=>{ 
   
    // catch links
    let LT = sec.getAttribute("data-nav");

    // create new node
    let TN = document.createTextNode(LT);

    // create a new element 
    let NL = document.createElement("a");

    // create a li for the ul
    let newli = document.createElement("li");

    //append the new element into the ul 
    newli.appendChild(NL);
    NL.appendChild(TN);
  

    // add event listner click to the li to jump into section
    NL.addEventListener("click", ()=>{
        sec.scrollIntoView({behavior:"smooth"});
    });

    // add all li from frag into ul
  frag.appendChild(newli);  
});

// add the hidding fragment to headding menu
headingMenu.appendChild(frag);

};

sectionsfun();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

// listener work when scroll the page
const whenscroll = function (){

    window.addEventListener("scroll", ()=>{
        AllSections.forEach((sect,index)=>{
            // get the bounder of the sextion (left - right - top - bottom)
            let React = sect.getBoundingClientRect();
            // check the top boundery
            if(React.top > 0 && React.top <200 ){
                const secnav = sect.getAttribute("data-nav");
                // remove
                AllSections.forEach((actsection)=>{
                        //remove class
                        actsection.classList.remove("your-active-class");
    
                });
    
                //add active class
                sect.classList.add("your-active-class"); 
    
                const links =document.querySelectorAll("a");
    
                links.forEach((link)=>{
                    if(link.innerText == secnav){
                    links.forEach((activelink)=>{
                            //remove class
                            activelink.classList.remove("your-active-link");
        
                    });
           
                        //add active link
                        link.classList.add("your-active-link");
                    }
                });
    
                
            }
    
        });
    } );
    
    // button to go to the top
    myButtom.addEventListener("click", ()=>{
    
      document.documentElement.scrollTop = 0;  // to goo to the top 
    
    });

};


whenscroll();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set AllSections as active



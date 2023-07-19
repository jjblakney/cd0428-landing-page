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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */

let menu__link = [     //Declares the menu__link array.

	{
		ulid: 'menu__link',

	},



];





let section = [{
		sectionid: 'section 1', //Declares all the attributes of section elements  and stores as a global variable 
		'data-nav': 'Section 1',
        

	},

	{

		sectionid: 'section2',
		'data-nav': 'Section 2',
        

	},

	{

		sectionid: 'section3',
		'data-nav': 'Section 3',
        
	},

	{
		sectionid: 'section4',
		'data-nav': 'Section 4',
        
	},

];


// The below function runs when the screen loads

window.onload = function Function() {

	for (let i = 0; i < section.length; i++) {

		console.log(section[i].sectionid);
		console.log(section[i]['data-nav']);

	}


	let list = document.getElementById('navbar__list')  // This variable stores all of the elements for the navbar 


	let node = document.createElement('li')    //Elements are created and nodes in them and placed on the navbar
	let node1 = document.createElement('li')
	let node2 = document.createElement('li')
	let node3 = document.createElement('li')

	node.innerHTML = "Section1";
	node1.innerHTML = "Section2";
	node2.innerHTML = "Section3";
	node3.innerHTML = "Section4";



	let node4 = document.createElement('a')
	let node5 = document.createElement('a')
	let node6 = document.createElement('a')
	let node7 = document.createElement('a')
	
	

	node4.textContent = "Section1";
	node5.textContent = "Section2";
	node6.textContent = "Section3";
	node7.textContent = "Section4";


	node4.href = '#section1';
	node5.href = '#section2';
	node6.href = '#section3';
	node7.href = '#section4';
    
	

	node4.className = 'menu__link';
	node5.className = 'menu__link';
	node6.className = 'menu__link';
	node7.className = 'menu__link';
    
    

	node4.innerHTML = "Section1";
	node5.innerHTML = "Section2";
	node6.innerHTML = "Section3";
	node7.innerHTML = "Section4";
	
    
	node4.id = 'menu__link1';
	node5.id = 'menu__link2';
	node6.id = 'menu__link3';
	node7.id = 'menu__link4';
	
	
  
   event.preventDefault();
   
  list.append(node4, node5, node6, node7); //This code loads the navbar and all the nodes 

// Add class 'active' to section when near top of viewport

const allSections = document.querySelectorAll("section");


const allNavItems = document.querySelectorAll(".menu__link");
console.log(allNavItems);


  //This code starts the second function that listens for click and scroll events.
    allNavItems.forEach((link) => {
	link.addEventListener('click',(event) => {

     event.preventDefault();
const targetSection = document.querySelector(link.getAttribute('href'));
      console.log('click');
    
    targetSection.scrollIntoView(
 {	   behavior:'smooth',
       block: 'start',	 

});

});

});
    window.addEventListener('scroll', function(){
  for (let i = 0; i < section.length; i++) {  //The loop iterates over all section elements 

		console.log(section[i].sectionid);
		console.log(section[i]['data-nav']);
		
        
		for (let i = 0; i < menu__link.length; i++) {}
	}
	allSections.forEach(function(section, index) {
	 


		const bounds =                           //This codeblock checks and makes sure the sections are in viewport
			section.getBoundingClientRect();
		console.log(section);
		console.log(bounds);

		const isInViewport =
			bounds.top >= 0 &&
			bounds.left > 0 &&
			bounds.right <= window.innerWidth &&
			bounds.bottom <= window.innerHeight;

		let allNavItems = document.getElementById(section.id.replace('section','menu__link')) //This codeblock turns active status on and off 

		  
		if (isInViewport) {
			section.classList.add("active-section");
			allNavItems.classList.add("active-section");


		} else {
			section.classList.remove("active-section");
			allNavItems.classList.remove("active-section");
		}
		});
	});
};








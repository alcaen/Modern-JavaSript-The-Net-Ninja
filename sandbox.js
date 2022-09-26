// // query selector is the best in my opinion.
// const para = document.querySelector('p');

// console.log(para); //Select single element by element.

// const error = document.querySelector('.error')

// console.log(error); // Select single by class.

// const divError = document.querySelector('div.error')

// console.log(divError); // Select single by element and class.

// const paras = document.querySelectorAll('p');

// console.log(paras); // Select all elements.

// const title = document.getElementById('page-title');

// console.log(title); // Selected only by id.

// const errors = document.getElementsByClassName('error'); // We don't need the (.)

// console.log(errors); // Selected only by classname.

// const ps = document.getElementsByTagName('p'); // Get all p tags.

// console.log(ps); // Selected by tags.

//SECOND PART

// const para = document.querySelector("p");

// console.log(para.innerText); // Displays the inner text on the console.

// para.innerText = "Ninjas are awesome"; // Modify the inner text.

// const paras = document.querySelectorAll("p"); // Selecting all.
// paras.forEach((p, index) => (p.innerText += ` Changing them all #${index}`)); // Changing them all with callback.

// const content = document.querySelector('.content');

// console.log(content.innerHTML);// Output: P or any child

// content.innerHTML = '<h2>This is a new h2 element</h2>'; // Replace a child
// content.innerHTML += '<p>New p element added</p>'; // Add a child

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
// 	content.innerHTML += `<p>${person}</p>` // Append each person
// });

// THIRD PART

// const link = document.querySelector('a'); // Get the element a

// console.log(link.getAttribute('href')); // Select the href attribute.

// link.setAttribute('href', 'https://www.thenetninja.co.uk') // Set the href attribute to a new one ('https://www.thenetninja.co.uk')

// link.innerText = 'The Net-Ninja Website'

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));

// mssg.setAttribute('class', 'success');

// mssg.setAttribute('style', 'color:green');// Create and and an style.

// FOUR PART
// const title = document.querySelector('h1');

// console.log(title.style); // CSS properties.

// console.log(title.style.color);

// title.style.margin = '50px'; // In this way we add instead of overide the previus style

// title.style.color = 'crimson'; // Updates the color.

// title.style.fontSize = '60px';

// title.style.margin = ''; //Delete that style.

// //This way is easy to add remove or modify one style but if we had more we could use the next tool.

// PART FIVE

const content = document.querySelector('p');

console.log(content.classList); //Displays the error class.

content.classList.add('error'); // Ads an specific class;

content.classList.remove('error');// Remove an especific class

content.classList.add('success');

content.classList.toggle('success'); // If the element already has the class it removes it but if not addes it. (toggle)
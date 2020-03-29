/*
// creates a new paragraph and append it to the bottom of the HTML body.
function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
*/

  /*
    1. Get references to all the buttons on the page and sort them in an array.
    2. Loop through all the buttons and add a click event listener to each one.
  
    When any button is pressed, the createParagraph() function will be run.
  */
/*
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
*/

// new function


function createReview() {
    var review = document.createElement('p');
    let name = prompt('username: ')
    let word = prompt('Write a review');
    review.textContent = '['+name+']   '+word;
    document.body.appendChild(review);
}

var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createReview);
}


  
// login
const para = document.querySelector('k');
        para.addEventListener('click', updateName);
        function updateName() {
            let name = prompt('username: ');
            para.textContent = name + '님';
        }


// buy
const purc = document.querySelector('.buy');
    purc.addEventListener('click', updatePurc);
    function updatePurc() {
        let qtt = prompt('구입수량: ');
        purc.textContent = qtt + '개 구입완료';


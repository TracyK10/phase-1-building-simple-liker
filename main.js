// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// selecting the heart class and looping all the elements with the same class
document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', () => {
    //invoking the server
    mimicServerCall()
      .then((res) => {
        // check if the response was successful
        if (res === "Pretend remote server notified of action!") {
          //check if the heart is clicked
          if (heart.textContent === EMPTY_HEART) {
            //changing it to a red heart
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          } else {
            //removing the red heart
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        }
      })
      //catching the error
      .catch((error) => {
        let errorMessage = document.querySelector('.hidden');
        errorMessage.innerHTML = `<p>${error}</p>`;
        setTimeout(() => errorMessage.innerHTML = '', 3000);
      });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

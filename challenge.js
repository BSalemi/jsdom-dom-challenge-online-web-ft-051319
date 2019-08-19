let likesChild = document.querySelector('.likes')
let likesCount = {};
// console.log(commentList);
// console.log(commentForm);
let pauseBtn = document.getElementById('pause');
// console.log(pauseBtn);

// console.log(likeBtn);
let addBtn = document.getElementById('+');
// console.log(addBtn);
let minusBtn = document.getElementById('-');
// console.log(minusBtn);

// console.log(counterId);
let likeBtn = document.getElementById('<3');
let numLikes = document.getElementsByClassName('likes');
// console.log(numLikes);


let counterId = document.getElementById('counter');

function increment() {
    counterId.innerText = parseInt(counterId.innerText) + 1;
    let hashCount = likesCount[counterId.innerText]
    likesChild.innerHTML = hashCount ? `<li>${likesCount[counterId.innerText]}</li>` : ``
 };

let interval = setInterval(increment, 1000);

 addBtn.addEventListener('click', function(){
    increment();
 });

function decrement() {
    counterId.innerText = parseInt(counterId.innerText) - 1;
    let hashCount = likesCount[counterId.innerText]
    likesChild.innerHTML = hashCount? `<li>${likesCount[counterId.innerText]}</li>` : ""
};

minusBtn.addEventListener('click', function(){
    decrement();
});


let commentList = document.getElementById('list');
let commentForm = document.getElementById('comment-form');
let commentInput = document.querySelector('input');

    commentForm.addEventListener('submit', function(e){
        e.preventDefault();
        let comment = commentInput.value
        commentList.innerHTML += `<ul>${comment}</ul>`;    
        commentInput.value = "";
        });

        likeBtn.addEventListener('click', function(e){
            numLikes.innerText += 1;
        })

        pauseBtn.addEventListener('click', function(e){
            if  (e.target.innerText == "pause") {
                clearInterval(interval);
                likeBtn.disabled = true;
                minusBtn.disabled = true;
                addBtn.disabled = true;
                pauseBtn.innerText = "resume";
            } 
            
            else if (e.target.innerText == "resume") {
                interval = setInterval(increment, 1000);
                likeBtn.disabled = false;
                minusBtn.disabled = false;
                addBtn.disabled = false;
                pauseBtn.innerText = "pause";

            }
        });

      
        // Code for what to do when the like button is pressed for a second
        // Step 1. Grab second in counter
           let secondNum = counterId.innerText 
        // Step 2. Sets value of secondNum as a key to 1
            if (likesCount[secondNum]) {
                likesCount[secondNum] += 1
            } else {
                likesCount[secondNum] = 1
            }


        
    function updateLikes(){
        
        let secondNum = counterId.innerText 
        
            if (likesCount[secondNum]) {
                likesCount[secondNum] += 1
            } else {
                likesCount[secondNum] = 1
            }
            //the purpose of this line of code is just to make changes on the dom that reflect the like count
            //for the given second
            console.log(likesCount)
            likesChild.innerHTML = `<li>${likesCount[secondNum]}</li>`  
    } 
  

        document.addEventListener("DOMContentLoaded", () => {
            likeBtn.addEventListener('click', updateLikes)  
        })

        // Keep track of #num_likes per each particular number 
           
 
      
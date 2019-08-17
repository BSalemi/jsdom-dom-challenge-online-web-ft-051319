
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
 };

let interval = setInterval(increment, 1000);

 addBtn.addEventListener('click', function(){
    increment();
 });

function decrement() {
    counterId.innerText = parseInt(counterId.innerText) - 1;
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

      likeBtn.addEventListener('click', function(e){
        const taskLi = document.createElement("li");
        document.querySelector(".likes").append(taskLi);
        let NumLikes = document.getElementsByTagName('li').length 
        return NumLikes
        
      })

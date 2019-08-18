
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

        // 1. Create an li whose initial value is going to be 1 on first click
        // 2. If clicked again, check if ul has child node inside if so grab node/check value.

        let likesChild = document.querySelector('.likes')

        const taskLi = document.createElement("li");
        function appendLikes(){
            
            if(likesChild.innerHTML != null) {
                likesChild = parseInt(likesChild.innerHTML) + 1 ;
                // likesChild.innerHTML = likesTotal;
         } else {

                taskLi.innerText = 0; 
                taskLi.innerText = parseInt(taskLi.innerText) + 1
                document.querySelector(".likes").append(taskLi); 
        } }


        likeBtn.addEventListener('click', appendLikes)  
           
 
      
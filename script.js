let likes = 0;
let commentss = 0;
let likess = document.querySelector(".like");

function like() {
  likes++;
  likess.className = 'click_red';
  updateResult();
}

function likees() {
    likes++;
    likess.className = 'click_red';
    updateResult();
  }
function comments() {
  commentss++;
  updateResult();
}

function updateResult() {
  document.getElementById("result").innerText = "Likes: " + likes + " | comments: " + commentss;
}

let postText = document.querySelector("#postText");


function addpost() {
    const postDiv = document.createElement('div');
    postDiv.classList.add('postd');
    postDiv.innerHTML = postText.value;
    document.getElementById('posts').appendChild(postDiv);
        document.getElementById('postText').value = '';
}
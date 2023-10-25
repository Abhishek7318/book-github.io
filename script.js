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

// drawer 
function openDrawer(){

  let profile_drower = document.querySelector(".profile_drower")
  profile_drower.className = "profile_drower_js"
  
}


document.getElementById("toggle").addEventListener("change", function() {
  const body = document.querySelector("body");
  body.style.backgroundColor = this.checked ? "#333" : "#fff";
  const user_part = document.querySelector(".user_part");
  user_part.style.backgroundColor = this.checked ? "#333" : "#fff";
  const upload_photo_section = document.querySelector(".upload_photo_section");
  upload_photo_section.style.backgroundColor = this.checked ? "#333" : "#fff";
  const mode_box = document.querySelector(".mode_box");
  mode_box.style.backgroundColor = this.checked ? "#161616" : "rgb(248, 243, 243)";
 const back = document.querySelector(".back");
 back.style.backgroundColor = this.checked ? "#161616" : "rgb(248, 243, 243)";
  
  let h5 = document.querySelector(".h5");
  h5.style.color = this.checked ?   "#fff" : "#161616";
  let hh = document.querySelector(".hh");
  hh.style.color = this.checked ?   "#fff" : "#161616";

});

  let profile_drower = document.querySelector(".profile_drower");
const hh = document.querySelector(".hh");
hh.addEventListener("click", () => {
  profile_drower.className = "profile_drower"
})

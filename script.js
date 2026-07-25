import posts from "./post.js";

const mainContent = document.getElementById("main-content");

const listOfPost = posts.map((post) => {
  return `
    <div class="main-container">
        <div class="avatar-container">
          <img src="${post.avatar}" alt="" />
          <div>
            <p><strong>${post.name}</strong></p>
            <p>${post.location}</p>
          </div>
        </div>
        <img src="${post.post}" alt="" class="main-image" />
        <div class="container-props">
          <div class="container-icons">
            <button><img src="./images/icon-heart.png"></button>
            <button>
                <img src="./images/icon-comment.png">
            </button>
            <button><img src="./images/icon-dm.png"></button>
          </div>
          <p><strong>${post.likes} likes</strong></p>
          <p><strong>${post.username}</strong> ${post.comment}</p>
        </div>
      </div>
    `;
});

mainContent.innerHTML += listOfPost.join("");

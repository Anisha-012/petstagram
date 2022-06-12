const likebuttons=document.querySelectorAll(".like-btn")
function handleLike(event){
    event.target.classList.toggle("active");
}
likebuttons.forEach((likeButtons) => {
    likeButtons.addEventListener("click",handleLike);
});
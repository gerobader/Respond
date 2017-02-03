document.addEventListener('click', click, true);

function initialize() {
    var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('eventImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}

function click(){
    document.getElementById('myModal').style.display="none";
}
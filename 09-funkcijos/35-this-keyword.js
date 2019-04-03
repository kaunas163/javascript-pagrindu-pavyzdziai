// function -> global (window in browsers, global in node)

function playVideo() {
    console.log(this);
}

playVideo();

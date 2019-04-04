// second way

function playVideo() {
    console.log(this);
}

playVideo();

playVideo.call({ name: 'bbb' });
playVideo.apply({ name: 'ccc' });

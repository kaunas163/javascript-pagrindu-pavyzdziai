/* this - represents object that is
executing the current function
*/

// method -> object

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play();

video.stop = function() {
    console.log(this);
}

video.stop();

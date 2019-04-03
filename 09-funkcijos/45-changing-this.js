function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'a' }, 1, 2);
playVideo.apply({ name: 'b' }, [1, 2]);

// const fn = playVideo.bind({ name: 'c' });
// fn();

playVideo.bind({ name: 'c' })();

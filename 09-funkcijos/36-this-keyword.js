function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b'); // {}

// kai naudojamas zodis new, tai jis kuria nauja {} ir
// this rodo i ta nauja {}

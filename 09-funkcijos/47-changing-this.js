// third way

const video = {
    title: 'c',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => console.log(this.title, tag));
    }
};

video.showTags();

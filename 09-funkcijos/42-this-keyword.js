const video = {
    title: 'a',
    tags: ['b', 'c', 'd'],
    showTags() {
        this.tags.forEach(tag => console.log(this.title, tag));
    },
};

video.showTags();

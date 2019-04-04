const video = {
    title: 'a',
    tags: ['b', 'c', 'd'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(tag);
        });
    },
};

video.showTags();

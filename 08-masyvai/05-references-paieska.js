const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

console.log(courses.includes({ id: 1, name: 'a' }));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const course = courses.find(function (course) {
    return course.name === 'a';
});

const courseIndex = courses.findIndex(function (course) {
    return course.name === 'a';
});

const courseNotFoundExample = courses.find(function (course) {
    return course.name === 'xyz';
});

const courseNotFoundIndexExample = courses.findIndex(function (course) {
    return course.name === 'xyz';
});

console.log(course);
console.log(courseIndex);

console.log(courseNotFoundExample);
console.log(courseNotFoundIndexExample);


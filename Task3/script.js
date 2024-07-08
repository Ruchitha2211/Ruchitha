
document.addEventListener("DOMContentLoaded", function() {
    const courses = [
        { id: 1, title: "JavaScript for Beginners", description: "Learn the basics of JavaScript." },
        { id: 2, title: "HTML & CSS Fundamentals", description: "Understand the building blocks of web development." },
        { id: 3, title: "Advanced React", description: "Deep dive into React and its ecosystem." }
    ];

    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        enrolledCourses: [1, 2]
    };

    function displayCourses() {
        const courseList = document.getElementById("course-list");
        courseList.innerHTML = "";
document.addEventListener("DOMContentLoaded", function() {
    const courses = [
        { id: 1, title: "JavaScript for Beginners", description: "Learn the basics of JavaScript." },
        { id: 2, title: "HTML & CSS Fundamentals", description: "Understand the building blocks of web development." },
        { id: 3, title: "Advanced React", description: "Deep dive into React and its ecosystem." }
    ];

    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        enrolledCourses: [1, 2]
    };

    function displayCourses() {
        const courseList = document.getElementById("course-list");
        courseList.innerHTML = "";
}

    function displayUserProfile() {
        const userProfile = document.getElementById("user-profile");
        userProfile.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <h3>Enrolled Courses</h3>
            <ul>
                ${user.enrolledCourses.map(courseId => {
                    const course = courses.find(c => c.id === courseId);
                    return `<li>${course.title}</li>`;
                }).join('')}
            </ul>
        `;
    }

    window.enroll = function(courseId) {
        if (!user.enrolledCourses.includes(courseId)) {
            user.enrolledCourses.push(courseId);
            displayUserProfile();
            alert("Enrolled successfully!");
        } else {
            alert("You are already enrolled in this course.");
        }
    };

    displayCourses();
    displayUserProfile();
});

const stored = localStorage.getItem('courses');
const courses = stored ? JSON.parse(stored) : [];

const courseSection = document.getElementById("courses");

courses.forEach(course => {
  const card = document.createElement("div");
  card.className = "course-card";
  card.innerHTML = `
    <h3>${course.title}</h3>
    <iframe src="${course.video}" allowfullscreen></iframe>
  `;
  courseSection.appendChild(card);
});
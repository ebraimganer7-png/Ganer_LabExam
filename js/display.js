import {
  calculateFinalGrade,
  getAcademicStatus,
  getPerformanceRemark,
  calculateClassAverage,
  countPassingStudents,
  getTopStudent
} from "./gradeUtils.js";

export function displayStudents(students) {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  if (students.length === 0) {
    studentList.textContent = "No students found";
    return;
  }

  students.forEach((student) => {
    const { id, name, block, quiz, lab, exam } = student;
    const finalGrade = calculateFinalGrade(student);
    const status = getAcademicStatus(finalGrade);
    const remark = getPerformanceRemark(finalGrade);

    const card = document.createElement("article");
    card.className = "student-card";
    card.dataset.id = id;

    card.innerHTML = `
      <h3 class="student-name">${name}</h3>
      <p class="student-block">Block: ${block}</p>
      <ul class="student-scores">
        <li>Quiz: ${quiz}</li>
        <li>Lab: ${lab}</li>
        <li>Exam: ${exam}</li>
      </ul>
      <p class="student-grade">Final Grade: ${finalGrade.toFixed(2)}</p>
      <p class="student-status">Status: ${status}</p>
      <p class="student-remark">Remark: ${remark}</p>
    `;

    studentList.appendChild(card);
  });
}

export function displaySummary(students) {
  const classAverageEl = document.getElementById("classAverage");
  const passingCountEl = document.getElementById("passingCount");
  const displayedCountEl = document.getElementById("displayedCount");
  const topStudentEl = document.getElementById("topStudent");

  const average = calculateClassAverage(students);
  const passingCount = countPassingStudents(students);
  const topStudent = getTopStudent(students);

  classAverageEl.textContent = average.toFixed(2);
  passingCountEl.textContent = passingCount;
  displayedCountEl.textContent = students.length;
  topStudentEl.textContent = topStudent ? topStudent.name : "N/A";
}

export function displayMessage(message) {
  const messageArea = document.getElementById("messageArea");
  messageArea.textContent = message;
}

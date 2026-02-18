"use strict";

let courses = [];

document.addEventListener("DOMContentLoaded", async () => {
    loadData();
    console.log("programmet fortsätter")
});

async function loadData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json"

    //Anropa och läs ut data
    try {
        const response = await fetch(url)
        courses = await response.json();
        displayCourses(courses);
    } catch (error){
        console.error("fel: " + error);
    }
}

function displayCourses(courses) {
    const tableBody = document.getElementById("courses");

    tableBody.innerHTML = "";

    courses.forEach(course => {
        const row = document.createElement("tr");

        row.innerHTML= `
            <td>${course.code}</td>
            <td>${course.coursename}</td>
            <td>${course.progression}</td>
        `
        tableBody.appendChild(row);
    });
}

"use strict";

let courses = [];

document.addEventListener("DOMContentLoaded", async () => {
    loadData();
    console.log("programmet fortsätter")

    //händelselyssnare för sortering

    //kurskod
    document.querySelector("#sort-by-code").addEventListener("click", () => {
        const sortedByCode = [...courses].sort((a, b) => 
            a.code.localeCompare(b.code)
    );
    displayCourses(sortedByCode);
    });

    //kursnamn
    document.querySelector("#sort-by-name").addEventListener("click", () => {
        const sortedByName = [...courses].sort((a, b) => 
            a.coursename.localeCompare(b.coursename)
    );
    displayCourses(sortedByName);
    });

    //progression
    document.querySelector("#sort-by-progression").addEventListener("click", () => {
        const sortedByProgresssion = [...courses].sort((a, b) => 
            a.progression.localeCompare(b.progression)
    );
    displayCourses(sortedByProgresssion);
    });

    //filtrering i sökfältet
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value;

        const filterCourses = courses.filter(course =>
            course.code.includes(searchText) ||
            course.coursename.includes(searchText)
        );

        displayCourses(filterCourses);
    })

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


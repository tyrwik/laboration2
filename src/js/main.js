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
        const courses = await response.json();
        displayCourses(courses);
    } catch (error){
        console.error("fel: " + error);
    }
}


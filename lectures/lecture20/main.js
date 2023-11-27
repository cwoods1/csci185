// ignore this function for now. We'll go over it
// on Wednesday:
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2024/spring/`;
    data = await fetch(url).then((response) => response.json());
}
fetchCourses();

/* Your Tasks:
    1. Output the title of the first course to the console.
    2. Output the name of the course's instructor to the console.
    3. Output the title of the first course to the #results section.
    4. Output the title and the instructor of the first course to the #results section.
    5. Output ALL of the course titles to the console.
    6. Output ALL of the course titles to the #results section.
    7. Output ALL of the diversity intensive courses to the results section.
    8. Questions to ponder:
        * How could you make this interface 
          more useful and engaging?
        * How could you allow your user to...
            * Select which department they want to view?
            * Select which term they want to view?
            * Only view classes that meet on Tuesdays and Thursdays? 
*/

function search() {
    // 1. clear the results panel:
    document.querySelector(".courses").innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        // 2. create an HTML snippet that represents the course:
        let instructor = "TBD";
        if (data[i].Instructors.length > 0) {
            instructor = data[i].Instructors[0].Name;
        }
        const htmlSnippet = `
            <section class="course">
                <h2>${data[i].Code}: ${data[i].Title}</h2>
                <p>
                    ${data[i].Days} &bull; 
                    ${data[i].Location.FullLocation} &bull; 
                    ${data[i].Hours} credit hour(s)
                </p>
                <p><strong>${instructor}</strong></p>
            </section>
        `;
        // 3. append the HTML snippet to the element with a class of "courses":
        // New rule: only add if the course matches the search term:
        let searchTerm = document.querySelector("#search_term").value;
        searchTerm = searchTerm.toLowerCase().trim();

        if (data[i].Department === searchTerm) {
            document.querySelector(".courses").insertAdjacentHTML("beforeend", htmlSnippet);
        }
    }
    console.log(data);
}


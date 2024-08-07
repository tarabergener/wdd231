const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

let color = "#E76F51"

function displayClasses(courseInfo) {

    let courseDiv = document.querySelector(".options").innerHTML = "";
    courseInfo.forEach(course => {

        let tile = document.createElement("ul");
        let subject = document.createElement("li");

        subject.textContent = `<li class="classes">${course.subject}</li>`;

        tile.appendChild(subject)

        document.querySelector(".options").appendChild(tile);
        })

    courseDiv.addEventListener('click', () => {
        displayModal(courseInfo);
    })
}

function changeElementColor(tile, color) {

    for (let i = 0; i < tile.length; i++) {

        tile[i].style.backgroundColor = color;
    }

    for (const [key, value] of Object.entries(displayClasses())) {

        if (value[0].isValue) {

            const tile = document.querySelectorAll(".classes");
            changeElementColor(tile, "#E76F51");

        } else {

            const tile = document.getElementsByClassName("classes");
            changeElementColor(tile, "#E0FBFC");
        }
    }
}

function displayModal(courseInfo) {
    
    let courseDetails = document.getElementById("course-details").innerHTML = "";
    courseInfo.forEach(course => {

        let close = document.createElement("button");
        let header = document.createElement("h2");
        let title = document.createElement("h3");
        let credits = document.createElement("p");
        let certificate = document.createElement("p");
        let description = document.createElement("p");
        let technology = document.createElement("p");

        close.textContent = `<button id="closeModal">X</button>`;
        header.textContent = `<h2>${course.subject} ${course.number}</h2>`;
        title.textContent = `<h3>${course.title}</h3>`;
        credits.textContent = `<p><strong>Credits</strong>: ${course.credits}</p>`;
        certificate.textContent = `<p><strong>Certificate</strong>: ${course.certificate}</p>`;
        description.textContent = `<p>${course.description}</p>`;
        technology.textContent = `<p><strong>Technology</strong>: ${course.technology.join(', ')}</p>`;
    
        courseDetails.showModal();

        closeModal.addEventListener("click", () => {
            courseDetails.close();
        })
    })
}
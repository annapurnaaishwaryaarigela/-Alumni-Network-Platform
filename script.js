/* =========================================
   ALUMNI NETWORK
   JAVASCRIPT
========================================= */


/* =========================================
   ALUMNI DATA
========================================= */

let alumni = [

    {
        name: "Aarav Sharma",
        batch: "2021-2025",
        location: "Bangalore",
        profession: "Software Engineer",
        company: "Google",
        initials: "AS"
    },

    {
        name: "Priya Reddy",
        batch: "2021-2025",
        location: "Hyderabad",
        profession: "Data Scientist",
        company: "Microsoft",
        initials: "PR"
    },

    {
        name: "Rahul Mehta",
        batch: "2016-2020",
        location: "Mumbai",
        profession: "Entrepreneur",
        company: "Mehta Labs",
        initials: "RM"
    },

    {
        name: "Ananya Rao",
        batch: "2021-2025",
        location: "Chennai",
        profession: "Software Engineer",
        company: "Amazon",
        initials: "AR"
    },

    {
        name: "Vikram Singh",
        batch: "2010-2015",
        location: "Delhi",
        profession: "Academician",
        company: "Delhi University",
        initials: "VS"
    },

    {
        name: "Neha Kapoor",
        batch: "2016-2020",
        location: "Bangalore",
        profession: "Data Scientist",
        company: "Infosys",
        initials: "NK"
    },

    {
        name: "Karthik Kumar",
        batch: "2010-2015",
        location: "Chennai",
        profession: "Entrepreneur",
        company: "KK Ventures",
        initials: "KK"
    },

    {
        name: "Sneha Patel",
        batch: "2021-2025",
        location: "Mumbai",
        profession: "Healthcare Professional",
        company: "Apollo",
        initials: "SP"
    },

    {
        name: "Arjun Nair",
        batch: "2016-2020",
        location: "Hyderabad",
        profession: "Software Engineer",
        company: "TCS",
        initials: "AN"
    }

];


/* =========================================
   EVENTS DATA
========================================= */

let events = [

    {
        name: "Annual Alumni Meet 2026",
        date: "2026-10-18",
        location: "Hyderabad Convention Center",
        type: "Networking",
        attendees: 128
    },

    {
        name: "Tech Career Workshop",
        date: "2026-10-25",
        location: "Online",
        type: "Workshop",
        attendees: 84
    },

    {
        name: "Alumni Cricket Meetup",
        date: "2026-11-08",
        location: "Chennai Sports Arena",
        type: "Community",
        attendees: 56
    },

    {
        name: "Entrepreneurship Connect",
        date: "2026-11-20",
        location: "Bangalore",
        type: "Networking",
        attendees: 72
    }

];


/* =========================================
   JOB DATA
========================================= */

let jobs = [

    {
        title: "Frontend Developer",
        company: "TechNova",
        location: "Bangalore",
        type: "Full Time",
        experience: "1-3 years"
    },

    {
        title: "Data Analyst",
        company: "Insight Labs",
        location: "Hyderabad",
        type: "Full Time",
        experience: "0-2 years"
    },

    {
        title: "Java Developer",
        company: "CloudWorks",
        location: "Chennai",
        type: "Full Time",
        experience: "2-4 years"
    },

    {
        title: "Web Development Intern",
        company: "Digital Hub",
        location: "Remote",
        type: "Internship",
        experience: "Students"
    },

    {
        title: "Product Designer",
        company: "Creative Labs",
        location: "Mumbai",
        type: "Full Time",
        experience: "1-3 years"
    }

];


/* =========================================
   MENTOR DATA
========================================= */

const mentors = [

    {
        name: "Rohan Verma",
        profession: "Senior Software Engineer",
        company: "Google",
        experience: "9 Years",
        initials: "RV"
    },

    {
        name: "Meera Iyer",
        profession: "Data Science Lead",
        company: "Microsoft",
        experience: "8 Years",
        initials: "MI"
    },

    {
        name: "Aditya Shah",
        profession: "Startup Founder",
        company: "FinTech Labs",
        experience: "11 Years",
        initials: "AS"
    },

    {
        name: "Divya Menon",
        profession: "Product Manager",
        company: "Amazon",
        experience: "7 Years",
        initials: "DM"
    }

];


/* =========================================
   CAMPAIGNS
========================================= */

const campaigns = [

    {
        title: "Student Scholarship Fund",
        description:
            "Support deserving students with scholarships and educational assistance.",
        image:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
        raised: 350000,
        goal: 500000
    },

    {
        title: "Digital Learning Lab",
        description:
            "Help build a modern technology laboratory for students.",
        image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
        raised: 275000,
        goal: 400000
    },

    {
        title: "Community Education Program",
        description:
            "Provide learning resources and mentorship to local students.",
        image:
            "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
        raised: 180000,
        goal: 300000
    }

];


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active-page");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.remove("mobile-open");
    }

    if (pageId === "directory") {
        renderAlumni(alumni);
    }

    if (pageId === "events") {
        renderEvents();
    }

    if (pageId === "jobs") {
        renderJobs();
    }

    if (pageId === "mentorship") {
        renderMentors();
    }

    if (pageId === "fundraising") {
        renderCampaigns();
    }
}


/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleMobileMenu() {

    const nav = document.getElementById("mainNav");

    nav.classList.toggle("mobile-open");
}


/* =========================================
   ALUMNI DIRECTORY
========================================= */

function renderAlumni(data) {

    const grid = document.getElementById("alumniGrid");

    if (!grid) {
        return;
    }

    if (data.length === 0) {

        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:50px;">
                <h3>No alumni found</h3>
                <p style="color:#64748B;">
                    Try changing your search or filters.
                </p>
            </div>
        `;

        return;
    }


    grid.innerHTML = data.map(person => `

        <article class="alumni-card">

            <div class="avatar">
                ${person.initials}
            </div>

            <div>

                <h3>${person.name}</h3>

                <p>
                    ${person.profession}
                </p>

                <p>
                    ${person.company}
                </p>

                <div class="alumni-meta">

                    <span class="tag">
                        ${person.batch}
                    </span>

                    <span class="tag">
                        ${person.location}
                    </span>

                </div>

            </div>

        </article>

    `).join("");
}


/* =========================================
   FILTER ALUMNI
========================================= */

function filterAlumni() {

    const search =
        document
            .getElementById("alumniSearch")
            .value
            .toLowerCase();

    const batch =
        document.getElementById("batchFilter").value;

    const location =
        document.getElementById("locationFilter").value;

    const profession =
        document.getElementById("professionFilter").value;


    const filtered = alumni.filter(person => {

        const matchesSearch =
            person.name.toLowerCase().includes(search) ||
            person.profession.toLowerCase().includes(search) ||
            person.company.toLowerCase().includes(search);

        const matchesBatch =
            !batch ||
            person.batch === batch;

        const matchesLocation =
            !location ||
            person.location === location;

        const matchesProfession =
            !profession ||
            person.profession === profession;

        return (
            matchesSearch &&
            matchesBatch &&
            matchesLocation &&
            matchesProfession
        );

    });


    renderAlumni(filtered);
}


/* =========================================
   EVENTS
========================================= */

function renderEvents() {

    const grid =
        document.getElementById("eventsGrid");

    if (!grid) {
        return;
    }


    grid.innerHTML = events.map((event, index) => {

        const date = new Date(event.date);

        const day =
            date.getDate();

        const month =
            date.toLocaleString(
                "en-US",
                {
                    month: "short"
                }
            );


        return `

            <article class="event-card">

                <div class="event-date">

                    <strong>${day}</strong>

                    <span>
                        ${month}
                    </span>

                </div>


                <h3>
                    ${event.name}
                </h3>


                <div class="card-info">

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        ${event.location}
                    </span>

                    <span>
                        <i class="fa-solid fa-tag"></i>
                        ${event.type}
                    </span>

                    <span>
                        <i class="fa-solid fa-users"></i>
                        ${event.attendees} attending
                    </span>

                </div>


                <button
                    class="btn primary-btn"
                    onclick="rsvpEvent(${index})"
                >
                    RSVP Now
                </button>

            </article>

        `;

    }).join("");
}


/* =========================================
   RSVP
========================================= */

function rsvpEvent(index) {

    events[index].attendees++;

    renderEvents();

    showToast(
        `You have successfully RSVP'd for ${events[index].name}`
    );
}


/* =========================================
   CREATE EVENT
========================================= */

function openEventModal() {

    document
        .getElementById("eventModal")
        .classList.add("show");
}


function createEvent(event) {

    event.preventDefault();


    const name =
        document.getElementById("eventName").value;

    const date =
        document.getElementById("eventDate").value;

    const location =
        document.getElementById("eventLocation").value;


    events.unshift({

        name: name,

        date: date,

        location: location,

        type: "Community",

        attendees: 0

    });


    closeModal("eventModal");

    event.target.reset();

    renderEvents();

    showToast("Event created successfully!");
}


/* =========================================
   JOB BOARD
========================================= */

function renderJobs() {

    const grid =
        document.getElementById("jobsGrid");

    if (!grid) {
        return;
    }


    grid.innerHTML = jobs.map((job, index) => `

        <article class="job-card">

            <div class="feature-icon">
                <i class="fa-solid fa-briefcase"></i>
            </div>

            <div class="job-company">
                ${job.company}
            </div>

            <h3>
                ${job.title}
            </h3>

            <div class="card-info">

                <span>
                    <i class="fa-solid fa-location-dot"></i>
                    ${job.location}
                </span>

                <span>
                    <i class="fa-solid fa-clock"></i>
                    ${job.type}
                </span>

                <span>
                    <i class="fa-solid fa-user"></i>
                    ${job.experience}
                </span>

            </div>


            <div class="job-tags">

                <span class="tag">
                    ${job.type}
                </span>

                <span class="tag">
                    Alumni Opportunity
                </span>

            </div>


            <button
                class="btn primary-btn"
                onclick="applyJob(${index})"
            >
                Apply Now
            </button>

        </article>

    `).join("");
}


/* =========================================
   APPLY JOB
========================================= */

function applyJob(index) {

    showToast(
        `Application started for ${jobs[index].title}`
    );
}


/* =========================================
   CREATE JOB
========================================= */

function openJobModal() {

    document
        .getElementById("jobModal")
        .classList.add("show");
}


function createJob(event) {

    event.preventDefault();


    const title =
        document.getElementById("jobTitle").value;

    const company =
        document.getElementById("jobCompany").value;

    const location =
        document.getElementById("jobLocation").value;


    jobs.unshift({

        title: title,

        company: company,

        location: location,

        type: "Full Time",

        experience: "Not specified"

    });


    closeModal("jobModal");

    event.target.reset();

    renderJobs();

    showToast("Job posted successfully!");
}


/* =========================================
   MENTORS
========================================= */

function renderMentors() {

    const grid =
        document.getElementById("mentorGrid");

    if (!grid) {
        return;
    }


    grid.innerHTML = mentors.map((mentor, index) => `

        <article class="mentor-card">

            <div class="avatar">
                ${mentor.initials}
            </div>

            <h3>
                ${mentor.name}
            </h3>

            <div class="mentor-role">
                ${mentor.profession}
            </div>

            <p>
                ${mentor.company}
            </p>

            <p>
                ${mentor.experience} experience
            </p>

            <button
                class="btn primary-btn"
                onclick="requestMentor('${mentor.name}')"
            >
                Request Mentorship
            </button>

        </article>

    `).join("");
}


/* =========================================
   MENTOR REQUEST
========================================= */

function requestMentor(name) {

    showToast(
        `Mentorship request sent to ${name}`
    );
}


/* =========================================
   FUNDRAISING
========================================= */

function renderCampaigns() {

    const grid =
        document.getElementById("campaignGrid");

    if (!grid) {
        return;
    }


    grid.innerHTML = campaigns.map(
        (campaign, index) => {

            const percentage =
                Math.min(
                    100,
                    Math.round(
                        campaign.raised /
                        campaign.goal *
                        100
                    )
                );


            return `

                <article class="campaign-card">

                    <img
                        class="campaign-image"
                        src="${campaign.image}"
                        alt="${campaign.title}"
                    >


                    <div class="campaign-body">

                        <h3>
                            ${campaign.title}
                        </h3>

                        <p>
                            ${campaign.description}
                        </p>


                        <div class="progress">

                            <div
                                class="progress-bar"
                                style="width:${percentage}%"
                            ></div>

                        </div>


                        <div class="campaign-numbers">

                            <span>
                                ₹${campaign.raised.toLocaleString("en-IN")}
                                raised
                            </span>

                            <span>
                                ${percentage}%
                            </span>

                        </div>


                        <button
                            class="btn primary-btn"
                            onclick="donate(${index})"
                        >
                            <i class="fa-solid fa-heart"></i>
                            Donate Now
                        </button>

                    </div>

                </article>

            `;

        }
    ).join("");
}


/* =========================================
   DONATION
========================================= */

function donate(index) {

    const amount =
        prompt(
            `Enter donation amount for ${campaigns[index].title}`
        );


    if (!amount) {
        return;
    }


    const numericAmount =
        Number(amount);


    if (
        Number.isNaN(numericAmount) ||
        numericAmount <= 0
    ) {

        showToast("Please enter a valid amount.");

        return;
    }


    campaigns[index].raised += numericAmount;

    renderCampaigns();

    showToast(
        `Thank you for your ₹${numericAmount.toLocaleString("en-IN")} donation!`
    );
}


/* =========================================
   PROFILE EDIT
========================================= */

function enableProfileEdit() {

    const inputs =
        document.querySelectorAll(
            ".profile-form input, .profile-form textarea"
        );


    inputs.forEach(input => {

        input.disabled = false;

    });


    document
        .getElementById("saveProfileBtn")
        .classList.remove("hidden");


    showToast("Profile editing enabled.");
}


function saveProfile() {

    const name =
        document.getElementById(
            "profileNameInput"
        ).value;


    document.getElementById(
        "profileName"
    ).textContent = name;


    const inputs =
        document.querySelectorAll(
            ".profile-form input, .profile-form textarea"
        );


    inputs.forEach(input => {

        input.disabled = true;

    });


    document
        .getElementById("saveProfileBtn")
        .classList.add("hidden");


    localStorage.setItem(
        "alumniProfileName",
        name
    );


    showToast("Profile updated successfully!");
}


/* =========================================
   AUTH
========================================= */

let authMode = "login";


function openAuth(mode) {

    authMode = mode;


    const modal =
        document.getElementById("authModal");


    modal.classList.add("show");


    updateAuthUI();
}


function updateAuthUI() {

    const isLogin =
        authMode === "login";


    document.getElementById(
        "authTitle"
    ).textContent =
        isLogin
            ? "Welcome Back"
            : "Create Your Account";


    document.getElementById(
        "authSubtitle"
    ).textContent =
        isLogin
            ? "Login to your alumni account."
            : "Join the alumni community today.";


    document.getElementById(
        "nameField"
    ).style.display =
        isLogin
            ? "none"
            : "flex";


    document.getElementById(
        "authSwitchText"
    ).textContent =
        isLogin
            ? "Don't have an account?"
            : "Already have an account?";


    document.getElementById(
        "authSwitchBtn"
    ).textContent =
        isLogin
            ? "Register"
            : "Login";

}


function switchAuth() {

    authMode =
        authMode === "login"
            ? "register"
            : "login";

    updateAuthUI();
}


function handleAuth(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "authEmail"
        ).value;


    if (authMode === "register") {

        const name =
            document.getElementById(
                "authName"
            ).value;


        localStorage.setItem(
            "alumniUser",
            JSON.stringify({
                name: name,
                email: email
            })
        );


        closeModal("authModal");

        showToast(
            "Registration successful!"
        );

    } else {

        closeModal("authModal");

        showToast(
            "Login successful!"
        );

    }

}


/* =========================================
   CLOSE MODALS
========================================= */

function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");
}


/* =========================================
   DARK MODE
========================================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");


    const dark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "darkMode",
        dark
    );
}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");

    const messageBox =
        document.getElementById(
            "toastMessage"
        );


    messageBox.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


/* =========================================
   DOWNLOAD REPORT
========================================= */

function downloadReport() {

    const report = `

ALUMNI NETWORK PLATFORM
=================================

Project ID:
WD-COL-005

Domain:
Alumni Network

Company:
Data Alcott Systems

Technology:
HTML5
CSS3
JavaScript

CORE FEATURES
=================================

1. Alumni Directory
2. Search and Filters
3. Event Management
4. RSVP
5. Job Board
6. Job Application
7. Mentorship Program
8. Fundraising Campaigns
9. Alumni Profile
10. Admin Dashboard
11. Login/Register

BONUS FEATURES
=================================

1. Alumni Success Stories
2. Photo Gallery
3. News & Announcements
4. Simulated Notifications
5. Dark Mode
6. Downloadable Reports

TECHNICAL IMPLEMENTATION
=================================

Frontend:
HTML5, CSS3, JavaScript

Data Storage:
JavaScript Arrays
LocalStorage

Responsive:
Mobile, Tablet and Desktop

Database:
Not Required

=================================
Generated by Alumni Network Platform
    `;


    const blob =
        new Blob(
            [report],
            {
                type: "text/plain"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "Alumni-Network-Project-Report.txt";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);


    showToast(
        "Project report downloaded!"
    );
}


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderAlumni(alumni);

        renderEvents();

        renderJobs();

        renderMentors();

        renderCampaigns();


        const savedName =
            localStorage.getItem(
                "alumniProfileName"
            );


        if (savedName) {

            document.getElementById(
                "profileName"
            ).textContent =
                savedName;

            document.getElementById(
                "profileNameInput"
            ).value =
                savedName;

        }


        const darkMode =
            localStorage.getItem(
                "darkMode"
            );


        if (darkMode === "true") {

            document.body.classList.add(
                "dark"
            );

        }

    }
);


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener(
    "click",
    event => {

        document
            .querySelectorAll(".modal")
            .forEach(modal => {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "show"
                    );

                }

            });

    }
);
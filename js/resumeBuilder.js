var bio = {
    "name": "Dmitry Pashkov",
    "role": "Software Engineer",
    "contacts": {
        "generic": "Ukraine, Kiev",
        "mobile": "099*******",
        "email": "dvelopp@gmail.com",
        "twitter": "https://twitter.com/dvelopp",
        "github": "https://github.com/dvelopp",
        "blog": "No blog info",
        "location": "Ukraine, Kiev"
    },
    "skills": ["Java", "Spring(MVC, Security, Testing, AOP)", "Hibernate", "JUnit", "Mockito", "Struts", "Tapestry", "JSP",
        "JSTL", "Servlets", "SQL(MySQL, PostgreSQL, Oracle)", "Liquibase", "VCS(Mercurial)", "REST"],
    "biopic": "https://avatars3.githubusercontent.com/u/14136075?v=3&s=460",
    "welcomeMessage": "Software Engineer",
    "display": function () {
        var headerElement = $("#header");
        var topContactElement = $("#topContacts");
        headerElement.prepend(HTMLheaderRole.replace("%data%", this.role));
        headerElement.prepend(HTMLheaderName.replace("%data%", this.name));
        topContactElement.append(HTMLcontactGeneric.replace("%contact%", "Generic data")
            .replace("%data%", this.contacts.generic));
        topContactElement.append(HTMLmobile.replace("%data%", this.contacts.mobile));
        topContactElement.append(HTMLemail.replace("%data%", this.contacts.email));
        topContactElement.append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        topContactElement.append(HTMLgithub.replace("%data%", this.contacts.github));
        topContactElement.append(HTMLblog.replace("%data%", this.contacts.blog));
        topContactElement.append(HTMLlocation.replace("%data%", this.contacts.location));
        headerElement.append(HTMLbioPic.replace("%data%", this.biopic));
        if (this.skills.length > 0) {
            headerElement.append(HTMLskillsStart);
            for (var i = 0; i < this.skills.length; i++) {
                headerElement.append(HTMLskills.replace("%data%", this.skills[i]));
            }
        }
        headerElement.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    }
};

var work = {
        "jobs": [
            {
                "employer": "Ciklum",
                "title": "Java Developer",
                "dates": "JUL 2012 - MAY 2016",
                "location": "Odessa",
                "description": "Ciklum is an international custom software development and IT outsourcing company headquartered in Kyiv," +
                "Ukraine.The company has software development centers and branch offices in the UK, Switzerland, Denmark," +
                "Ukraine, Belarus and Pakistan."
            },
            {
                "employer": "Luxoft",
                "title": "Java Developer",
                "dates": "JUN 2016 - PRESENT",
                "location": "Kiev",
                "description": "The iTravel API provides a simple and cost-effective alternative to the conventional " +
                "development of airline customer applications using SITA’s Reservation Web Services (SRWS)." +
                "iTravel is a component of Horizon, the next generation passenger services system for airlines that" +
                "enables travelers to book, pay, check-in and utilize their frequent flyer accounts by using their mobile devices."
            }
        ],
        "display": function () {
            for (var i = 0; i < this.jobs.length; i++) {
                $("#workExperience").append(HTMLworkStart);
                var workEntryLastSelector = ".work-entry:last";
                $(workEntryLastSelector).append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
                $(workEntryLastSelector).append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
                $(workEntryLastSelector).append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
                $(workEntryLastSelector).append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
                $(workEntryLastSelector).append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
            }
        }
    };

var projects = {
    "projects": [{
        "title": "TeamOnline",
        "dates": "JUL 2012 - MAY 2016",
        "description": "Ciklum is an international custom software development and IT outsourcing company headquartered in Kyiv," +
        "Ukraine.The company has software development centers and branch offices in the UK, Switzerland, Denmark," +
        "Ukraine, Belarus and Pakistan.",
        "image": "http://en.welfaretech.dk/media/4052/eg-team-online-medlemslogo.jpg"
    }, {
        "title": "Sita",
        "dates": "JUN 2016 - PRESENT",
        "description": "The iTravel API provides a simple and cost-effective alternative to the conventional " +
        "development of airline customer applications using SITA’s Reservation Web Services (SRWS)." +
        "iTravel is a component of Horizon, the next generation passenger services system for airlines that" +
        "enables travelers to book, pay, check-in and utilize their frequent flyer accounts by using their mobile devices.",
        "image": "https://www.nfcworld.com/wp-content/uploads/2012/02/sita.png"
    }],
    "display": function () {
        var projectsElement = $("#projects");
        for (var i = 0; i < this.projects.length; i++) {
            projectsElement.append(HTMLprojectStart);
            projectsElement.append(HTMLprojectTitle.replace("%data%", this.projects[i].title));
            projectsElement.append(HTMLprojectDates.replace("%data%", this.projects[i].dates));
            projectsElement.append(HTMLprojectDescription.replace("%data%", this.projects[i].description));
            projectsElement.append(HTMLprojectImage.replace("%data%", this.projects[i].image));
        }
    }
};

var education = {
    schools: [
        {
            "name": "Classic Private University",
            "degree": "Master's degree",
            "dates": "2010 - 2015",
            "location": "Zaporozhye",
            "major": "Software development",
        },
        {
            "name": "Classic Private University",
            "degree": "Specialist",
            "dates": "2007 - 2010",
            "location": "Zaporozhye",
            "major": "Software development",
        }
    ],
    onlineCourses: [
        {
            "title": "duolingo",
            "school": "https://www.duolingo.com/",
            "dates": "2016",
            "url": "https://www.duolingo.com/"
        },
        {
            "title": "Shaping Up With AngularJS",
            "school": "CodeSchool",
            "dates": "2016",
            "url": "https://www.codeschool.com/courses/shaping-up-with-angularjs"
        }
    ],
    "display": function () {
        var educationElement = $("#education");
        for (var i = 0; i < this.schools.length; i++) {
            educationElement.append(HTMLschoolStart);
            educationElement.append(HTMLschoolName.replace("%data%", this.schools[i].name));
            educationElement.append(HTMLschoolDegree.replace("%data%", this.schools[i].degree));
            educationElement.append(HTMLschoolDates.replace("%data%", this.schools[i].dates));
            educationElement.append(HTMLschoolLocation.replace("%data%", this.schools[i].location));
            educationElement.append(HTMLschoolMajor.replace("%data%", this.schools[i].major));
        }
        if (this.onlineCourses.length > 0) {
            educationElement.append(HTMLonlineClasses);
            for (var i = 0; i < this.onlineCourses.length; i++) {
                var currentOnlineCourse = this.onlineCourses[i];
                educationElement.append(HTMLonlineTitle.replace("%data%", currentOnlineCourse.title));
                educationElement.append(HTMLonlineSchool.replace("%data%", currentOnlineCourse.school));
                educationElement.append(HTMLonlineDates.replace("%data%", currentOnlineCourse.dates));
                educationElement.append(HTMLonlineURL.replace("%data%", currentOnlineCourse.url));
            }
        }
    }
};

$("#mapDiv").append(googleMap);
bio.display();
work.display();
education.display();
projects.display();

$(document).ready(function () {
    initializeMap();
});

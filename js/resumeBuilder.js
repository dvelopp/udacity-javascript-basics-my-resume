var bio = {
    "name": "Dmitry Pashkov",
    "role": "Java Developer",
    "contactInfo": {
        "generic": "Ukraine, Kiev",
        "mobile": "My Mobile",
        "email": "My Email",
        "twitter": "My twitter",
        "github": "My github",
        "blog": "My blog",
        "location": "My location"
    },
    "skills": ["Java", "JavaScript", "HTMl"],
    "biopic": "images/me.jpg",
    "welcomeMessage": "My welcome message",
    display: function () {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", "Generic data").replace("%data%", bio.contactInfo.generic));
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contactInfo.email));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contactInfo.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contactInfo.github));
        $("#topContacts").append(HTMLblog.replace("%data%", bio.contactInfo.blog));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contactInfo.location));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    }
};

var work = {
    "jobs": [{
        "employer": "Ciklum",
        "title": "Java Developer",
        "dates": "2012-2016",
        "location": "Ukraine, Odessa",
        "description": "Developing a Spring Based project"
    }, {
        "employer": "Luxoft",
        "title": "Java Developer",
        "dates": "2016-2017",
        "location": "Ukraine, Kiev",
        "description": "Developing a Spring Based project"
    }],
    "display": function () {
        if (work.jobs.length === 0) {
            return;
        }
        for (var jobIndex in work.jobs) {
            var job = work.jobs[jobIndex];
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer));
            $(".work-entry:last").append(HTMLworkTitle.replace("%data%", job.title));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
        }
    }
};

var projects = {
    "projects": [{
        "title": "My project title",
        "dates": "My project dates",
        "description": "My project description",
        "image": "images/197x148.gif"
    }, {
        "title": "My project title 2",
        "dates": "My project dates 2",
        "description": "My project description 2",
        "image": "images/197x148.gif"
    }],
    "display": function () {
        if (projects.projects.length === 0) {
            return;
        }
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            $("#projects").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
            $("#projects").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
            $("#projects").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
            $("#projects").append(HTMLprojectImage.replace("%data%", projects.projects[i].image));
        }
    }
};

var education = {
    schools: [
        {
            "name": "school1",
            "degree": "degree1",
            "dates": "2000-2010",
            "location": "location1",
            "major": "major1",
        },
        {
            "name": "school2",
            "degree": "degree2",
            "dates": "2011-2014",
            "location": "location2",
            "major": "major2",
        }
    ],
    onlineCourses: [
        {
            "title": "Online course title",
            "school": "Online course school",
            "dates": "Online course dates",
            "url": "Online course url"
        }
    ],
    display: function () {
        if (education.schools.length !== 0) {
            for (var i = 0; i < education.schools.length; i++) {
                $("#education").append(HTMLschoolStart);
                $("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
                $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
                $("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
                $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
                $("#education").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
            }
        }
        if (education.onlineCourses.length !== 0) {
            for (var i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLonlineClasses);
                $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
                $("#education").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
                $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
                $("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
            }
        }
    }
};

bio.display();
work.display();
education.display();
projects.display();

function locationizer(work_obj) {
    var locations = [];
    for (var i = 0; i < work_obj.jobs.length; i++) {
        locations.push(work_obj.jobs[i].location);
    }
    return locations;
}

console.log(locationizer(work));

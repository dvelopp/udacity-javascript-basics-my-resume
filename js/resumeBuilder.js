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
    "welcomeMessage": "My welcome message"
};

var work = {};
work.employer = "Ciklum";
work.title = "Java Developer";
work.dates = "2012-2016";
work.location = "Ukraine, Odessa";
work.description = "Developing a Spring Based project";

var projects = [{
    "title": "My project title",
    "dates": "My project dates",
    "description": "My project description",
    "image": "images/197x148.gif"
}];

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
    ]
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", "Generic data").replace("%data%", bio.contactInfo.generic));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contactInfo.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contactInfo.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contactInfo.github));
$("#topContacts").append(HTMLblog.replace("%data%", bio.contactInfo.blog));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contactInfo.location));
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(HTMLskills.replace("%data%", bio.skills));
$("#topContacts").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#topContacts").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.title));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.dates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.location));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work.description));

$("#education").append(HTMLschoolStart);
for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
    $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
    $("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
    $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    $("#education").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
}
$("#education").append(HTMLonlineClasses);
for (var i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
    $("#education").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
    $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
    $("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
}
$("#projects").append(HTMLprojectStart);
for (var i = 0; i < projects.length; i++) {
    $("#projects").append(HTMLprojectTitle.replace("%data%", projects[i].title));
    $("#projects").append(HTMLprojectDates.replace("%data%", projects[i].dates));
    $("#projects").append(HTMLprojectDescription.replace("%data%", projects[i].description));
    $("#projects").append(HTMLprojectImage.replace("%data%", projects[i].image));
}


var bio = {
	 "name": "Dmitry Pashkov",
	 "role": "Java Developer",
	 "contantInfo": {
	 	"generic" : "Ukraine, Kiev",
	 	"mobile": "My Mobile",
	 	"email": "My Email",
	 	"twitter": "My twitter",
	 	"github": "My github",
	 	"blog": "My blog",
	 	"location":"My location"
	 },
	 "skills": ["Java", "JavaScript", "HTMl"],
	 "pic": "images/me.jpg",
	 "welcomeMessage": "My welcome message"
}; 

var work = {};
work.employer = "Ciklum";
work.title = "Java Developer";
work.dates = "2012-2016";
work.location = "Ukraine, Odessa";
work.description = "Developing a Spring Based project";
/*
var education = {};
education["name"] = "My school";
education["degree"] = "My degree";
education["dates"] = "2012-2016";
education["location"] = "My school location";
education["major"] = "My school major";
*/
var educationJSON = {
	schools: [
		{
			"name":"school1",
			"degree":"degree1",
			"dates":"2000-2010",
			"location":"location1",
			"major":"major1",
		},	
		{
			"name":"school2",
			"degree":"degree2",
			"dates":"2011-2014",
			"location":"location2",
			"major":"major2",
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
$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", "Generic data").replace("%data%", bio.contantInfo.generic));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contantInfo.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contantInfo.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contantInfo.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contantInfo.github));
$("#topContacts").append(HTMLblog.replace("%data%", bio.contantInfo.blog));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contantInfo.location));
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(HTMLskills.replace("%data%", bio.skills));
$("#topContacts").append(HTMLbioPic.replace("%data%", bio.pic));
$("#topContacts").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.title));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.dates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.location));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work.description));

$("#education").append(HTMLschoolStart);
for (var i = 0; i < educationJSON.schools.length; i++) {
	$("#education").append(HTMLschoolName.replace("%data%", educationJSON.schools[i].name));
	$("#education").append(HTMLschoolDegree.replace("%data%", educationJSON.schools[i].degree));
	$("#education").append(HTMLschoolDates.replace("%data%", educationJSON.schools[i].dates));
	$("#education").append(HTMLschoolLocation.replace("%data%", educationJSON.schools[i].location));
	$("#education").append(HTMLschoolMajor.replace("%data%", educationJSON.schools[i].major));
}
$("#education").append(HTMLonlineClasses);
for (var i = 0; i < educationJSON.onlineCourses.length; i++) {
	$("#education").append(HTMLonlineTitle.replace("%data%", educationJSON.onlineCourses[i].title));
	$("#education").append(HTMLonlineSchool.replace("%data%", educationJSON.onlineCourses[i].school));
	$("#education").append(HTMLonlineDates.replace("%data%", educationJSON.onlineCourses[i].dates));
	$("#education").append(HTMLonlineURL.replace("%data%", educationJSON.onlineCourses[i].url));
}



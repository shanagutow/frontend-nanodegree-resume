var name = "Shoshana Gutow";
var role = "Front-end Web Something";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["Cool ", "Fun ", "With-it ", "MOM!"];

 var bio = {
 	"bioThings" : [
 		{
			"name" : name,
			"role" : role,
			"contactGeneric" : {
				"mobile" : "555-654-8879",
				"email" : "WebDis558@gmail.com",
				"twitter" : "?",
				"github" : "@github",
				"blog" : "whatever",
				"location" : "Baltimore"
				},
			"picture" : "images/mosh.JPG",
			"message" : "Hey!",
			"skills" : skills
		}
	],
};

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var displayContacts = function() {

	for (parts in bio) {
		var bioThings = bio[parts][0];
			//$("#topContacts").append(HTMLmobile);
			var pic = HTMLbioPic.replace("%data%", bioThings.picture);
			$("#topContacts").append(pic);
			//$("#topContacts").prepend(HTMLbioPic);
			var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bioThings.message);
			$("#topContacts:last").append(welcomeMessage);
			var cell = HTMLmobile.replace("%data%", bioThings.contactGeneric.mobile);
			$("#topContacts:last").append(cell);
			//console.log(cell);
			//$("#topContacts").append(HTMLemail);
			var eMail = HTMLemail.replace("%data%", bioThings.contactGeneric.email);
			$("#topContacts:last").append(eMail);
			var gitHub = HTMLgithub.replace("%data%", bioThings.contactGeneric.github);
			$("#topContacts:last").append(gitHub);
			var twitterName = HTMLtwitter.replace("%data%", bioThings.contactGeneric.twitter);
			$("#topContacts:last").append(twitterName);
			var local = HTMLlocation.replace("%data%", bioThings.contactGeneric.location);
			$("#topContacts:last").append(local);

	};
};

displayContacts();

$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.bioThings[0].skills[0]);
	$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.bioThings[0].skills[1]);
	$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.bioThings[0].skills[2]);
	$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.bioThings[0].skills[3]);
	$("#skills").append(formattedSkill);


var work = {
	"jobs" : [
	{
		"start" : "Aug 2014 to present",
		"employer" : "KD",
		"title"	: "Teacher",
		"dates"	: "1 year",
		"location" : "Baltimore, MD",
		"description" : "18-24 month teacher"
	}
	],
};

var displayWork =function() {
	for (job in work) {
	$("#workExperience").append(HTMLworkStart);
//employer name and title-- making the variables and replacing the "%data%".
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job][0].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work[job][0].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

//employer name and title-- .appending it to the screen
	$(".work-entry:last").append(formattedEmployerTitle);

//Location -- making the variables and replacing the "%data%".
	var formattedLocation = HTMLworkLocation.replace("%data%", work[job][0].location)
//location -- .appending it to the screen
	$(".work-entry:last").append(formattedLocation);
//begin dates of the job-- making the variables and replacing the "%data%".
	var formattedStartDate = HTMLworkDates.replace("%data%", work[job][0].start);
//location -- .appending it to the screen
	$(".work-entry:last").append(formattedStartDate);
//description -- making the variables and replacing the "%data%".
	var formattedDescription = HTMLworkDescription.replace("%data%", work[job][0].description)
//description -- .appending it to the screen
	$(".work-entry:last").append(formattedDescription);
	};
};

displayWork();


var education = {
	"schools": [
	{
		"schoolStart" : 2012,
		"schoolName" : "Thomas Edison",
		"schoolDegree" : "BA",
		"schoolDates" : 2013,
		"location" : "New Jersey",
		"schoolMajor" : ["Lib Arts"]
	}
	],

};

//this function will display in the Education section
var displayEducation = function() {

	for (edu in education) {
		$("#education").append(HTMLschoolStart);

		var formattedSchName = HTMLschoolName.replace("%data%", education[edu][0].schoolName);
		$(".education-entry:last").append(formattedSchName);

		var formattedSchDegree = HTMLschoolDegree.replace("%data%", education[edu][0].schoolDegree);
		$(".education-entry:last").append(formattedSchDegree);

		var formattedSchStart = HTMLschoolStart.replace("%data%", education[edu][0].schoolStart);
		$(".education-entry:last").append(formattedSchStart);

		var formattedSchMajor = HTMLschoolMajor.replace("%data%", education[edu][0].schoolMajor);
		$(".education-entry:last").append(formattedSchMajor);

		var formattedSchLocation = HTMLschoolLocation.replace("%data%", education[edu][0].location);
		$(".education-entry:last").append(formattedSchLocation);

		var formattedSchDate = HTMLschoolDates.replace("%data%", education[edu][0].schoolDates);
		$(".education-entry:last").append(formattedSchDate);

	}
};
displayEducation();

var projects = {
	"project1" : [
	{
		"projectStart" : 2014,
		"projectTitle" : "Portfolio Project",
		"projectDates" : 2013,
		"projectDescription" : "HTML and CSS project",
		"projectImages" : {
			"proImg1" : "images/HTML_and_CSS_project_pic.png"
		},
	}
	],
};


var displayProjects = function() {
	for (project in projects) {

		$("#projects").append(HTMLprojectStart);
		//replace the blank title with the project title
		var formattedProTitle = HTMLprojectTitle.replace("%data%", projects[project][0].projectTitle);
		$(".project-entry:last").append(formattedProTitle);
		//replace the blank date with the project date
		var formattedProDates = HTMLprojectDates.replace("%data%", projects[project][0].projectDates);
		$(".project-entry:last").append(formattedProDates);
		//replace the blank description with the project description
		var formattedProDescription = HTMLprojectTitle.replace("%data%", projects[project][0].projectDescription);
		$(".project-entry:last").append(formattedProDescription);
		//going through the inner-object projectImages and making a for loop for all the pictures in the inner object.
		//console.log(projects[project][0].projectImages);
		for (image in projects[project][0].projectImages) {

			//if the feild has a length of >0 then replace HTMLprojectImage with formattedImage.
			if (projects[project][0].projectImages[image].length > 0) {

				var formattedProImage = HTMLprojectImage.replace("%data%", projects[project][0].projectImages[image]);
				$(".project-entry:last").append(formattedProImage);

			}

		}
	}
};
displayProjects();
var online = {
	"onlineClasses" : [
		{
			"onlineClasses" : "Learning HTML and CSS",
			"onlineTitle" : "Into to HTML and CSS",
			"onlineSchool" : "Udacity",
			"onlineDates" : "2014 to now",
			"onlineURL" : "https://www.udacity.com"
		},
		{
			"onlineClasses" : "Learning Responsive Web Design",
			"onlineTitle" : "Responsive Web Design Fundamentals",
			"onlineSchool" : "Udacity",
			"onlineDates" : "2014 to now",
			"onlineURL" : "https://www.udacity.com"
		},
		{
			"onlineClasses" : "Learning Responsive Images",
			"onlineTitle" : "Responsive Images",
			"onlineSchool" : "Udacity",
			"onlineDates" : "2014 to now",
			"onlineURL" : "https://www.udacity.com"
		},
		{
			"onlineClasses" : "Learning the JavaScript Basics",
			"onlineTitle" : "JavaScript Basicss",
			"onlineSchool" : "Udacity",
			"onlineDates" : "2014 to now",
			"onlineURL" : "https://www.udacity.com"
		},
	],
};

var displayOnlineClass = function() {

	$("education").append(HTMLonlineClasses);

		var formattedOnlineClasses = HTMLonlineClasses.replace("%data%", online.onlineClasses.onlineClasses);
		$(".education-entry:last").append(formattedOnlineClasses);

			for (classType in online.onlineClasses) {

				var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.onlineClasses[classType].onlineTitle);
				$(".education-entry:last").append(formattedonlineTitle);

				var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.onlineClasses[classType].onlineSchool);
				$(".education-entry:last").append(formattedonlineSchool);

				var formattedonlineDates = HTMLonlineDates.replace("%data%", online.onlineClasses[classType].onlineDates);
				$(".education-entry:last").append(formattedonlineDates);

				var formattedonlineURL = HTMLonlineURL.replace("%data%", online.onlineClasses[classType].onlineURL);
				$(".education-entry:last").append(formattedonlineURL + "<hr>");
	}
};

displayOnlineClass();

var googleMap;
$("#mapDiv").append(googleMap);
console.log(googleMap);
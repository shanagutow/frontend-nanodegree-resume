var bio = {
    "name": 'Shoshana Gutow',
    "role": 'Front-end Web Something',
    "contacts": {
        "mobile": '555-555-5555',
        "email": 'WebDis558@gmail.com',
        "github": '@github',
        "twitter": '?',
        "location": 'Baltimore'
                },
    "welcomeMessage": 'Hey',
    "skills": ["Cool ", "Fun ", "With-it ", "MOM!"],
    "biopic": 'images/mosh.JPG',
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var pic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var cell = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var eMail = HTMLemail.replace("%data%", bio.contacts.email);
        var gitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var twitterName = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var local = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").prepend(formattedName, formattedRole);
        $("#topContacts").append(pic, formattedWelcomeMessage, cell, eMail, gitHub, twitterName, local);
        $("#footerContacts").append(cell, eMail, gitHub, twitterName, local);

        $("#header").append(HTMLskillsStart);
        //loops through skills and displays them
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
                                            });
                        }
}
// This data structure is specified for the project:
var education = {
    schools: [
        {
            name: 'Thomas Edison',
            location: 'New Jersey',
            degree: 'BA',
            majors: 'Lib Arts',
            dates: '2012-2013',
            url: 'www.tesu.edu/'
        },
    ],
    onlineCourses: [
        {
            title: 'Into to HTML and CSS',
            school: 'Udacity',
            date: '2015',
            url: 'https://www.udacity.com'
        },
          {
            title: 'Learning Responsive Web Design',
            school: 'Udacity',
            date: '2015',
            url: 'https://www.udacity.com'
        },
          {
            title: 'Learning Responsive Images',
            school: 'Udacity',
            date: '2015',
            url: 'https://www.udacity.com'
        },
          {
            title: 'Learning the JavaScript Basics',
            school: 'Udacity',
            date: '2016',
            url: 'https://www.udacity.com'
        }
    ],

display: function() {
        //loops through schools and displays them
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(school) {
            var formattedSchName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry").append(formattedSchName, formattedSchDegree, formattedSchDates, formattedSchLocation, formattedSchMajor);
                                            });
        //loops through online courses and displays them
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            console.log("course: ", course);
            var formattedOnSchTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnSchSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnSchDates = HTMLonlineDates.replace("%data%", course.date);
            var formattedOnSchUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry").append(formattedOnSchTitle, formattedOnSchSchool, formattedOnSchDates, formattedOnSchUrl);
                                            });
    }
}

var work = {
    jobs: [
        {
            employer: 'KD',
            title: 'Teacher',
            location: 'Baltimore, MD',
            dates: 'Aug 2015 to present',
            description: '18-24 month teacher'
        }
    ],
    display: function() {

        //loops through Work and displays them
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedStartDate = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry").append(formattedEmployer, formattedTitle, formattedLocation, formattedStartDate, formattedDescription);
                                        });
}
}

// This data structure is specified for the project:
var projects = {
    projects: [
        {
            title: 'Portfolio Project',
            dates: '2015-2016',
            description: 'HTML and CSS project',
            images:"images/HTML_and_CSS_project_pic.png"
        }
    ],
    display: function() {
        //loops through projects and displays them
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function(pro) {
            var formattedProTitle = HTMLprojectTitle.replace("%data%", pro.title);
            var formattedProDates = HTMLprojectDates.replace("%data%", pro.dates);
            var formattedProDescription = HTMLprojectDescription.replace("%data%", pro.description);
            var formattedProImages = HTMLprojectImage.replace("%data%", pro.images);
            $(".project-entry").append(formattedProTitle, formattedProDates, formattedProDescription, formattedProImages);
                                        });
    }
};

var googleMap;
$("#mapDiv").append(googleMap);
console.log(googleMap);

bio.display();
education.display();
work.display();
projects.display();
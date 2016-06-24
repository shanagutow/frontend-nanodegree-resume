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
bio.display();
education.display();
/*
// This data structure is specified for the project:
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

         for (var job in work) {

            console.log(work);
                $("#workExperience").append(HTMLworkStart);
                //employer name and title-- making the variables and replacing the "%data%".
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job][0].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work[job][0].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;

                //employer name and title-- .appending it to the screen
                $(".work-entry:last").append(formattedEmployerTitle);

                //Location -- making the variables and replacing the "%data%".
                var formattedLocation = HTMLworkLocation.replace("%data%", work[job][0].location);
                    //location -- .appending it to the screen
                $(".work-entry:last").append(formattedLocation);
                //begin dates of the job-- making the variables and replacing the "%data%".
                var formattedStartDate = HTMLworkDates.replace("%data%", work[job][0].dates);
                //location -- .appending it to the screen
                $(".work-entry:last").append(formattedStartDate);
                //description -- making the variables and replacing the "%data%".
                var formattedDescription = HTMLworkDescription.replace("%data%", work[job][0].description);
                    //description -- .appending it to the screen
                $(".work-entry:last").append(formattedDescription);
            }


    }
};

work.display();
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
    for (var project in projects) {

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
        for (var image in projects[project][0].projectImages) {

            //if the feild has a length of >0 then replace HTMLprojectImage with formattedImage.
            if (projects[project][0].projectImages[image].length > 0) {

                var formattedProImage = HTMLprojectImage.replace("%data%", projects[project][0].projectImages[image]);
                $(".project-entry:last").append(formattedProImage);

            }

        }
    }}
};
projects.display();

var googleMap;
$("#mapDiv").append(googleMap);
console.log(googleMap);
*/
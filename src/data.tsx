import osu from './images/osu.png';
import sundownder_logo from './images/sundowner_logo.png';
import pick_north from './images/picknorth_logo.jpeg';
import ats_poster from './images/ats-poster.png';
import selfcare from './images/selfcare_social.png';
import commuter_lounge from './images/com_lounge_post.jpg';


interface School {
    name: string;
    location: string;
    additional_info: string[];
    icon: string;
}

interface Project {
    name: string;
    goals: string[];
    additional_info: string[];
    images?: string[];
}

interface Job {
    organization: string;
    location: string;
    job_title: string;
    dates: string;
    additional_info: string[];
    projects?: Project[];
}



var education: School[];
var technical_experience: string[];
var job_experience: Job[];
var leadership_experience: Job[];

education = [{name: "The Ohio State University", location: "Columbus, Ohio", 
    additional_info: ["B.S. Computer Science and Engineering", "Specialization in Information and Computation Assurance", "Minor in Aviation-Social and Behavioral Science", "Expected Graduation: May 2024", "Overall GPA (4.00 scale): 3.825"],
    icon: osu }, {name: "Sundowner Aviation", location: "Lancaster, OH",
    additional_info: ["Private Pilot's Licensure", "Completed: December, 2020"], icon: sundownder_logo},
    {name: "Pickerington High School North", location: "Pickerington, OH", additional_info: ["Graduated May 2020", "Overall GPA (4.00 scale): 4.314"], icon: pick_north}]

technical_experience = ["Java", "Python", "C/C++", "TypeScript", "x86-64 Assembly", "CSS", "YAML", "MATLAB", "Eclipse IDE",
    "Visual Studio Code", "Docker", "Postman", "Cypress", "SolidWorks", "GDB Debugger", "React", "PostgeSQL", 
    "OpenAPI", "AWS SAM", "AWS CodeCommit", "AWS Lambda", "AWS Cognito Authentication"]

job_experience = [{organization: "Nationwide Children's Hospital: Computational Genomics Group, Institute for Genomic Medicine", location: "Columbus, OH", job_title: "Research" +
    " Intern - RI IGM White", dates: "(May 2022 - August 2022", additional_info: ["- Collaborated with the Clinical Informatics team on projects.", "- Designed and implemented " +
    "a full stack web application for HR.", "- Presented work to collegues in a Developer's Club meeting and created and presented a poster describing the application creation process."], 
    projects: [{name: "Applicant Tracking System", goals: ["Bioinformatics software developement is a field that struggles to attract women and candidates from underrepresented groups",
    "To address this issue, we developed a web application to keep track of diverse candidates who previously applied for a job in mind for future positions","As no system was already "+ 
    "in place, the project was a full stack developent project that required the creation of a database, API and a user interface"], additional_info: ["My main project throughout the"+
    " internship was to create an application that HR could use to keep track of previous applicants that had applied to previous jobs, so that they could be reached again about future opportunities.",
    "This was my first time creating a full stack web application and I had to learn a lot for the project, this process can also be seen in the poster below.", "I began by speaking with my manager to define what information would "+
    "be required to store about applicants and what features would be needed in the application. I then began researching database design and SQL so that I could design the tables needed" +
    " to store the information needed. After this I created the database in DB fiddle to test it and ensure that it worked as intended before finalizing the database.", "The next task that needed "+
    "needed to be completed was the API. I then researched APIs and OpenAPI syntax and designed the API using the swagger editor. After Designing the API interface I researched AWS SAM and lambda handlers to implement the API." +
    " I then worked with my manager to connect the API and database on my local machine to test the endpoints. This involved downloadin and learnind how to use Docker and Postman and creating unit tests in Postman.",
    "Following the completetion of the API and database, the next step was to design and implement the user interface. To design the user interface I researched user interface design including layout tips and example websites." +
    " After getting a better understanding of what goes into web layouts, flow and color schemes I created a prototype user interface in figma. I tried to focus on a simple and easy to understand design. To implement the design" + 
    " I researched React and with the recomendation of a collegue that worked on the front end often, TypeScript. I then began implementing the design and testing it locally, focusing on creating modular design with reusable components" + 
    " and including additional things when possible to improve user experience, such as transitions and the ability to click off of items by clicking anywhere on the screen instead of just an 'x'. After I finished implementin the site,"+
    " I began testing the UI using Cypress. This involved learning how Cypress worked and the syntax used and then creating unit tests on each page, as well as for various components.", "After each part of the application was completed," + 
    " we deployed the database and API to AWS, then used Axios to connect the user interface to the database and another round of tests and added Cognito Authentication before deploying the application to the developement environment. At this point" +
    " the application was tested by the Clinical Informatics Software Tester as well as my manager before deployment.", "I also had the chance to present my work on a few occasions to my collegues. The first presentation was a"+
    " collaboration with another co-worker at a developer's club meeting (a monthly meeting held by the developers in the White Lab) where we gave a short demonstration on what React is, how to use it and used my application as an example of what" + 
    " can be created with it. I then presented my entire work in a presentation to the entire lab at a later date, explaining the steps taken and what the result was, and I created a poster (shown below) describing this process that was displayed at an interns" + 
    " poster event open to the research department."], images: [ats_poster]}]},
    {organization: "The Ohio State University", location: "Columbus, OH", job_title: "Student Instructional Assistant", dates: "(January 2022 - May 2022", additional_info: ["- Attended labs and supported the professor in answering any questions.", "- Assisted students with questions about labs, projects and general concept questions",
    "- Assisted students in weekly office hours, personal appointments and through e-mail.", "- Graded and returned feedback for homeworks and projects each week."]}]


leadership_experience = [{organization: "The Ohio State University, Society of Women Engineers", location: "Columbus, OH",
    job_title: "Regional Transfer and Commuter Student Chair", dates: "(January 2022 - present", additional_info: ["Being a regeional, transfer or commuter student can lead to unique problems that other students don't face." +
    " As a commuter for the past 3 years I've experience many of these issues and can understand what other students are facing as well.", "While RTC students make up a small portion of the student body, the number of students in these categories has increased since the start of the pandemic. However fewer resources and a lack of awareness" + 
    " of those that are available remain.", "Our goal is to help RTC students feel more welcomed and involved in SWE and to help support and advocate for their needs in their academics, career, social life, and personal safety.",
    "My job consists of advocating for RTC student needs, keeping track of feedback, communicating and collaborating with other organizations and planning events: creating budget plans, deciding on dates and locations, creating informational posters and RSVP forms, adding the event information to the SWE newsletter,"+ 
    "handling outreach, speaking in meetings, hosting the event and documenting its performance."], projects: [{name: "Self Care Social", goals: ["School can be stressful and it's important to take time for selfcare, students can take this time to learn tools to relax and deal with exam stress.", "We want to build a community between the RTC students and a social is a light hearted way to meet people."], 
    additional_info: ["We wanted to plan a self care event that focused more on mental health than surface level self care items to help students learn more healthy ways to do self care, so we focused on activities that involved self reflection and stress reduction.",
    "In past events we faced issues with attendence when the event was one that required attendance during the entire time span, so we planned on making a more accessible layout that allowed students to come and go as they please. Because of this"+
    "We decided we stations with multiple options would be the best idea to allow students to come and go when they needed to. We chose to include 3 stations: A create your own bullet journal station (including gratitude, mindfulness, goal setting, mood tracking, bookshelf tracking and self reflection prompts)" +
    " a gratitude jar station, and a clay modeling station as a creative outlet. We also chose to keep these stations close together to promote socialization between those at different stations.", 
    "Additional elements were included such as a 'leave a note take a note' wall, soothing music and rain sounds, a snack station and a raffle."], images: [selfcare]}, {name: "Commuter Lounge", goals: ["This was one of the largest and most successful projects I have worked on in this position, and required a lot of outside help.", "There are very few places for commuters to go throughout the school day,"+
    "those who have classes spaced out, or an online class in between two in person classes, need to find a place to go. Often cafe and library tables are full and it is almost impossible to find a place to charge your computer. In addition to this, many places to get food are out of the way of classes and can be very expensive to order from everyday.", "While there is a"+
    " commuter lounge in the Union, this is a 10-15 minute (one way) walk from the engineering campus and there are often non-commuter using its resources.",
    "We wanted to create a space for engineering commuters to use that would close to classes, open only to them, and offer storage, lounging and charging space when they couldn't find it else where."], additional_info: ["I started working this project in February 2022 when we were made aware that the Office of Diversity, Outreach and Inclusion (DOI) may have an empty space on campus. While this information"+
    " was not fully correct, as the DOI office had a plan for the space, after our inquiry they began looking for space we could use for a loung. Finding permanant space on campus is extremely difficult" +
    " as there are so many majors and organizations that are looking for space. After a couple of months the DOI office found what used to be a closet in Hitchcock that was not being used and we were able to move forward with the project.",
    "At this point we held multiple meetings about student needs, what would be possible and timelines before sending out surveys to show student interest. I created this survey for the DOI office who dispersed the survey and discussed the results with the Dean to recieve the ok to continue and the budget.",
    "After months of planning we had a soft opening for the room in October and a hard opening in January. The final room included swipe access, a cork board, refridgerator/freezer and microwave, a table and chairs, a couch, lockers, outlets, cleaning supplies and a white board. In addition to this, students can now checkout phone chargers, an emergency car kit, and a lock for the locker."],
    images: [commuter_lounge]}]}]

export { education, technical_experience, job_experience, leadership_experience };
export type { School, Job};


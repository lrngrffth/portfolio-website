import osu from './images/osu.png';
import sundownder_logo from './images/sundowner_logo.png';
import pick_north from './images/picknorth_logo.jpeg';
import ats_poster from './images/ats-poster.png';


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

export { education, technical_experience, job_experience };
export type { School, Job};


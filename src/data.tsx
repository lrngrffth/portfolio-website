import osu from './images/osu.png';
import sundownder_logo from './images/sundowner_logo.png';
import pick_north from './images/picknorth_logo.jpeg';


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
    images: string[]
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

job_experience = [{organization: "Nationwide Children's Hospital: Computational Genomics Group, Institute for Genomic Medicine", location: "Columbus, OH", job_title: "Research Intern - RI IGM White", dates: "(May 2022 - August 2022", 
    additional_info: ["- Collaborated with the Clinical Informatics team on projects.", "- Designed and implemented a full stack web application for HR.", "- Presented work to collegues in a Developer's Club meeting and created and presented a poster describing the application creation process."]},
    {organization: "The Ohio State University", location: "Columbus, OH", job_title: "Student Instructional Assistant", dates: "(January 2022 - May 2022", additional_info: ["- Attended labs and supported the professor in answering any questions.", "- Assisted students with questions about labs, projects and general concept questions",
    "- Assisted students in weekly office hours, personal appointments and through e-mail.", "- Graded and returned feedback for homeworks and projects each week."]}]

export { education, technical_experience, job_experience };
export type { School, Job};


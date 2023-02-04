import osu from './images/osu.png';
import sundownder_logo from './images/sundowner_logo.png';
import pick_north from './images/picknorth_logo.jpeg';

interface School {
    name: string;
    location: string;
    additional_info: string[];
    icon: string;
}

var education: School[];

education = [{name: "The Ohio State University", location: "Columbus, Ohio", 
    additional_info: ["B.S. Computer Science and Engineering", "Specialization in Information and Computation Assurance", "Minor in Aviation-Social and Behavioral Science", "Expected Graduation: May 2024", "Overall GPA (4.00 scale): 3.825"],
    icon: osu }, {name: "Sundowner Aviation", location: "Lancaster, OH",
    additional_info: ["Private Pilot's Licensure", "Completed: December, 2020"], icon: sundownder_logo},
    {name: "Pickerington High School North", location: "Pickerington, OH", additional_info: ["Graduated May 2020", "Overall GPA (4.00 scale): 4.314"], icon: pick_north}]




export { education };
export type { School };


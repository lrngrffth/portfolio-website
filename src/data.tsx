import osu from './osu.png'

interface School {
    name: string;
    location: string;
    studied: string[];
    graduation: string;
    icon: string;
    gpa?: string;
}

var education: School[];

education = [{name: "The Ohio State University", location: "Columbus, Ohio", 
    studied: ["fa"], graduation: "Expected Graduation: May 2024", icon: osu }]




export { education };
export type { School };


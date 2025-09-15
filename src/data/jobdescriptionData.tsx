export interface Job {
    id: string;
    title: string;
    department: string;
    type: string;
    location: string;
    experience: string;
    date: string;
    overview: string;
    responsibilities: string[];
    skills: string[];
  }
  
  export const jobs: Job[] = [
    {
      id: "1",
      title: "Graphic Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      date: "2025-09-15",
      overview:
        "We are looking for a creative Graphic Designer to create engaging visuals for our campaigns.",
      responsibilities: [
        "Design digital and print materials",
        "Collaborate with marketing team",
        "Maintain brand consistency",
      ],
      skills: ["Adobe Photoshop", "Illustrator", "Figma", "Creativity"],
    },
    {
      id: "2",
      title: "Content Writer",
      department: "Marketing",
      type: "Full-time",
      location: "Bangalore, India",
      experience: "1+ year",
      date: "2025-09-10",
      overview:
        "We need a talented Content Writer to craft compelling marketing content.",
      responsibilities: [
        "Write blogs and social media content",
        "Collaborate with designers and marketers",
        "Proofread and edit content",
      ],
      skills: ["SEO", "Creative Writing", "Grammar", "Research"],
    },
  ];
  
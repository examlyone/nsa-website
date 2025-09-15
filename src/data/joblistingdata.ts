export interface Job {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  date: string;
  description: string;
}

export const jobsData: Job[] = [
  {
    id: 1,
    title: "Graphics Designer",
    department: "Marketing",
    type: "Full-time",
    location: "Bangalore, South Karnataka, India",
    experience: "2-4 Years",
    date: "24/03/2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Content Writer",
    department: "Marketing",
    type: "Full-time",
    location: "Bangalore, South Karnataka, India",
    experience: "2-4 Years",
    date: "24/03/2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Senior Product Designer",
    department: "Marketing",
    type: "Full-time",
    location: "Bangalore, South Karnataka, India",
    experience: "2-4 Years",
    date: "24/03/2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Finance Manager",
    department: "Sales",
    type: "Full-time",
    location: "Bangalore, South Karnataka, India",
    experience: "2-4 Years",
    date: "24/03/2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "Finance Manager",
    department: "Sales",
    type: "Part-time",
    location: "Bangalore, Karnataka, India",
    experience: "0-1 Year",
    date: "24/03/2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Finance Manager",
    department: "Sales",
    type: "Remote",
    location: "Bangalore, Karnataka, India",
    experience: "0-2 Years",
    date: "24/03/2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
"use client";

import React, { useState, useMemo } from "react";
import { jobsData, Job } from "@/data/joblistingdata";   
import Link from "next/link";
const jobTypes = ["Full-time", "Part-time", "Remote"];
const departments = ["HR", "Business Development", "Digital Marketing", "Sales", "Mentorship", "Accounts", "Development", "IT", "Marketing"];

export default function JobPortal ({jobsData}: {jobsData: Job[]}) {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleDepartmentChange = (dept: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
      const matchesType = selectedTypes.length ? selectedTypes.includes(job.type) : true;
      const matchesDept = selectedDepartments.length ? selectedDepartments.includes(job.department) : true;
      return matchesSearch && matchesType && matchesDept;
    });
  }, [search, selectedTypes, selectedDepartments]);

  const groupedJobs = useMemo(() => {
    const groups: Record<string, Job[]> = {};
    filteredJobs.forEach((job) => {
      if (!groups[job.department]) groups[job.department] = [];
      groups[job.department].push(job);
    });
    return groups;
  }, [filteredJobs]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 lg:p-10 bg-gray-50 min-h-screen">
  {/* Filters */}
  <div className="w-full md:w-1/3 lg:w-1/4 lg:h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] h-[calc(100vh-8rem)] bg-white p-4 rounded-xl shadow-md sticky top-4">
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Job Type</h3>
      {jobTypes.map((type) => (
        <label key={type} className="flex items-center space-x-2 mb-1 cursor-pointer text-gray-600">
          <input
            type="checkbox"
            checked={selectedTypes.includes(type)}
            onChange={() => handleTypeChange(type)}
            className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400"
          />
          <span>{type}</span>
        </label>
      ))}
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Department</h3>
      {departments.map((dept) => (
        <label key={dept} className="flex items-center space-x-2 mb-1 cursor-pointer text-gray-600">
          <input
            type="checkbox"
            checked={selectedDepartments.includes(dept)}
            onChange={() => handleDepartmentChange(dept)}
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
          />
          <span>{dept}</span>
        </label>
      ))}
    </div>
  </div>

  <div className="flex-1">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Current Openings</h2>

    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6">
      <input
        type="text"
        placeholder="Job title or Skill"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
      />
      {/* <button className="bg-red-600 text-white px-6 rounded-lg hover:bg-red-700 transition">Search</button> */}
    </div>
    {Object.entries(groupedJobs).map(([dept, jobs]) => (
      <div key={dept} className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{dept} ({jobs.length} Jobs)</h3>
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
         <Link key={job.id} href={`/jobs/${job.id}`}>
            <div key={job.id} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-red-600 font-semibold text-lg">{job.title}</h4>
              <p className="text-gray-600 mb-2">{job.location} | {job.experience} | {job.type}</p>
              <p className="text-gray-500 text-sm mb-2">{job.date}</p>
              <p className="text-gray-600">{job.description}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    ))}
    {filteredJobs.length === 0 && <p className="text-gray-600">No jobs found.</p>}
  </div>
</div>

  );
};


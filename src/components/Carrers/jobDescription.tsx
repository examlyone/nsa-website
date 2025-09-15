"use client";

import { GetStaticPaths, GetStaticProps } from "next";
import { jobs, Job } from "@/data/jobdescriptionData";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

interface JobDetailProps {
  job: Job;
}

export default function JobDetail({job}: JobDetailProps) {
  if (!job) return <p>Job not found.</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gray-800 text-white h-64 flex items-center justify-center">
        <Image
          src="/job-hero.jpg"
          alt="Job Hero"
          fill
          className="object-cover opacity-40"
        />
        <div className="text-center z-10">
          <h1 className="text-3xl lg:text-5xl font-bold">{job.title}</h1>
          <p className="mt-2 text-lg lg:text-2xl">{job.location}</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
            <Link href="/jobs" className="underline">
              Back to Jobs
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-16">
        <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-md sticky top-20">
          <h2 className="text-xl font-semibold mb-4">{job.title}</h2>
          <p>
            <span className="font-semibold">Department:</span> {job.department}
          </p>
          <p>
            <span className="font-semibold">Type:</span> {job.type}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {job.location}
          </p>
          <p>
            <span className="font-semibold">Experience:</span> {job.experience}
          </p>
          <p>
            <span className="font-semibold">Date Posted:</span> {job.date}
          </p>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-6">
          <section>
            <h3 className="text-2xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-700">{job.overview}</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700">
              {job.responsibilities.map((item: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-2">Skills Required</h3>
            <ul className="list-disc list-inside text-gray-700">
              {job.skills.map((skill: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = jobs.map((job) => ({ params: { id: job.id } }));
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const job = jobs.find((job) => job.id === id) || null;

  return {
    props: { job },
  };
};

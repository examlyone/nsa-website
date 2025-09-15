"use client";

import { useRouter } from "next/router";
import { jobsData } from "@/data/joblistingdata";
import JobDetail from "@/components/Carrers/jobDescription";

const JobDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const job = jobsData.find((j) => j.id === Number(id));

  if (!job) {
    return <p className="text-center mt-20 text-gray-600">Job not found.</p>;
  }

  return <JobDetail job={job} />;
};

export default JobDetailPage;

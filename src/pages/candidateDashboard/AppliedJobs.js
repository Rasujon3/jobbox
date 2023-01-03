import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";
import { useGetAppliedJobsQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);

  const { data, isLoading } = useGetAppliedJobsQuery(email);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {data?.data.map((job) => (
        <JobCard key={job._id} jobData={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;

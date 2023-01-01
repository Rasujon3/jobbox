import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();
  // const { position, companyName } = data.data || {};
  // console.log(data);

  return (
    <div className="pt-14">
      <h1>This is job page</h1>
      <div>
        {data?.data?.map(({ position, companyName, _id }) => (
          <div>
            <h1>{position}</h1>
            <p>{companyName}</p>
            <button
              className="border"
              onClick={() => navigate(`/job-details/${_id}`)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

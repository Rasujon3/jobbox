import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useJobByIdQuery } from "../features/job/jobApi";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useJobByIdQuery(id);
  const { position } = data?.data || {};
  const navigate = useNavigate();

  return (
    <div className="pt-14">
      <h1>this is job details</h1>
      <button className="border">{position}</button>
    </div>
  );
};

export default JobDetails;

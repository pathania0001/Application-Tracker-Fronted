import React from "react";
import { useOutletContext } from "react-router-dom";
import JobFormModal from "../components/Application";
import JobCard from "../components/JobCard";

function MainScreen() {
  const { jobs, openModal, filterdBy, jobTypeFilter } = useOutletContext();

  let filteredJobs = jobs.filter((job) => {
    const statusMatch =
      filterdBy === "All" || job.status?.toLowerCase() === filterdBy.toLowerCase();

    const typeMatch =
      jobTypeFilter === "All" ||
      jobTypeFilter === "appliedDate" ||
      job.jobType?.toLowerCase() === jobTypeFilter.toLowerCase();

    return statusMatch && typeMatch;
  });

  if (jobTypeFilter === "appliedDate") {
    filteredJobs.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-4 pt-8 pb-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job._id} job={job} onEdit={openModal} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No jobs found</p>
        )}
      </div>

      <div className="hidder">
        <JobFormModal />
      </div>
    </>
  );
}

export default MainScreen;

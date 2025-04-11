
import React from "react";
import useGlobal from './../hooks/useGlobal';
import JobFormModal from "../components/Application";
import JobCard from "../components/JobCard";

function Main() {
    const { jobs, openModal, filterdBy } = useGlobal();
    const filteredJobs = filterdBy === "All"
      ? jobs
      : jobs.filter((job) => job.status.toLowerCase() === filterdBy.toLowerCase());
  
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
  
  export default Main;
  
import { FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import { deleteJob } from "../api/jobApi";
import useGlobal from "../hooks/useGlobal";
import { toast } from "react-toastify";

const JobCard = ({ job, onEdit }) => {
  const { setRender, render } = useGlobal();

  const onDelete = (job) => {
    deleteJob(job._id)
      .then(() => {
        toast.success("Job deleted successfully!");
        setRender(!render);
      })
      .catch((err) => {
        console.error("Error deleting job:", err);
        toast.error(err?.response?.data?.message || "Server Error");
      });
  };


  const getBorderColor = () => {
    switch (job.status) {
      case "accepted":
      case "offer":
        return "border-green-500";
      case "rejected":
        return "border-red-500";
      case "interview":
        return "border-yellow-500";
      default:
        return "border-blue-500"; 
    }
  };

  return (
    <div
      className={`bg-white shadow-md rounded-2xl p-5 border-2 hover:shadow-lg transition-all ${getBorderColor()}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{job.position}</h2>
        <span className="text-sm text-gray-500">{job.jobType}</span>
      </div>
      <p className="text-gray-700 font-medium">{job.company}</p>
      <p className="text-sm text-gray-500">
        {new Date(job.appliedDate).toLocaleDateString("en-GB")}
      </p>
      <p
        className={`mt-1 font-medium text-sm capitalize ${
          job.status === "accepted"
            ? "text-green-600"
            : job.status === "rejected"
            ? "text-red-500"
            : job.status === "interview"
            ? "text-yellow-600"
            : job.status === "offer"
            ? "text-green-600"
            : "text-blue-500"
        }`}
      >
        Status: {job.status}
      </p>

      <div className="mt-4 flex gap-3 justify-end">
        <button
          onClick={() => onEdit(job)}
          className="p-1 text-sm rounded-md border border-blue-500 text-blue-500"
        >
          <FilePenLine />
        </button>
        <button
          onClick={() => onDelete(job)}
          className="p-1 text-sm rounded-md border border-red-500 text-red-500"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default JobCard;

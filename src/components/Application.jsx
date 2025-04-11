import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddJobForm from "../forms/addApplication";
import useGlobal from "../hooks/useGlobal";
import Modal from "../utils/Modal";
import { addJob, updateJob } from "../api/jobApi";
import "react-toastify/dist/ReactToastify.css";

const JobFormModal = () => {
  const { isModalOpen, setIsModalOpen, setRender, render,editableJob } = useGlobal()
  const [editApplication,setEditApplication] = useState(null)
   useEffect(()=>{
         setEditApplication(editableJob)
   },[editableJob])

  const handleSubmit = async (formData) => {
    try {
      if (editApplication) {
        await updateJob(editApplication._id, formData);
        toast.success("Job Application updated successfully!");
      } else {
        await addJob(formData);
        toast.success("Job Application added successfully!");
      }

      setRender(!render);
      setIsModalOpen(false);
      setEditApplication(null)
    } catch (err) {
      console.error("Error saving job:", err);
      toast.error(err?.response?.data?.message || "Server Error");
    }
  };

  return (
    <Modal
      open={isModalOpen}
      heading={editApplication ? "Edit Application" : "Add New Application"}
      cross={true}
      handleCross={() => {
        setIsModalOpen(false)
        setEditApplication(null)}}
    >
      <AddJobForm
        initialData={editApplication}
        onSubmit={handleSubmit}
        onCancel={() => {
          setIsModalOpen(false)
          setEditApplication(null)}}
      />
    </Modal>
  );
};

export default JobFormModal;

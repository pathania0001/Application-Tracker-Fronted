import React, { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header-footer/header";
import Footer from "../header-footer/footer";
import Filter from "../components/filter/filter";
import { getAllJobs } from "../api/jobApi";

const RootLayout = () => {
  const [jobs, setJobs] = useState([]);
  const [filterdBy, setFilteredBY] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableJob, setEditableJob] = useState(null);
  const [render, setRender] = useState(null);

  const fetchJobs = useCallback(async () => {
    try {
      const data = await getAllJobs();
      console.log("API response:", data); // ✅ helpful for debugging
      setJobs(data.data); // or setJobs(data); based on your API
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }, [render]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const openModal = (job = null) => {
    setEditableJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditableJob(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setIsModalOpen={setIsModalOpen} />
      <Filter filterdBy={filterdBy} setFilteredBY={setFilteredBY} />
      <main className="flex-grow py-26 px-4">
        <Outlet
          context={{
            jobs,
            fetchJobs,
            openModal,
            closeModal,
            isModalOpen,
            setIsModalOpen,
            editableJob,
            render,
            setRender,
            filterdBy,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

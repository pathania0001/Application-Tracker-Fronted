export const formFields = [
    {
      label: "Company",
      id: "company",
      placeholder: "e.g., Google",
    },
    {
      label: "Position",
      id: "position",
      placeholder: "e.g., Frontend Developer",
    },
    {
      label: "Job-Type",
      id: "jobType",
      type: "select",
      options: [
        { name: "Internship", value: "Internship" },
        { name: "Full Time", value: "Full-time" },
        { name: "Remote", value: "Remote" },
        { name: "Part Time", value: "Part-time" },
        { name: "Freelance", value: "Freelance" },
      ],
    },
    {
      label: "Status",
      id: "status",
      type: "select",
      options: [
        { name: "Applied", value: "applied" },
        { name: "Interview", value: "interview" },
        { name: "Offer", value: "offer" },
        { name: "Rejected", value: "rejected" },
      ],
    },
    {
      label: "Applied Date",
      id: "appliedDate",
      type: "date",
    },
  ];
  
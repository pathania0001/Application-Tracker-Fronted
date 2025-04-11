import Buttons from "../../utils/buttons";
import InputField from "../../utils/InputFields";

const Filter = ({ filterdBy, setFilteredBY, jobType, setJobType,jobTypeFilter,setJobTypeFilter }) => {
  const statuses = [
    { name: "Select by Status", value: "", disabled: true },
    { name: "All", value: "All" },
    { name: "Applied", value: "Applied" },
    { name: "Interview", value: "Interview" },
    { name: "Offer", value: "Offer" },
    { name: "Rejected", value: "Rejected" },
  ];

  const jobTypes = [
    { name: "Select by Filter", value: "", disabled: true },
    { name: "All", value: "All" },
    { name: "appliedDate", value: "appliedDate" },
    { name: "Internship", value: "Internship" },
    { name: "Full Time", value: "Full-time" },
    { name: "Remote", value: "Remote" },
    { name: "Part Time", value: "Part-time" },
    { name: "Freelance", value: "Freelance" },
  ];

  const styles = {
    All: {
      selected: "bg-gray-500 !text-white border",
      unselected: "bg-transparent border border-gray-500 !text-gray-500",
    },
    Applied: {
      selected: "bg-blue-500 !text-white border",
      unselected: "bg-transparent border border-blue-500 !text-blue-500",
    },
    Interview: {
      selected: "bg-yellow-500 !text-white border",
      unselected: "bg-transparent border border-yellow-500 !text-yellow-500",
    },
    Offer: {
      selected: "bg-green-500 !text-white border",
      unselected: "bg-transparent border border-green-500 !text-green-500",
    },
    Rejected: {
      selected: "bg-red-500 !text-white border",
      unselected: "bg-transparent border border-red-500 !text-red-500",
    },
  };

  return (
    <>
      <div className="fixed top-15 left-0 w-full shadow z-50 p-2 md:px-8 text-xl bg-white font-bold flex flex-wrap items-center justify-center gap-2">
        <div className="hidden md:flex flex-wrap justify-center items-center gap-2">
          {statuses
            .filter((status) => !status.disabled)
            .map((status) => {
              const isSelected = filterdBy === status.value;
              const buttonClass = isSelected
                ? styles[status.value].selected
                : styles[status.value].unselected;

              return (
                <Buttons
                  key={status.value}
                  className={`px-4 py-2 rounded transition-all duration-200 ${buttonClass}`}
                  onClick={() => setFilteredBY(status.value)}
                >
                  {status.name}
                </Buttons>
              );
            })}
        </div>

        {/* Mobile dropdowns */}
        <div className="flex gap-2 w-full md:w-fit justify-center items-center">
          <div className="md:hidden w-full">
            <InputField
              type="select"
              value={filterdBy}
              handleInputChange={(e) => setFilteredBY(e.target.value)}
              options={statuses}
              className="!w-full !text-sm"
            />
          </div>

          <InputField
            type="select"
            value={jobTypeFilter}
            handleInputChange={(e) => setJobTypeFilter(e.target.value)}
            options={jobTypes}
            className="!w-full md:!w-fit !text-sm text-gray-600"
          />
        </div>
      </div>
    </>
  );
};

export default Filter;

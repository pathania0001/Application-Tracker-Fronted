
import Buttons from "../../utils/buttons";

const Filter = ({filterdBy, setFilteredBY}) => {
  const statuses = ["All", "Applied", "Interview", "Offer", "Rejected"];
   console.log()
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
    <div className="fixed top-15 left-0 w-full shadow z-50 p-2 md:px-8 text-xl bg-white font-bold flex flex-wrap justify-center gap-2">
      {statuses.map((status) => {
        const isSelected = filterdBy === status;
        const buttonClass = isSelected
          ? styles[status].selected
          : styles[status].unselected;

        return (
          <Buttons
            key={status}
            className={`px-4 py-2 rounded transition-all duration-200 ${buttonClass}`}
            onClick={() => setFilteredBY(status)}
          >
            {status}
          </Buttons>
        );
      })}
    </div>
  );
};

export default Filter;

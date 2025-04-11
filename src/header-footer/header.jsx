import Buttons from "../utils/buttons";

const Header = ({ setIsModalOpen }) => {
    const handleAddClick = () => {
      setIsModalOpen(true);
    };
  
    return (
      <header className="fixed top-0 left-0 w-full border bg-blue-500 shadow z-50 p-2 pb-6 md:px-8 text-xl font-bold flex justify-between items-center">
        <p className="pt-1"> Job Tracker</p>
        <Buttons onClick={handleAddClick} type="border" big>
          Add
        </Buttons>
      </header>
    );
  };
  
  export default Header;
  
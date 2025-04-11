import { Eye, EyeOff, Trash } from "lucide-react";
import { useState } from "react";

const InputField = ({
  label,
  id,
  type = "text",
  value,
  placeholder = "",
  handleInputChange,
  options = [],
  isDisable = false,
  deleteCta,
  className = "",
}) => {
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    const { type, value, checked, name } = e.target;

    if (type === "checkbox") {
      e = { ...e, target: { ...e.target, value: checked, name } };
    }

    if (type === "tel") {
      const numericValue = value.replace(/[^0-9]/g, "");
      e.target.value = numericValue;
    }

    handleInputChange && handleInputChange(e);
  };

  return (
    <div className="space-y-2 w-full">
      {label && (
        <label
          htmlFor={id}
          className={`capitalize font-medium block ${
            isDisable ? "text-black/70" : ""
          }`}
        >
          {label}
        </label>
      )}

      {type === "select" ? (
        <select
          value={value}
          onChange={handleChange}
          name={id}
          id={id}
          disabled={isDisable}
          className={`block w-full bg-transparent p-2 border border-gray-200 focus:outline-primary rounded-xl text-desc1 ${className}` }       
          >
          {options.map((option, key) => (
            <option
              key={key}
              value={option.value}
              disabled={option.disable}
              selected={option.selected}
            >
              {option.name}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={isDisable}
          className="bg-transparent p-3 text-desc border border-gray-200 focus:outline-primary rounded-xl w-full"
        />
      ) : (
        <div className="flex border-2 items-center border-gray-200 rounded-xl focus-within:border-primary">
          <input
            id={id}
            name={id}
            type={
              type === "password"
                ? showPass
                  ? "text"
                  : "password"
                : type
            }
            value={
              type === "date" && value
                ? new Date(value).toISOString().substring(0, 10)
                : type === "file"
                ? undefined
                : value
            }
            placeholder={placeholder}
            onChange={handleChange}
            disabled={isDisable}
            className={`text-desc bg-transparent p-2 w-full placeholder:font-light focus:outline-none ${
              type !== "password" ? "rounded-xl" : "rounded-l-xl"
            }`}
          />

          {deleteCta && (
            <div
              onClick={deleteCta}
              className="cursor-pointer bg-red-500 p-2 rounded-r-xl text-white"
            >
              <Trash />
            </div>
          )}

          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="bg-primary text-white cursor-pointer p-2 rounded-r-lg"
            >
              {showPass ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;

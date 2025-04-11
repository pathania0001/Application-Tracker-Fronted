import { useEffect, useState } from "react";
import { formFields } from "../json/formFeilds";
import InputField from "../utils/InputFields";
import Buttons from "../utils/buttons";

const AddJobForm = ({ initialData = null, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "applied",
    appliedDate: "",
    jobType:""
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        company: "",
        position: "",
        status: "applied",
        appliedDate: "",
        jobType:""
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 console.log(formData)
  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="space-y-4">
      <form className="space-y-4">
        {formFields.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            id={field.id}
            type={field.type}
            value={formData[field.id]}
            handleInputChange={handleChange}
            placeholder={field.placeholder}
            options={field.options}
          />
        ))}
      </form>

      <div className="flex justify-end gap-4">
        <Buttons
          type="border"
          className="text-blue-500"
          htmlType="button"
          onClick={onCancel} 
        >
          Cancel
        </Buttons>

        <Buttons
          type="primary"
          htmlType="button"
          big
          onClick={handleSubmit} 
        >
          {initialData ? "Update" : "Add Job"}
        </Buttons>
      </div>
    </div>
  );
};

export default AddJobForm;

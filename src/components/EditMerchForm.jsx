import { useState } from "react";

const EditMerchForm = ({ item, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState(item); 
  
    const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <form onSubmit={e => {
        e.preventDefault();
        onUpdate(formData);
      }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {/* Input fields for other properties (category, price, etc.) */}
        <button type="submit">Spara</button>
        <button type="button" onClick={onCancel}>
          Avbryt
        </button>
      </form>
    );
  };

  export default EditMerchForm;
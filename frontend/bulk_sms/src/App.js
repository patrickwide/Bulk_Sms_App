import React, { useState } from "react";

function App() {
  const [forms, setForms] = useState([
    { key: 1, name: "Name", value: "Patrick" },
    { key: 2, name: "Phone", value: "0723116674" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const addForm = () => {
    if (inputValue.trim() !== "") {
      const newForm = {
        key: forms.length + 1,
        name: inputValue.toLowerCase(),
        value: "",
      };
      setForms([...forms, newForm]);
      setInputValue("");
    }
  };

  const updateFormValue = (key, value) => {
    console.log(key, value);
    const updatedForms = forms.map((form) => {
      if (form.key === key) {
        return { ...form, value: value };
      }
      return form;
    });
    setForms(updatedForms);
  };

  const handleCollectFormData = () => {
    const newData = forms.map((form) => ({ ...form, value: "" }));
    setData((prevData) => [...prevData, forms.map(({ key, ...rest }) => rest)]);
    setForms(newData);
    setShowTable(true);
  };

  return (
    <div>
      {/* Add forms section */}
      <div>
        <h2>Dynamic Form</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addForm}>Add Form</button>
      </div>
      {/* Forms section */}
      <div>
        <h3>Forms</h3>
        {forms.length === 0 ? (
          <p>No form available</p>
        ) : (
          <div>
            {forms.map((form) => (
              <div key={form.key}>
                <label htmlFor={`formInput${form.key}`}>{form.name}:</label>
                <input
                  type="text"
                  id={`formInput${form.key}`}
                  value={form.value}
                  onChange={(e) => updateFormValue(form.key, e.target.value)}
                />
              </div>
            ))}
            <button onClick={handleCollectFormData}>Show Form Values</button>
          </div>
        )}
      </div>
      {/* Table section */}
      <div>
        <h3>Table</h3>
        {showTable && (
          <table>
            <tbody>
              <tr>
                {data[0].map((item, index) => (
                  <th key={index}>{item.name}</th>
                ))}
              </tr>
              {data.map((list, listIndex) => (
                <tr key={listIndex}>
                  {list.map((item, itemIndex) => (
                    <td key={itemIndex}>{item.value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* message section */}
      <div>
        <textarea></textarea>
        <button>Send message</button>
      </div>
    </div>
  );
}

export default App;

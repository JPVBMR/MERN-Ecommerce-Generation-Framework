import React from 'react'

const DynamicStoreForm = ({ formFields, setFormFields }) => {
  const handleInputChange = (e, field) => {
    const updatedFields = { ...formFields }
    updatedFields[field] = e.target.value
    setFormFields(updatedFields)
  }

  return (
    <div>
      {Object.keys(formFields).map((field, index) => (
        <div key={index}>
          <label>{field}</label>
          <input
            type='text'
            value={formFields[field]}
            onChange={(e) => handleInputChange(e, field)}
          />
        </div>
      ))}
    </div>
  )
}

export default DynamicStoreForm

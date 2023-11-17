import React from 'react'

export default function Input({id , name ,title ,type,changData,value1}) {
   
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input value={ value1} type={type} name={name} className="form-control"     id={id}   onChange={changData}/>
    {console.log(value1)}
</div>
  )
}

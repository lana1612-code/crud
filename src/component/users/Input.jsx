import React from 'react'

export default function Input({id , name ,title ,type,changData}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input  type={type} name={name} className="form-control"    id={id}   onChange={changData}/>
</div>
  )
}

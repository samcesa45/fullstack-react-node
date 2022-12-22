import React from 'react'

type IForm={
    search:string,
    onChange:(event: React.ChangeEvent<HTMLInputElement>) =>void
}
const Form=({ onChange,search }:IForm) => {
  return(
    <div>
      <label htmlFor="countries">Find Countries</label>
      <input
        className="px-2 py-1 border rounded ml-2 focus:outline-none focus:ring"
        type="text"
        value={search}
        onChange={(event) => onChange(event)}
      />
    </div>
  )
}

export default Form
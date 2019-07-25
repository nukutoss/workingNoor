import React, { useState } from 'react'

const AddRow = props => {
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value="" />
      <label>Age</label>
      <input type="text" name="age" value="" />
      <button>Add new state</button>
    </form>
  )
}

export default AddUserForm
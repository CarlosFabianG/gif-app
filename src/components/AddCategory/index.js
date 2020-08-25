import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    const inputValue = e.target.value
    setInputValue(inputValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategories(categories => [inputValue, ...categories])
    setInputValue('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={inputValue} />
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

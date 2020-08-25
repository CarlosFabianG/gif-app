import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Samurai', 'Dragon Ball'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {
          categories.map((category, i) => <GifGrid category={category} key={i}>{category}</GifGrid>)
        }
      </ol>
    </>
  )
}

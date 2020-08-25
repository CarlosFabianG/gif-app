import React from 'react'
import { GifGridItem } from '../GifGridItem'
import { useFetchGifs } from '../../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category)

  return (
    <div>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      {
        data.map(img => <GifGridItem key={img.id} {...img} />)
      }
    </div>
  )
}

export default GifGrid

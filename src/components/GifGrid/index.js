import React, { useEffect, useState } from 'react'
import { GifGridItem } from '../GifGridItem'
// const apiKey = process.env.REACT_APP_NOT_API_KEY
const url = 'https://api.giphy.com/v1/gifs/search?api_key=ByZ3NqCP4UStvD4bHFOgjr4rU2ludF4u&q=rick+and+morty&limit=10'

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])
  const getGifs = async () => {
    const res = await window.fetch(url)
    const { data } = await res.json()
    console.log(data)

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    setImages(gifs)
  }

  useEffect(() => {
    getGifs()
  }, [])

  return (
    <div>
      <h3>{category}</h3>
      {
        images.map(img => <GifGridItem key={img.id} {...img} />)
      }
    </div>
  )
}

export default GifGrid

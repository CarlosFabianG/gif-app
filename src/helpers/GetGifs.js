const apiKey = process.env.REACT_APP_NOT_API_KEY

export const getGifs = async (category) => {
  const res = await window.fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}`)
  const { data } = await res.json()
  console.log(data)

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  return gifs
}

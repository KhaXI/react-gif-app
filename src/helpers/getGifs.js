export const getGifs = async (category) => {
    const limit = 5
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BDiwPMJ2GFLaD1cNf9qeYg57WuabDSkU&q=${category}&limit=${limit}`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}
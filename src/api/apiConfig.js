const apiConfig = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey: '77e7053a58b537865d7a175fce193c39',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig
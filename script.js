function executarCallback(callback) {
  callback();
}

function mudarWallpaper(nomeImagem) {
  document.body.style.backgroundImage = `url('img/${nomeImagem}')`;
}

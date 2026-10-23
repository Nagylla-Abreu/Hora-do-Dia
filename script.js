const date = new Date()
const hora = date.getHours()
const corpo = window.document.querySelector('body')
const imagem = window.document.querySelector('div#circulo')
descricao.innerHTML = `Agora são ${hora} horas.`
if (hora < 12) {
    corpo.style.background = '#CFBF90'
    imagem.style.backgroundImage = 'url(https://img.cancaonova.com/cnimages/especiais/uploads/sites/9/2020/04/%C3%89-pela-esperan%C3%A7a-que-nos-mantemos-firmes-.png)'
} else {
    if (hora < 18) {
        corpo.style.background = '#A87A65'
        imagem.style.backgroundImage = 'url(https://d247kdz71djmsc.cloudfront.net/wp-content/uploads/2018/03/07215152/pexels-photo-858241-2000x2000.jpg)'
    } else {
        corpo.style.background = '#494B4A'
        imagem.style.backgroundImage = 'url(https://i.scdn.co/image/ab67616d00001e02b8d8ccccdd6690d0ef1bd3d4)'
    }
}

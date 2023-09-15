let musica = document.querySelector('audio')
let pause = document.querySelector('.fa-pause')
let duracaoMusica = document.querySelector('.final')
//duracaoMusica.textContent = tempo_musica(Math.floor(musica.duration))
let imagem = document.querySelector('img')
let nome_musica = document.querySelector('.descricao h1')
let nome_artista = document.querySelector('.descricao p')
let indice_musica = 0

let todas_musicas = [
    {titulo: 'Sax solo', artista: 'Helena', src: 'musicas/Driftin - Chad Lefkowitz-Brown Trio Sessions Episode 2 MarkovitzMacbride.mp3', img: 'imagens/jazz-em-sp-louis-armstrong-910x709.jpg'},
    {titulo: 'Chad', artista: 'Alan', src: 'musicas/Chad LB Quartet - Watermelon Man (Herbie Hancock).mp3', img: 'imagens/jazz.jpg'},
    {titulo: 'Sem titulo', artista: 'Sidney', src: 'musicas/On the Sunny Side of the Street - Chad LB Live in Denver.mp3', img: 'imagens/Untitled-1.jpg'}
]

//Eventos
document.querySelector('.fa-play').addEventListener('click', play_Musica);

document.querySelector('.fa-pause').addEventListener('click', pause_Musica);

musica.addEventListener('timeupdate', atualiza_barra)

//Funções
rendenizar_musica(indice_musica)

document.querySelector('.anterior').addEventListener('click', () => {
    indice_musica--
    if (indice_musica == 0) {
        indice_musica = 2
    }
    rendenizar_musica(indice_musica)
})

document.querySelector('.posterior').addEventListener('click', () => {
    indice_musica++
    if (indice_musica > 2) {
        indice_musica = 0
    }
    rendenizar_musica(indice_musica)
})

function rendenizar_musica(indice){
    musica.setAttribute('src', todas_musicas[indice].src)
    musica.addEventListener('loadeddata', () => {
        nome_musica.textContent = todas_musicas[indice].titulo
        nome_artista.textContent = todas_musicas[indice].artista
        imagem.src = todas_musicas[indice].img
        duracaoMusica.textContent = tempo_musica(Math.floor(musica.duration))

    })
}

function play_Musica(){
    musica.play()
    pause.style.display = 'block'
    document.querySelector('.fa-play').style.display = 'none'
}

function pause_Musica(){
    musica.pause()
    pause.style.display = 'none'
    document.querySelector('.fa-play').style.display = 'block'
}

function atualiza_barra(){
    let barra = document.querySelector('progress')

    barra.style.width = Math.floor(( musica.currentTime / musica.duration) * 100) + "%"
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = tempo_musica(Math.floor(musica.currentTime))

}

function tempo_musica(segundos){
    let minutos = Math.floor(segundos / 60)
    let campo_segundos = segundos % 60
    if (campo_segundos < 10) {
        campo_segundos = '0'+ campo_segundos
    }

    return minutos+':'+campo_segundos
}
    
   
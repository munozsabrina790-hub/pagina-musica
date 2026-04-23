const canciones = [
    {
        nombre: "Hello",
        letra: `Hello, it's me
                I was wondering if after all these years you'd like to meet
                To go over everything
                They say that time's supposed to heal ya, but I ain't done much healing
                Hello, can you hear me?`
    },
    {
        nombre: "Someone Like You",
        letra: `I heard that you're settled down
                That you found a girl and you're married now
                I heard that your dreams came true
                Guess she gave you things, I didn't give to you
                Old friend, why are you so shy?
                Ain't like you to hold back or hide from the light`
    },
    {
        nombre: "Easy On Me",
        letra: `There ain't no gold in this river
                That I've been washin' my hands in forever
                I know there is hope in these waters
                But I can't bring myself to swim
                When I am drowning in this silence
                Baby, let me in`
    }
];

const texto = document.getElementById("texto");
const titulo = document.getElementById("tituloCancion");

function mostrar(indice) {
    titulo.innerText = canciones[indice].nombre;
    texto.innerText = canciones[indice].letra;
}
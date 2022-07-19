do{
    for (let i = 1; i<=5; i++){
        let texto1 = prompt("Ingresar primer texto")
        let texto2 = prompt("Ingresar segundo texto")
        let resultado = texto1 + " " + texto2
        if(i ==0){
            break
        }
        alert("Tu frase es " + resultado)
        console.log(i)
    }
} while (isNaN(resultado))
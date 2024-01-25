import {countries} from "./countries.js"

function Buscar(sigla){
    const pais = countries.find((pais) => {
        return pais.name.toLocaleLowerCase() === sigla.toLocaleLowerCase()
    })

    return pais
}


console.log(Buscar(process.argv[2]))

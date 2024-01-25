
const lendoTodosOsPaises = (nume) =>{
    for( let i = 0; i < Number(nume); i++){
        console.log(i+1)
    }

}

lendoTodosOsPaises((process.argv[2]))
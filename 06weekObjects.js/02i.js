function towns (info) {

    

    for (const town of info) {
       let [townName, latitude, longitude] = town.split(' | ')
       let curTown = {
        town:townName,
        latitude:Number(latitude).toFixed(2),
        longitude:Number(longitude).toFixed(2)
       }
       console.log(curTown)
    }

    
    

}

towns (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
for(let car in statistics){
    if((statistics[car] % 2 == 1) || car.startsWith("r")){
        console.log(statistics[car]);
    }
}
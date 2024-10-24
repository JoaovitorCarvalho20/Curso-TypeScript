function fsoma(...n1:number[]):number{ // parametro rest 
    let s = 0;
    for (const element of n1) {
        s = s + element;
    }
    return s;
}

console.log(fsoma(1,2,3,4,5,6,7,8,9,10,100));
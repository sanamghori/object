//define object
let person : {name:string ; age:number; colour:string;brother:
    {name:string;age:number;class:number
};addres:string}={
    name:"hassan",
    age: 22,
    colour:"fair",
    brother:{
        name:"husnain",
        age:26,
        class:10
    },
    addres:"nazimabad"
}
console.log(person);

let house:{name:string;area:string;floor:string;bedroom:string
}={
    name:"ghori house",
    area:"defence",
    floor:"second",
    bedroom:"4",
}
console.log(house);
//type alias main ak hi data ko multipul used k liy type ka variable use kry gy 
//koi new type inclode karny k liy new type off ka object bny ga
type type0ff={
    name:string,
    age:number,
    addres:string,
    colour:string,
}
let user1:type0ff={
    name:"anaya",
    age:5,
    addres:"cilfton",
    colour:"fair",
}
console.log(user1.addres);
console.log(user1.colour);



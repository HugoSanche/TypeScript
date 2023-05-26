import { circle } from "./Circle";
import { shape } from "./Shape";
import { rentangle } from "./Rentangle";

let myShape=new shape(5,7);
let myCircle =new circle(10,5,3);
let myRentangle=new rentangle(4,3,8,8);

let theShape:shape[]=[];

theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRentangle);

for (let tempShape of theShape){
    console.log(tempShape);
}
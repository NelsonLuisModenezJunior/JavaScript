import { z } from "zod";

const mySchema = z.string();

console.log(mySchema.parse("Júnior"));
console.log(mySchema.parse(32));

console.log("Hello World!");

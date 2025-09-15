// Pure function: modulo of list
export function ModuloFirstFindN(x:number[]):number[]{
   let n = x[0];

   for (let value of x){
        value = value % n
   }

   return x;
}



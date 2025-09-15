// Pure function: modulo of list
export function ModuloFirstFindN(x:number[]):number[]{
   let n = x[0];

   for (let i = 0; i < x.length; i++){
        x[i] = x[i] % n
   }

   return x;
}



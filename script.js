let A = [];
let X = 0;
const M = [];

while(A.length < 10){
        X = prompt('Digite dez número:');
        A.push(X);
        console.log(`Esses são os dez números digitados: ${X}`);
} 

X = prompt('Digite mais um número:');
console.log(`Multiplicado por: ${X}`);

for (var i = 0; i < A.length; i++) {
        M.push(A[i] * X);     
}
console.log(`Resultado guardado no vetor: ${M}`);
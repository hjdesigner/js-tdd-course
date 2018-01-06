// import métodos from 'biblioteca'
// *  carregar tudo da lib
// as => alias para o métodos (novo nome);

import * as R from 'ramda';
import sum, { sub, mult, div as dividir, PI } from './utils';
import react from 'react';
import reactDOM from 'react-dom';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = R.union(arr1, arr2);

console.log(arr3);

console.log(sum(3, 2));

console.log(sub(3, 2));

console.log(mult(2, 2));

console.log(dividir(2, 2));

console.log(PI);
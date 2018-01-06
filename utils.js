
function sum(a, b) {
  return a + b;
}

// named export
// ter vários exports dentro de um
// mesm arquivo
// só pode chamar com o msm nome
// import precisa das chaves { sub }
export function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}


function mult(a, b) {
  return a * b;
}

const PI = 3.14;

export { mult, div, PI };

// método principal
// só podemos ter um export default por arquivo
// importar com qq nome
// não precisa utlizar as chaves
export default sum;

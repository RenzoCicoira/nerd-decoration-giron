// Promesa sin catch sólo muestra el error que enviamos

function promesa1() {
  const promesa = new Promise((resolve, reject) => {
    if (true) {
      resolve('Funciona');
    } else {
      reject ('Hay un error');
    }
  });
}
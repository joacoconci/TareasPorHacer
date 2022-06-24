import colors from 'colors';
import { inquirerMenu, pausa } from './helpers/inquirer.js';
console.clear();

const main = async () => {
  let opt = '';

  do {
    //Hago un 'await' por que mostrarMenu devuelve una promesa
    opt = await inquirerMenu();
    console.log({ opt });
    if (opt !== '0') await pausa();
  } while (opt !== '0');

  //   pausa();
};

main();

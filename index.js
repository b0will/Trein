import * as Readline from "node:readline/promises";
import * as FS from "node:fs/promises";
import { stdin as input, stdout as output } from "node:process";

const readline = Readline.createInterface({ input, output });

const path = await readline.question("What arquivo vc quer mexer? ");
const data = await readline.question("What vc quer write no arquivo? ");

try {
  await FS.appendFile(path, data);

  console.log(`vc escrever:${data} \n no arquivo ${path}  \n`);
} catch (error) {
  console.error(error);
}

readline.close();

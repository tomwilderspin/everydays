import { sequenceS } from "fp-ts/lib/Apply";
import { log } from "fp-ts/lib/Console";
import { flow, pipe } from "fp-ts/lib/function";
import { fold, none, Option, some } from "fp-ts/lib/Option";
import { randomInt } from "fp-ts/lib/Random";
import { chain, chainFirst, fromIO, of, task, Task } from "fp-ts/lib/Task";
import readline from 'readline';


// IO stdin returns resolving promise answer (Task).
const getStrLine: Task<string> = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((res) => {
    rl.question('> ', (answer) => {
      rl.close();
      res(answer);
    })
  })
};

// IO console log to Task. 
const putStrLine = flow(log, fromIO);

// get a random int between 1 and 5
const random = fromIO(randomInt(1, 5));

// parse a string to an integer
function parseNum(input: string): Option<number> {
  // convert to number & check if whole number.
  const num = +input;
  return isNaN(num) || num % 1 !== 0 ? none : some(num);
}

function shouldContinue(name: string): Task<boolean> {
  return pipe(
    askQuestion(`Do you want to continue, ${name}? (y/n)`),
    chain((answer) => {
      switch(answer.toLowerCase()) {
        case 'y': return of(true);
        case 'n': return of(false);
        // keep asking until a y or n answer is given.
        default: return shouldContinue(name);
      }
    }),
  );
}


// Game loop.
const ado = sequenceS(task);

function gameLoop(name: string): Task<null> {
  return pipe(
    ado({
      secret: random,
      guess: askQuestion(`${name}, guess a number between 1 and 5.`),
    }),
    chain(({ secret, guess }) => pipe(
      parseNum(guess),
      fold( () => putStrLine('sorry I cant read your guess'), (guessNum) => putStrLine(`you guessed ${guessNum === secret ? 'right': 'wrong'}!`)),
    )),
    chain(() => shouldContinue(name)),
    chain((res) => res ? gameLoop(name) : of(null)),
  );
}

const askQuestion = (question: string): Task<string> => pipe(putStrLine(question), chain(() => getStrLine)); 

const main: Task<void> = pipe(
  askQuestion('what is your name?'),
  chainFirst((name) => putStrLine(`Hello ${name}!`)),
  chain((name) => gameLoop(name))
);

//run the game.
main();
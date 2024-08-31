import * as dotenv from 'dotenv';

dotenv.config();
console.log(process.env.CLIENT_ID);

const world = 'world';

export function hello(who: string = world): string {
  return `Hello 12345 ${who}! `;
}

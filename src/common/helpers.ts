import {
  NUMBERS,
  OPERATORS,
  ENTER,
  BACKSPACE,
  EQUAL,
  DELETE,
  DEL,
} from './data';

type setFunction = (value: React.SetStateAction<string>) => void;

export const clearAll = (...setters: setFunction[]) =>
  setters.map((setter) => setter(''));

export const empty = (text: string): boolean => text.length === 0;

export const equal = (el1: any, el2: any): boolean => el1 === el2;

export const numbersIncludes = (el: any): boolean => NUMBERS.includes(el);

export const operatorsIncludes = (el: any): boolean => OPERATORS.includes(el);

export const rmLastOf = (text: string): string =>
  text.slice(0, text.length - 1);

export const lastOf = (text: string): string => text.charAt(text.length - 1);

export const concat = (str1: string, str2: string): string => `${str1}${str2}`;

export const oneNumber = (str: string): boolean => !isNaN(+str);

export const correctUserInput = (input: string): string => {
  if (equal(input, ENTER)) return EQUAL;
  if (equal(input, BACKSPACE) || equal(input, DELETE)) return DEL;
  return input;
};

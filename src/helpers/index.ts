type setFunction = (value: React.SetStateAction<string>) => void;
export const clearAll = (...setters: setFunction[]) =>
  setters.map((setter) => setter(''));
export const isEmpty = (text: string): boolean => text.length === 0;
export const bothEqual = (str1: string, str2: string): boolean => str1 === str2;
export const listIncludes = (list: string[], str: string) => list.includes(str);
export const rmLastCharOf = (text: string): string =>
  text.slice(0, text.length - 1);
export const lastCharOf = (text: string): string =>
  text.charAt(text.length - 1);
export const concat = (str1: string, str2: string): string => `${str1}${str2}`;
export const isOneNumber = (str: string) => !isNaN(+str);

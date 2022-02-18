import { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';
import { OPERATORS, NUMBERS, EQUAL, CAP_CLEAR, DEL, DOT } from '../common/data';
import {
  equal,
  empty,
  lastOf,
  rmLastOf,
  clearAll,
  concat,
  oneNumber,
  numbersIncludes,
  operatorsIncludes,
  correctUserInput,
} from '../common/helpers';
import Calculator from './Calculator';
import Result from './Result';
import List from './List';
import Author from './Author';
import styles from '../styles/app.module.scss';

function App(): JSX.Element {
  const [txt, setTxt] = useState<string>('');
  const [res, setRes] = useState<string>('');
  const [isErr, setIsErr] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userInputHandler = (userInput: string) => {
    let input = correctUserInput(userInput);

    // NOTE Guards
    if (!operatorsIncludes(input) && !numbersIncludes(input)) return;

    if (empty(txt))
      if (operatorsIncludes(input) || equal(input, DEL) || equal(input, DOT))
        return;

    // NOTE Logic
    if (equal(input, CAP_CLEAR)) return clearAll(setTxt, setRes);

    if (equal(input, DEL)) return setTxt((txt) => rmLastOf(txt));

    if (numbersIncludes(input)) return setTxt((txt) => concat(txt, input));

    if (operatorsIncludes(input)) {
      if (equal(input, EQUAL) && operatorsIncludes(lastOf(txt)))
        return setTxt((txt) => rmLastOf(txt));

      if (equal(input, EQUAL)) {
        try {
          evaluate(txt);
          setTxt(`${evaluate(txt)}`);
        } catch (err) {}
        return;
      }

      if (operatorsIncludes(lastOf(txt)))
        return setTxt((txt) => concat(rmLastOf(txt), input));

      return setTxt((txt) => concat(txt, input));
    }
  };

  const renderElements = (arr: string[]): JSX.Element[] => {
    // prettier-ignore
    let cls = isErr && equal(arr, OPERATORS) ? styles['operators__btn--danger'] : "";

    return arr.map((el) => (
      <button className={cls} key={el} onClick={() => userInputHandler(el)}>
        {el}
      </button>
    ));
  };

  useEffect(() => {
    const setResAndIsErr = (res: string, isErr: boolean): void => {
      setRes(res);
      setIsErr(isErr);
    };

    try {
      evaluate(txt);
      if (oneNumber(txt)) return setResAndIsErr('', false);
      setResAndIsErr(evaluate(txt), false);
    } catch (err) {
      setResAndIsErr('', true);
    }
  }, [txt]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => userInputHandler(e.key);
    document.addEventListener<'keydown'>('keydown', handler);
    return () => document.removeEventListener<'keydown'>('keydown', handler);
  }, [userInputHandler]);

  return (
    <div className={styles.app}>
      <Calculator className={styles.calculator}>
        <Result className={styles.textarea} txt={txt} res={res} />
        <List className={styles.operators} list={renderElements(OPERATORS)} />
        <List className={styles.numbers} list={renderElements(NUMBERS)} />
      </Calculator>
      <Author className={styles.author} name={'Suleiman Ali'} />
    </div>
  );
}

export default App;

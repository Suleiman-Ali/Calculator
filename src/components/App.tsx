import { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';
import {
  bothEqual,
  isEmpty,
  lastCharOf,
  listIncludes,
  rmLastCharOf,
  clearAll,
  concat,
  isOneNumber,
} from '../helpers/index';
import Buttons from './Buttons';
import TextArea from './TextArea';
import FooterText from './FooterText';
import styles from '../styles/app.module.scss';

const OPERATORS = ['*', '/', '-', '+', '=', 'C'];
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'DEL'];

function App(): JSX.Element {
  const [txt, setTxt] = useState<string>('');
  const [res, setRes] = useState<string>('');

  useEffect(() => {
    try {
      evaluate(txt);
      if (isOneNumber(txt)) return setRes('');
      setRes(evaluate(txt));
    } catch (err) {
      setRes('');
    }
  }, [txt]);

  const userInputHandler = (input: string) => {
    if (isEmpty(txt) && listIncludes(OPERATORS, input)) return;
    if (isEmpty(txt) && bothEqual(input, 'C')) return;
    if (isEmpty(txt) && bothEqual(input, 'DEL')) return;
    if (isEmpty(txt) && bothEqual(input, '.')) return;
    if (isEmpty(txt) && bothEqual(input, '0')) return;
    if (bothEqual(input, 'C')) return clearAll(setTxt, setRes);
    if (bothEqual(input, 'DEL')) return setTxt((txt) => rmLastCharOf(txt));
    if (listIncludes(NUMBERS, input))
      return setTxt((txt) => concat(txt, input));

    if (listIncludes(OPERATORS, input)) {
      if (bothEqual(input, '=') && listIncludes(OPERATORS, lastCharOf(txt)))
        return setTxt((txt) => rmLastCharOf(txt));

      if (bothEqual(input, '=')) {
        try {
          evaluate(txt);
          setTxt(`${evaluate(txt)}`);
        } catch (err) {}

        return;
      }

      if (listIncludes(OPERATORS, lastCharOf(txt)))
        return setTxt((txt) => concat(rmLastCharOf(txt), input));

      setTxt((txt) => concat(txt, input));
    }
  };

  const renderElements = (arr: string[]): JSX.Element[] =>
    arr.map((el) => (
      <button key={el} onClick={() => userInputHandler(el)}>
        {el}
      </button>
    ));

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <TextArea className={styles.textarea} txt={txt} res={res} />
        {/* prettier-ignore */}
        <Buttons className={styles.operators} list={renderElements(OPERATORS)} />
        <Buttons className={styles.numbers} list={renderElements(NUMBERS)} />
      </div>
      <FooterText className={styles.note} name={'Suleiman Ali'} />
    </div>
  );
}

export default App;

// DONE ADD BUTTONS FUNCTIONALITY
// TODO ADD KEYBOARD FUNCTIONALITY
// TODO SHOW ERRORS
// TODO Fix overflow

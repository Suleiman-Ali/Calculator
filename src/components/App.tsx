import { useState } from 'react';
import Buttons from './Buttons';
import TextArea from './TextArea';
import styles from '../styles/app.module.scss';

const OPERATORS = ['*', '/', '-', '+', '=', 'C'];
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'DEL'];

function App(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const renderElements = (arr: string[]): JSX.Element[] =>
    arr.map((el) => <button key={el}>{el}</button>);

  return (
    <div className={styles.app}>
      <div className={styles.calculator}>
        <TextArea className={styles.textarea} text={text} result={result} />
        <Buttons
          className={styles.operators}
          list={renderElements(OPERATORS)}
        />
        <Buttons className={styles.numbers} list={renderElements(NUMBERS)} />
      </div>

      <p className={styles.note}>
        Designed and Coded by <span>&lt;Suleiman Ali /&gt;</span>
      </p>
    </div>
  );
}

export default App;

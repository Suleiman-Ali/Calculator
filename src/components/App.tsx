import { render } from '@testing-library/react';
import { useState } from 'react';
import Buttons from './Buttons';
import TextArea from './TextArea';

const OPERATORS = ['*', '/', '-', '+', '='];
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'DEL'];

function App(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const renderElements = (arr: string[]): JSX.Element[] =>
    arr.map((el) => <button key={el}>{el}</button>);

  return (
    <div className="app">
      <TextArea className="text-area" text={text} result={result} />
      <Buttons className="operators" list={renderElements(OPERATORS)} />
      <Buttons className="numbers" list={renderElements(NUMBERS)} />
    </div>
  );
}

export default App;

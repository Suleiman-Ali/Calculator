import { useState } from 'react';
import Buttons from './Buttons';
import TextArea from './TextArea';

const OPERATORS = ['*', '/', '-', '+', '='];
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

function App(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const renderElements = (arr: string[]): JSX.Element[] =>
    arr.map((el) => <button key={el}>{el}</button>);

  return (
    <div className="app">
      <TextArea text={text} result={result} />

      <Buttons
        className="operators"
        list={OPERATORS}
        renderElements={renderElements}
      />
      <Buttons
        className="numbers"
        list={NUMBERS}
        isDel={true}
        renderElements={renderElements}
      />
    </div>
  );
}

export default App;

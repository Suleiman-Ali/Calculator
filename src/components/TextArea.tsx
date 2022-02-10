interface TextAreaProps {
  text: string;
  result: string;
}

function TextArea({ text, result }: TextAreaProps): JSX.Element {
  return (
    <div className="text-area">
      <span className="text-area__result">{result}</span>
      <p className="text-area__text">{text}</p>
    </div>
  );
}

export default TextArea;

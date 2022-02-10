interface TextAreaProps {
  text: string;
  result: string;
  className: string;
}

function TextArea({ text, result, className }: TextAreaProps): JSX.Element {
  return (
    <div className={className}>
      <span>{result}</span>
      <p>{text}</p>
    </div>
  );
}

export default TextArea;

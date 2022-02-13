interface TextAreaProps {
  txt: string;
  res: string;
  className: string;
}

function TextArea({ txt, res, className }: TextAreaProps): JSX.Element {
  return (
    <div className={className}>
      <span>{res}</span>
      <p>{txt}</p>
    </div>
  );
}

export default TextArea;

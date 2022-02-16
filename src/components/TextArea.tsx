interface TextAreaProps {
  txt: string;
  res: string;
  className: string;
}

function TextArea({ txt, res, className }: TextAreaProps): JSX.Element {
  return (
    <div className={className}>
      <span title={res}>{res}</span>
      <p title={txt}>{txt}</p>
    </div>
  );
}

export default TextArea;

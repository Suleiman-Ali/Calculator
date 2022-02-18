interface ResultProps {
  txt: string;
  res: string;
  className: string;
}

function Result({ txt, res, className }: ResultProps): JSX.Element {
  return (
    <div className={className}>
      <span title={res}>{res}</span>
      <p title={txt}>{txt}</p>
    </div>
  );
}

export default Result;

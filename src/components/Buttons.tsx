interface ButtonsProps {
  className: string;
  list: string[];
  isDel?: boolean;
  renderElements: (arr: string[]) => JSX.Element[];
}

function Buttons({
  className,
  list,
  isDel,
  renderElements,
}: ButtonsProps): JSX.Element {
  return (
    <div className={className}>
      {renderElements(list)}
      {isDel ? <button className="operators__oper">DEL</button> : null}
    </div>
  );
}

export default Buttons;

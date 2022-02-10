interface ButtonsProps {
  className: string;
  list: JSX.Element[];
  isDel?: boolean;
}

function Buttons({ className, list, isDel }: ButtonsProps): JSX.Element {
  return (
    <div className={className}>
      {list}
      {isDel ? <button className="operators__oper">DEL</button> : null}
    </div>
  );
}

export default Buttons;

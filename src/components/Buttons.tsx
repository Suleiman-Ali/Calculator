interface ButtonsProps {
  className: string;
  list: JSX.Element[];
}

function Buttons({ className, list }: ButtonsProps): JSX.Element {
  return <div className={className}>{list}</div>;
}

export default Buttons;

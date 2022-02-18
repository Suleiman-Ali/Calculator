import { ReactNode } from 'react';

interface CalculatorProps {
  children: ReactNode;
  className: string;
}

function Calculator({ children, className }: CalculatorProps): JSX.Element {
  return <div className={className}>{children}</div>;
}

export default Calculator;

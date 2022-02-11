interface FooterTextProps {
  name: string;
  className: string;
}

function FooterText({ name, className }: FooterTextProps): JSX.Element {
  return (
    <p className={className}>
      Designed and Coded by <span>&lt;{name} /&gt;</span>
    </p>
  );
}

export default FooterText;

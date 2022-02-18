interface AuthorProps {
  name: string;
  className: string;
}

function Author({ name, className }: AuthorProps): JSX.Element {
  return (
    <p className={className}>
      Designed and Coded by <span>&lt;{name} /&gt;</span>
    </p>
  );
}

export default Author;

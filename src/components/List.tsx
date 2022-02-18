interface ListProps {
  className: string;
  list: JSX.Element[];
}

function List({ className, list }: ListProps): JSX.Element {
  return <div className={className}>{list}</div>;
}

export default List;

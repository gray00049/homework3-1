import Star from "./Star";

export default function Stars({count = 0}) {
  if (count < 1 || count > 5 || typeof(count) != 'number') {
    return;
  }

  let starArray = [];

  for (let i = 0; i < count; i++) {
    starArray.push(<li key={i}><Star /></li>)
  }

  return (
    <ul className="card-body-stars">
      {starArray}
    </ul>
  );
}
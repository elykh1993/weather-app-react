export default function MyDate(props) {
  return (
    <div className="Date">
      <h4>{props.data.date.getDay()}</h4>
    </div>
  );
}

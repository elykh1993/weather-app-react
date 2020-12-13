import FormatDate from "./FormatDate";

export default function MyDate(props) {
  return (
    <div className="Date">
      <h4>
        <FormatDate date={props.data.date} />
      </h4>
    </div>
  );
}

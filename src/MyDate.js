import "./MyDate.css";
import FormatDate from "./FormatDate";

export default function MyDate(props) {
  return (
    <div className="MyDate">
      <h4>
        <FormatDate date={props.data.date} />
      </h4>
    </div>
  );
}

import "./Categories.css";
import { Link } from "react-router-dom";
import musicalGenre from "../Data";

export default function Categories() {
  return (
    <div className="boxes">
      {Object.keys(musicalGenre).map((key) => (
        <button className={key}>
          <Link to={`/details/${key}`}>{musicalGenre[key].title}</Link>
        </button>
      ))}
    </div>
  );
}

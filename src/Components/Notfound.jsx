import notfound from "../images/notfound.svg";
import "./Notfound.css"
export default function NotFound() {
  return (
    <div className="container">
      <h3>404 page not found</h3>
      <img src={notfound} alt="not found page"></img>
    </div>
  );
}

import "./education-info.css";
import logo from "../../../Images/sjsu.png";

export default function EducationInfo(props) {
    return (
        <div className="info-box">
            <img src={props.info.Logo} alt="school-logo" />
            <div>
                <h1>{props.info.SchoolName}</h1>
            </div>
        </div>
    );
}
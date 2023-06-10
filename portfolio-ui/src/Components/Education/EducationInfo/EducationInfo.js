import "./education-info.css";

export default function EducationInfo(props) {
    return (
        <div className="info-box">
            <img className="school-logo" src={props.info.Logo} alt="school-logo" />
            <div className="school-info">
                <div className="name-date">
                    <h1 style={{ fontWeight: "bold" }} >{props.info.SchoolName}</h1>
                    <p style={{ fontWeight: "bold", fontSize: "18px" }}>Graduation: {props.info.GraduationDate}</p>
                </div>
                <h3 style={{ fontStyle: "italic", fontSize: "22px" }}>{props.info.Degree} | {props.info.College}</h3>
                <p style={{ fontWeight: "bold" }}>Cumulative GPA: {props.info.GPA}</p>
                <ul>
                    <li>Relevant Coursework: {props.info.RelevantCoursework.map((course) => course).join(', ')}</li>
                    <li>Organizations: {props.info.Organizations.map((org) => org).join(', ')}</li>
                </ul>
            </div>
        </div>

    );
}
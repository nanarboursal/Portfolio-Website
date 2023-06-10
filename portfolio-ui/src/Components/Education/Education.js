import EducationInfo from "./EducationInfo/EducationInfo";
import "./education.css";
import educationInfo from "./educationInfo";

export default function Education() {
    return (
        <div id="education" className="edu-block">
            <h1>Education</h1>
            <div className="edu-info">
                {educationInfo.Education.map(edu => {
                    return (
                        <EducationInfo info={edu}></EducationInfo>
                    );
                })}
            </div>
        </div>
    );
}

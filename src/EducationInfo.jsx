function EducationInfo({
  eduDate,
  eduLocation,
  eduSchool,
  eduDegree,
  eduDescription,
}) {
  return (
    <div className="eduDetails">
      <div className="eduLeft">
        <div className="eduDate">{eduDate}</div>
        <div className="eduLocation">{eduLocation}</div>
      </div>
      <div className="eduRight">
        <div className="eduSchool">{eduSchool}</div>
        <div className="eduDegree">{eduDegree}</div>
        <div className="eduDescription">{eduDescription}</div>
      </div>
    </div>
  );
}

export default EducationInfo;

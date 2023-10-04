/* eslint-disable react/prop-types */
import RemoveSpaces from "./RemoveSpaces";

function ExperienceInfo({
  profDate,
  profLocation,
  profCompany,
  profTitle,
  profDescription,
  profId,
}) {
  const profDetailsClass = "profDetails " + RemoveSpaces(profId);

  return (
    <div className={profDetailsClass}>
      <div className="profLeft">
        <div className="profDate">{profDate}</div>
        <div className="profLocation">{profLocation}</div>
      </div>
      <div className="profRight">
        <div className="profCompany">{profCompany}</div>
        <div className="profTitle">{profTitle}</div>
        <div className="profDescription">{profDescription}</div>
      </div>
    </div>
  );
}

export default ExperienceInfo;

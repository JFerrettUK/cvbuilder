import idCard from "/idCard.svg";
import person from "/person.svg";
import school from "/school.svg";
import trash from "/trash.svg";
import nav from "/nav.svg";
import call from "/call.svg";
import briefcase from "/briefcase.svg";
import plus from "/plus.svg";
import mail from "/mail.svg";

function CVLayout() {
  return (
    <>
      <div className="cvBox">
        <div className="cvProfile">
          <div className="cvName">Homer Simpson</div>
          <div className="profileDetails">
            <div className="iconTextCont">
              <img className="profileIcon" src={mail} alt="mail Icon" />
              <div className="cvEmail">homersimpson@gmail.com</div>
            </div>
            <div className="iconTextCont">
              <img className="profileIcon" src={call} alt="Call Icon" />
              <div className="cvPhone">555-7334</div>
            </div>
            <div className="iconTextCont">
              <img className="profileIcon" src={nav} alt="Nav Icon" />
              <div className="cvCity">Springfield, USA</div>
            </div>
          </div>
        </div>
        <div className="cvSubHeader">Education</div>
        <div className="eduDetails">
          <div className="eduLeft">
            <div className="eduDate">1988-1992</div>
            <div className="eduLocation">Springfield University</div>
          </div>
          <div className="eduRight">
            <div className="eduSchool">Springfield University</div>
            <div className="eduDegree">Nuclear Physics</div>
            <div className="eduDescription">
              Developed a unique approach to safety involving excessive a bunch
              of signs and elaborate escape plans.{" "}
            </div>
          </div>
        </div>
        <div className="cvSubHeader">Professional Experience</div>
        <div className="profDetails">
          <div className="profLeft">
            <div className="profDate">04/1992</div>
            <div className="profLocation">Springfield, USA</div>
          </div>
          <div className="profRight">
            <div className="profCompany">Springfield Nuclear Power Plant</div>
            <div className="profTitle">Safety Stuff Doer</div>
            <div className="profDescription">
              I worked at the Springfield Nuclear Power Plant, where I, um, made
              sure stuff didn't go kablooey. You know, nuclear doodads and all
              that jazz. And, I tried to keep things from blowing up and stuff.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVLayout;

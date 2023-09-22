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
          <div className="cvName">James Ferrett</div>
          <div className="profileDetails">
            <div className="iconTextCont">
              <img className="profileIcon" src={mail} alt="mail Icon" />
              <div className="cvEmail">jferrettuk@gmail.com</div>
            </div>
            <div className="iconTextCont">
              <img className="profileIcon" src={call} alt="Call Icon" />
              <div className="cvPhone">07723 568393</div>
            </div>
            <div className="iconTextCont">
              <img className="profileIcon" src={nav} alt="Nav Icon" />
              <div className="cvCity">Sheffield, UK</div>
            </div>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default CVLayout;

import React, { useState } from "react";
import "./ProjectDetailForBuyerCard.css";
import ReactAudioPlayer from "react-audio-player";
import { Link, useNavigate } from "react-router-dom";
import { acceptOfficialVoice, requestEdit } from "../../api/axios";

export default function ProjectDetailForBuyerCard({ voice, projectStatus }) {
  const [feedback, setFeedback] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    requestEdit(voice.voiceTransactionId, feedback);
    setFeedback("");
    navigate(`/officiallist/${voice.voiceProjectId}`);
  };
  const handleAccept = async (e) => {
    e.preventDefault();
    acceptOfficialVoice(voice.voiceTransactionId);
    navigate("/tpfb");
  };
  return (
    <div>
      <div className="pdfbc-display">
        <div className="pdfbc-card">
          <div className="pdfbc-avatar">
            <img src={voice.voiceSeller.avatarLink} alt="avatar" />
          </div>
          <div className="pdfbc-main">
            <div className="pdfbc-info">
              <span className="pdfbc-fullName">
                {voice.voiceSeller.fullname}
              </span>
              {/* <span class="pdfbc-gender">{` | Giọng ${voice.voiceGender}`}</span> */}
            </div>
            <div className="pdfbc-audio">
              <ReactAudioPlayer src={voice.linkVoice} controls />
            </div>
          </div>
          <div className="pdfbc-demo">
            <div className="pdfbc-demo-download">
              <Link
                to={voice.linkVoice}
                download="Test-Docx-Demo"
                target="blank"
              >
                <button>Download</button>
              </Link>
            </div>
            <div className="pdfbc-demo-accept">
              {projectStatus === "Processing" && !voice.feedback && (
                <button onClick={handleAccept}>Chấp nhận</button>
              )}
            </div>
          </div>
        </div>
      </div>
      {voice.feedback ? (
        <div className="uvipc-edit">
          <div className="uvipc-content">
            <span className="uvipc-requestEdit">Yêu cầu chỉnh sửa: </span>
            <span className="uvipc-contentEdit">{voice.feedback}</span>
          </div>
        </div>
      ) : (
        projectStatus === "Processing" && (
          <div className="pdfbc-edit">
            <div className="pdfbc-content">
              <form onSubmit={handleSubmit}>
                <input
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Yêu cầu chỉnh sửa..."
                />
                <button>Gửi yêu cầu chỉnh sửa</button>
              </form>
            </div>
          </div>
        )
      )}
    </div>
  );
}

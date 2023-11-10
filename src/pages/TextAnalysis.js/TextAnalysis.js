import React, { useState } from "react";
import "./TextAnalysis.css";
import axios from "../../api/axios";

export default function TextAnalysis() {
  const uploadFileDocURL = "/api/VoiceProjects/AIAnalysis";

  const [loadFile, setLoadFile] = useState(false);
  const [nameFile, setNameFile] = useState();
  const [linkDoc, setLinkDoc] = useState();
  const [voiceGender, setVoiceGender] = useState();
  const [voiceRegion, setVoiceRegion] = useState();
  const [voiceTone, setVoiceTone] = useState();
  const [voiceInspirational, setVoiceInspirational] = useState();
  const [voiceSpeed, setVoiceSpeed] = useState();
  const [voicePronounce, setVoicePronounce] = useState();
  const [voiceStress, setVoiceStress] = useState();
  const [voiceType, setVoiceType] = useState();
  const [voiceProperty, setVoiceProperty] = useState();
  const handleUploadFile = async (e) => {
    setLoadFile(true);
    const headers = {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    };
    const fileDoc = {
      file: e.target.files[0],
    };

    try {
      await axios
        .post(uploadFileDocURL, fileDoc, { headers })
        .then((response) => {
          if (response.status === 200) {
            setLinkDoc(response.data);
            setLoadFile(false);
            setNameFile(e.target.files[0]?.name);
            console.log(response.data);
            setVoiceGender(response.data.voiceGender);
            setVoiceInspirational(response.data.voiceInspirational);
            setVoicePronounce(response.data.voicePronouce);
            setVoiceProperty(response.data.voiceProperty);
            setVoiceRegion(response.data.voiceRegion);
            setVoiceSpeed(response.data.voiceSpeed);
            setVoiceStress(response.data.voiceStress);
            setVoiceTone(response.data.voiceTone);
            setVoiceType(response.data.voiceType);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="textAnalysis-container">
      <div className="textAnalysis-card">
        <div className="textAnalysis-header">
          <h2>Phân tích văn bản</h2>
          <div className="textAnalysis-input">
            <label htmlFor="textAnalyze">
              {loadFile ? (
                <span>Loading...</span>
              ) : (
                <span>{nameFile ? nameFile : "Phân tích văn bản"}</span>
              )}
            </label>
            <input
              id="textAnalyze"
              type="file"
              accept=".doc, .docx, .pdf, .txt"
              hidden
              required
              onChange={handleUploadFile}
            />
          </div>
          <p>
            *Lưu ý: Phân tích này thuộc về AI nên sẽ cho ra nhiều kết quả khác
            nhau
          </p>
        </div>
        {voiceGender && (
          <div className="textAnalysis-displayGrid">
            <span className="textAnalysis-field">Giới tính giọng đọc</span>
            <span className="textAnalysis-field-text">{voiceGender}</span>

            <span className="textAnalysis-field">Vùng miền</span>
            <span className="textAnalysis-field-text">{voiceRegion}</span>

            <span className="textAnalysis-field">Tone giọng</span>
            <span className="textAnalysis-field-text">{voiceTone}</span>

            <span className="textAnalysis-field">Độ truyền cảm</span>
            <span className="textAnalysis-field-text">
              {voiceInspirational}
            </span>

            <span className="textAnalysis-field">Tốc độ đọc</span>
            <span className="textAnalysis-field-text">{voiceSpeed}</span>

            <span className="textAnalysis-field">Khả năng phát âm</span>
            <span className="textAnalysis-field-text">{voicePronounce}</span>

            <span className="textAnalysis-field">Thể hiện trọng âm</span>
            <span className="textAnalysis-field-text">{voiceStress}</span>

            <span className="textAnalysis-field">Chất giọng</span>
            <span className="textAnalysis-field-text">{voiceProperty}</span>

            <span className="textAnalysis-field">Phù hợp</span>
            <span className="textAnalysis-field-text">{voiceType}</span>
          </div>
        )}
      </div>
    </div>
  );
}

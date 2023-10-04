import React, { useEffect, useState } from "react";
import "./SendProject.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useParams } from "react-router-dom";
import axios, { getVoice, sendVoiceProject } from "../../api/axios";
import useAuth from "../../hooks/useAuth";

export default function SendProject() {
  const { auth } = useAuth();

  const [voice, setVoice] = useState();
  const [loading, setLoading] = useState(true);
  const [mainFile, setMainFile] = useState();
  const [buyerId, setBuyerId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [request, setRequest] = useState("");
  const [duration, setDuration] = useState();
  const [deadline, setDeadline] = useState();

  const [nameFileDemo, setNameFileDemo] = useState("");
  const [nameFileMain, setNameFileMain] = useState();
  const [nameFileThumbnail, setNameFileThumbnail] = useState("");

  const { id } = useParams();

  const uploadFileDocURL = "/api/Buyers/UploadDocFile";

  useEffect(() => {
    getVoice(id)
      .then((json) => setVoice(json))
      .then((json) => setLoading(false));
  }, [id]);

  const handleUploadFileMain = async (e) => {
    const headers = {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    };
    const fileMain = {
      file: e.target.files[0],
    };

    try {
      await axios
        .post(uploadFileDocURL, fileMain, { headers })
        .then((response) => {
          if (response.status === 200) {
            console.log("main = 200");
            setMainFile(response.data);
            setNameFileMain(e.target.files[0]?.name);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendVoiceProject(
      auth.userId,
      id,
      title,
      description,
      duration,
      deadline,
      nameFileDemo,
      nameFileMain,
      nameFileThumbnail
    );
  };

  return (
    <div className="sendProject-center">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="sendProject-container">
          <div className="sendProject-title">
            <h2>{`Gửi dự án đến ${voice.voiceSeller.fullname}`}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="sendProject-card">
              <div className="sendProject-card-display">
                <div className="sendProject-card-left">
                  <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                  />
                </div>
                <div className="sendProject-card-right">
                  <div className="sendProject-fullname">
                    <span>{voice.voiceSeller.fullname} | </span>
                    <span>Giọng {voice.voiceGender}</span>
                  </div>
                  <div className="sendProject-rate">
                    <span>Đánh giá</span>
                    <div className="sendProject-icon">
                      <span>{voice.voiceSeller.rateAvg}</span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="sendProject-price">
                    <span>Giá: </span>
                    <span>{voice.price} /phút</span>
                  </div>
                </div>
                <div className="sendProject-card-left-row-2">
                  <div className="sendProject-header">
                    <span>Tiêu đề</span>
                  </div>
                  <div className="sendProject-upload">
                    <span>Gửi văn bản cần đọc: </span>
                  </div>
                  <div className="sendProject-description">
                    <span>Mô tả: </span>
                  </div>
                  <div className="sendProject-detail">
                    <span>Yêu cầu chi tiết:</span>
                  </div>
                  <div className="sendProject-time">
                    <span>Thời lượng yêu cầu:</span>
                  </div>
                  <div className="sendProject-deadline">
                    <span>Deadline</span>
                  </div>
                </div>
                <div className="sendProject-card-right">
                  <div className="sendProject-text-header">
                    <input
                      placeholder="Nhập tiêu đề"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="sendProject-text-upload">
                    <input
                      type="file"
                      id="btn-upload-doc"
                      hidden
                      accept=".doc, .docx, .pdf, .txt"
                      required
                      onChange={handleUploadFileMain}
                    />
                    <label htmlFor="btn-upload-doc">
                      {nameFileMain ? nameFileMain : "Upload"}
                    </label>
                  </div>
                  <div className="sendProject-text-description">
                    <textarea
                      rows={4}
                      cols={60}
                      placeholder="Nhập mô tả"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="sendProject-text-detail">
                    <textarea
                      rows={2}
                      cols={60}
                      placeholder="Nhập yêu cầu chi tiết"
                      value={request}
                      onChange={(e) => setRequest(e.target.value)}
                    />
                  </div>
                  <div className="sendProject-duration">
                    <input
                      type="number"
                      placeholder="Nhập thời lượng (phút)"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </div>
                  <div className="sendProject-text-deadline">
                    <input
                      type="date"
                      required
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="sendProject-button-send">
                <button>Gửi</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./UploadFileToProjectDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios, {
  getProjectApprovalDetail,
  sendMainVoice,
} from "../../api/axios";
import useAuth from "../../hooks/useAuth";

export default function UploadFileToProjectDetail() {
  const uploadVoiceURL = "/api/VoiceSellers/UploadVoice";

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const [uploadFile, setUploadFile] = useState();
  const [mp3File, setMp3File] = useState();
  const { id } = useParams();
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getProjectApprovalDetail(id)
      .then((json) => setPost(json))
      .then((json) => setLoading(false));
  }, [id]);

  const handleUploadVoice = async (event) => {
    const headers = {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    };

    const file = {
      file: event.target.files[0],
    };

    try {
      await axios
        .post(uploadVoiceURL, file, { headers })
        .then((response) => {
          if (response.status === 200) {
            setMp3File(response.data);
            setUploadFile(event.target.files[0]);
            setUploadFile(event.target.files[0]);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sendMainVoice(post.voiceProjectId, auth.userId, mp3File);
    navigate(`/pdfs/${post.voiceProjectId}`);
  };

  return (
    <div className="uftpd">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="uftpd-title">{post.title} </h2>
          <div className="uftpd-container">
            <div className="uftpd-card">
              <div className="uftpd-info">
                <div className="uftpd-description">
                  <span>Mô tả:</span>
                </div>
                <div className="uftpd-text-description">
                  <span>{post.description}</span>
                </div>

                <div className="uftpd-detail">
                  <span>Yêu cầu chi tiết:</span>
                </div>
                <div className="uftpd-text-detail">
                  <span>{post.request}</span>
                </div>

                <div className="uftpd-demo">
                  <span>Văn bản cần đọc</span>
                </div>
                <div className="uftpd-text-demo">
                  <Link
                    to={post.linkDocMain}
                    download="Docx-Main"
                    target="blank"
                  >
                    <button>Download</button>
                  </Link>
                </div>

                <div className="uftpd-price">
                  <span>Giá:</span>
                </div>
                <div className="uftpd-text-price">
                  <span>{post.toalOutputPrice} vnd</span>
                </div>

                <div className="uftpd-duration">
                  <span>Thời lượng yêu cầu:</span>
                </div>
                <div className="uftpd-text-duration">
                  <span>{post.duration} phút</span>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="uftpd-upload-file">
                  <input
                    type="file"
                    name="file"
                    id="upload-official-voice"
                    onChange={handleUploadVoice}
                    hidden
                    accept="audio/mpeg"
                  />
                  <label htmlFor="upload-official-voice">
                    Tải lên file ghi âm: {uploadFile?.name}
                  </label>
                </div>
                <div className="uftpd-send">
                  <button>Gửi</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

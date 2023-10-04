import React, { useEffect, useState } from "react";
import "./Recruitment.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios, {
  applyToProject,
  getProjectApprovalDetail,
} from "../../api/axios";
import useAuth from "../../hooks/useAuth";

export default function Recruitment() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const [uploadFile, setUploadFile] = useState();
  const [mp3File, setMp3File] = useState();
  const { id } = useParams();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const uploadVoiceURL = "/api/VoiceSellers/UploadVoice";

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

    applyToProject(post.voiceProjectId, auth.userId, mp3File);
    navigate("/posts");
  };

  return (
    <div>
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="recruitment-title">{post.title}</h2>
          <div className="recruitment-container">
            <div className="recruitment-card">
              <div className="recruitment-info">
                <div className="recruitment-description">
                  <span>Mô tả:</span>
                </div>
                <div className="recruitment-text-description">
                  <span>{post.description}</span>
                </div>

                <div className="recruitment-detail">
                  <span>Yêu cầu chi tiết:</span>
                </div>
                <div className="recruitment-text-detail">
                  <span>{post.request}</span>
                </div>

                <div className="recruitment-demo">
                  <span>Văn bản demo</span>
                </div>
                <div className="recruitment-text-demo">
                  <Link
                    className="link"
                    to={post.linkDocDemo}
                    download="Docx-Demo"
                    target="blank"
                  >
                    <button>Download</button>
                  </Link>
                </div>

                <div className="recruitment-price">
                  <span>Giá:</span>
                </div>
                <div className="recruitment-text-price">
                  <span>{post.toalOutputPrice} vnd</span>
                </div>

                <div className="recruitment-duration">
                  <span>Thời lượng yêu cầu:</span>
                </div>
                <div className="recruitment-text-duration">
                  <span>{post.duration} phút</span>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="recruitment-upload-file">
                  <input
                    type="file"
                    name="file"
                    id="recruitment-btn"
                    onChange={handleUploadVoice}
                    hidden
                    accept="audio/mpeg"
                  />
                  <label htmlFor="recruitment-btn">
                    Tải lên file ghi âm: {uploadFile?.name}
                  </label>
                </div>
                <div className="recruitment-button">
                  <button>Ứng tuyển ngay</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./Recruitment.css";
import { Link, useParams } from "react-router-dom";
import { getProjectApprovalDetail } from "../../api/axios";

export default function Recruitment() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const { id } = useParams();
  useEffect(() => {
    getProjectApprovalDetail(id)
      .then((json) => setPost(json))
      .then((json) => setLoading(false));
  }, [id]);
  return (
    <div className="recruitment">
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
                  {" "}
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
              <div className="recruitment-upload-file">
                <input
                  type="file"
                  name="file"
                  id="recruitment-btn"
                  hidden
                  accept="audio/mpeg"
                />
                <label htmlFor="recruitment-btn">
                  Tải lên file ghi âm demo
                </label>
              </div>
              <div className="recruitment-button">
                <button>Ứng tuyển ngay</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

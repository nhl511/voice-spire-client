import React, { useEffect, useState } from "react";
import "./ProjectApprovalAtDetail.css";
import { Link, useParams } from "react-router-dom";
import { getProjectApprovalDetail } from "../../api/axios";

export default function ProjectApprovalAtDetail() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProjectApprovalDetail(id)
      .then((json) => setPost(json))
      .then((json) => setLoading(false));
  }, [id]);
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
          <h2 className="paad-title">{post.title}</h2>

          <div className="paad-container">
            <div className="paad-card">
              <div className="paad-display">
                <div className="paad-card-left">
                  <div className="paad-description">
                    <span>Mô tả:</span>
                  </div>
                  <div className="paad-detail">
                    <span>Yêu cầu chi tiết:</span>
                  </div>
                  <div className="paad-demo">
                    <span>Văn bản demo</span>
                  </div>
                  <div className="paad-main">
                    <span>Văn bản chính</span>
                  </div>
                  <div className="paad-duration">
                    <span>Thời lượng yêu cầu:</span>
                  </div>
                </div>
                <div className="paad-card-right">
                  <div className="paad-text-description">
                    <span>{post.description}</span>
                  </div>
                  <div className="paad-text-detail">
                    <span>{post.request}</span>
                  </div>
                  <div className="paad-text-demo">
                    <Link
                      to="/mp3/test.docx"
                      download="Test-Docx-Demo"
                      target="blank"
                    >
                      <button>Download</button>
                    </Link>
                  </div>
                  <div className="paad-text-main">
                    <Link
                      to="/mp3/test.docx"
                      download="Test-Docx-Main"
                      target="blank"
                    >
                      <button>Download</button>
                    </Link>
                  </div>
                  <div className="paad-text-duration">
                    <span>{`${post.duration} phút`}</span>
                  </div>
                </div>
              </div>
              <div className="paad-button">
                <button>Duyệt</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

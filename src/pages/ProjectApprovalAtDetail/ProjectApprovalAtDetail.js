import React, { useEffect, useState } from "react";
import "./ProjectApprovalAtDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  approveProject,
  getProjectApprovalDetail,
  notApproveProject,
} from "../../api/axios";

export default function ProjectApprovalAtDetail() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    getProjectApprovalDetail(id)
      .then((json) => setPost(json))
      .then((json) => setLoading(false));
  }, [id]);

  return (
    <div className="paad">
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
              <div className="paad-displayGrid">
                <div className="paad-description">
                  <span>Mô tả:</span>
                </div>
                <div className="paad-text-description">
                  <span>{post.description}</span>
                </div>
              </div>
              <div className="paad-displayGrid">
                <div className="paad-detail">
                  <span>Yêu cầu chi tiết:</span>
                </div>
                <div className="paad-text-detail">
                  <span>{post.request}</span>
                </div>
              </div>
              <div className="paad-displayGrid">
                <div className="paad-demo">
                  <span>Văn bản demo</span>
                </div>
                <div className="paad-text-demo">
                  <Link
                    to={post.linkDocDemo}
                    download="Docx-Demo"
                    target="blank"
                  >
                    <button>Download</button>
                  </Link>
                </div>
              </div>
              <div className="paad-displayGrid">
                <div className="paad-main">
                  <span>Văn bản chính</span>
                </div>
                <div className="paad-text-main">
                  <Link
                    to={post.linkDocMain}
                    download="Docx-Main"
                    target="blank"
                  >
                    <button>Download</button>
                  </Link>
                </div>
              </div>
              <div className="paad-displayGrid">
                <div className="paad-duration">
                  <span>Thời lượng yêu cầu:</span>
                </div>

                <div className="paad-text-duration">
                  <span>{`${post.duration} phút`}</span>
                </div>
              </div>
              <div className="paad-button">
                {post.projectStatus === "WaitApprove" && (
                  <>
                    <button
                      className="approve-button"
                      onClick={() => {
                        approveProject(post.voiceProjectId);
                        navigate("/postedprojectsmanagement");
                      }}
                    >
                      Duyệt
                    </button>
                    <button
                      className="deny-button"
                      onClick={() => {
                        notApproveProject(post.voiceProjectId);
                        navigate("/postedprojectsmanagement");
                      }}
                    >
                      Không duyệt
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

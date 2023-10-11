import React, { useEffect, useState } from "react";
import "./ProjectDetailForManager.css";
import {
  getOfficialVoices,
  getProjectApprovalDetail,
  getVoiceList,
} from "../../api/axios";
import { Link, useParams } from "react-router-dom";
import ProjectDetailForManagerCard from "../../components/ProjectDetailForManagerCard/ProjectDetailForManagerCard";
import ProjectDetailForSellerCard from "../../components/ProjectDetailForSellerCard/ProjectDetailForSellerCard";

export default function ProjectDetailForManager() {
  const [currentPage, setCurrentPage] = useState(1);
  const [voices, setVoices] = useState([]);
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getProjectApprovalDetail(id)
      .then((json) => {
        setPost(json);
        return getOfficialVoices(id);
      })
      .then((json) => {
        setVoices(json);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(true);
        }
        // Always set loading to false in case of an error
        setLoading(false);
      });
  });

  return (
    <div className="projectDetailForManager">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h2 className="projectDetailForManager-titleProject">
              {post.title}
            </h2>
            <div className="projectDetailForManager-container">
              <div className="projectDetailForManager-card">
                <div className="projectDetailForManager-info">
                  <div className="projectDetailForManager-description">
                    <span>Mô tả:</span>
                  </div>
                  <div className="projectDetailForManager-text-description">
                    <span>{post.description}</span>
                  </div>

                  <div className="projectDetailForManager-detail">
                    <span>Yêu cầu chi tiết:</span>
                  </div>
                  <div className="projectDetailForManager-text-detail">
                    <span>{post.request}</span>
                  </div>

                  <div className="projectDetailForManager-demo">
                    <span>Văn bản demo</span>
                  </div>
                  <div className="projectDetailForManager-text-demo">
                    <Link
                      to={post.linkDocDemo}
                      download="Docx-Demo"
                      target="blank"
                    >
                      <button>Download</button>
                    </Link>
                  </div>

                  <div className="projectDetailForManager-main">
                    <span>Văn bản cần đọc</span>
                  </div>
                  <div className="projectDetailForManager-text-main">
                    <Link
                      to={post.linkDocMain}
                      download="Docx-Main"
                      target="blank"
                    >
                      <button>Download</button>
                    </Link>
                  </div>

                  <div className="projectDetailForManager-edit">
                    <span>Số lần chỉnh sửa:</span>
                  </div>
                  <div className="projectDetailForManager-text-edit">
                    <span>{post.numberOfEdit}</span>
                  </div>

                  <div className="projectDetailForManager-price">
                    <span>Giá:</span>
                  </div>
                  <div className="projectDetailForManager-text-price">
                    <span>{post.price} VNĐ/phút</span>
                  </div>

                  <div className="projectDetailForManager-duration">
                    <span>Thời lượng yêu cầu:</span>
                  </div>
                  <div className="projectDetailForManager-text-duration">
                    <span>{post.duration} phút</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projectDetailForManager-title">
            <h2>Bản chính thức</h2>
          </div>
          <div className="projectDetailForManager-listVoice">
            {error ? (
              <span>Dự án này chưa có voice chính thức</span>
            ) : (
              voices.map((voice) => (
                <ProjectDetailForSellerCard voice={voice} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

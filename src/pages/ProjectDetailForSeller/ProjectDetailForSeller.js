import React, { useEffect, useState } from "react";
import "./ProjectDetailForSeller.css";
import ProjectDetailForSellerCard from "../../components/ProjectDetailForSellerCard/ProjectDetailForSellerCard";
import {
  getOfficialVoices,
  getProjectApprovalDetail,
  getVoiceList,
} from "../../api/axios";
import { Link, useParams } from "react-router-dom";

export default function ProjectDetailForSeller() {
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
  console.log(voices);
  return (
    <div className="pdfs">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h2 className="pdfs-titleProject">{post.title}</h2>
            <div className="pdfs-container">
              <div className="pdfs-card">
                <div className="pdfs-info">
                  <div className="pdfs-description">
                    <span>Mô tả:</span>
                  </div>
                  <div className="pdfs-text-description">
                    <span>{post.description}</span>
                  </div>

                  <div className="pdfs-detail">
                    <span>Yêu cầu chi tiết:</span>
                  </div>
                  <div className="pdfs-text-detail">
                    <span>{post.request}</span>
                  </div>

                  <div className="pdfs-demo">
                    <span>Văn bản demo</span>
                  </div>
                  <div className="pdfs-text-demo">
                    <Link
                      to={post.linkDocDemo}
                      download="Docx-Demo"
                      target="blank"
                    >
                      <button>Download</button>
                    </Link>
                  </div>

                  <div className="pdfs-main">
                    <span>Văn bản cần đọc</span>
                  </div>
                  <div className="pdfs-text-main">
                    <Link
                      to={post.linkDocMain}
                      download="Docx-Main"
                      target="blank"
                    >
                      <button>Download</button>
                    </Link>
                  </div>

                  <div className="pdfs-edit">
                    <span>Số lần chỉnh sửa:</span>
                  </div>
                  <div className="pdfs-text-edit">
                    <span>{post.numberOfEdit}</span>
                  </div>
                </div>

                <div className="pdfs-displayGrid">
                  <div className="pdfs-info">
                    <div className="pdfs-price">
                      <span>Giá:</span>
                    </div>
                    <div className="pdfs-text-price">
                      <span>{post.price} VNĐ/phút</span>
                    </div>

                    <div className="pdfs-duration">
                      <span>Thời lượng yêu cầu:</span>
                    </div>
                    <div className="pdfs-text-duration">
                      <span>{post.duration} phút</span>
                    </div>
                    <div className="pdfs-tprice">
                      <span>Tổng giá:</span>
                    </div>
                    <div className="pdfs-text-tprice">
                      <span>{post.toalOutputPrice} VNĐ</span>
                    </div>
                  </div>
                  <div className="pdfs-record">
                    <div className="pdfs-button">
                      {post.projectStatus === "Processing" && (
                        <Link to={`/uftpd/${post.voiceProjectId}`}>
                          <button>Nộp bản ghi âm</button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pdfs-title">
            <h2>Bản chính thức</h2>
          </div>
          <div className="pdfs-listVoice">
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

import React, { useEffect, useState } from "react";
import "./ProjectDetailForBuyer.css";
import {
  getOfficialVoices,
  getProjectApprovalDetail,
  getVoiceList,
} from "../../api/axios";
import { Link, useParams } from "react-router-dom";
import ProjectDetailForBuyerCard from "../../components/ProjectDetailForBuyerCard/ProjectDetailForBuyerCard";

export default function ProjectDetailForBuyer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [post, setPost] = useState();
  const [voices, setVoices] = useState([]);
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
    <div className="pdfb">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="pdfb-titleProject">{post.title}</h2>
          <div className="pdfb-container">
            <div className="pdfb-card">
              <div className="pdfb-info">
                <div className="pdfb-description">
                  <span>Mô tả:</span>
                </div>
                <div className="pdfb-text-description">
                  <span>{post.description}</span>
                </div>

                <div className="pdfb-detail">
                  <span>Yêu cầu chi tiết:</span>
                </div>
                <div className="pdfb-text-detail">
                  <span> {post.request}</span>
                </div>

                <div className="pdfb-demo">
                  <span>Văn bản demo</span>
                </div>
                <div className="pdfb-text-demo">
                  <Link
                    to={post.linkDocDemo}
                    download="Docx-Demo"
                    target="blank"
                  >
                    <button>Download</button>
                  </Link>
                </div>

                <div className="pdfb-main">
                  <span>Văn bản cần đọc</span>
                </div>
                <div className="pdfb-text-main">
                  <Link
                    to={post.linkDocMain}
                    download="Docx-Main"
                    target="blank"
                  >
                    <button>Download</button>
                  </Link>
                </div>

                {/* <div className="pdfb-edit">
                  <span>Số lần chỉnh sửa:</span>
                </div>
                <div className="pdfb-text-edit">
                  <span>3</span>
                </div> */}

                <div className="pdfb-price">
                  <span>Giá:</span>
                </div>
                <div className="pdfb-text-price">
                  <span>{post.price} VNĐ/phút</span>
                </div>

                <div className="pdfb-duration">
                  <span>Thời lượng yêu cầu:</span>
                </div>
                <div className="pdfb-text-duration">
                  <span>{post.duration} phút</span>
                </div>
                <div className="pdfb-totalPrice">
                  <span>Tổng giá:</span>
                </div>
                <div className="pdfb-text-totalPrice">
                  <span>{post.toalOutputPrice} VNĐ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pdfb-title">
            <h2>Bản chính thức</h2>
          </div>
          <div className="pdfb-listVoice">
            {error ? (
              <span>Dự án này chưa có voice chính thức</span>
            ) : (
              voices.map((voice) => (
                <ProjectDetailForBuyerCard
                  voice={voice}
                  projectStatus={post.projectStatus}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

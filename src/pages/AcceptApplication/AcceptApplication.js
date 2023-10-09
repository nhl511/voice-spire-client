import React, { useEffect, useState } from "react";
import "./AcceptApplication.css";
import {
  getCandidates,
  getProjectApprovalDetail,
  getVoiceList,
} from "../../api/axios";
import AcceptApplicationCard from "../../components/AcceptApplicationCard/AcceptApplicationCard";
import { Link, useParams } from "react-router-dom";

export default function AcceptApplication() {
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
        return getCandidates(id);
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
  }, [currentPage]);
  return (
    <div className="aa">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h2 className="aa-titleProject">{post.title}</h2>
            <div className="aa-container">
              <div className="aa-card">
                <div className="aa-info">
                  <div className="aa-description">
                    <span>Mô tả:</span>
                  </div>
                  <div className="aa-text-description">
                    <span>{post.description}</span>
                  </div>

                  <div className="aa-detail">
                    <span>Yêu cầu chi tiết:</span>
                  </div>
                  <div className="aa-text-detail">
                    <span>{post.request}</span>
                  </div>

                  <div className="aa-demo">
                    <span>Văn bản demo</span>
                  </div>
                  <div className="aa-text-demo">
                    <Link
                      to={post.linkDocDemo}
                      download="Docx-Demo"
                      target="blank"
                    >
                      <button>Download</button>
                    </Link>
                  </div>

                  <div className="aa-main">
                    <span>Văn bản cần đọc</span>
                  </div>
                  <div className="aa-text-main">
                    <Link
                      to={post.linkDocMain}
                      download="Docx-Main"
                      target="blank"
                    >
                      <button>Download</button>
                    </Link>
                  </div>
                </div>
                <div className="aa-displayGrid">
                  <div className="aa-info">
                    <div className="aa-price">
                      <span>Giá:</span>
                    </div>
                    <div className="aa-text-price">
                      <span>{post.toalOutputPrice} vnd</span>
                    </div>

                    <div className="aa-duration">
                      <span>Thời lượng yêu cầu:</span>
                    </div>
                    <div className="aa-text-duration">
                      <span>{post.duration} phút</span>
                    </div>
                  </div>
                  <div className="aa-suggest">
                    <div className="aa-button">
                      <button>Xem gợi ý</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aa-titleDemo">
            <strong>Danh sách demo</strong>
          </div>
          <div className="aa-listVoice">
            {error ? (
              <span>Dự án này chưa có ứng viên</span>
            ) : (
              voices.map((voice) => <AcceptApplicationCard voice={voice} />)
            )}
          </div>
        </>
      )}
    </div>
  );
}

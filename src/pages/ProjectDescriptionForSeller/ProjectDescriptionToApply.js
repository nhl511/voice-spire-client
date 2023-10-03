import React, { useEffect, useState } from "react";
import "./ProjectDescriptionToApply.css";
import { useParams } from "react-router-dom";
import { getProjectApprovalDetail } from "../../api/axios";

export default function ProjectDescriptionToApply() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getProjectApprovalDetail(id)
      .then((json) => setPost(json))
      .then((json) => setLoading(false));
  }, [id]);
  return (
    <div className="pdtc-container">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="pdtc-card">
          <div className="pdtc-title">
            <h2>{post.title}</h2>
          </div>
          <div className="pdtc-info">
            <div className="pdtc-info-left">
              <div className="pdtc-description">
                <span>Mô tả</span>
              </div>
              <div className="pdtc-detail">
                <span>Yêu cầu chi tiết</span>
              </div>
              <div className="pdtc-gender">
                <span>Giới tính giọng đọc</span>
              </div>
              <div className="pdtc-region">
                <span>Vùng miền</span>
              </div>
              <div className="pdtc-tone">
                <span>Tone giọng</span>
              </div>
              <div className="pdtc-expressive">
                <span>Độ truyền cảm</span>
              </div>
              <div className="pdtc-speed">
                <span>Tốc độ đọc</span>
              </div>
              <div className="pdtc-pronounce">
                <span>Khả năng phát âm</span>
              </div>
              <div className="pdtc-stress">
                <span>Thể hiện trọng âm</span>
              </div>
              <div className="pdtc-voice">
                <span>Chất giọng</span>
              </div>
              <div className="pdtc-nature">
                <span>Tính chất</span>
              </div>
              <div className="pdtc-duration">
                <span>Thời lượng yêu cầu</span>
              </div>
              <div className="pdtc-edit">
                <span>Số lần chỉnh sửa</span>
              </div>
              <div className="pdtc-deadline">
                <span>Thời hạn hoàn tất</span>
              </div>
              <div className="pdtc-price">
                <span>Tổng giá</span>
              </div>
            </div>
            <div className="pdtc-info-right">
              <div className="pdtc-text-description">
                <span>{post.description}</span>
              </div>
              <div className="pdtc-text-detail">
                <span>{post.request}</span>
              </div>
              <div className="pdtc-text-gender">
                <span>{post.voiceGender}</span>
              </div>
              <div className="pdtc-text-region">
                <span>{post.voiceRegion}</span>
              </div>
              <div className="pdtc-text-tone">
                <span>Cao</span>
              </div>
              <div className="pdtc-text-expressive">
                <span>Tốt</span>
              </div>
              <div className="pdtc-text-speed">
                <span>Nhanh</span>
              </div>
              <div className="pdtc-text-pronounce">
                <span>Tốt</span>
              </div>
              <div className="pdtc-text-stress">
                <span>Tốt</span>
              </div>
              <div className="pdtc-text-voice">
                <span>Tươi mới</span>
              </div>
              <div className="pdtc-text-nature">
                <span>Quảng cáo</span>
              </div>
              <div className="pdtc-text-duration">
                <span>2 phút</span>
              </div>
              <div className="pdtc-text-edit">
                <span>3 lần</span>
              </div>
              <div className="pdtc-text-deadline">
                <span>25/09/2023</span>
              </div>
              <div className="pdtc-text-price">
                <span>200,000 vnd</span>
              </div>
            </div>
          </div>
          <div className="pdtc-button">
            <button className="pdtc-deny">Quay lại</button>
            <button className="pdtc-accept">Ứng tuyển</button>
          </div>
        </div>
      )}
    </div>
  );
}

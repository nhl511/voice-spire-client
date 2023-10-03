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
    <div className="pdta-container">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="pdta-card">
          <div className="pdta-title">
            <h2>{post.title}</h2>
          </div>
          <div className="pdta-info">
            <div className="pdta-description">
              <span>Mô tả</span>
            </div>
            <div className="pdta-text-description">
              <span>{post.description}</span>
            </div>

            <div className="pdta-detail">
              <span>Yêu cầu chi tiết</span>
            </div>
            <div className="pdta-text-detail">
              <span>{post.request}</span>
            </div>

            <div className="pdta-gender">
              <span>Giới tính giọng đọc</span>
            </div>
            <div className="pdta-text-gender">
              <span>{post.voiceGender}</span>
            </div>

            <div className="pdta-region">
              <span>Vùng miền</span>
            </div>
            <div className="pdta-text-region">
              <span>{post.voiceRegion}</span>
            </div>

            <div className="pdta-tone">
              <span>Tone giọng</span>
            </div>
            <div className="pdta-text-tone">
              <span>Cao</span>
            </div>

            <div className="pdta-expressive">
              <span>Độ truyền cảm</span>
            </div>
            <div className="pdta-text-expressive">
              <span>Tốt</span>
            </div>

            <div className="pdta-speed">
              <span>Tốc độ đọc</span>
            </div>
            <div className="pdta-text-speed">
              <span>Nhanh</span>
            </div>

            <div className="pdta-pronounce">
              <span>Khả năng phát âm</span>
            </div>
            <div className="pdta-text-pronounce">
              <span>Tốt</span>
            </div>

            <div className="pdta-stress">
              <span>Thể hiện trọng âm</span>
            </div>
            <div className="pdta-text-stress">
              <span>Tốt</span>
            </div>

            <div className="pdta-voice">
              <span>Chất giọng</span>
            </div>
            <div className="pdta-text-voice">
              <span>Tươi mới</span>
            </div>

            <div className="pdta-nature">
              <span>Tính chất</span>
            </div>
            <div className="pdta-text-nature">
              <span>Quảng cáo</span>
            </div>

            <div className="pdta-duration">
              <span>Thời lượng yêu cầu</span>
            </div>
            <div className="pdta-text-duration">
              <span>2 phút</span>
            </div>

            <div className="pdta-edit">
              <span>Số lần chỉnh sửa</span>
            </div>
            <div className="pdta-text-edit">
              <span>3 lần</span>
            </div>

            <div className="pdta-deadline">
              <span>Thời hạn hoàn tất</span>
            </div>
            <div className="pdta-text-deadline">
              <span>25/09/2023</span>
            </div>

            <div className="pdta-price">
              <span>Tổng giá</span>
            </div>
            <div className="pdta-text-price">
              <span>200,000 vnd</span>
            </div>

          </div>
          <div className="pdta-button">
            <button className="pdta-deny">Quay lại</button>
            <button className="pdta-accept">Ứng tuyển</button>
          </div>
        </div>
      )}
    </div>
  );
}

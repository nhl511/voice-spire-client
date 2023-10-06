import React from "react";
import "./ProjectDescriptionToConfirm.css";

export default function ProjectDescriptionToConfirm() {
  return (
    <div className="pdtc-container">
      <div className="pdtc-card">
        <div className="pdtc-title">
          <h2>Quảng cáo kem dưỡng ẩm Hảo Hảo</h2>
        </div>
        <div className="pdtc-info">
          <div className="pdtc-description">
            <span>Mô tả</span>
          </div>
          <div className="pdtc-text-description">
            <span>
              Sed ut perspiciatis
            </span>
          </div>

          <div className="pdtc-detail">
            <span>Yêu cầu chi tiết</span>
          </div>
          <div className="pdtc-text-detail">
            <span>
              Quis autem vel eum iure reprehenderit, qui in ea voluptate velit
            </span>
          </div>

          <div className="pdtc-gender">
            <span>Giới tính giọng đọc</span>
          </div>
          <div className="pdtc-text-gender">
            <span>Nam</span>
          </div>

          <div className="pdtc-region">
            <span>Vùng miền</span>
          </div>
          <div className="pdtc-text-region">
            <span>Miền Trung</span>
          </div>

          <div className="pdtc-tone">
            <span>Tone giọng</span>
          </div>
          <div className="pdtc-text-tone">
            <span>Cao</span>
          </div>

          <div className="pdtc-expressive">
            <span>Độ truyền cảm</span>
          </div>
          <div className="pdtc-text-expressive">
            <span>Tốt</span>
          </div>

          <div className="pdtc-speed">
            <span>Tốc độ đọc</span>
          </div>
          <div className="pdtc-text-speed">
            <span>Nhanh</span>
          </div>

          <div className="pdtc-pronounce">
            <span>Khả năng phát âm</span>
          </div>
          <div className="pdtc-text-pronounce">
            <span>Tốt</span>
          </div>

          <div className="pdtc-stress">
            <span>Thể hiện trọng âm</span>
          </div>
          <div className="pdtc-text-stress">
            <span>Tốt</span>
          </div>

          <div className="pdtc-voice">
            <span>Chất giọng</span>
          </div>
          <div className="pdtc-text-voice">
            <span>Tươi mới</span>
          </div>

          <div className="pdtc-nature">
            <span>Tính chất</span>
          </div>
          <div className="pdtc-text-nature">
            <span>Quảng cáo</span>
          </div>

          <div className="pdtc-duration">
            <span>Thời lượng yêu cầu</span>
          </div>
          <div className="pdtc-text-duration">
            <span>2 phút</span>
          </div>

          <div className="pdtc-edit">
            <span>Số lần chỉnh sửa</span>
          </div>
          <div className="pdtc-text-edit">
            <span>3 lần</span>
          </div>

          <div className="pdtc-deadline">
            <span>Thời hạn hoàn tất</span>
          </div>
          <div className="pdtc-text-deadline">
            <span>25/09/2023</span>
          </div>

          <div className="pdtc-price">
            <span>Tổng giá</span>
          </div>
          <div className="pdtc-text-price">
            <span>200,000 vnd</span>
          </div>

        </div>

        <div className="pdtc-button">
          <button className="pdtc-deny">Từ chối</button>
          <button className="pdtc-accept">Chấp nhận</button>
        </div>
      </div>
    </div>
  );
}

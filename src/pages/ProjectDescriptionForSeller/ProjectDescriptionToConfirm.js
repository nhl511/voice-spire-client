import React, { useEffect, useState } from "react";
import "./ProjectDescriptionToConfirm.css";
import { useParams } from "react-router-dom";
import { getProjectApprovalDetail } from "../../api/axios";
import moment from "moment";

export default function ProjectDescriptionToConfirm() {
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
            <div className="pdtc-description">
              <span>Mô tả</span>
            </div>
            <div className="pdtc-text-description">
              <span>{post.description}</span>
            </div>

            <div className="pdtc-detail">
              <span>Yêu cầu chi tiết</span>
            </div>
            <div className="pdtc-text-detail">
              <span>{post.request}</span>
            </div>

            <div className="pdtc-duration">
              <span>Thời lượng yêu cầu</span>
            </div>
            <div className="pdtc-text-duration">
              <span>{post.duration} phút</span>
            </div>

            <div className="pdtc-edit">
              <span>Số lần chỉnh sửa</span>
            </div>
            <div className="pdtc-text-edit">
              <span>{post.numberOfEdit} lần</span>
            </div>

            <div className="pdtc-deadline">
              <span>Thời hạn hoàn tất</span>
            </div>
            <div className="pdtc-text-deadline">
              <span>{moment(post.deadline).format("DD/MM/yyyy")}</span>
            </div>

            <div className="pdtc-price">
              <span>Tổng giá</span>
            </div>
            <div className="pdtc-text-price">
              <span>{post.toalOutputPrice} VNĐ</span>
            </div>
          </div>

          <div className="pdtc-button">
            <button className="pdtc-deny">Từ chối</button>
            <button className="pdtc-accept">Chấp nhận</button>
          </div>
        </div>
      )}
    </div>
  );
}

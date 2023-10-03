import React, { useEffect, useState } from "react";
import "./ProjectDescriptionToApply.css";
import { Link, useParams } from "react-router-dom";
import { getProjectApprovalDetail } from "../../api/axios";
import moment from "moment";

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
              {post.voiceTone === 5 && <span>Rất cao</span>}
              {post.voiceTone === 4 && <span>Cao</span>}
              {post.voiceTone === 3 && <span>Vừa</span>}
              {post.voiceTone === 2 && <span>Thấp</span>}
              {post.voiceTone === 1 && <span>Rất thấp</span>}
              {post.voiceTone === 0 && <span>Không có</span>}
            </div>

            <div className="pdta-expressive">
              <span>Độ truyền cảm</span>
            </div>
            <div className="pdta-text-expressive">
              {post.voiceInspirational === 5 && <span>Rát tốt</span>}
              {post.voiceInspirational === 4 && <span>Tốt</span>}
              {post.voiceInspirational === 3 && <span>Khá</span>}
              {post.voiceInspirational === 2 && <span>Trung bình</span>}
              {post.voiceInspirational === 1 && <span>Kém</span>}
              {post.voiceInspirational === 0 && <span>Không có</span>}
            </div>

            <div className="pdta-speed">
              <span>Tốc độ đọc</span>
            </div>
            <div className="pdta-text-speed">
              {post.voiceSpeed === 3 && <span>Nhanh</span>}
              {post.voiceSpeed === 2 && <span>Vừa</span>}
              {post.voiceSpeed === 1 && <span>Chậm</span>}
              {post.voiceSpeed === 0 && <span>Không có</span>}
            </div>

            <div className="pdta-pronounce">
              <span>Khả năng phát âm</span>
            </div>
            <div className="pdta-text-pronounce">
              {post.voicePronouce === 5 && <span>Rát tốt</span>}
              {post.voicePronouce === 4 && <span>Tốt</span>}
              {post.voicePronouce === 3 && <span>Khá</span>}
              {post.voicePronouce === 2 && <span>Trung bình</span>}
              {post.voicePronouce === 1 && <span>Kém</span>}
              {post.voicePronouce === 0 && <span>Không có</span>}
            </div>

            <div className="pdta-stress">
              <span>Thể hiện trọng âm</span>
            </div>
            <div className="pdta-text-stress">
              {post.voiceStress === 5 && <span>Rát tốt</span>}
              {post.voiceStress === 4 && <span>Tốt</span>}
              {post.voiceStress === 3 && <span>Khá</span>}
              {post.voiceStress === 2 && <span>Trung bình</span>}
              {post.voiceStress === 1 && <span>Kém</span>}
              {post.voiceStress === 0 && <span>Không có</span>}
            </div>
            <div className="pdta-nature">
              <span>Tính chất</span>
            </div>
            <div className="pdta-text-nature">
              <span>
                <span>{post.voiceProperty}</span>
              </span>
            </div>
            <div className="pdta-duration">
              <span>Thời lượng yêu cầu</span>
            </div>
            <div className="pdta-text-duration">
              <span>{post.duration} phút</span>
            </div>

            <div className="pdta-edit">
              <span>Số lần chỉnh sửa</span>
            </div>
            <div className="pdta-text-edit">
              <span>{post.numberOfEdit} lần</span>
            </div>

            <div className="pdta-deadline">
              <span>Thời hạn hoàn tất</span>
            </div>
            <div className="pdta-text-deadline">
              <span>{moment(post.deadline).format("DD/MM/yyyy")}</span>
            </div>

            <div className="pdta-price">
              <span>Tổng giá</span>
            </div>
            <div className="pdta-text-price">
              <span>{post.toalOutputPrice} VNĐ</span>
            </div>
          </div>
          <div className="pdta-button">
            <Link to="/posts">
              <button className="pdta-deny">Quay lại</button>
            </Link>
            <Link to={`/recruitment/${post.voiceProjectId}`}>
              <button className="pdta-accept">Ứng tuyển</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

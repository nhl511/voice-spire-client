import React, { useEffect, useState } from "react";
import "./ProjectDescriptionForManager.css";
import { Link, useParams } from "react-router-dom";
import { getProjectApprovalDetail } from "../../api/axios";
import moment from "moment";
import Posts from "../Posts/Posts";

export default function ProjectDescriptionForManager() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getProjectApprovalDetail(id)
      .then((json) => setPost(json))
      .then((json) => setLoading(false));
  }, [id]);
  return (
    <div className="pdfm-container">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="pdfm-card">
          <div className="pdfm-title">
            <h2>{post.title}</h2>
          </div>
          <div className="pdfm-info">
            <div className="pdfm-description">
              <span>Mô tả</span>
            </div>
            <div className="pdfm-text-description">
              <span>{post.description}</span>
            </div>

            <div className="pdfm-detail">
              <span>Yêu cầu chi tiết</span>
            </div>
            <div className="pdfm-text-detail">
              <span>{post.request}</span>
            </div>
            {post.voiceGender && (
              <>
                <div className="pdfm-gender">
                  <span>Giới tính giọng đọc</span>
                </div>
                <div className="pdfm-text-gender">
                  <span>{post.voiceGender}</span>
                </div>
              </>
            )}
            {post.voiceRegion && (
              <>
                <div className="pdfm-region">
                  <span>Vùng miền</span>
                </div>
                <div className="pdfm-text-region">
                  <span>{post.voiceRegion}</span>
                </div>
              </>
            )}
            {post.voiceTone !== 0 && (
              <>
                <div className="pdfm-tone">
                  <span>Tone giọng</span>
                </div>
                <div className="pdfm-text-tone">
                  {post.voiceTone === 5 && <span>Rất cao</span>}
                  {post.voiceTone === 4 && <span>Cao</span>}
                  {post.voiceTone === 3 && <span>Vừa</span>}
                  {post.voiceTone === 2 && <span>Thấp</span>}
                  {post.voiceTone === 1 && <span>Rất thấp</span>}
                  {post.voiceTone === 0 && <span>Không có</span>}{" "}
                </div>
              </>
            )}

            {post.voiceInspirational !== 0 && (
              <>
                <div className="pdfm-expressive">
                  <span>Độ truyền cảm</span>
                </div>
                <div className="pdfm-text-expressive">
                  {post.voiceInspirational === 5 && <span>Rát tốt</span>}
                  {post.voiceInspirational === 4 && <span>Tốt</span>}
                  {post.voiceInspirational === 3 && <span>Khá</span>}
                  {post.voiceInspirational === 2 && <span>Trung bình</span>}
                  {post.voiceInspirational === 1 && <span>Kém</span>}
                  {post.voiceInspirational === 0 && <span>Không có</span>}{" "}
                </div>
              </>
            )}

            {post.voiceSpeed !== 0 && (
              <>
                <div className="pdfm-speed">
                  <span>Tốc độ đọc</span>
                </div>
                <div className="pdfm-text-speed">
                  {post.voiceSpeed === 3 && <span>Nhanh</span>}
                  {post.voiceSpeed === 2 && <span>Vừa</span>}
                  {post.voiceSpeed === 1 && <span>Chậm</span>}
                  {post.voiceSpeed === 0 && <span>Không có</span>}{" "}
                </div>
              </>
            )}

            {post.voicePronouce !== 0 && (
              <>
                <div className="pdfm-pronounce">
                  <span>Khả năng phát âm</span>
                </div>
                <div className="pdfm-text-pronounce">
                  {post.voicePronouce === 5 && <span>Rát tốt</span>}
                  {post.voicePronouce === 4 && <span>Tốt</span>}
                  {post.voicePronouce === 3 && <span>Khá</span>}
                  {post.voicePronouce === 2 && <span>Trung bình</span>}
                  {post.voicePronouce === 1 && <span>Kém</span>}
                  {post.voicePronouce === 0 && <span>Không có</span>}{" "}
                </div>
              </>
            )}

            {post.voiceStress !== 0 && (
              <>
                <div className="pdfm-stress">
                  <span>Thể hiện trọng âm</span>
                </div>
                <div className="pdfm-text-stress">
                  {post.voiceStress === 5 && <span>Rát tốt</span>}
                  {post.voiceStress === 4 && <span>Tốt</span>}
                  {post.voiceStress === 3 && <span>Khá</span>}
                  {post.voiceStress === 2 && <span>Trung bình</span>}
                  {post.voiceStress === 1 && <span>Kém</span>}
                  {post.voiceStress === 0 && <span>Không có</span>}{" "}
                </div>
              </>
            )}

            {post.voiceProperty && (
              <>
                <div className="pdfm-nature">
                  <span>Tính chất</span>
                </div>
                <div className="pdfm-text-nature">
                  <span>{post.voiceProperty}</span>
                </div>
              </>
            )}

            <div className="pdfm-duration">
              <span>Thời lượng yêu cầu</span>
            </div>
            <div className="pdfm-text-duration">
              <span>{post.duration} phút</span>
            </div>

            <div className="pdfm-edit">
              <span>Số lần chỉnh sửa</span>
            </div>
            <div className="pdfm-text-edit">
              <span>{post.numberOfEdit} lần</span>
            </div>

            <div className="pdfm-deadline">
              <span>Thời hạn hoàn tất</span>
            </div>
            <div className="pdfm-text-deadline">
              <span>{moment(post.deadline).format("DD/MM/yyyy")}</span>
            </div>

            <div className="pdfm-price">
              <span>Tổng giá</span>
            </div>
            <div className="pdfm-text-price">
              <span>{post.toalOutputPrice} VNĐ</span>
            </div>
          </div>

          <div className="pdfm-button">
            {post.projectType === "Post" ? (
              <Link to="/postedprojectsmanagement">
                <button className="pdfm-back">Quay lại</button>
              </Link>
            ) : (
              <Link to="/sentprojectsmanagement">
                <button className="pdfm-back">Quay lại</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

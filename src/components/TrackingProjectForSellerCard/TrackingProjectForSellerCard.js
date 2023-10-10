import React from "react";
import "./TrackingProjectForSellerCard.css";
import moment from "moment";
import { Link } from "react-router-dom";

export default function TrackingProjectForSellerCard({ post }) {
  return (
    <div className="tpfsc">
      <div className="tpfsc-card">
        <div className="tpfsc-thumbnail">
          {post.voiceProject.linkThumbnail ? (
            <img src={post.voiceProject.linkThumbnail} alt="thumbnail" />
          ) : (
            <img src="/img/logo.png" />
          )}
        </div>
        <div className="tpfsc-content">
          <div className="tpfsc-title">
            <span>{post.voiceProject.title}</span>
          </div>
          <div className="tpfsc-info">
            <span>
              {/* <img
                            src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png"
                            alt=""
                        /> */}
              <span className="tpfsc-date">Thời hạn:</span>
              <span className="tpfsc-text-date">
                {moment(post.voiceProject.deadline).format("DD/MM/yyyy")}
              </span>
            </span>
            <span>
              {/* <img
                            src="https://cdn-icons-png.flaticon.com/512/156/156764.png"
                            alt=""
                        /> */}
              {post.voiceProject.price !== 0 && (
                <>
                  <span className="tpfsc-price">Giá:</span>
                  <span className="tpfsc-text-price">
                    {post.voiceProject.price} VNĐ/phút
                  </span>
                </>
              )}
            </span>
            <span>
              <span className="tpfsc-length">Thời lượng yêu cầu:</span>
              <span className="tpfsc-text-length">
                {post.voiceProject.duration} phút
              </span>
            </span>
          </div>
          <div className="tpfsc-require">
            {post.voiceProject.voiceProperty && (
              <span>{post.voiceProject.voiceProperty}</span>
            )}
            {post.voiceProject.voiceRegion && (
              <span>{post.voiceProject.voiceRegion}</span>
            )}
          </div>
          <div className="tpfsc-button">
            {post.voiceJobStatus === "Applying" && (
              <button className="btn">Demo đang chờ duyệt</button>
            )}
            {post.voiceJobStatus === "Processing" &&
              post.voiceProject.projectType === "Post" && (
                <Link to={`/pdfs/${post.voiceProjectId}`}>
                  <button className="link-btn">Demo được chọn</button>
                </Link>
              )}
            {post.voiceJobStatus === "Processing" &&
              post.voiceProject.projectType === "send" && (
                <Link to={`/pdfs/${post.voiceProjectId}`}>
                  <button className="link-btn">Đã chấp nhận lời mời</button>
                </Link>
              )}
            {post.voiceJobStatus === "Done" && (
              <Link to={`/pdfs/${post.voiceProjectId}`}>
                <button className="link-btn">Hoàn thành</button>
              </Link>
            )}
            {post.voiceJobStatus === "waitToAccept" && (
              <Link to={`/pt2/${post.voiceProjectId}`}>
                <button className="link-btn">Xem lời mời</button>
              </Link>
            )}
            {post.voiceJobStatus === "Denied" &&
              post.voiceProject.projectType === "Post" && (
                <button className="btn">Demo không được chọn</button>
              )}
            {post.voiceJobStatus === "Denied" &&
              post.voiceProject.projectType === "send" && (
                <button className="btn">Đã từ chối lời mời</button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

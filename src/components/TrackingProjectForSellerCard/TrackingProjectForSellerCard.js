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
              <span className="tpfsc-length">Độ dài yêu cầu:</span>
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
              <button>Demo đang chờ duyệt</button>
            )}
            {post.voiceJobStatus === "Processing" && (
              <Link to={`/pdfs/${post.voiceProjectId}`}>
                <button>Demo đã duyệt</button>
              </Link>
            )}
            {post.voiceJobStatus === "Done" && (
              <Link to={`/pdfs/${post.voiceProjectId}`}>
                <button>Hoàn thành</button>
              </Link>
            )}
            {post.voiceJobStatus === "waitToAccept" && (
              <button>Chấp nhận lời mời</button>
            )}
            {post.voiceJobStatus === "Denied" && (
              <button>Demo không được duyệt</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

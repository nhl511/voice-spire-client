import React from "react";
import "./TrackingProjectForBuyerCard.css";
import { Link } from "react-router-dom";
import moment from "moment";

export default function TrackingProjectForBuyerCard({ post }) {
  return (
    <div className="tpfbc">
      <div className="tpfbc-thumbnail">
        {post.linkThumbnail ? (
          <img src={post.linkThumbnail} alt="thumbnail" />
        ) : (
          <img src="/img/logo.png" />
        )}
      </div>
      <div className="tpfbc-content">
        <div className="tpfbc-title">
          <span>{post.title}</span>
        </div>
        <div className="tpfbc-info">
          <span>
            <img
              src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png"
              alt=""
            />
            <span className="tpfbc-text-date">
              {moment(post.deadline).format("DD/MM/yyyy")}
            </span>
          </span>
          {post.price !== 0 && (
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/156/156764.png"
                alt=""
              />
              <span className="tpfbc-text-price">
                {post.toalOutputPrice} VNĐ
              </span>
            </span>
          )}
        </div>
        <div className="tpfbc-status">
          {post.projectStatus === "NotApproved" && (
            <span className="tpfbc-text-notApproved">Không được duyệt</span>
          )}
          {post.projectStatus === "Apply" && (
            <span className="tpfbc-text-apply">Đang ứng tuyển</span>
          )}
          {post.projectStatus === "Processing" && (
            <span className="tpfbc-text-processing">Dự án đã nhận</span>
          )}
          {post.projectStatus === "Done" && (
            <span className="tpfbc-text-done">Hoàn thành</span>
          )}
          {post.projectStatus === "WaitToAccept" && (
            <span className="tpfbc-text-waitToAccept">Đã gửi lời mời</span>
          )}
          {post.projectStatus === "Denied" && (
            <span className="tpfbc-text-denied">Không nhận lời mời</span>
          )}

          {post.projectStatus === "WaitApprove" &&
            post.paymentStatus === "Pending" && (
              <span className="tpfbc-text-notPayingYet">Chờ thanh toán</span>
            )}
          {post.projectStatus === "WaitApprove" &&
            post.paymentStatus === "pending" && (
              <span className="tpfbc-text-notPayingYet">Chờ thanh toán</span>
            )}

          {/* <span className='tpfbc-text-waitForResult'>Chờ kết quả</span> */}
          {/* <span className='tpfbc-text-paid'>Đã thanh toán</span> */}
          {/* <span className='tpfbc-text-result'>Đã có kết quả</span> */}
        </div>
        <div className="tpfbc-button">
          {post.projectStatus === "Apply" && (
            <Link to={`/candidatelist/${post.voiceProjectId}`}>
              <button className="follow">Theo dõi</button>
            </Link>
          )}
          {post.projectStatus === "Processing" && (
            <Link to={`/officiallist/${post.voiceProjectId}`}>
              <button className="follow">Theo dõi</button>
            </Link>
          )}
          {post.projectStatus === "Done" && (
            <Link to={`/officiallist/${post.voiceProjectId}`}>
              <button className="view">Xem</button>
            </Link>
          )}
          {post.projectStatus === "WaitApprove" && (
            <Link to={`/payment/${post.voiceProjectId}`}>
              <button className="payment">Thanh toán</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

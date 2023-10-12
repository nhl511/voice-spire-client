import React, { useEffect, useState } from "react";
import "./PostedProjectCard.css";

import WaitingStatus from "../Status/WaitingStatus/WaitingStatus";
import RejectStatus from "../Status/RejectStatus/RejectStatus";
import InvitationStatus from "../Status/InvitationSendStatus/InvitationSendStatus";
import DenyStatus from "../Status/DenyStatus/DenyStatus";
import FinishStatus from "../Status/FinishStatus/FinishStatus";
import RecruitmentStatus from "../Status/RecruitmentStatus/RecruitmentStatus";
import ReceivingStatus from "../Status/ReceivingStatus/ReceivingStatus";
import { approveProject, getPaymentInfo } from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

const PostedProjectCard = ({ post }) => {
  const [paymentInfo, setPaymentInfo] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPaymentInfo(post.voiceProjectId)
      .then((json) => setPaymentInfo(json))
      .then((json) => setLoading(false));
  });

  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  const displayDropdown = () => {
    if (post.projectStatus === "Done" || post.projectStatus === "Processing")
      setDropDown2(!dropDown2);
    else setDropDown(!dropDown);
  };

  return (
    <div className="ppc-margin">
      <div className="ppc-container">
        <div className="ppc-card" onClick={displayDropdown}>
          {post.linkThumbnail ? (
            <img src={post.linkThumbnail} />
          ) : (
            <img src="/img/logo.png" />
          )}

          <div className="ppc-name">
            <span>{post.title}</span>
            <div className="ppc-bank">
              <span>
                BankCode: <span>{post.bankCode}</span>
              </span>
            </div>
          </div>
          {/* <div className="ppc-status">
            <span>Chưa thanh toán</span>
          </div> */}
          <div className="ppc-icon">
            {post.projectStatus === "WaitApprove" && <WaitingStatus />}
            {post.projectStatus === "NotApproved" && <RejectStatus />}
            {post.projectStatus === "Apply" && <RecruitmentStatus />}
            {post.projectStatus === "Processing" && <ReceivingStatus />}
            {post.projectStatus === "Done" && <FinishStatus />}
            {post.projectStatus === "WaitToAccept" && <InvitationStatus />}
            {post.projectStatus === "Denied" && <DenyStatus />}
          </div>
        </div>
      </div>
      {dropDown && (
        <div className="ppc-dropdown">
          <div className="ppc-dropdown-card">
            {loading ? (
              <div className="loading-dropdown">
                <div className="loading-dropdown-container">
                  <div class="loader-dropdown"></div>
                </div>
              </div>
            ) : (
              <>
                <div className="ppc-dropdown-display">
                  <div className="ppc-dropdown-small-card">
                    <div>
                      <p className="ppc-dropdown-title">Thông tin thanh toán</p>
                      <div className="ppc-dropdown-bank">
                        <strong>Ngân hàng:</strong>
                        <span>{paymentInfo.bankNameBuyer}</span>
                      </div>
                      <div className="ppc-dropdown-bank">
                        <strong>Số tài khoản:</strong>
                        <span>{paymentInfo.bankNumberBuyer}</span>
                      </div>
                      <div className="ppc-dropdown-bank-fullName">
                        <strong>Tên tài khoản:</strong>
                        <span>{paymentInfo.bankAccountNameBuyer}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-wrapper">
                  <div className="ppc-dropdown-detail-button">
                    <Link
                      to={`/projectmanagementdetail/${post.voiceProjectId}`}
                      className="link"
                    >
                      <button>Xem chi tiết dự án</button>
                    </Link>
                  </div>
                  {/* <div className="ppc-dropdown-confirm-button">
                    {post.projectStatus === "WaitApprove" && (
                      <button
                        onClick={() => {
                          approveProject(post.voiceProjectId);
                          navigate("/postedprojectsmanagement");
                          setDropDown(false);
                        }}
                      >
                        Duyệt
                      </button>
                    )}
                  </div> */}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {dropDown2 && (
        <div className="ppc-dropdown">
          <div className="ppc-dropdown-card">
            {loading ? (
              <div className="loading-dropdown">
                <div className="loading-dropdown-container">
                  <div class="loader-dropdown"></div>
                </div>
              </div>
            ) : (
              <>
                <div className="ppc-dropdown-display">
                  <div className="ppc-dropdown-small-card">
                    <div>
                      <p className="ppc-dropdown-title">
                        Thông tin thanh toán tổ chức
                      </p>
                      <div className="ppc-dropdown-bank">
                        <strong>Ngân hàng:</strong>
                        <span>{paymentInfo.bankNameBuyer}</span>
                      </div>
                      <div className="ppc-dropdown-bank">
                        <strong>Số tài khoản:</strong>
                        <span>{paymentInfo.bankNumberBuyer}</span>
                      </div>
                      <div className="ppc-dropdown-bank-fullName">
                        <strong>Tên tài khoản:</strong>
                        <span>{paymentInfo.bankAccountNameBuyer}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ppc-dropdown-small-card">
                    <div>
                      <p className="ppc-dropdown-title">
                        Thông tin thanh toán bên bán
                      </p>
                      <div className="ppc-dropdown-bank">
                        <strong>Ngân hàng:</strong>
                        <span>{paymentInfo.bankNameSeller}</span>
                      </div>
                      <div className="ppc-dropdown-bank">
                        <strong>Số tài khoản:</strong>
                        <span>{paymentInfo.bankNumberSeller}</span>
                      </div>
                      <div className="ppc-dropdown-bank-fullName">
                        <strong>Tên tài khoản:</strong>
                        <span>{paymentInfo.bankAccountNameSeller}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-wrapper">
                  <div className="ppc-dropdown-detail-button">
                    <Link
                      to={`/projectdescriptionmanagement/${post.voiceProjectId}`}
                      className="link"
                    >
                      <button>Xem chi tiết dự án</button>
                    </Link>
                  </div>
                  <div className="ppc-dropdown-confirm-button">
                    <Link to={`/pdfm/${post.voiceProjectId}`}>
                      <button>Xem hoạt động dự án</button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostedProjectCard;

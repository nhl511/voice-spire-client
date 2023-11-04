import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useParams } from "react-router";
import { getPaymentDetail } from "../../api/axios";
import { Link } from "react-router-dom";

export default function Payment() {
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState();
  const { id } = useParams();
  useEffect(() => {
    getPaymentDetail(id)
      .then((json) => setTransaction(json))
      .then((json) => setLoading(false));
  });
  return (
    <div className="payment-background">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="payment-center">
          <div className="payment-card">
            <div>
              <h2 className="payment-card-title">Thanh toán</h2>
            </div>
            <div className="payment-display">
              <div className="payment-transaction">
                <div className="payment-transaction-title">
                  <h3>Chi tiết giao dịch</h3>
                </div>
                <div className="payment-transaction-detail">
                  <p className="payment-transaction-price">Giá chi tiết</p>
                  <p className="payment-transaction-price-text">
                    {transaction.price} VNĐ/phút
                  </p>
                  <p className="payment-transaction-duration">
                    Thời lượng yêu cầu
                  </p>
                  <p className="payment-transaction-duration-text">
                    {transaction.duration} phút
                  </p>
                  <p className="payment-transaction-money">
                    Số tiền thanh toán
                  </p>
                  <p className="payment-transaction-money-text">
                    {transaction.toalOutputPrice} VNĐ
                  </p>
                  <p className="payment-transaction-content">
                    Nội dung chuyển khoản
                  </p>
                  <p className="payment-transaction-content-text">
                    {transaction.bankCode}
                  </p>
                </div>
                <div className="payment-transaction-note">
                  <span>*Tại sao tôi phải thanh toán khoản chi phí này?</span>
                  <p>
                    Nhằm đảm bảo quyền lợi cho đôi bên. Khoảng phí này sẽ được
                    hệ thống chuyển đến đối tác của bạn khi dự án kết thúc.
                    Khoảng phí này sẽ được hoàn lại cho ban trong trường hợp đối
                    tác không thực hiện đúng yêu cầu dự án đề ra hoặc khi dự án
                    hết hạn mà dự án của bạn không đạt được kết quả.
                  </p>
                </div>
              </div>
              <hr className="payment-bar" />
              <div className="payment-info">
                <div>
                  <h3 className="payment-info-title-bank">VNPAY</h3>
                  <div className="payment-info-card">
                    <div className="payment-flex">
                      <div className="payment-qrcode-bank">
                        <img src="/img/qrvnpay.PNG" alt="" className="qrmomo" />
                        <p>VoiceSpire</p>
                      </div>
                      <div className="payment-info-account">
                        <p className="payment-info-account-name">
                          NGUYEN BAO LONG
                        </p>
                        <p className="payment-info-account-bankNumber">
                          Tài khoản 105872162225
                        </p>
                        <p className="payment-info-account-bank">
                          VietinBank CN TAY TIEN GIANG - PGD CAI BE
                        </p>
                        <p className="payment-info-account-school">
                          Đại học FPT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="payment-info-title-momo">MOMO</h3>
                  <div className="payment-info-card-right">
                    <div className="payment-flex">
                      <div className="payment-qrcode-momo">
                        <img src="/img/qrmomo.PNG" alt="" className="qrmomo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-button-back">
              <Link to="/tpfb">
                <button>Quay lại</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

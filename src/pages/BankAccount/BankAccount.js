import React from "react";
import "./BankAccount.css";

const BankAccount = () => {
  return (
    <div>
      <div className="bank-title">
        <h3>Cập nhật tài khoản thanh toán</h3>
      </div>
      <div className="bank">
        <div className="bank-container">
          <div className="bank-card">
            <div className="left">
              <div className="row-item">
                <span>Ngân hàng</span>
              </div>
              <div className="row-item">
                <span>Số tài khoản</span>
              </div>
              <div className="row-item">
                <span>Tên chủ tài khoản</span>
              </div>
            </div>
            <div className="right">
              <div className="col-item">
                <input placeholder="Nhập tên ngân hàng" />
              </div>
              <div className="col-item">
                <input placeholder="Nhập số tài khoản" />
              </div>
              <div className="col-item">
                <input placeholder="Nhập tên chủ tài khoản" />
              </div>
            </div>
            <div className="button">
              <button>Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;

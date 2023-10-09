import React, { useEffect, useState } from "react";
import "./BankAccount.css";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const BankAccount = () => {
  const VoiceSellerURL = '/api/VoiceSellers/UpdateBankInformation';
  const BuyerURL = '/api/Buyers/UpdateBankInformation'

  const navigate = useNavigate();
  const { auth } = useAuth();

  const [bank, setBank] = useState();
  const [bankNumber, setBankNumber] = useState();
  const [accountName, setAccountName] = useState();

  // useEffect(() => {
  //   if (!auth.userId) {
  //     navigate('/');
  //   }
  // }, auth.userId)

  const handleUpdateBankAccount = async (e) => {
    e.preventDefault();

    const bankInfoSeller = {
      bankName: bank,
      bankNumber: bankNumber.toString(),
      bankAccountName: accountName
    }
    const bankInfoBuyer = {
      buyerId: auth.userId,
      bankNumber: bankNumber.toString(),
      bankName: bank,
      bankAccountName: accountName,
    }
    const headers = {
      'accept': '*/*',
      'Content-Type': 'application/json-patch+json',
    }
    if (auth.role[0] === 'seller') {
      try {
        await axios.put(`${VoiceSellerURL}/${auth.userId},${bankInfoSeller.bankNumber},${bankInfoSeller.bankName},${bankInfoSeller.bankAccountName}`, { headers })
          .then((response) => {
            if (response.status === 204) {
              console.log('update bank account seller success');
              navigate('/home');
            }
          })
      } catch (error) {
        console.log(error.response.data);
      }
    } else if (auth.role[0] === 'buyer') {
      try {
        await axios.put(`${BuyerURL}/${auth.userId},${bankInfoBuyer.bankNumber},${bankInfoBuyer.bankName},${bankInfoBuyer.bankAccountName}`, { headers })
          .then((response) => {
            if (response.status === 204) {
              console.log('update bank account buyer success');
              navigate('/home');
            }
          })
      } catch (error) {
        console.log(error.response?.data);
      }
    }
  }

  return (
    <div className="bankAccount">
      <div className="bank-title">
        <h3>Cập nhật tài khoản thanh toán</h3>
      </div>
      <div className="bank">
        <div className="bank-container">
          <form onSubmit={handleUpdateBankAccount}>
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
                  <input placeholder="Nhập tên ngân hàng" onChange={(e) => setBank(e.target.value)} />
                </div>
                <div className="col-item">
                  <input type="number" placeholder="Nhập số tài khoản" onChange={(e) => setBankNumber(e.target.value)} />
                </div>
                <div className="col-item">
                  <input placeholder="Nhập tên chủ tài khoản" onChange={(e) => setAccountName(e.target.value)} />
                </div>
              </div>
              <div className="button">
                <button type="submit">Xác nhận</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default BankAccount;

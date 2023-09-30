import React, { useState } from "react";
import './ListProjectManageCard.css'

const ListProjectManageCard = () => {

    const [dropDown, setDropDown] = useState(false);

    const displayDropdown = () => {
        setDropDown(!dropDown);
    }

    return (
        <div className="lpm-margin">
            <div className="lpm-container" onClick={displayDropdown}>
                <div className="lpm-card">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="thumbnail" />
                    <div className="lpm-name">
                        <span>Quảng cáo kem dưỡng ẩm Hảo Hảo</span>
                        <div className="lpm-bank">
                            <span>BankCode: <span>VP87627JKPL</span> </span>
                        </div>
                    </div>
                    <div className="lpm-status">
                        <span>Chưa thanh toán</span>
                        {/* <span>Đã thanh toán</span> */}

                    </div>
                    <div className="lpm-icon">
                        <button>Icon</button>
                    </div>
                </div>
            </div>
            {
                dropDown ? (
                    <div className="lpm-dropdown">
                        <div className="lpm-dropdown-card">
                            <div className="lpm-dropdown-display">
                                <div className="lpm-dropdown-small-card">
                                    <div>
                                        <p className="lpm-dropdown-title">Thông tin thanh toán</p>
                                        <div className="lpm-dropdown-bank">
                                            <strong>Ngân hàng:</strong>
                                            <span>Ngân hàng Quân Đội (MB_Bank)</span>
                                        </div>
                                        <div className="lpm-dropdown-bank">
                                            <strong>Số tài khoản:</strong>
                                            <span>012345678910</span>
                                        </div>
                                        <div className="lpm-dropdown-bank-fullName">
                                            <strong>Tên tài khoản:</strong>
                                            <span>Trần Thành Công</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lpm-dropdown-detail-button">
                                <button>Xem chi tiết dự án</button>
                            </div>
                            <div className="lpm-dropdown-confirm-button">
                                <button>Xác nhận đã thanh toán</button>
                            </div>
                        </div>
                    </div>
                ) : <></>
            }
        </div>
    )

}

export default ListProjectManageCard;
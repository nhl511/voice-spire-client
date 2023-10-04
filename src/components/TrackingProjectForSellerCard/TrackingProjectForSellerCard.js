import React from 'react'
import './TrackingProjectForSellerCard.css';

export default function TrackingProjectForSellerCard() {
    return (
        <div className='tpfsc'>
            <div className="tpfsc-card">
                <div className="tpfsc-thumbnail">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="thumbnail" />
                </div>
                <div className="tpfsc-content">
                    <div className="tpfsc-title">
                        <span>Quảng cáo kem dưỡng ẩm Hảo Hảo</span>
                    </div>
                    <div className="tpfsc-info">
                        <span>
                            {/* <img
                            src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png"
                            alt=""
                        /> */}
                            <span className='tpfsc-date'>Ngày gửi:</span>
                            <span className='tpfsc-text-date'>03/10/2023</span>
                        </span>
                        <span>
                            {/* <img
                            src="https://cdn-icons-png.flaticon.com/512/156/156764.png"
                            alt=""
                        /> */}
                            <span className='tpfsc-price'>Giá:</span>
                            <span className='tpfsc-text-price'> 100.000 VNĐ/phút</span>
                        </span>
                        <span>
                            <span className='tpfsc-length'>Độ dài yêu cầu:</span>
                            <span className='tpfsc-text-length'>6 phút</span>
                        </span>
                    </div>
                    <div className="tpfsc-require">
                        <span>Giọng miền Trung</span>
                        <span>Giọng rất thấp</span>
                        <span>Phát âm kém</span>
                    </div>
                    <div className="tpfsc-button">
                        <button>Đang chờ duyệt demo</button>
                        {/* <button>Chưa nhận lời mời</button> */}
                        {/* <button>Thanh toán thành công</button> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

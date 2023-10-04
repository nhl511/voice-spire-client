import React from 'react'
import './TrackingProjectForBuyerCard.css';
import { Link } from 'react-router-dom'

export default function TrackingProjectForBuyerCard() {
    return (
        <div className="tpfbc">
            <div className="tpfbc-thumbnail">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="thumbnail" />
            </div>
            <div className="tpfbc-content">
                <div className="tpfbc-title">
                    <span>Quảng cáo kem dưỡng ẩm Hảo Hảo</span>
                </div>
                <div className="tpfbc-info">
                    <span>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png"
                            alt=""
                        />
                        <span className='tpfbc-text-date'>10/04/2023</span>
                    </span>
                    <span>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/156/156764.png"
                            alt=""
                        />
                        <span className='tpfbc-text-price'> 100.000 vnđ/phút</span>
                    </span>
                </div>
                <div className="tpfbc-status">
                    <span className='tpfbc-text-applying'>Đang ứng tuyển</span>
                    <span className='tpfbc-text-notPayingYet'>Chưa thanh toán</span>
                    {/* <span className='tpfbc-text-waitForResult'>Chờ kết quả</span> */}
                    {/* <span className='tpfbc-text-paid'>Đã thanh toán</span> */}
                    {/* <span className='tpfbc-text-result'>Đã có kết quả</span> */}
                </div>
                <div className="tpfbc-button">
                    <Link to="#">
                        <button>Chi tiết</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './AnalyzeSellerForBuyerCard.css';
import ReactAudioPlayer from 'react-audio-player';

export default function AnalyzeSellerForBuyerCard() {
    return (
        <div className="asfbc-display">
            <div className="asfbc-card">
                <div className="asfbc-avatar">
                    <img src='https://dulieuxanh.com/wp-content/uploads/2020/04/thanh_dam_co.jpg' alt="avatar" />
                </div>
                <div className="asfbc-main">
                    <div className="asfbc-info">
                        <span className="asfbc-fullName">Trần Thành Công </span>
                        <span class="asfbc-gender">| Giọng Nam</span>
                    </div>
                    <div className="play">
                        <ReactAudioPlayer src='#' controls />
                    </div>
                </div>
                <div className="asfbc-type">
                    <span>Giọng miền Nam</span>
                    <span>Giọng miền Nam</span>
                    <span>Giọng miền Nam</span>
                    <span>Giọng miền Nam</span>
                    <span>Giọng miền Nam</span>
                    {/* 00E016: xanh
                    FFD900: cam
                    FF5050: đỏ */}
                </div>
                <div className="asfbc-percent">
                    <span>97%</span>
                </div>
                <div className="asfbc-button">
                    <button >Phân tích chi tiết</button>
                </div>
            </div>
        </div>
    )
}

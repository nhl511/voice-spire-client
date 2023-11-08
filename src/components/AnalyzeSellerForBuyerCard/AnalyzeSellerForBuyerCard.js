import React from "react";
import "./AnalyzeSellerForBuyerCard.css";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

export default function AnalyzeSellerForBuyerCard({ voice }) {
  return (
    <div className="asfbc-display">
      <div className="asfbc-card">
        <div className="asfbc-avatar">
          <img
            src={
              voice.sellerInAna.voiceSeller.avatarLink
                ? voice.sellerInAna.voiceSeller.avatarLink
                : "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            alt="avatar"
          />
        </div>
        <div className="asfbc-main">
          <div className="asfbc-info">
            <span className="asfbc-fullName">
              {voice.sellerInAna.voiceSeller.fullname}
            </span>
            <span class="asfbc-gender">
              {` | Giọng ${voice.sellerInAna.voiceGender}`}
            </span>
          </div>
          <div className="play">
            <ReactAudioPlayer src="#" controls />
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
          {Number(voice.suitability) >= 90 && (
            <div className="asfbc-good-percent">{voice.suitability}%</div>
          )}
          {Number(voice.suitability) >= 50 &&
            Number(voice.suitability) < 90 && (
              <div className="asfbc-medium-percent">{voice.suitability}%</div>
            )}
          {Number(voice.suitability) < 50 && (
            <div className="asfbc-bad-percent">{voice.suitability}%</div>
          )}
        </div>
        <Link
          to={`/asfbd/${voice.voiceProjectId}/${voice.sellerInAna.voiceSeller.voiceSellerId}`}
          className="link"
        >
          <div className="asfbc-button">
            <button>Phân tích chi tiết</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

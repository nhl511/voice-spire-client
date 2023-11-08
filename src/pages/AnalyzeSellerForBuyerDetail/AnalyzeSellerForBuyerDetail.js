import React, { useEffect, useState } from "react";
import "./AnalyzeSellerForBuyerDetail.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { suggestVoice } from "../../api/axios";
import { useParams } from "react-router-dom";

export default function AnalyzeSellerForBuyerDetail() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const { id, id2 } = useParams();

  useEffect(() => {
    suggestVoice(id, id2).then((json) => {
      setResult(json);
      setLoading(false);
    });
  }, []);
  return (
    <div className="asfbd">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <h2 className="asfbd-titleProject">{result.projectInAna.title}</h2>
          <div className="asfbd-container">
            <div className="asfbd-card">
              <div className="asfbd-col">
                <div className="asfbd-row">
                  <span className="asfbd-title">Giới tính giọng đọc</span>
                  <span className="asfbd-result">
                    {result.projectInAna.voiceGender}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Tính chát</span>
                  <span className="asfbd-result">
                    {result.projectInAna.voiceProperty}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Giọng</span>
                  <span className="asfbd-result">
                    {result.projectInAna.voiceRegion}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Giọng địa phương</span>
                  <span className="asfbd-result">
                    {result.projectInAna.voiceLocal}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Tone giọng</span>
                  <span className="asfbd-result">
                    {result.projectInAna.voiceTone === 5 && (
                      <span>Rất cao</span>
                    )}
                    {result.projectInAna.voiceTone === 4 && <span>Cao</span>}
                    {result.projectInAna.voiceTone === 3 && <span>Vừa</span>}
                    {result.projectInAna.voiceTone === 2 && <span>Thấp</span>}
                    {result.projectInAna.voiceTone === 1 && (
                      <span>Rất thấp</span>
                    )}
                    {result.projectInAna.voiceTone === 0 && (
                      <span>Không có</span>
                    )}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Độ truyền cảm</span>
                  <span className="asfbd-result">
                    {result.projectInAna.voiceInspirational === 5 && (
                      <span>Rất cao</span>
                    )}
                    {result.projectInAna.voiceInspirational === 4 && (
                      <span>Cao</span>
                    )}
                    {result.projectInAna.voiceInspirational === 3 && (
                      <span>Vừa</span>
                    )}
                    {result.projectInAna.voiceInspirational === 2 && (
                      <span>Thấp</span>
                    )}
                    {result.projectInAna.voiceInspirational === 1 && (
                      <span>Rất thấp</span>
                    )}
                    {result.projectInAna.voiceInspirational === 0 && (
                      <span>Không có</span>
                    )}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Tốc độ đọc</span>
                  <span className="asfbd-result">
                    {result.projectInAna.voiceSpeed === 5 && (
                      <span>Rất cao</span>
                    )}
                    {result.projectInAna.voiceSpeed === 4 && <span>Cao</span>}
                    {result.projectInAna.voiceSpeed === 3 && <span>Vừa</span>}
                    {result.projectInAna.voiceSpeed === 2 && <span>Thấp</span>}
                    {result.projectInAna.voiceSpeed === 1 && (
                      <span>Rất thấp</span>
                    )}
                    {result.projectInAna.voiceSpeed === 0 && (
                      <span>Không có</span>
                    )}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">
                    Khả năng phát âm chính xác
                  </span>
                  <span className="asfbd-result">
                    {result.projectInAna.voicePronouce === 5 && (
                      <span>Rất cao</span>
                    )}
                    {result.projectInAna.voicePronouce === 4 && (
                      <span>Cao</span>
                    )}
                    {result.projectInAna.voicePronouce === 3 && (
                      <span>Vừa</span>
                    )}
                    {result.projectInAna.voicePronouce === 2 && (
                      <span>Thấp</span>
                    )}
                    {result.projectInAna.voicePronouce === 1 && (
                      <span>Rất thấp</span>
                    )}
                    {result.projectInAna.voicePronouce === 0 && (
                      <span>Không có</span>
                    )}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">
                    Khả năng thể hiện trọng âm
                  </span>
                  <span className="asfbd-result">
                    {result.projectInAna.voiceStress === 5 && (
                      <span>Rất cao</span>
                    )}
                    {result.projectInAna.voiceStress === 4 && <span>Cao</span>}
                    {result.projectInAna.voiceStress === 3 && <span>Vừa</span>}
                    {result.projectInAna.voiceStress === 2 && <span>Thấp</span>}
                    {result.projectInAna.voiceStress === 1 && (
                      <span>Rất thấp</span>
                    )}
                    {result.projectInAna.voiceStress === 0 && (
                      <span>Không có</span>
                    )}
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Giá</span>
                  <span className="asfbd-result">
                    {result.projectInAna.toalOutputPrice} VNĐ
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Thời lượng yêu cầu</span>
                  <span className="asfbd-result">
                    {result.projectInAna.duration} phút
                  </span>
                </div>
                <div className="asfbd-row">
                  <span className="asfbd-title">Số lượng từ</span>
                  <span className="asfbd-result">
                    {result.projectInAna.textLength} từ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

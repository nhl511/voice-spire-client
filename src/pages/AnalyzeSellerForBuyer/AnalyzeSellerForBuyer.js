import React, { useEffect, useState } from "react";
import "./AnalyzeSellerForBuyer.css";
import AnalyzeSellerForBuyerCard from "../../components/AnalyzeSellerForBuyerCard/AnalyzeSellerForBuyerCard";
import { useParams } from "react-router-dom";
import { suggestVoices } from "../../api/axios";

export default function AnalyzeSellerForBuyer() {
  const [openFilter, setOpenFilter] = useState(false);
  const { id } = useParams();
  const [voices, setVoices] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    suggestVoices(id).then((json) => {
      setVoices(json);
      setLoading(false);
    });
  }, []);
  return (
    <div className="asfb">
      <div className="asfb-bigContainer">
        <div className="asfb-container">
          <div className="asfb-search">
            <div className="asfb-header-left">
              <span>Đa dạng lựa chọn với hơn 7749 giọng đọc</span>
              <span>cho dự án của bạn</span>
              <div>
                <button
                  className="asfb-button"
                  onClick={() => setOpenFilter(!openFilter)}
                >
                  Tìm kiếm ngay
                </button>
              </div>
            </div>
            <div className="asfb-header-right">
              <p>Gợi ý cho dự án</p>
              <h2>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
            </div>
          </div>
          {openFilter && (
            <div className="asfb-filter">
              <div className="asfb-filter-row">
                <div className="asfb-searchbox">
                  <input
                    type="text"
                    placeholder="Tìm kiếm (Ví dụ: Bảo Long, 1977,...)"
                  />
                </div>
                <div className="asfb-min-max">
                  <span>Giá</span>
                  <input type="number" placeholder="Từ" />
                  <span>-</span>
                  <input type="number" placeholder="Đến" />
                </div>
                <div className="asfb-type">
                  <span>Loại</span>
                  <select>
                    <option value="">Vui lòng chọn</option>
                    <option value="Mạnh mẽ">Mạnh mẽ</option>
                    <option value="Trẻ trung">Trẻ trung</option>
                    <option value="Trung niên">Trung niên</option>
                    <option value="Giọng ấm">Giọng ấm</option>
                    <option value="Tươi mới">Tươi mới</option>
                    <option value="Hài hước">Hài hước</option>
                    <option value="Tự tin">Tự tin</option>
                    <option value="Dịu dàng">Dịu dàng</option>
                    <option value="Trẻ em">Trẻ em</option>
                  </select>
                </div>
                <div className="asfb-tone">
                  <span>Tone giọng</span>
                  <select>
                    <option value="0">Vui lòng chọn</option>
                    <option value="1">Rất thấp</option>
                    <option value="2">Thấp</option>
                    <option value="3">Vừa</option>
                    <option value="4">Cao</option>
                    <option value="5">Rất cao</option>
                  </select>
                </div>
              </div>
              <div className="asfb-filter-row">
                <div className="asfb-region">
                  <span>Vùng miền</span>
                  <select>
                    <option value="">Vui lòng chọn</option>
                    <option value="Miền Nam">Miền Nam</option>
                    <option value="Miền Bắc">Miền Bắc</option>
                    <option value="Miền Trung">Miền Trung</option>
                  </select>
                </div>
                <div className="asfb-gender">
                  <span>Giới tính</span>
                  <select>
                    <option value="">Vui lòng chọn</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                <div className="asfb-nature">
                  <span>Tính chất</span>
                  <select>
                    <option value="">Vui lòng chọn</option>
                    <option value="Quảng cáo">Quảng cáo</option>
                    <option value="Kể Chuyện">Kể chuyện</option>
                    <option value="Thuyết trình">Thuyết trình</option>
                    <option value="Thuyết minh">Thuyết minh</option>
                    <option value="Review phim">Review phim</option>
                    <option value="Thời sự">Thời sự</option>
                    <option value="Thông báo">Thông báo</option>
                  </select>
                </div>
                <div className="asfb-rating">
                  <span>Đánh giá</span>
                  <select>
                    <option value="">Vui lòng chọn</option>
                    <option value="5">5 sao</option>
                    <option value="4">4 sao</option>
                    <option value="3">3 sao</option>
                    <option value="2">2 sao</option>
                    <option value="1">1 sao</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        {loading ? (
          <div className="loading">
            <div className="loading-container">
              <div class="loader"></div>
            </div>
          </div>
        ) : voices.length === 0 ? (
          <span>Hiện tại chưa có giọng phù hợp</span>
        ) : (
          voices.map((voice) => <AnalyzeSellerForBuyerCard voice={voice} />)
        )}
      </div>
    </div>
  );
}

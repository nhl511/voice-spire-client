import React, { useEffect, useState } from "react";
import "./Voices.css";
import VoiceCard from "../../components/VoiceCard/VoiceCard";
import { getVoiceList, voicesFilter } from "../../api/axios";

const Voices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [voices, setVoices] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputMinPrice, setInputMinPrice] = useState(0);
  const [inputMaxPrice, setInputMaxPrice] = useState(100000);
  const [inputTone, setInputTone] = useState(0);
  const [inputRegion, setInputRegion] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputType, setInputType] = useState("");
  const [inputProp, setInputProp] = useState("");
  const [inputRate, setInputRate] = useState(0);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getVoiceList(currentPage, 10, "new", true)
      .then((json) => setVoices(json))
      .then((json) => setLoading(false));
  }, [currentPage]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    voicesFilter(
      currentPage,
      10,
      true,
      inputName,
      inputMinPrice,
      inputMaxPrice,
      inputTone,
      inputRegion,
      inputGender,
      inputType,
      inputProp,
      inputRate
    )
      .then((json) => setVoices(json))
      .then((json) => setLoading(false));
  };
  return (
    <div className="voices">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="voices-container">
          <div className="search">
            <span>
              Đa dạng lựa chọn với hơn 7749 giọng đọc cho dự án của bạn
            </span>
            <button onClick={() => setOpenFilter(!openFilter)}>
              Tìm kiếm ngay
            </button>
          </div>
          {openFilter && (
            <form onSubmit={handleSubmit}>
              <div className="filter">
                <div className="filter-row">
                  <div className="searchbox">
                    <input
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                      type="text"
                      placeholder="Tìm kiếm (Ví dụ: Bảo Long, 1977,...)"
                    />
                  </div>
                  <div className="min-max">
                    <span>Giá</span>
                    <input
                      value={inputMinPrice}
                      onChange={(e) => setInputMinPrice(e.target.value)}
                      type="number"
                      placeholder="Từ"
                    />
                    <span>-</span>
                    <input
                      value={inputMaxPrice}
                      onChange={(e) => setInputMaxPrice(e.target.value)}
                      type="number"
                      placeholder="Đến"
                    />
                  </div>
                  <div className="tone">
                    <span>Tone giọng</span>
                    <select
                      value={inputTone}
                      onChange={(e) => setInputTone(e.target.value)}
                    >
                      <option value="0">Vui lòng chọn</option>
                      <option value="1">Rất thấp</option>
                      <option value="2">Thấp</option>
                      <option value="3">Vừa</option>
                      <option value="4">Cao</option>
                      <option value="5">Rất cao</option>
                    </select>
                  </div>
                </div>
                <div className="filter-row">
                  <div className="region">
                    <span>Vùng miền</span>
                    <select
                      value={inputRegion}
                      onChange={(e) => setInputRegion(e.target.value)}
                    >
                      <option value="">Vui lòng chọn</option>
                      <option value="Miền Nam">Miền Nam</option>
                      <option value="Miền Bắc">Miền Bắc</option>
                      <option value="Miền Trung">Miền Trung</option>
                    </select>
                  </div>
                  <div className="gender">
                    <span>Giới tính</span>
                    <select
                      value={inputGender}
                      onChange={(e) => setInputGender(e.target.value)}
                    >
                      <option value="">Vui lòng chọn</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                  <div className="type">
                    <span>Loại</span>
                    <select
                      value={inputType}
                      onChange={(e) => setInputType(e.target.value)}
                    >
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
                  <div className="nature">
                    <span>Tính chất</span>
                    <select
                      value={inputProp}
                      onChange={(e) => setInputProp(e.target.value)}
                    >
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
                  <div className="rating">
                    <span>Đánh giá</span>
                    <select
                      value={inputRate}
                      onChange={(e) => setInputRate(e.target.value)}
                    >
                      <option value="">Vui lòng chọn</option>
                      <option value="5">5 sao</option>
                      <option value="4">4 sao</option>
                      <option value="3">3 sao</option>
                      <option value="2">2 sao</option>
                      <option value="1">1 sao</option>
                    </select>
                  </div>
                  <button>Tìm kiếm</button>
                </div>
              </div>
            </form>
          )}
          <div className="cards">
            {voices.map((voice) => (
              <VoiceCard key={voice.voiceDetailId} voice={voice} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Voices;

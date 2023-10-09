import React, { useEffect, useState } from "react";
import "./TrackingProjectForBuyer.css";
import TrackingProjectForBuyerCard from "../../components/TrackingProjectForBuyerCard/TrackingProjectForBuyerCard";
import { getAllProjectsForTracking } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function TrackingProjectForBuyer() {
  const [openFilter, setOpenFilter] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllProjectsForTracking(auth.userId)
      .then((json) => setPosts(json))
      .then((json) => setLoading(false))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError(true);
        }
        setLoading(false);
      });
  });
  console.log(posts);

  return (
    <div className="tpfb">
      <div className="tpfb-container">
        <div className="tpfb-search">
          <span>Đa dạng lựa chọn với hơn 7749 giọng đọc cho dự án của bạn</span>
          <button onClick={() => setOpenFilter(!openFilter)}>
            Tìm kiếm ngay
          </button>
        </div>
        {openFilter && (
          <form>
            <div className="tpfb-filter">
              <div className="tpfb-filter-row">
                <div className="tpfb-searchBox">
                  <input
                    type="text"
                    placeholder="Tìm kiếm (Ví dụ: Bảo Long, 1977,...)"
                  />
                </div>
                <div className="tpfb-min-max">
                  <span>Giá</span>
                  <input type="number" placeholder="Từ" />
                  <span>-</span>
                  <input type="number" placeholder="Đến" />
                </div>
                <div className="tpfb-type">
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
                <div className="tpfb-tone">
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
              <div className="tpfb-filter-row">
                <div className="tpfb-region">
                  <span>Vùng miền</span>
                  <select>
                    <option value="">Vui lòng chọn</option>
                    <option value="Miền Nam">Miền Nam</option>
                    <option value="Miền Bắc">Miền Bắc</option>
                    <option value="Miền Trung">Miền Trung</option>
                  </select>
                </div>
                <div className="tpfb-gender">
                  <span>Giới tính</span>
                  <select>
                    <option value="">Vui lòng chọn</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                <div className="tpfb-nature">
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
                <div className="tpfb-rating">
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
                <button>Tìm kiếm</button>
              </div>
            </div>
          </form>
        )}
        <div className="tpfb-cards">
          {loading ? (
            <div className="loading">
              <div className="loading-container">
                <div class="loader"></div>
              </div>
            </div>
          ) : error ? (
            <span>Bạn chưa tạo dự án nào</span>
          ) : (
            posts.map((post) => <TrackingProjectForBuyerCard post={post} />)
          )}
        </div>
      </div>
    </div>
  );
}

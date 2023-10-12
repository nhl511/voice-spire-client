import React, { useEffect, useState } from "react";
import "./Posts.css";
import PostCard from "../../components/PostCard/PostCard";
import { applyingProjectsFilter } from "../../api/axios";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [sort, setSort] = useState("new");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const [property, setProperty] = useState("");
  const [duration, setDuration] = useState(10);
  const [type, setType] = useState("");

  useEffect(() => {
    applyingProjectsFilter(
      1,
      100,
      inputSearch,
      sort,
      minPrice,
      maxPrice,
      region,
      type,
      gender,
      property,
      duration
    )
      .then((json) => setPosts(json))
      .then((json) => setLoading(false));
  }, [
    inputSearch,
    sort,
    minPrice,
    maxPrice,
    region,
    type,
    gender,
    property,
    duration,
  ]);

  console.log(posts);

  return (
    <div className="posts-background">
      <div className="posts">
        <div className="posts-container">
          <div className="filter">
            <div className="filter-row">
              <div className="searchbox">
                <input
                  type="search"
                  placeholder="Tìm kiếm"
                  value={inputSearch}
                  onChange={(e) => {
                    setInputSearch(e.target.value);
                    setLoading(true);
                  }}
                />
              </div>
              <div className="min-max">
                <span>Giá</span>
                <input
                  type="number"
                  placeholder="Từ"
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                    setLoading(true);
                  }}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Đến"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                    setLoading(true);
                  }}
                />
              </div>
              <div className="long">
                <span>Thời lượng tối đa (phút)</span>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                    setLoading(true);
                  }}
                />
              </div>
            </div>
            <div className="filter-row">
              <div className="region">
                <span>Vùng miền</span>
                <select
                  name=""
                  id=""
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                    setLoading(true);
                  }}
                >
                  <option value="">Vui lòng chọn</option>
                  <option value="Miền Bắc">Miền Bắc</option>
                  <option value="Miền Trung">Miền Trung</option>
                  <option value="Miền Nam">Miền Nam</option>
                </select>
              </div>
              <div className="gender">
                <span>Giới tính giọng đọc</span>
                <select
                  name=""
                  id=""
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    setLoading(true);
                  }}
                >
                  <option value="">Vui lòng chọn</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Nam">Nam</option>
                </select>
              </div>
              <div className="nature">
                <span>Tính chất</span>
                <select
                  name=""
                  id=""
                  value={property}
                  onChange={(e) => {
                    setProperty(e.target.value);
                    setLoading(true);
                  }}
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
            </div>
          </div>
          <div className="cards">
            {loading ? (
              <div className="loading">
                <div className="loading-container">
                  <div class="loader"></div>
                </div>
              </div>
            ) : posts.length === 0 ? (
              <span>Hiện tại chưa có dự án nào</span>
            ) : (
              posts.map((post) => <PostCard post={post} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

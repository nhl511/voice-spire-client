import React, { useEffect, useState } from "react";
import "./Posts.css";
import PostCard from "../../components/PostCard/PostCard";
import { getPostedProjects, getProjects } from "../../api/axios";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects(
      currentPage,
      100,
      "new",
      "Post",
      false,
      false,
      true,
      false,
      false,
      false,
      false
    )
      .then((json) => setPosts(json))
      .then((json) => setLoading(false));
  }, [currentPage]);

  return (
    <div className="posts-background">
      <div className="posts">
        <div className="posts-container">
          <div className="filter">
            <div className="filter-row">
              <div className="searchbox">
                <input
                  type="text"
                  placeholder="Tìm kiếm (Ví dụ: Bảo Long, 1977,...)"
                />
              </div>
              <div className="min-max">
                <span>Giá</span>
                <input type="number" placeholder="Từ" />
                <span>-</span>
                <input type="number" placeholder="Đến" />
              </div>
              <div className="long">
                <span>Độ dài văn bản</span>
                <input type="number" />
              </div>
            </div>
            <div className="filter-row">
              <div className="region">
                <span>Vùng miền</span>
                <select name="" id="">
                  <option value="">Miền Bắc</option>
                  <option value="">Miền Trung</option>
                  <option value="">Miền Nam</option>
                </select>
              </div>
              <div className="gender">
                <span>Giới tính</span>
                <select name="" id="">
                  <option value="">Nữ</option>
                  <option value="">Nam</option>
                </select>
              </div>
              <div className="nature">
                <span>Tính chất</span>
                <select name="" id="">
                  <option value="">Thời sự</option>
                </select>
              </div>
              <div className="location">
                <span>Địa phương</span>
                <select name="" id="">
                  <option value="">Hà Nội</option>
                </select>
              </div>
              <button>Tìm kiếm</button>
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

import React, { useEffect, useState } from "react";
import "./TrackingProjectForSeller.css";
import TrackingProjectForSellerCard from "../../components/TrackingProjectForSellerCard/TrackingProjectForSellerCard";
import useAuth from "../../hooks/useAuth";
import { getAllJobsForTracking } from "../../api/axios";

export default function TrackingProjectForSeller() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { auth } = useAuth();
  useEffect(() => {
    getAllJobsForTracking(currentPage, 100, auth.userId)
      .then((json) => setPosts(json))
      .then((json) => setLoading(false));
  });
  return (
    <div className="tpfs-background">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="tpfs">
            <div className="tpfs-container">
              <div className="tpfs-filter">
                <input
                  placeholder="Tìm kiếm (Ví dụ: Bảo Long, 1977,...)"
                  className="tpfs-searchBox"
                />
                <span className="tpfs-price">Giá</span>
                <input
                  type="number"
                  placeholder="Từ"
                  className="tpfs-price-min"
                />
                <span className="tpfs-dot"> - </span>
                <input
                  type="number"
                  placeholder="Đến"
                  className="tpfs-price-max"
                />
                <span className="tpfs-length">Độ dài yêu cầu</span>
                <input type="number" className="tpfs-length-input" />
              </div>
              <button className="tpfs-search">Tìm kiếm</button>
            </div>
          </div>
          <div className="tpfs-card">
            {posts.length === 0 ? (
              <span>Bạn chưa có dự án nào</span>
            ) : (
              posts.map((post) => <TrackingProjectForSellerCard post={post} />)
            )}
          </div>
        </>
      )}
    </div>
  );
}

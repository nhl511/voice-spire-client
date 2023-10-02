import React, { useEffect, useState } from "react";
import "./SentProjectsManagement";
import { getProjects } from "../../api/axios";
import PostedProjectCard from "../../components/PostedProjectCard/PostedProjectCard";

const SentProjectsManagement = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [projectType, setProjectType] = useState("send");
  const [WaitApprove, setWaitApprove] = useState(true);
  const [NotApproved, setNotApproved] = useState(true);
  const [Apply, setApply] = useState(true);
  const [Processing, setProcessing] = useState(true);
  const [Done, setDone] = useState(true);
  const [WaitToAccept, setWaitToAccept] = useState(true);
  const [Denied, setDenied] = useState(true);

  useEffect(() => {
    getProjects(
      currentPage,
      100,
      "old",
      projectType,
      WaitApprove,
      NotApproved,
      Apply,
      Processing,
      Done,
      WaitToAccept,
      Denied
    )
      .then((json) => setPosts(json))
      .then((json) => setLoading(false));
  }, [currentPage]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    getProjects(
      currentPage,
      10,
      "old",
      projectType,
      WaitApprove,
      NotApproved,
      Apply,
      Processing,
      Done,
      WaitToAccept,
      Denied
    )
      .then((json) => setPosts(json))
      .then((json) => setLoading(false));
  };
  return (
    <div className="projectapproval">
      <div className="projectApproval-container">
        <div className="projectApproval-search">
          <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Tìm kiếm" />
            <select>
              <option>Mới nhất</option>
              <option>Theo dõi</option>
            </select>
            <div className="status-wrapper">
              <div className="status">
                <input
                  type="radio"
                  value={WaitApprove}
                  name="status"
                  onChange={(e) => {
                    setWaitApprove(true);
                    setNotApproved(false);
                    setWaitToAccept(false);
                    setDenied(false);
                    setProcessing(false);
                    setDone(false);
                  }}
                />
                <span>Chưa duyệt</span>
              </div>
              <div className="status">
                <input
                  type="radio"
                  value={NotApproved}
                  name="status"
                  onChange={(e) => {
                    setWaitApprove(false);
                    setNotApproved(true);
                    setWaitToAccept(false);
                    setDenied(false);
                    setProcessing(false);
                    setDone(false);
                  }}
                />
                <span>Không duyệt</span>
              </div>
              <div className="status">
                <input
                  type="radio"
                  value={WaitToAccept}
                  name="status"
                  onChange={(e) => {
                    setWaitApprove(false);
                    setNotApproved(false);
                    setWaitToAccept(true);
                    setDenied(false);
                    setProcessing(false);
                    setDone(false);
                  }}
                />
                <span>Đã gửi lời mời</span>
              </div>
              <div className="status">
                <input
                  type="radio"
                  value={Denied}
                  name="status"
                  onChange={(e) => {
                    setWaitApprove(false);
                    setNotApproved(false);
                    setWaitToAccept(false);
                    setDenied(true);
                    setProcessing(false);
                    setDone(false);
                  }}
                />
                <span>Không nhận lời mời</span>
              </div>
              <div className="status">
                <input
                  type="radio"
                  value={Processing}
                  name="status"
                  onChange={(e) => {
                    setWaitApprove(false);
                    setNotApproved(false);
                    setWaitToAccept(false);
                    setDenied(false);
                    setProcessing(true);
                    setDone(false);
                  }}
                />
                <span>Đã nhận dự án</span>
              </div>
              <div className="status">
                <input
                  type="radio"
                  value={Done}
                  name="status"
                  onChange={(e) => {
                    setWaitApprove(false);
                    setNotApproved(false);
                    setWaitToAccept(false);
                    setDenied(false);
                    setProcessing(false);
                    setDone(true);
                  }}
                />
                <span>Hoàn thành</span>
              </div>
              <button>Tìm kiếm</button>
            </div>
          </form>
        </div>
        <div className="posts">
          {loading ? (
            <div className="loading">
              <div className="loading-container">
                <div class="loader"></div>
              </div>
            </div>
          ) : (
            posts.map((post) => <PostedProjectCard key={post.id} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default SentProjectsManagement;

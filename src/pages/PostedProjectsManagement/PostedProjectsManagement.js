import React, { useEffect, useState } from "react";
import "./PostedProjectsManagement.css";
import { getPostedProjects, getProjectForManagement } from "../../api/axios";
import PostedProjectCard from "../../components/PostedProjectCard/PostedProjectCard";
import { Link } from "react-router-dom";

const ProjectApproval = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("Post");
  const [WaitApprove, setWaitApprove] = useState(false);
  const [NotApproved, setNotApproved] = useState(false);
  const [Apply, setApply] = useState(false);
  const [Processing, setProcessing] = useState(false);
  const [Done, setDone] = useState(false);
  const [WaitToAccept, setWaitToAccept] = useState(false);
  const [Denied, setDenied] = useState(false);
  // useEffect(() => {
  //   getProjectForManagement(
  //     currentPage,
  //     10,
  //     "old",
  //     projectType,
  //     WaitApprove,
  //     NotApproved,
  //     Apply,
  //     Processing,
  //     Done,
  //     WaitToAccept,
  //     Denied
  //   )
  //     .then((json) => setPosts(json))
  //     .then((json) => setLoading(false));
  // }, [currentPage]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    getProjectForManagement(
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
                    setApply(false);
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
                    setApply(false);
                    setProcessing(false);
                    setDone(false);
                  }}
                />
                <span>Không duyệt</span>
              </div>
              <div className="status">
                <input
                  type="radio"
                  value={Apply}
                  name="status"
                  onChange={(e) => {
                    setWaitApprove(false);
                    setNotApproved(false);
                    setApply(true);
                    setProcessing(false);
                    setDone(false);
                  }}
                />
                <span>Đang ứng tuyển</span>
              </div>
              <div className="status">
                <input
                  type="radio"
                  value={Processing}
                  name="status"
                  onChange={(e) => {
                    setWaitApprove(false);
                    setNotApproved(false);
                    setApply(false);
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
                    setApply(false);
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

export default ProjectApproval;

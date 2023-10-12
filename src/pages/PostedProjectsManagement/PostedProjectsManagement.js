import React, { useEffect, useState } from "react";
import "./PostedProjectsManagement.css";
import { getProjects } from "../../api/axios";
import PostedProjectCard from "../../components/PostedProjectCard/PostedProjectCard";
import { useNavigationContext } from "../../context/NavigationContext";
import { useLocation } from "react-router-dom";

const PostedProjectsManagement = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectType, setProjectType] = useState("Post");
  const [WaitApprove, setWaitApprove] = useState(true);
  const [NotApproved, setNotApproved] = useState(true);
  const [Apply, setApply] = useState(true);
  const [Processing, setProcessing] = useState(true);
  const [Done, setDone] = useState(true);
  const [WaitToAccept, setWaitToAccept] = useState(true);
  const [Denied, setDenied] = useState(true);
  const [sort, setSort] = useState("old");
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    getProjects(
      1,
      100,
      sort,
      projectType,
      WaitApprove,
      NotApproved,
      Apply,
      Processing,
      Done,
      WaitToAccept,
      Denied,
      inputSearch
    )
      .then((json) => setPosts(json))
      .then((json) => setLoading(false));
  }, [
    sort,
    projectType,
    WaitApprove,
    NotApproved,
    Apply,
    Processing,
    Done,
    WaitToAccept,
    Denied,
    inputSearch,
  ]);

  return (
    <div className="projectapproval">
      <div className="projectApproval-container">
        <div className="projectApproval-search">
          <input
            type="search"
            placeholder="Tìm kiếm"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
              setLoading(true);
            }}
          />
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setLoading(true);
            }}
          >
            <option value="old">Cũ nhất</option>
            <option value="new">Mới nhất</option>
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
                  setLoading(true);
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
                  setLoading(true);
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
                  setLoading(true);
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
                  setLoading(true);
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
                  setLoading(true);
                }}
              />
              <span>Hoàn thành</span>
            </div>
          </div>
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

export default PostedProjectsManagement;

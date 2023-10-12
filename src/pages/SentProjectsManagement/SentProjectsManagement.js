import React, { useEffect, useState } from "react";
import "./SentProjectsManagement.css";
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
  const [inputSearch, setInputSearch] = useState("");
  const [sort, setSort] = useState("old");

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
    <div className="spm">
      <div className="spm-container">
        <div className="spm-search">
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
                  setWaitToAccept(false);
                  setDenied(false);
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
                  setWaitToAccept(false);
                  setDenied(false);
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
                value={WaitToAccept}
                name="status"
                onChange={(e) => {
                  setWaitApprove(false);
                  setNotApproved(false);
                  setWaitToAccept(true);
                  setDenied(false);
                  setProcessing(false);
                  setDone(false);
                  setLoading(true);
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
                  setLoading(true);
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
                  setWaitToAccept(false);
                  setDenied(false);
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

export default SentProjectsManagement;

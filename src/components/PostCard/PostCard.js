import React, { useEffect, useState } from "react";
import "./PostCard.css";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import {
  checkBankAccountForBuyer,
  checkBankAccountForSeller,
  getVoice,
} from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const PostCard = ({ post }) => {
  const [voice, setVoice] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getVoice(auth.userId)
      .then((json) => setVoice(json))
      .then((json) => setLoading(false))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError(true);
        }
        setLoading(false);
      });
  }, [auth.userId]);

  const handleCheck = () => {
    checkBankAccountForSeller(auth.userId).then(
      (result) => !result && navigate("/bank")
    );
    navigate(`/pt1/${post.voiceProjectId}`);
  };
  return (
    <div className="postcard">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="thumbnail">
            <img src={post.linkThumbnail} alt="" />
          </div>
          <div className="content">
            <div className="title">
              <span>{post.title}</span>
            </div>
            <div className="info">
              <span>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png"
                  alt=""
                />
                <b>{moment(post.deadline).format("DD/MM/yyyy")}</b>
              </span>
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/156/156764.png"
                  alt=""
                />
                <b> {post.toalOutputPrice} VNĐ</b>
              </span>
            </div>
            <div className="require">
              <span>{`Giọng ${post.voiceRegion}`}</span>
              {post.voiceTone === 1 ? (
                <span>Giọng rất thấp</span>
              ) : post.voiceTone === 2 ? (
                <span>Giọng thấp</span>
              ) : post.voiceTone === 3 ? (
                <span>Giọng vừa</span>
              ) : post.voiceTone === 4 ? (
                <span>Giọng cao</span>
              ) : post.voiceTOne === 5 ? (
                <span>Giọng rất cao</span>
              ) : null}
              {post.voicePronouce === 1 ? (
                <span>Phát âm kém</span>
              ) : post.voicePronouce === 2 ? (
                <span>Phát âm trung bình</span>
              ) : post.voicePronouce === 3 ? (
                <span>Phát âm khá</span>
              ) : post.voicePronouce === 4 ? (
                <span>Phát âm tốt</span>
              ) : post.voicePronouce === 5 ? (
                <span>Phát âm rất tốt</span>
              ) : null}
            </div>
            <div className="button">
              {error ? (
                <span>Chưa thể ứng tuyển</span>
              ) : voice.isApprove ? (
                <button onClick={handleCheck}>Ứng tuyển ngay</button>
              ) : (
                <span>Chưa thể ứng tuyển</span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostCard;

import React from "react";
import "./PostCard.css";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className="postcard">
      <div className="thumbnail">
        <img
          src="https://nld.mediacdn.vn/291774122806476800/2021/9/12/hao-hao-1631458927029451636971.jpeg"
          alt=""
        />
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
            <b> {post.price} VNĐ</b>
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
          <button>Ứng tuyển ngay</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

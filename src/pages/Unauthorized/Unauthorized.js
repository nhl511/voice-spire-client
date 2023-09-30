import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div>
      <span>Bạn không đủ thẩm quyền để truy cập trang này</span>
      <br />
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Unauthorized;

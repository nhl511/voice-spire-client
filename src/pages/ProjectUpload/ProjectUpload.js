import React, { useState } from "react";
import "./ProjectUpload.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ProjectUpload = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [req, setReq] = useState();
  const [price, setPrice] = useState();
  const [type, setType] = useState();
  const [gender, setGender] = useState();
  const [tone, setTone] = useState();
  const [time, setTime] = useState();
  const [region, setRegion] = useState();
  const [local, setLocal] = useState();
  const [pronounce, setPronounce] = useState();
  const [ins, setIns] = useState();
  const [speed, setSpeed] = useState();
  const [press, setPress] = useState();
  const [numOfEdit, setNumOfEdit] = useState();
  const [deadline, setDeadline] = useState();
  const [demoFile, setDemoFile] = useState();
  const [textFile, setTextFile] = useState();
  const [thumbnail, setThumbnail] = useState();

  const handleSubmit = () => {};
  return (
    <div className="projectUpload-container">
      <div className="projectUpload-title">
        <p>ĐĂNG TẢI THÔNG TIN TUYỂN DỤNG GIỌNG ĐỌC</p>
      </div>
      <div className="projectUpload-card">
        <div className="projectUpload-card-width">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="projectUpload-card-first">
                <input placeholder="Tiêu đề" />
                <input placeholder="Mô tả" />
                <input placeholder="Yêu cầu" />
              </div>
              <div className="projectUpload-card-second">
                <div className="projectUpload-card-grid">
                  <div className="projectUpload-col">
                    <span>Bản demo duyệt giọng nói:</span>
                    <input type="file" id="btn-upload-voice" hidden />
                    <label for="btn-upload-voice">Upload</label>
                  </div>
                  <div className="projectUpload-col">
                    <span>Văn bản cần đọc:</span>
                    <input type="file" id="btn-upload-doc" hidden />
                    <label for="btn-upload-doc">Upload</label>
                  </div>
                </div>
                <div className="projectUpload-card-display">
                  <div className="projectUpload-first-row-col-1">
                    <span>Giá:</span>
                    <input />
                    <span>vnđ/phút</span>
                  </div>
                  <div className="projectUpload-first-row-col-2">
                    <span>Loại văn bản:</span>
                    <select>
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
                  <div className="projectUpload-first-row-col-3">
                    <span>Thumbnail:</span>
                    <input type="file" id="thumbnail" hidden />
                    <label for="thumbnail">Upload</label>
                  </div>
                  <div className="projectUpload-second-row-col-1">
                    <span>Giới tính:</span>
                    <select>
                      <option value="">Vui lòng chọn</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                  <div className="projectUpload-second-row-col-2">
                    <span>Tone giọng:</span>
                    <select>
                      <option value="0">Vui lòng chọn</option>
                      <option value="1">Rất thấp</option>
                      <option value="2">Thấp</option>
                      <option value="3">Vừa</option>
                      <option value="4">Cao</option>
                      <option value="5">Rất cao</option>
                    </select>
                  </div>
                  <div className="projectUpload-second-row-col-3">
                    <span>Thời lượng yêu cầu:</span>
                    <input />
                    <span>Phút</span>
                  </div>
                  <div className="projectUpload-third-row-col-1">
                    <span>Vùng miền:</span>
                    <select>
                      <option value="">Vui lòng chọn</option>
                      <option value="Miền Nam">Miền Nam</option>
                      <option value="Miền Bắc">Miền Bắc</option>
                      <option value="Miền Trung">Miền Trung</option>
                    </select>
                  </div>
                  <div className="projectUpload-third-row-col-2">
                    <span>Địa phương:</span>
                    <select>
                      <option value="">Vui lòng chọn</option>
                      <option>Hà Nội</option>
                      <option>Hồ Chí Minh</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div className="projectUpload-third-row-col-3">
                    <span>Phát âm:</span>
                    <select>
                      <option value="0">Vui lòng chọn</option>
                      <option value="1">Kém</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khá</option>
                      <option value="4">Tốt</option>
                      <option value="5">Rất tốt</option>
                    </select>
                  </div>
                  <div className="projectUpload-fourth-row-col-1">
                    <span>Truyền cảm:</span>
                    <select>
                      <option value="0">Vui lòng chọn</option>
                      <option value="1">Kém</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khá</option>
                      <option value="4">Tốt</option>
                      <option value="5">Rất tốt</option>
                    </select>
                  </div>
                  <div className="projectUpload-fourth-row-col-2">
                    <span>Tốc độ đọc:</span>
                    <select>
                      <option value="0">Vui lòng chọn</option>
                      <option value="1">Chậm</option>
                      <option value="2">Vừa</option>
                      <option value="3">Nhanh</option>
                    </select>
                  </div>
                  <div className="projectUpload-fourth-row-col-3">
                    <span>Trọng âm:</span>
                    <select>
                      <option value="0">Vui lòng chọn</option>
                      <option value="1">Kém</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khá</option>
                      <option value="4">Tốt</option>
                      <option value="5">Rất tốt</option>
                    </select>
                  </div>
                  <div className="projectUpload-fifth-row-col-1">
                    <span>Số lần chỉnh sửa:</span>
                    <input />
                  </div>
                  <div className="projectUpload-fifth-row-col-2">
                    <span>Hạn hoàn tất:</span>
                    <DatePicker
                      dateFormat="dd-MM-yyyy"
                      yearDropdownItemNumber={50}
                      showYearDropdown
                      scrollableYearDropdown
                      selected={deadline}
                      onChange={(date) => setDeadline(date)}
                    />
                  </div>
                </div>
              </div>
              <div className="projectUpload-card-third">
                <button>Hoàn tất</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUpload;

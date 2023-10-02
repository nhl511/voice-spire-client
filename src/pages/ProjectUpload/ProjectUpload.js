import React, { useState } from "react";
import "./ProjectUpload.css";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
const ProjectUpload = () => {
  const uploadFileDocURL = "/api/Buyers/UploadDocFile";
  const uploadThumbnailURL = "/api/Buyers/UploadImageFile";
  const uploadProjectURL =
    "/api/Buyers/UploadVoiceProject/{BuyerId},{title},{description},{price},{duration},{numberOfEdit},{deadline}";
  const { auth } = useAuth();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [duration, setDuration] = useState();
  const [numberOfEdit, setNumberOfEdit] = useState();
  const [deadline, setDeadline] = useState();
  const [request, setRequest] = useState();
  const [type, setType] = useState();
  const [textLength, setTextLength] = useState();
  const [gender, setGender] = useState();
  const [tone, setTone] = useState();
  const [region, setRegion] = useState();
  const [local, setLocal] = useState();
  const [inspiration, setInspiration] = useState();
  const [stress, setStress] = useState();
  const [pronounce, setPronounce] = useState();
  const [speed, setSpeed] = useState();
  const [demoFile, setDemoFile] = useState();
  const [mainFile, setMainFile] = useState();
  const [thumbnail, setThumbnail] = useState();

  const [nameFileDemo, setNameFileDemo] = useState();
  const [nameFileMain, setNameFileMain] = useState();
  const [nameFileThumbnail, setNameFileThumbnail] = useState();

  const handleUploadFileDemo = async (e) => {
    const headers = {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    };
    const fileDemo = {
      file: e.target.files[0],
    };

    try {
      await axios
        .post(uploadFileDocURL, fileDemo, { headers })
        .then((response) => {
          if (response.status === 200) {
            console.log("demo = 200");
            setDemoFile(response.data);
            setNameFileDemo(e.target.files[0]?.name);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  const handleUploadFileMain = async (e) => {
    const headers = {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    };
    const fileMain = {
      file: e.target.files[0],
    };

    try {
      await axios
        .post(uploadFileDocURL, fileMain, { headers })
        .then((response) => {
          if (response.status === 200) {
            console.log("main = 200");
            setMainFile(response.data);
            setNameFileMain(e.target.files[0]?.name);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  const handleUploadThumbnail = async (e) => {
    const headers = {
      accept: "*/*",
      "Content-Type": "multipart/form-data",
    };
    const fileThumbnail = {
      file: e.target.files[0],
    };

    try {
      await axios
        .post(uploadThumbnailURL, fileThumbnail, { headers })
        .then((response) => {
          if (response.status === 200) {
            console.log("thumbnail = 200");
            setThumbnail(response.data);
            setNameFileThumbnail(e.target.files[0]?.name);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      accept: "text/plain",
      "Content-Type": "application/json-patch+json",
    };

    const infoProject = {
      BuyerId: auth.userId,
      title: title,
      description: description,
      price: price,
      duration: duration,
      numberOfEdit: numberOfEdit,
      deadline: deadline,
      request: request,
      voiceProperty: type,
      textLength: textLength,
      voiceGender: gender,
      voiceTone: Number(tone),
      voiceRegion: region,
      voiceLocal: local,
      voiceInspirational: Number(inspiration),
      voiceStress: Number(stress),
      voicePronuonce: Number(pronounce),
      voiceSpeed: Number(speed),
      linkDocDemo: demoFile,
      linkDocMain: mainFile,
      linkThumbnail: thumbnail,
    };
    console.log(infoProject);
    try {
      await axios
        .post(
          `/api/Buyers/UploadVoiceProject/${auth.userId},${title},${description},${price},${duration},${numberOfEdit},${deadline}`,
          infoProject,
          { headers }
        )
        .then((response) => {
          if (response.status === 200) {
            console.log("upload project = 200");
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

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
                <input
                  placeholder="Tiêu đề"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  placeholder="Mô tả"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  placeholder="Yêu cầu"
                  onChange={(e) => setRequest(e.target.value)}
                />
              </div>
              <div className="projectUpload-card-second">
                <div className="projectUpload-card-grid">
                  <div className="projectUpload-col">
                    <span>Bản demo duyệt giọng nói:</span>
                    <input
                      type="file"
                      id="btn-upload-voice"
                      hidden
                      accept=".doc, .docx, .pdf, .txt"
                      required
                      onChange={handleUploadFileDemo}
                    />
                    <label htmlFor="btn-upload-voice">
                      {nameFileDemo ? nameFileDemo : "Upload"}
                    </label>
                  </div>
                  <div className="projectUpload-col">
                    <span>Văn bản cần đọc:</span>
                    <input
                      type="file"
                      id="btn-upload-doc"
                      hidden
                      accept=".doc, .docx, .pdf, .txt"
                      required
                      onChange={handleUploadFileMain}
                    />
                    <label htmlFor="btn-upload-doc">
                      {nameFileMain ? nameFileMain : "Upload"}
                    </label>
                  </div>
                </div>
                <div className="projectUpload-card-display">
                  <div className="projectUpload-first-row-col-1">
                    <span>Giá:</span>
                    <input
                      type="number"
                      required
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <span>vnđ/phút</span>
                  </div>
                  <div className="projectUpload-first-row-col-2">
                    <span>Loại văn bản:</span>
                    <select onChange={(e) => setType(e.target.value)}>
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
                    <input
                      type="file"
                      id="thumbnail"
                      hidden
                      accept=".png, .jpg, .jpeg"
                      onChange={handleUploadThumbnail}
                    />
                    <label htmlFor="thumbnail">
                      {nameFileThumbnail ? nameFileThumbnail : "Upload"}
                    </label>
                  </div>
                  <div className="projectUpload-second-row-col-1">
                    <span>Giới tính:</span>
                    <select onChange={(e) => setGender(e.target.value)}>
                      <option value="">Vui lòng chọn</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                  <div className="projectUpload-second-row-col-2">
                    <span>Tone giọng:</span>
                    <select onChange={(e) => setTone(e.target.value)}>
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
                    <input
                      type="number"
                      onChange={(e) => setDuration(e.target.value)}
                    />
                    <span>Phút</span>
                  </div>
                  <div className="projectUpload-third-row-col-1">
                    <span>Vùng miền:</span>
                    <select onChange={(e) => setRegion(e.target.value)}>
                      <option value="">Vui lòng chọn</option>
                      <option value="Miền Nam">Miền Nam</option>
                      <option value="Miền Bắc">Miền Bắc</option>
                      <option value="Miền Trung">Miền Trung</option>
                    </select>
                  </div>
                  <div className="projectUpload-third-row-col-2">
                    <span>Địa phương:</span>
                    <select onChange={(e) => setLocal(e.target.value)}>
                      <option value="">Vui lòng chọn</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                  <div className="projectUpload-third-row-col-3">
                    <span>Phát âm:</span>
                    <select onChange={(e) => setPronounce(e.target.value)}>
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
                    <select onChange={(e) => setInspiration(e.target.value)}>
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
                    <select onChange={(e) => setSpeed(e.target.value)}>
                      <option value="0">Vui lòng chọn</option>
                      <option value="1">Chậm</option>
                      <option value="2">Vừa</option>
                      <option value="3">Nhanh</option>
                    </select>
                  </div>
                  <div className="projectUpload-fourth-row-col-3">
                    <span>Trọng âm:</span>
                    <select onChange={(e) => setStress(e.target.value)}>
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
                    <input
                      type="number"
                      onChange={(e) => setNumberOfEdit(e.target.value)}
                    />
                  </div>
                  <div className="projectUpload-fifth-row-col-2">
                    <span>Độ dài văn bản:</span>
                    <input
                      type="number"
                      onChange={(e) => setTextLength(e.target.value)}
                    />
                  </div>
                  <div className="projectUpload-fifth-row-col-3">
                    <span>Hạn hoàn tất:</span>
                    <input
                      type="date"
                      onChange={(e) => setDeadline(e.target.value)}
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

import React from 'react'
import './UploadFileToProjectDetail.css';
import { Link } from 'react-router-dom';

export default function UploadFileToProjectDetail() {
    return (
        <div className='uftpd'>
            <h2 className='uftpd-title'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
            <div className='uftpd-container'>
                <div className='uftpd-card'>
                    <div className='uftpd-info'>
                        <div className='uftpd-description'>
                            <span>Mô tả:</span>
                        </div>
                        <div className='uftpd-text-description'>
                            <span>
                                Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem
                                Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem
                            </span>
                        </div>

                        <div className='uftpd-detail'>
                            <span>Yêu cầu chi tiết:</span>
                        </div>
                        <div className='uftpd-text-detail'>
                            <span>
                                Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                            </span>
                        </div>

                        <div className='uftpd-demo'>
                            <span>Văn bản demo</span>
                        </div>
                        <div className='uftpd-text-demo'>
                            <Link
                                to="/mp3/test.docx"
                                download="Test-Docx-Demo"
                                target="blank"
                            >
                                <button >Download</button>
                            </Link>
                        </div>

                        <div className='uftpd-price'>
                            <span>Giá:</span>
                        </div>
                        <div className='uftpd-text-price'>
                            <span>200,000 vnd</span>
                        </div>

                        <div className='uftpd-duration'>
                            <span>Thời lượng yêu cầu:</span>
                        </div>
                        <div className='uftpd-text-duration'>
                            <span>2 phút</span>
                        </div>

                    </div>
                    <div className='uftpd-upload-file'>
                        <input type="file" name="file" id="uftpd-btn" hidden accept="audio/mpeg" />
                        <label htmlFor="uftpd-btn">
                            Tải lên file ghi âm
                        </label>
                    </div>
                    <div className='uftpd-send'>
                        <button>Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

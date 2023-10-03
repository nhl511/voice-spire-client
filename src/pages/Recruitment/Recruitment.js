import React from 'react'
import './Recruitment.css';

export default function Recruitment() {
    return (
        <div>
            <h2 className='recruitment-title'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
            <div className='recruitment-container'>
                <div className='recruitment-card'>
                    <div className='recruitment-info'>
                        <div className='recruitment-description'>
                            <span>Mô tả:</span>
                        </div>
                        <div className='recruitment-text-description'>
                            <span>
                                Sed ut perspiciatis
                            </span>
                        </div>

                        <div className='recruitment-detail'>
                            <span>Yêu cầu chi tiết:</span>
                        </div>
                        <div className='recruitment-text-detail'>
                            <span>
                                Quis autem vel
                            </span>
                        </div>

                        <div className='recruitment-demo'>
                            <span>Văn bản demo</span>
                        </div>
                        <div className='recruitment-text-demo'>
                            <label htmlFor='recruitment-docx-demo'>Download</label>
                            <input type='file' id='recruitment-docx-demo' hidden />
                        </div>

                        <div className='recruitment-price'>
                            <span>Giá:</span>
                        </div>
                        <div className='recruitment-text-price'>
                            <span>200,000 vnd</span>
                        </div>

                        <div className='recruitment-duration'>
                            <span>Thời lượng yêu cầu:</span>
                        </div>
                        <div className='recruitment-text-duration'>
                            <span>2 phút</span>
                        </div>

                    </div>
                    <div className='recruitment-upload-file'>
                        <input type="file" name="file" id="recruitment-btn" hidden accept="audio/mpeg" />
                        <label htmlFor="recruitment-btn">
                            Tải lên file ghi âm demo
                        </label>
                    </div>
                    <div className='recruitment-button'>
                        <button>Ứng tuyển ngay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import './SendProject.css';
import GradeIcon from '@mui/icons-material/Grade';

export default function SendProject() {
    return (
        <div className='sendProject-center'>
            <div className='sendProject-container'>
                <div className='sendProject-title'>
                    <h2>Gửi dự án đến Trần Thành Công</h2>
                </div>
                <div className='sendProject-card'>
                    <div className='sendProject-card-display'>
                        <div className='sendProject-card-left'>
                            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                alt="avatar" />
                        </div>
                        <div className='sendProject-card-right'>
                            <div className='sendProject-fullname'>
                                <span>Trần Thành Công | </span>
                                <span>Giọng Nam</span>
                            </div>
                            <div className='sendProject-rate'>
                                <span>Đánh giá</span>
                                <div className='sendProject-icon'>
                                    <GradeIcon />
                                    <GradeIcon />
                                    <GradeIcon />
                                    <GradeIcon />
                                    <GradeIcon />
                                    <span>(57)</span>
                                </div>
                            </div>
                            <div className='sendProject-booking'>
                                <span>Lượt booking: </span>
                                <span>102</span>
                            </div>
                            <div className='sendProject-price'>
                                <span>Giá:</span>
                                <span>100,000 vnđ/phút</span>
                            </div>
                        </div>
                        <div className='sendProject-card-left-row-2'>
                            <div className='sendProject-header'>
                                <span>Tiêu đề</span>
                            </div>
                            <div className='sendProject-upload'>
                                <span>Gửi văn bản cần đọc: </span>
                            </div>
                            <div className='sendProject-description'>
                                <span>Mô tả: </span>
                            </div>
                            <div className='sendProject-detail'>
                                <span>Yêu cầu chi tiết:</span>
                            </div>
                            <div className='sendProject-time'>
                                <span>Thời lượng yêu cầu:</span>
                            </div>
                            <div className='sendProject-deadline'>
                                <span>Deadline</span>
                            </div>
                        </div>
                        <div className='sendProject-card-right'>
                            <div className='sendProject-text-header'>
                                <input />
                            </div>
                            <div className='sendProject-text-upload'>
                                <label htmlFor='sendProject-file'>Upload</label>
                                <input type='file' id='sendProject-file' hidden />
                            </div>
                            <div className='sendProject-text-description'>
                                <textarea rows={4} cols={60} />
                            </div>
                            <div className='sendProject-text-detail'>
                                <textarea rows={2} cols={60} />
                            </div>
                            <div className='sendProject-duration'>
                                <input type='number' />
                            </div>
                            <div className='sendProject-text-deadline'>
                                <input type='date' required />
                            </div>
                        </div>
                    </div>
                    <div className='sendProject-button-send'>
                        <button>
                            Gửi
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

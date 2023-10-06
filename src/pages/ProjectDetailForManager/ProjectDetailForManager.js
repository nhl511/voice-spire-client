import React, { useEffect, useState } from 'react'
import './ProjectDetailForManager.css';
import { getVoiceList } from '../../api/axios';
import { Link } from 'react-router-dom';
import ProjectDetailForManagerCard from '../../components/ProjectDetailForManagerCard/ProjectDetailForManagerCard';

export default function ProjectDetailForManager() {
    const [currentPage, setCurrentPage] = useState(1);
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        getVoiceList(currentPage, 10, "new", true)
            .then((json) => setVoices(json))
    }, [currentPage]);

    return (
        <div className='projectDetailForManager'>
            <div>
                <h2 className='projectDetailForManager-titleProject'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
                <div className='projectDetailForManager-container'>
                    <div className='projectDetailForManager-card'>
                        <div className='projectDetailForManager-info'>
                            <div className='projectDetailForManager-description'>
                                <span>Mô tả:</span>
                            </div>
                            <div className='projectDetailForManager-text-description'>
                                <span>
                                    Sed ut perspiciatis unde omnis iste natus
                                    Sed ut perspiciatis unde omnis iste natus
                                    Sed ut perspiciatis unde omnis iste natus
                                    Sed ut perspiciatis unde omnis iste natus
                                    Sed ut perspiciatis unde omnis iste natus
                                    Sed ut perspiciatis unde omnis iste natus
                                    Sed ut perspiciatis unde omnis iste natus

                                </span>
                            </div>

                            <div className='projectDetailForManager-detail'>
                                <span>Yêu cầu chi tiết:</span>
                            </div>
                            <div className='projectDetailForManager-text-detail'>
                                <span>
                                    Quis autem vel eum
                                </span>
                            </div>

                            <div className='projectDetailForManager-demo'>
                                <span>Văn bản demo</span>
                            </div>
                            <div className='projectDetailForManager-text-demo'>
                                <Link
                                    to="/mp3/test.docx"
                                    download="Test-Docx-Demo"
                                    target="blank"
                                >
                                    <button >Download</button>
                                </Link>
                            </div>

                            <div className='projectDetailForManager-main'>
                                <span>Văn bản cần đọc</span>
                            </div>
                            <div className='projectDetailForManager-text-main'>
                                <Link
                                    to="/mp3/test.docx"
                                    download="Test-Docx-Demo"
                                    target="blank"
                                >
                                    <button >Download</button>
                                </Link>
                            </div>

                            <div className='projectDetailForManager-edit'>
                                <span>Số lần chỉnh sửa:</span>
                            </div>
                            <div className='projectDetailForManager-text-edit'>
                                <span>3</span>
                            </div>

                            <div className='projectDetailForManager-price'>
                                <span>Giá:</span>
                            </div>
                            <div className='projectDetailForManager-text-price'>
                                <span>200,000 vnd</span>
                            </div>

                            <div className='projectDetailForManager-duration'>
                                <span>Thời lượng yêu cầu:</span>
                            </div>
                            <div className='projectDetailForManager-text-duration'>
                                <span>2 phút</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projectDetailForManager-title'>
                <h2>Bản chính thức</h2>
            </div>
            <div className='projectDetailForManager-listVoice'>
                {voices.map((voice) => (
                    <ProjectDetailForManagerCard key={voice.voiceDetailId} voice={voice} />
                ))}
            </div>
        </div>
    )
}

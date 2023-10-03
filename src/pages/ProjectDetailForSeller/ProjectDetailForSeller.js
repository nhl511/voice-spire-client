import React, { useEffect, useState } from 'react'
import './ProjectDetailForSeller.css';
import ProjectDetailForSellerCard from '../../components/ProjectDetailForSellerCard/ProjectDetailForSellerCard';
import { getVoiceList } from '../../api/axios';
import { Link } from 'react-router-dom';

export default function ProjectDetailForSeller() {
    const [currentPage, setCurrentPage] = useState(1);
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        getVoiceList(currentPage, 10, "new", true)
            .then((json) => setVoices(json))
    }, [currentPage]);

    return (
        <div>
            <div>
                <h2 className='pdfs-titleProject'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
                <div className='pdfs-container'>
                    <div className='pdfs-card'>
                        <div className='pdfs-info'>
                            <div className='pdfs-description'>
                                <span>Mô tả:</span>
                            </div>
                            <div className='pdfs-text-description'>
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

                            <div className='pdfs-detail'>
                                <span>Yêu cầu chi tiết:</span>
                            </div>
                            <div className='pdfs-text-detail'>
                                <span>
                                    Quis autem vel eum
                                </span>
                            </div>

                            <div className='pdfs-demo'>
                                <span>Văn bản demo</span>
                            </div>
                            <div className='pdfs-text-demo'>
                                <Link
                                    to="/mp3/test.docx"
                                    download="Test-Docx-Demo"
                                    target="blank"
                                >
                                    <button >Download</button>
                                </Link>
                            </div>

                            <div className='pdfs-main'>
                                <span>Văn bản cần đọc</span>
                            </div>
                            <div className='pdfs-text-main'>
                                <Link
                                    to="/mp3/test.docx"
                                    download="Test-Docx-Demo"
                                    target="blank"
                                >
                                    <button >Download</button>
                                </Link>
                            </div>

                            <div className='pdfs-edit'>
                                <span>Số lần chỉnh sửa:</span>
                            </div>
                            <div className='pdfs-text-edit'>
                                <span>3</span>
                            </div>

                        </div>

                        <div className='pdfs-displayGrid'>
                            <div className='pdfs-info'>
                                <div className='pdfs-price'>
                                    <span>Giá:</span>
                                </div>
                                <div className='pdfs-text-price'>
                                    <span>200,000 vnd</span>
                                </div>

                                <div className='pdfs-duration'>
                                    <span>Thời lượng yêu cầu:</span>
                                </div>
                                <div className='pdfs-text-duration'>
                                    <span>2 phút</span>
                                </div>
                            </div>
                            <div className='pdfs-record'>
                                <div className='pdfs-button'>
                                    <button>Nộp bản ghi âm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pdfs-title'>
                <h2>Bản chính thức</h2>
            </div>
            <div className='pdfs-listVoice'>
                {voices.map((voice) => (
                    <ProjectDetailForSellerCard key={voice.voiceDetailId} voice={voice} />
                ))}
            </div>
        </div>
    )
}

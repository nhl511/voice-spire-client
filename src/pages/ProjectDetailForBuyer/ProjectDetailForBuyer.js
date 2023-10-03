import React, { useEffect, useState } from 'react'
import './ProjectDetailForBuyer.css';
import { getVoiceList } from '../../api/axios';
import { Link } from 'react-router-dom';
import ProjectDetailForBuyerCard from '../../components/ProjectDetailForBuyerCard/ProjectDetailForBuyerCard';

export default function ProjectDetailForBuyer() {
    const [currentPage, setCurrentPage] = useState(1);
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        getVoiceList(currentPage, 10, "new", true)
            .then((json) => setVoices(json))
    }, [currentPage]);

    return (
        <div>
            <h2 className='pdfb-titleProject'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
            <div className='pdfb-container'>
                <div className='pdfb-card'>
                    <div className='pdfb-info'>
                        <div className='pdfb-description'>
                            <span>Mô tả:</span>
                        </div>
                        <div className='pdfb-text-description'>
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

                        <div className='pdfb-detail'>
                            <span>Yêu cầu chi tiết:</span>
                        </div>
                        <div className='pdfb-text-detail'>
                            <span>
                                Quis autem vel eum
                            </span>
                        </div>

                        <div className='pdfb-demo'>
                            <span>Văn bản demo</span>
                        </div>
                        <div className='pdfb-text-demo'>
                            <Link
                                to="/mp3/test.docx"
                                download="Test-Docx-Demo"
                                target="blank"
                            >
                                <button >Download</button>
                            </Link>
                        </div>

                        <div className='pdfb-main'>
                            <span>Văn bản cần đọc</span>
                        </div>
                        <div className='pdfb-text-main'>
                            <Link
                                to="/mp3/test.docx"
                                download="Test-Docx-Demo"
                                target="blank"
                            >
                                <button >Download</button>
                            </Link>
                        </div>

                        <div className='pdfb-edit'>
                            <span>Số lần chỉnh sửa:</span>
                        </div>
                        <div className='pdfb-text-edit'>
                            <span>3</span>
                        </div>

                        <div className='pdfb-price'>
                            <span>Giá:</span>
                        </div>
                        <div className='pdfb-text-price'>
                            <span>200,000 vnd</span>
                        </div>

                        <div className='pdfb-duration'>
                            <span>Thời lượng yêu cầu:</span>
                        </div>
                        <div className='pdfb-text-duration'>
                            <span>2 phút</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pdfb-title'>
                <h2>Bản chính thức</h2>
            </div>
            <div className='pdfb-listVoice'>
                {voices.map((voice) => (
                    <ProjectDetailForBuyerCard key={voice.voiceDetailId} voice={voice} />
                ))}
            </div>
        </div>
    )
}

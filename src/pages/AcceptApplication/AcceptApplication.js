import React, { useEffect, useState } from 'react'
import './AcceptApplication.css';
import { getVoiceList } from '../../api/axios';
import AcceptApplicationCard from '../../components/AcceptApplicationCard/AcceptApplicationCard';
import { Link } from 'react-router-dom';

export default function AcceptApplication() {
    const [currentPage, setCurrentPage] = useState(1);
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        getVoiceList(currentPage, 10, "new", true)
            .then((json) => setVoices(json))
    }, [currentPage]);
    return (
        <div>
            <div>
                <h2 className='aa-titleProject'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
                <div className='aa-container'>
                    <div className='aa-card'>
                        <div className='aa-info'>
                            <div className='aa-description'>
                                <span>Mô tả:</span>
                            </div>
                            <div className='aa-text-description'>
                                <span>
                                    Sed ut perspiciatis unde illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                                    Sed ut perspiciatis unde illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                                </span>
                            </div>

                            <div className='aa-detail'>
                                <span>Yêu cầu chi tiết:</span>
                            </div>
                            <div className='aa-text-detail'>
                                <span>
                                    Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                                </span>
                            </div>

                            <div className='aa-demo'>
                                <span>Văn bản demo</span>
                            </div>
                            <div className="aa-text-demo">
                                <Link
                                    to="/mp3/test.docx"
                                    download="Test-Docx-Demo"
                                    target="blank"
                                >
                                    <button >Download</button>
                                </Link>
                            </div>

                            <div className='aa-main'>
                                <span>Văn bản cần đọc</span>
                            </div>
                            <div className="aa-text-main">
                                <Link
                                    to="/mp3/test.docx"
                                    download="Test-Docx-Main"
                                    target="blank"
                                >
                                    <button >Download</button>
                                </Link>
                            </div>
                        </div>
                        <div className='aa-displayGrid'>
                            <div className='aa-info'>
                                <div className='aa-price'>
                                    <span>Giá:</span>
                                </div>
                                <div className='aa-text-price'>
                                    <span>200,000 vnd</span>
                                </div>

                                <div className='aa-duration'>
                                    <span>Thời lượng yêu cầu:</span>
                                </div>
                                <div className='aa-text-duration'>
                                    <span>2 phút</span>
                                </div>
                            </div>
                            <div className='aa-suggest'>
                                <div className='aa-button'>
                                    <button>Xem gợi ý</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aa-titleDemo'>
                <strong>Danh sách demo</strong>
            </div>
            <div className='aa-listVoice'>
                {voices.map((voice) => (
                    <AcceptApplicationCard key={voice.voiceDetailId} voice={voice} />
                ))}
            </div>
        </div>
    )
}

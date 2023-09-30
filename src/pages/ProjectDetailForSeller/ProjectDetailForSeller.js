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
                        <div className='pdfs-display'>
                            <div className='pdfs-card-left'>
                                <div className='pdfs-description'>
                                    <span>Mô tả:</span>
                                </div>
                                <div className='pdfs-detail'>
                                    <span>Yêu cầu chi tiết:</span>
                                </div>
                                <div className='pdfs-demo'>
                                    <span>Văn bản demo</span>
                                </div>
                                <div className='pdfs-main'>
                                    <span>Văn bản cần đọc</span>
                                </div>
                                <div className='pdfs-edit'>
                                    <span>Số lần chỉnh sửa:</span>
                                </div>
                                <div className='pdfs-price'>
                                    <span>Giá:</span>
                                </div>
                                <div className='pdfs-duration'>
                                    <span>Thời lượng yêu cầu:</span>
                                </div>
                            </div>
                            <div className='pdfs-card-right'>
                                <div className='pdfs-text-description'>
                                    <span>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                        aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                                        Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos,
                                        qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
                                        adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                                        quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
                                        atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,
                                        qui officia deserunt
                                    </span>
                                </div>
                                <div className='pdfs-text-detail'>
                                    <span>
                                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                                        quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
                                        atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,
                                        qui officia deserunt
                                    </span>
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
                                <div className='pdfs-text-main'>
                                    <Link
                                        to="/mp3/test.docx"
                                        download="Test-Docx-Demo"
                                        target="blank"
                                    >
                                        <button >Download</button>
                                    </Link>
                                </div>
                                <div className='pdfs-text-edit'>
                                    <span>3</span>
                                </div>
                                <div className='pdfs-displayGrid'>
                                    <div className='pdfs-text-price'>
                                        <span>200,000 vnd</span>
                                        <div className='pdfs-text-duration'>
                                            <span>2 phút</span>
                                        </div>
                                    </div>
                                    <div className='pdfs-button'>
                                        <button>Nộp bản ghi âm</button>
                                    </div>
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

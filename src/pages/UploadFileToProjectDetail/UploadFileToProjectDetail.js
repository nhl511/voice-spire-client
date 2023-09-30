import React from 'react'
import './UploadFileToProjectDetail.css';
import { Link } from 'react-router-dom';

export default function UploadFileToProjectDetail() {
    return (
        <div>
            <h2 className='uftpd-title'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
            <div className='uftpd-container'>
                <div className='uftpd-card'>
                    <div className='uftpd-display'>
                        <div className='uftpd-card-left'>
                            <div className='uftpd-description'>
                                <span>Mô tả:</span>
                            </div>
                            <div className='uftpd-detail'>
                                <span>Yêu cầu chi tiết:</span>
                            </div>
                            <div className='uftpd-demo'>
                                <span>Văn bản demo</span>
                            </div>
                            <div className='uftpd-price'>
                                <span>Giá:</span>
                            </div>
                            <div className='uftpd-duration'>
                                <span>Thời lượng yêu cầu:</span>
                            </div>
                        </div>
                        <div className='uftpd-card-right'>
                            <div className='uftpd-text-description'>
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
                            <div className='uftpd-text-detail'>
                                <span>
                                    Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                                    quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,
                                    qui officia deserunt
                                </span>
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
                            <div className='uftpd-text-price'>
                                <span>200,000 vnd</span>
                            </div>
                            <div className='uftpd-text-duration'>
                                <span>2 phút</span>
                            </div>
                        </div>
                    </div>
                    <div className='uftpd-upload-file'>
                        <input type="file" name="file" id="uftpd-btn" hidden accept="audio/mpeg" />
                        <label htmlFor="uftpd-btn">
                            Tải lên file ghi âm
                        </label>
                    </div>
                    <div className='uftpd-button'>
                        <button>Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

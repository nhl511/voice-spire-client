import React from 'react'
import './Recruitment.css';

export default function Recruitment() {
    return (
        <div>
            <h2 className='recruitment-title'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</h2>
            <div className='recruitment-container'>
                <div className='recruitment-card'>
                    <div className='recruitment-display'>
                        <div className='recruitment-card-left'>
                            <div className='recruitment-description'>
                                <span>Mô tả:</span>
                            </div>
                            <div className='recruitment-detail'>
                                <span>Yêu cầu chi tiết:</span>
                            </div>
                            <div className='recruitment-demo'>
                                <span>Văn bản demo</span>
                            </div>
                            <div className='recruitment-price'>
                                <span>Giá</span>
                            </div>
                            <div className='recruitment-duration'>
                                <span>Thời lượng yêu cầu:</span>
                            </div>
                        </div>
                        <div className='recruitment-card-right'>
                            <div className='recruitment-text-description'>
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
                            <div className='recruitment-text-detail'>
                                <span>
                                    Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                                    quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,
                                    qui officia deserunt
                                </span>
                            </div>
                            <div className='recruitment-text-demo'>
                                <label htmlFor='recruitment-docx-demo'>Download</label>
                                <input type='file' id='recruitment-docx-demo' hidden />
                            </div>
                            <div className='recruitment-text-price'>
                                <span>200,000 vnd</span>
                            </div>
                            <div className='recruitment-text-duration'>
                                <span>2 phút</span>
                            </div>
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

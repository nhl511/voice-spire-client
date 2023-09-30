import React from 'react'
import './ProjectDescriptionToApply.css';

export default function ProjectDescriptionToApply() {
    return (
        <div className='pdta-container'>
            <div className='pdta-card'>
                <div className='pdta-title'>
                    <h2>Quảng cáo kem dưỡng ẩm Hảo Hảo</h2>
                </div>
                <div className='pdta-info'>
                    <div className='pdta-info-left'>
                        <div className='pdta-description'>
                            <span>Mô tả</span>
                        </div>
                        <div className='pdta-detail'>
                            <span>Yêu cầu chi tiết</span>
                        </div>
                        <div className='pdta-gender'>
                            <span>Giới tính giọng đọc</span>
                        </div>
                        <div className='pdta-region'>
                            <span>Vùng miền</span>
                        </div>
                        <div className='pdta-tone'>
                            <span>Tone giọng</span>
                        </div>
                        <div className='pdta-expressive'>
                            <span>Độ truyền cảm</span>
                        </div>
                        <div className='pdta-speed'>
                            <span>Tốc độ đọc</span>
                        </div>
                        <div className='pdta-pronounce'>
                            <span>Khả năng phát âm</span>
                        </div>
                        <div className='pdta-stress'>
                            <span>Thể hiện trọng âm</span>
                        </div>
                        <div className='pdta-voice'>
                            <span>Chất giọng</span>
                        </div>
                        <div className='pdta-nature'>
                            <span>Tính chất</span>
                        </div>
                        <div className='pdta-duration'>
                            <span>Thời lượng yêu cầu</span>
                        </div>
                        <div className='pdta-edit'>
                            <span>Số lần chỉnh sửa</span>
                        </div>
                        <div className='pdta-deadline'>
                            <span>Thời hạn hoàn tất</span>
                        </div>
                        <div className='pdta-price'>
                            <span>Tổng giá</span>
                        </div>
                    </div>
                    <div className='pdta-info-right'>
                        <div className='pdta-text-description'>
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
                        <div className='pdta-text-detail'>
                            <span>
                                Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
                                quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
                                atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa,
                                qui officia deserunt
                            </span>
                        </div>
                        <div className='pdta-text-gender'>
                            <span>Nam</span>
                        </div>
                        <div className='pdta-text-region'>
                            <span>Miền Trung</span>
                        </div>
                        <div className='pdta-text-tone'>
                            <span>Cao</span>
                        </div>
                        <div className='pdta-text-expressive'>
                            <span>Tốt</span>
                        </div>
                        <div className='pdta-text-speed'>
                            <span>Nhanh</span>
                        </div>
                        <div className='pdta-text-pronounce'>
                            <span>Tốt</span>
                        </div>
                        <div className='pdta-text-stress'>
                            <span>Tốt</span>
                        </div>
                        <div className='pdta-text-voice'>
                            <span>Tươi mới</span>
                        </div>
                        <div className='pdta-text-nature'>
                            <span>Quảng cáo</span>
                        </div>
                        <div className='pdta-text-duration'>
                            <span>2 phút</span>
                        </div>
                        <div className='pdta-text-edit'>
                            <span>3 lần</span>
                        </div>
                        <div className='pdta-text-deadline'>
                            <span>25/09/2023</span>
                        </div>
                        <div className='pdta-text-price'>
                            <span>200,000 vnd</span>
                        </div>
                    </div>

                </div>
                <div className='pdta-button'>
                    <button className='pdta-deny'>
                        Từ chối
                    </button>
                    <button className='pdta-accept'>
                        Chấp nhận
                    </button>
                </div>
            </div>
        </div>
    )
}

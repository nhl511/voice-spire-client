import React from 'react';
import QRCode from 'react-qr-code';
import './Payment.css';

export default function Payment() {
  return (
    <div className='payment-background'>
        <div className='payment-center'>
            <div className='payment-card'>
                <div>
                    <h2 className='payment-card-title'>Thanh toán</h2>
                </div>
                <div className='payment-display'>
                    <div className='payment-transaction'>
                        <div className='payment-transaction-title'>
                            <h3>Chi tiết giao dịch</h3>
                        </div>
                        <div className='payment-transaction-detail'>
                            <p className='payment-transaction-price'>Giá chi tiết</p>
                            <p className='payment-transaction-price-text'>20,000 vnđ/phút</p>
                            <p className='payment-transaction-duration'>Thời lượng yêu cầu</p>
                            <p className='payment-transaction-duration-text'>3 phút</p>
                            <p className='payment-transaction-money'>Số tiền thanh toán</p>
                            <p className='payment-transaction-money-text'>60,000 vnđ</p>
                            <p className='payment-transaction-content'>Nội dung chuyển khoản</p>
                            <p className='payment-transaction-content-text'>1239779BAUBD</p>
                        </div>
                        <div className='payment-transaction-note'>
                            <span>*Tại sao tôi phải thanh toán khoản chi phí này?</span>
                            <p>Nhằm đảm bảo quyền lợi cho đôi bên. Khoảng phí này sẽ được
                            hệ thống chuyển đến đối tác của bạn khi dự án kết thúc. Khoảng
                            phí này sẽ được hoàn lại cho ban trong trường hợp đối tác không 
                            thực hiện đúng yêu cầu dự án đề ra hoặc khi dự án hết hạn mà
                            dự án của bạn không đạt được kết quả.</p>
                        </div>
                    </div>
                    <hr className='payment-bar'/>
                    <div className='payment-info'>
                        <div>
                            <h3 className='payment-info-title-bank'>VNPAY</h3>
                            <div className='payment-info-card'>
                                <div className='payment-flex'>
                                    <div className='payment-qrcode-bank'>
                                        <QRCode value='https://www.google.com/' level='L' size={150} />
                                        <p>VoiceSpire</p>
                                   </div>
                                </div>
                                 <div className='payment-info-account'>
                                     <p className='payment-info-account-name'>Trần Thành Công</p>
                                     <p className='payment-info-account-bankNumber'>Tài khoản 123456789</p>
                                     <p className='payment-info-account-bank'>Vietinbank CN Tay Tien Giang - PGD Cai Be</p>
                                     <p className='payment-info-account-school'>Đại học FPT</p>
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='payment-info-title-momo'>MOMO</h3>
                            <div className='payment-info-card-right'>
                                <div className='payment-flex'>
                                    <div className='payment-qrcode-momo'>
                                        <QRCode value='https://www.youtube.com/' level='Q' size={150}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='payment-button-back'>
                    <button>Quay lại</button>
                </div>
            </div>
        </div>
    </div>
  )
}

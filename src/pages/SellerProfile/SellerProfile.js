import React from 'react'
import './SellerProfile.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function SellerProfile() {
    return (
        <div className='sellerProfile-container'>
            <div className='sellerProfile-card'>
                <div className='sellerProfile-image'>
                    <img
                        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                    />
                </div>
                <div className='sellerProfile-fullName'>
                    <span>Trần Thành Công</span>
                    <BorderColorIcon />
                </div>
                <div className='sellerProfile-displayGrid'>
                    <span className='sellerProfile-birthDay'>Ngày sinh</span>
                    <span className='sellerProfile-text-birthDay'>06/05/2001</span>
                    <BorderColorIcon />
                </div>
                <div className='sellerProfile-displayGrid'>
                    <span className='sellerProfile-phone'>Số điện thoại</span>
                    <span className='sellerProfile-text-phone'>0393215170</span>
                    <BorderColorIcon />
                </div>
                <div className='sellerProfile-displayGrid'>
                    <span className='sellerProfile-gender'>Giới tính</span>
                    <span className='sellerProfile-text-gender'>Nam</span>
                </div>
                <div className='sellerProfile-displayGrid'>
                    <span className='sellerProfile-bankNumber'>Số tài khoản</span>
                    <span className='sellerProfile-text-bankNumber'>123456789</span>
                    <BorderColorIcon />
                </div>
                <div className='sellerProfile-displayGrid'>
                    <span className='sellerProfile-bankName'>Ngân hàng</span>
                    <span className='sellerProfile-text-bankName'>Vietinbank</span>
                </div>
                <div className='sellerProfile-displayGrid'>
                    <span className='sellerProfile-accountName'>Tên tài khoản</span>
                    <span className='sellerProfile-text-accountName'>Trần Thành Công</span>
                </div>
                <div className='sellerProfile-displayGrid'>
                    <span className='sellerProfile-address'>Địa chỉ</span>
                    <span className='sellerProfile-text-address'>Quận 9</span>
                    <BorderColorIcon />
                </div>
                <div className='sellerProfile-update'>
                    <button>Cập nhật</button>
                </div>
            </div>
        </div>
    )
}

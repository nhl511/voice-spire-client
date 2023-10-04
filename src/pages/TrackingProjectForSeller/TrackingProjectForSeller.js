import React from 'react'
import './TrackingProjectForSeller.css';
import TrackingProjectForSellerCard from '../../components/TrackingProjectForSellerCard/TrackingProjectForSellerCard';

export default function TrackingProjectForSeller() {
    return (
        <div className='tpfs-background'>
            <div className='tpfs'>
                <div className='tpfs-container'>
                    <div className="tpfs-filter">
                        <input
                            placeholder="Tìm kiếm (Ví dụ: Bảo Long, 1977,...)"
                            className='tpfs-searchBox'
                        />
                        <span className='tpfs-price'>Giá</span>
                        <input type="number" placeholder="Từ" className='tpfs-price-min' />
                        <span className='tpfs-dot'> - </span>
                        <input type="number" placeholder="Đến" className='tpfs-price-max' />
                        <span className='tpfs-length'>Độ dài yêu cầu</span>
                        <input type="number" className='tpfs-length-input' />
                    </div>
                    <button className='tpfs-search'>Tìm kiếm</button>
                </div>
            </div>
            <div className='tpfs-card'>
                <TrackingProjectForSellerCard />
                <TrackingProjectForSellerCard />
                <TrackingProjectForSellerCard />
                <TrackingProjectForSellerCard />
            </div>
        </div>
    )
}

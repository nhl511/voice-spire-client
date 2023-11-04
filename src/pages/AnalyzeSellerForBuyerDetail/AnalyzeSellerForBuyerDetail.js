import React from 'react'
import './AnalyzeSellerForBuyerDetail.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function AnalyzeSellerForBuyerDetail() {
  return (
    <div className='asfbd'>
      <div className='asfbd-container'>
        <div className='asfbd-displayGrid'>
          <div className='asfbd-displayFlex'>
            <span className='asfbd-field'>Giới tính:</span>
            <span className='asfbd-field'>Tính chất:</span>
            <span className='asfbd-field'>Vùng miền:</span>
            <span className='asfbd-field'>Giọng địa phương:</span>
            <span className='asfbd-field'>Tone:</span>
            <span className='asfbd-field'>Độ truyền cảm:</span>
            <span className='asfbd-field'>Tốc độ đọc:</span>
            <span className='asfbd-field'>Phát âm chính xác:</span>
            <span className='asfbd-field'>Thể hiện trọng âm:</span>
            <span className='asfbd-field'>Giá:</span>
            <span className='asfbd-field'>Thời lượng yêu cầu:</span>
            <span className='asfbd-field'>Số lượng từ:</span>
          </div>

          <div className='asfbd-displayFlex'>
            <span className='asfbd-project-name'>Quảng cáo sản phẩm kem dưỡng ẩm Hảo Hảo</span>
            <span className='asfbd-project-info'>Nam</span>
            <span className='asfbd-project-info'>Quảng cáo</span>
            <span className='asfbd-project-info'>Miền Nam</span>
            <span className='asfbd-project-info'>Không yêu cầu</span>
            <span className='asfbd-project-info'>Cao</span>
            <span className='asfbd-project-info'>Tốt</span>
            <span className='asfbd-project-info'>Nhanh</span>
            <span className='asfbd-project-info'>Tốt</span>
            <span className='asfbd-project-info'>Tốt</span>
            <span className='asfbd-project-info'>200,000 vnd</span>
            <span className='asfbd-project-info'>10 phút</span>
            <span className='asfbd-project-info'>237</span>
          </div>

          <div className='asfbd-displayFlex'>
            <span className='asfbd-seller-name'>Trần Thành Công</span>
            <span className='asfbd-project-info'>Nam</span>
            <span className='asfbd-project-info'>Quảng cáo</span>
            <span className='asfbd-project-info'>Miền Nam</span>
            <span className='asfbd-project-info'>TP Hồ Chí Minh</span>
            <span className='asfbd-project-info'>Cao</span>
            <span className='asfbd-project-info'>Tốt</span>
            <span className='asfbd-project-info'>Nhanh</span>
            <span className='asfbd-project-info'>Tốt</span>
            <span className='asfbd-project-info'>Tốt</span>
            <span className='asfbd-project-info'>20,000 vnd</span>
          </div>

          <div className='asfbd-displayFlex'>
            <CheckCircleOutlineIcon className='asfbd-icon' />
            <CheckCircleOutlineIcon className='asfbd-icon' />
            <CheckCircleOutlineIcon className='asfbd-icon' />
            <CheckCircleOutlineIcon className='asfbd-icon' />
            <CheckCircleOutlineIcon className='asfbd-icon' />
            <CheckCircleOutlineIcon className='asfbd-icon' />
            <CheckCircleOutlineIcon className='asfbd-icon' />
          </div>

          <div className='asfbd-displayFlex'>
            <button>Gửi dự án ngay</button>
          </div>
        </div>
      </div>

      <div className='asfbd-button'>
        <button>95%</button>
      </div>
    </div>
  )
}

import React from 'react'
import './TextAnalysis.css';

export default function TextAnalysis() {
  return (
    <div className="textAnalysis-container">
      <div className='textAnalysis-card'>
        <div className='textAnalysis-header'>
          <h2>Phân tích văn bản</h2>
          <div className='textAnalysis-input'>
            <label htmlFor='textAnalyze'>Phân tích văn bản</label>
            <input id='textAnalyze' type='file'
              accept=".doc, .docx, .pdf, .txt" hidden
            />
          </div>
          <p>*Lưu ý: Phân tích này thuộc về AI nên sẽ cho ra nhiều kết quả khác nhau</p>
        </div>
        <div className='textAnalysis-displayGrid'>
          <span className='textAnalysis-field'>Giới tính giọng đọc</span>
          <span className='textAnalysis-field-text'>Nữ</span>

          <span className='textAnalysis-field'>Vùng miền</span>
          <span className='textAnalysis-field-text'>Miền Nam</span>

          <span className='textAnalysis-field'>Tone giọng</span>
          <span className='textAnalysis-field-text'>Cao</span>

          <span className='textAnalysis-field'>Độ truyền cảm</span>
          <span className='textAnalysis-field-text'>Tốt</span>

          <span className='textAnalysis-field'>Tốc độ đọc</span>
          <span className='textAnalysis-field-text'>Nhanh</span>

          <span className='textAnalysis-field'>Khả năng phát âm</span>
          <span className='textAnalysis-field-text'>Tốt</span>

          <span className='textAnalysis-field'>Thể hiện trọng âm</span>
          <span className='textAnalysis-field-text'>Tốt</span>

          <span className='textAnalysis-field'>Chất giọng</span>
          <span className='textAnalysis-field-text'>Tươi mới</span>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './ProjectDetailForManagerCard.css';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function ProjectDetailForManagerCard({ voice }) {
    return (
        <div>
            <div className='pdfmc-display'>
                <div className="pdfmc-card">
                    <div className="pdfmc-avatar">
                        <img
                            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                    </div>
                    <div className="pdfmc-main">
                        <div className="pdfmc-info">
                            <span className="pdfmc-fullName">{voice.voiceSeller.fullname}</span>
                            <span class="pdfmc-gender">{` | Giọng ${voice.voiceGender}`}</span>
                        </div>
                        <div className='pdfmc-createDate'>
                            <span>{moment(voice.createDate).format("DD/MM/yyyy")}</span>
                        </div>
                        <div className="pdfmc-audio">
                            <ReactAudioPlayer src={voice.mainVoiceLink} controls />
                        </div>
                    </div>
                    <div className='pdfmc-demo'>
                        <Link
                            to="/mp3/test.docx"
                            download="Test-Docx-Demo"
                            target="blank"
                        >
                            <button >Download</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='pdfmc-edit'>
                <div className='pdfmc-content'>
                    <span className='pdfmc-requestEdit'>Yêu cầu chỉnh sửa: </span>
                    <span className='pdfmc-contentEdit'>Cần đọc chậm rãi và rõ chữ hơn.</span>
                </div>
            </div>
        </div>
    )
}

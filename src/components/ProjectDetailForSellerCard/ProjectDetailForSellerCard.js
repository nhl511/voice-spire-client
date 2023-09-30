import React from 'react'
import './ProjectDetailForSellerCard.css';
import ReactAudioPlayer from "react-audio-player";
import moment from "moment";
import { Link } from 'react-router-dom';

export default function ProjectDetailForSellerCard({ voice }) {
    const myString = voice.voiceTypes[0].voiceTypeDetail;
    const myString2 = voice.voiceProperties[0].voicePropertyName;

    const myArray = myString.split(", ");
    const myArray2 = myString2.split(", ");
    return (
        <div>
            <div className='uvipc-display'>
                <div className="uvipc-card">
                    <div className="uvipc-avatar">
                        <img
                            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                    </div>
                    <div className="uvipc-main">
                        <div className="uvipc-info">
                            <span className="uvipc-fullName">{voice.voiceSeller.fullname}</span>
                            <span class="uvipc-gender">{` | Giọng ${voice.voiceGender}`}</span>
                        </div>
                        <div className='uvipc-createDate'>
                            <span>{moment(voice.createDate).format("DD/MM/yyyy")}</span>
                        </div>
                        <div className="uvipc-audio">
                            <ReactAudioPlayer src={voice.mainVoiceLink} controls />
                        </div>
                    </div>
                    <div className='uvipc-demo'>
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
            <div className='uvipc-edit'>
                <div className='uvipc-content'>
                    <span className='uvipc-requestEdit'>Yêu cầu chỉnh sửa: </span>
                    <span className='uvipc-contentEdit'>Cần đọc chậm rãi và rõ chữ hơn.</span>
                </div>
            </div>
        </div>
    )
}

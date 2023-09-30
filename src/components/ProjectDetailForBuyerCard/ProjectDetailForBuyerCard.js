import React from 'react'
import './ProjectDetailForBuyerCard.css';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';

export default function ProjectDetailForBuyerCard({ voice }) {
    const myString = voice.voiceTypes[0].voiceTypeDetail;
    const myString2 = voice.voiceProperties[0].voicePropertyName;

    const myArray = myString.split(", ");
    const myArray2 = myString2.split(", ");

    return (
        <div>
            <div className='pdfbc-display'>
                <div className="pdfbc-card">
                    <div className="pdfbc-avatar">
                        <img
                            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            alt="avatar"
                        />
                    </div>
                    <div className="pdfbc-main">
                        <div className="pdfbc-info">
                            <span className="pdfbc-fullName">{voice.voiceSeller.fullname}</span>
                            <span class="pdfbc-gender">{` | Giọng ${voice.voiceGender}`}</span>
                        </div>
                        <div className="pdfbc-audio">
                            <ReactAudioPlayer src={voice.mainVoiceLink} controls />
                        </div>
                    </div>
                    <div className='pdfbc-demo'>
                        <div className='pdfbc-demo-download'>
                            <Link
                                to="/mp3/test.docx"
                                download="Test-Docx-Demo"
                                target="blank"
                            >
                                <button >Download</button>
                            </Link>
                        </div>
                        <div className='pdfbc-demo-accept'>
                            <button>
                                Chấp nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pdfbc-edit'>
                <div className='pdfbc-content'>
                    {/* <span className='pdfbc-requestEdit'>Yêu cầu chỉnh sửa: </span>
                    <span className='pdfbc-contentEdit'>Cần đọc chậm rãi và rõ chữ hơn.</span> */}
                    <input placeholder='Yêu cầu chỉnh sửa...' />
                    <button>
                        Tiếp tục chỉnh sửa
                    </button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './AcceptApplicationCard.css';
import ReactAudioPlayer from "react-audio-player";
import moment from "moment";
import { Link } from 'react-router-dom';

export default function AcceptApplicationCard({ voice }) {
    const myString = voice.voiceTypes[0].voiceTypeDetail;
    const myString2 = voice.voiceProperties[0].voicePropertyName;

    const myArray = myString.split(", ");
    const myArray2 = myString2.split(", ");

    return (
        <div className='aac-display'>
            <div className="aac-card">
                <div className="aac-avatar">
                    <img
                        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                    />
                </div>
                <div className="aac-main">
                    <div className="aac-info">
                        <span className="aac-fullName">{voice.voiceSeller.fullname}</span>
                        <span class="aac-gender">{` | Giọng ${voice.voiceGender}`}</span>
                    </div>
                    <div className='aac-createDate'>
                        <span>{moment(voice.createDate).format("DD/MM/yyyy")}</span>
                    </div>
                    <div className="play">
                        <ReactAudioPlayer src={voice.mainVoiceLink} controls />
                    </div>
                </div>
                <div className="aac-type">
                    {myArray.map((item) => (
                        <span>{item}</span>
                    ))}
                    {myArray2.map((item2) => (
                        <span>{item2}</span>
                    ))}
                </div>
                <div className="aac-stats">
                    <span>Đánh giá</span>
                    <div className="aac-rating">
                        <div className="aac-star">
                            <span>{voice.voiceSeller.rateAvg}</span>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png"
                                alt="star"
                            />
                        </div>
                        <div className="num">
                            <span>(57)</span>
                        </div>
                    </div>
                    <div className="aac-booking">
                        <span>Lượt booking: 102</span>
                    </div>
                    <div className="aac-price">
                        <span>{`Giá: ${voice.price}đ/ 100 từ`}</span>
                    </div>
                    <div className="aac-demo">
                        <Link
                            to="/mp3/test.docx"
                            download="Test-Docx-Demo"
                            target="blank"
                        >
                            <button >Download demo</button>
                        </Link>
                    </div>
                </div>
                <div className="aac-button">
                    <button>Chấp nhận ứng tuyển</button>
                </div>
            </div>
        </div>
    );
}

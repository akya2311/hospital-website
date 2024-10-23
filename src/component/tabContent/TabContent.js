import React, { useState } from 'react';
import './TabContent.css'; // Import your CSS file if needed

const TabContent = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            {/** Home Videos */}
                            {['ACKbsDwzMLk', 'g8S8pAXp-Ag', '3HsmqxKAOK4', 'ciKr95Hvn3E', 'n_R3IMmdVYw'].map(videoId => (
                                <div className="col-lg-6" key={videoId}>
                                    <iframe
                                        width="100%"
                                        height="300"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'profile':
                return (
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            {/** Home Videos */}
                            {['ibrtJA6xPW0'].map(videoId => (
                                <div className="col-lg-6" key={videoId}>
                                    <iframe
                                        width="100%"
                                        height="300"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            {/** Home Videos */}
                            {['SfNTvscZtps', '1Pq9Q6b-WO0'].map(videoId => (
                                <div className="col-lg-6" key={videoId}>
                                    <iframe
                                        width="100%"
                                        height="300"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container p-5">
            <ul className="nav nav-pills mb-3 border-bottom border-2" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className={`nav-link text-primary fw-semibold ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')} type="button" role="tab" aria-controls="pills-home" aria-selected={activeTab === 'home'}>
                        Piles / Hemorrhoids
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link text-primary fw-semibold ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')} type="button" role="tab" aria-controls="pills-profile" aria-selected={activeTab === 'profile'}>
                        Hernia
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link text-primary fw-semibold ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')} type="button" role="tab" aria-controls="pills-contact" aria-selected={activeTab === 'contact'}>
                        Laparoscopic
                    </button>
                </li>
            </ul>
            <div className="tab-content border rounded-3 border-primary p-3 text-danger" id="pills-tabContent">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default TabContent;

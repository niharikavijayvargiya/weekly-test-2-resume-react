import "./Resume.css"

function Resume() {
    return (
        <div className="main">
            <div className="profile">
                <div className="img">
                    <img src="https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_960_720.png" alt="Profile Icon" />
                    <p className="para">Profile</p>
                </div>

                <div className="name">
                    <h1>Niharika Vijayvargiya</h1>
                    <h2>Social Media Marketing Intern at MPL</h2>
                </div>

                <div className="info">
                    <p>
                        I created, edited, and scripted engaging videos for Striker Club’s YouTube channel, showcasing skills in video editing, shooting, and content creation.
                    </p>
                    <ul className="contact-info">
                        <li>Email: <a href="mailto:niharikajivijay@gmail.com">niharikajivijay@gmail.com</a></li>
                        <li>Website: <a href="https://www.linkedin.com/feed/">Linkedin/niharika-vijayvargiya</a></li>
                    </ul>
                </div>
            </div>

            <div className="work">
                <div className="img">
                    <img src="/briefcase.png" alt="Work Icon" />
                    <p className="para">Work</p>
                </div>
                <div className="work-experience">
                    <ul>
                        <li>
                            <h3>Present</h3>
                            <div>
                                <h4>Social Media Marketing Intern At Striker Club, MPL</h4>
                                <p>
                                    I created, edited, and scripted engaging videos for Striker Club’s YouTube channel, showcasing skills in video editing, shooting, and content creation. Within just 1.5 months, I significantly increased the subscriber count from 2k to 9.12k, demonstrating effective audience engagement strategies. I implemented successful content strategies and collaborated with key influencers in the industry, contributing to Striker Club’s establishment as a leading brand in sports and entertainment. I produced over 40 high-quality videos that received positive feedback from viewers, further enhancing the channel’s reputation and engagement. Additionally, I managed content effectively and built strong relationships with influencers, showcasing expertise in content creation, influencer marketing, and audience engagement.
                                </p>
                            </div>
                        </li>
                        <li>
                            <h3>2021</h3>
                            <div>
                                <h4>HR at Crossroad Classes</h4>
                                <p>
                                    I successfully managed the end-to-end recruitment process for Cross Road Classes, including resume sorting, conducting telephonic interviews, and coordinating interview schedules, resulting in the hiring of skilled faculties. Demonstrating strong analytical and problem-solving skills, I effectively resolved co-worker and student complaints, maintaining a positive and harmonious work environment. Additionally, I efficiently handled the maintenance of fees and salary structures, ensuring accurate and timely payments that contributed to smooth financial operations within the organization. Through professional and courteous communication with co-workers, students, and external stakeholders, I showcased excellent verbal and written communication skills essential for effective HR duties.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="skill">
                <div className="img">
                    <img src="/skill.png" alt="Skills Icon" />
                    <p className="para">Skills & Samples</p>
                </div>
                <div className="d1">
                    <p>Writing: 🔵🔵🔵🔵🔵</p>
                    <p>Editing: 🔵🔵🔵</p>
                    <p>SEO: 🔵🔵🔵🔵</p>
                    <p>Social Media: 🔵🔵🔵🔵</p>
                </div>
                <div className="d2">
                    <div>
                        <h3>Zapier</h3>
                        <p>Organize Your Life with the Agile Method</p>
                    </div>
                    <div>
                        <h3>Spoke</h3>
                        <p>Is 40 Hr a week too much? Here's what history and science say.</p>
                    </div>
                    <div>
                        <h3>nDash</h3>
                        <p>Why Generalist Writers Lead to Lost Profits in B2B Tech</p>
                    </div>
                </div>
            </div>

            <div className="imgdiv">
                <img src="/bulb.png" alt="Bulb Icon" />
                <img src="/suitcase.png" alt="Suitcase Icon" />
                <img src="/laptop.png" alt="Laptop Icon" />
                <img src="/megaphone.png" alt="Megaphone Icon" />
                <img src="https://cdn.pixabay.com/photo/2020/07/01/09/24/icon-5358993_1280.png" alt="External Icon" />
            </div>
        </div>
    );
}

export default Resume;

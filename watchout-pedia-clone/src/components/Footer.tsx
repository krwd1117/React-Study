import "./Footer.css";

function Footer() {
    return (
        <footer className="base">
            <section className="section">
                <section className="statistics">
                    <span className="summary">
                        지금까지&nbsp;
                        <em className="emphasis">
                            *644, 934, 343 개의 평가가{" "}
                        </em>
                        &nbsp;쌓였습니다.
                    </span>
                </section>
                <section className="container">
                    <div className="contentWrapper">
                        <div className="left">
                            <ul className="termAndPolicy">
                                <li className="termAndPolicyItem">
                                    서비스 이용약관
                                </li>
                                <li className="termAndPolicyItem">
                                    개인정보 처리방침
                                </li>
                                <li className="termAndPolicyItem">회사 정보</li>
                            </ul>
                        </div>
                        <div className="right" />
                    </div>
                </section>
            </section>
        </footer>
    );
}

export default Footer;

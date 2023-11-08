import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";

// const SearchResultWrapper = styled.div`
//     position: absolute;
//     top: 60px;
//     left: 0;
//     z-index: 9999999;
//     background-color: #fff;
//     width: 100%;
//     border-radius: 8px;
//     box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
//     max-height: 480px;
//     overflow-y: scroll;
// `;

// const SearchResultListItem = styled.li`
//     padding: 4px 6px;
//     box-sizing: border-box;
//     color: #222;
//     font-size: 16px;
//     width: 100%;
//     height: 24px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     &:hover {
//         background-color: #eee;
//     }
// `;

// const SearchResultList = styled.ul`
//     list-style: none;
//     margin: 0;
//     padding: 0;
// `;

export default function Header() {
    const handleKeyword = () => {};

    return (
        <div className="base">
            <nav className="navigation">
                <div className="menuListWrapper">
                    <ul className="menuList">
                        <li className="menu">
                            <a className="link" href="/">
                                <h1 className="textLogo">
                                    <span className="primary"> WATCH OUT </span>
                                    <span> PEDIA </span>
                                </h1>
                            </a>
                        </li>
                        <li className="menu">
                            <a className="link" href="/">
                                <button className="menuButton">영화</button>
                            </a>
                        </li>
                        <li className="menu">
                            <a className="link" href="/tv">
                                <button className="menuButton">TV 프로그램</button>
                            </a>
                        </li>
                        <li className="searchMenu">
                            <div className="searchContainer">
                                <div className="searchFormWrapper">
                                    <form className="searchForm">
                                        <label className="searchLabel">
                                            <AiOutlineSearch />
                                            <input
                                                className="searchInput"
                                                placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                                                onChange={handleKeyword}
                                            />
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li className="menu">
                            <button className="signIn">로그인</button>
                        </li>
                        <li className="menu">
                            <button className="signUp">회원가입</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

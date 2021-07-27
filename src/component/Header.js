import { Link } from "react-router-dom";

export default function Header() {
    return <div className="header clearFix">
        <h1 className="headerH1">
            <Link to="/">최근 설문지</Link>
        </h1>
        <a href="#x" id="addVote"> 설문삭제 </a>
    </div>

    
}
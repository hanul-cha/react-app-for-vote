import { Link } from "react-router-dom";

export default function Header() {
    return <div className="header clearFix">
        <h1 className="headerH1">
            <Link to="/">최근 투표리스트</Link>
        </h1>
        <Link to="/delete_vote" id="addVote"> 투표삭제 </Link>
    </div>

    
}
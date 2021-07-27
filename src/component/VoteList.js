import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';/* 이거 만들어야함 */

export default function VoteList() {
    const lists = useFetch("http://localhost:3001/lists");

    return (
        <>
            <Link to="/create_vote" className="createVote">
                <span></span>
                <span></span>
            </Link>
            <ul>
                {lists.map(list => (
                    <li key={list.id}>
                        <Link to={`/list/${list.title}`}>{list.title}</Link>
                        
                    </li>
                ))}
            </ul>
        </>
    )
}
import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';/* 이거 만들어야함 */

export default function VoteList() {
    const vote = useFetch("http://localhost:3001/vote");
    
    let removeNan = (users) => {
        return (0 < users) ? 100/users : 0 ;
    }
    
    return (
        <>
            <Link to="/create_vote" className="createVote">
                <span></span>
                <span></span>
            </Link>
            <ul className="vote_List">
                {vote.map(votes => (
                    <li key={votes.id} className="voteListLi">
                        <Link to={`/list/${votes.title}`}>
                            <div className="voteWrapper">
                                <div className="voteListText">
                                    <h2>
                                        {votes.title}
                                    </h2>
                                    <h3>
                                        {votes.text}
                                    </h3>
                                </div>
                                <div className="personOfVoted">
                                    투표인원  <span>{votes.user}</span>명
                                </div>
                            </div>
                        </Link>
                        
                        <div className="show_Stats">
                            <ul>
                                {votes.voteList.map(vs => (
                                    <li className="content_list" key={vs.id}>
                                        <h4>{vs.content} {Math.round(Number(vs.number_of_votes * removeNan(votes.user))) + "%"}</h4>
                                        
                                        <div className="contentlistBack" style={{
                                            width: vs.number_of_votes * removeNan(votes.user) + "%"
                                            }}>

                                        </div>
                                    </li>
                                    
                                ))}
                            </ul>
                        </div>{/* show_Stats */}
                    </li>
                ))}
            </ul>{/* vote_List */}
        </>
    )
}
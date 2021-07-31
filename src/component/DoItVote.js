import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

export default function DoItVote() {
    const { title }  = useParams();
    const voteTitle = useFetch(`http://localhost:3001/vote?title=${title}`);
    let firstVoteList = [
            
    ]
    

    function onSubmit(e) {
        e.preventDefault();
        
        const doVoteLists = document.getElementsByName("doVoteList");
        /* let Listschecked = doVoteLists.value; */
        for(let i=0;i<doVoteLists.length;i++){
            console.log(doVoteLists[i].checked);
            
        }

        /* function addVoteNum() {
            for(let i=0;i<=doVoteLists.length;i++){
                
            }
            for(let i=0;i<addInput.length;i++){
                numberOfVotes[i] = {
                    id: i+1,
                    content: addInput[i].value,
                    number_of_votes: 0,
                }
                
                
            }
        } */
        

        fetch(`http://localhost:3001/vote?title=${title}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...voteTitle,
                user: 1,
            }),
        }).then(res => {
            if(res.ok) {
                alert("반영되었습니다!");
                    
            }
        })
    }
    

    return (
        <>
            {voteTitle.map((vote) => (
                <div className="do_vote" key={vote.id}>
                    <h2>{vote.title}</h2>
                    <form onSubmit={onSubmit}>
                        {vote.voteList.map((lists) => (
                            <label key={lists.id}><input type="checkbox" name="doVoteList"  />{lists.content}</label>
                        ))}
                        <button>
                            투표하기
                        </button>
                    </form>
                </div>
            ))}
        </>  
    )
    /* useFetch로 가져와서(배열로 할당되어있기때문) map을 사용해야함 */
    
}

/* 여기엔 투표를 할수 있는 부분을 실질적으로 만들어줄것임 Day컴포넌트 참고 */
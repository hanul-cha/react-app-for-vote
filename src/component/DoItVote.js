import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

export default function DoItVote() {
    const title  = useParams().title;
    let voteTitle = useFetch(`http://localhost:3001/vote?title=${title}`);
    
    function onSubmit(e) {
        e.preventDefault();
        
        let firstVoteList = 
            /* {
                "id": 1,
                "content": "하나",
                "number_of_votes": 0
              },
              {
                "id": 2,
                "content": "둘",
                "number_of_votes": 0
              } */
              voteTitle[0].voteList
        ;
        
        
        
        const doVoteLists = document.getElementsByName("doVoteList");
        for(let i=0;i<doVoteLists.length;i++){
            console.log(doVoteLists[i].checked);
            if(doVoteLists[i].checked){
                firstVoteList[i].number_of_votes += 1;
                
                
            }else{
               /*  firstVoteList[i] = { 
                    number_of_votes: voteTitle[0].voteList[i],
                } */
            }
        }

        console.log(firstVoteList);
        
        
        fetch(`http://localhost:3001/vote/${voteTitle[0].id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...voteTitle[0],
                user: voteTitle[0].user += 1,
                voteList: firstVoteList
            }),
        }).then(res => {
            if(res.ok) {
                alert("반영되었습니다!");
                
            }
        })/* db에 반영 */
    }
    

    return (
        <>
            {voteTitle.map((vote) => (
                <div className="do_vote" key={vote.id}>
                    <h2>{vote.title}</h2>
                    <form onSubmit={onSubmit}>
                        {vote.voteList.map((lists) => (
                            <label key={lists.id}><input type="radio" name="doVoteList" />{lists.content}</label>
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
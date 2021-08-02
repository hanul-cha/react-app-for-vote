import { useHistory, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

export default function DoItVote() {
    const title  = useParams().title;
    const history = useHistory();
    let voteTitle = useFetch(`http://localhost:3001/vote?title=${title}`);
    
    function onSubmit(e) {
        e.preventDefault();
        const doVoteLists = document.getElementsByName("doVoteList");

        let firstVoteList = voteTitle[0].voteList;
        let bol = false;

        for(let j=0;j<doVoteLists.length;j++){
            if(doVoteLists[j].checked){
                bol = true
            }
        }/* 체그유무를 비교해서 불린타입에 맞게 이벤트 실행 */

        if(bol){


            for(let i=0;i<doVoteLists.length;i++){
                console.log(doVoteLists[i].checked);
                if(doVoteLists[i].checked){
                    firstVoteList[i].number_of_votes += 1;   
                }
    
            }
            
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
                    history.push("/")
                }
            })/* db에 반영 */


        }else{
            alert("하나이상 체크해야합니다");
        }

    }/* 서브밋 이벤트 종료 */
    
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

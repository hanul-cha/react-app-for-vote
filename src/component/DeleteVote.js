import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";

export default function DeleteVote() {
    const vote = useFetch("http://localhost:3001/vote");
    const history = useHistory();

    function deleteConfirm(selectVotes) {
        if(window.confirm("정말 삭제하시겠습니까?")){
            fetch(`http://localhost:3001/vote/${selectVotes.id}`, {
                method : "DELETE",
            }).then(res => {
                if(res.ok){
                    alert("삭제되었습니다.");
                    history.push("/react-app-for-vote");
                }
            });
            /* console.log(selectVotes.id) */
            /* 삭제구문 */
        }
    }
    
    return (
        <>
            <div>
                <ul className="deletUl">
                    {vote.map(votes => (
                        <li key={votes.id} className="clearFix">
                            <h2>{votes.title}</h2>
                            <button onClick={ () => deleteConfirm(votes) }>삭제</button>
                        </li>
                        
                    ))}
                </ul>
            </div>
        </>
    )
}
/* jsx에서 인자를 넘겨주는 방법은 화살표 함수를 이용하는것이다 (괄호를 넣은 함수는 당연하게도 즉시 실행된다) */
/* 삭제 할수 있게 구현 - 존재 하는 모든 투표리스트를 불러와서 선택하면 삭제 되게 할것임 */
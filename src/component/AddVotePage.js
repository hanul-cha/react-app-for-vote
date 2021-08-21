import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function AddVotePage() {
    let numberOfVotes = [

    ]/* 초기값 빈배열 */
    const history = useHistory();

    const titleRef = useRef(null);
    const textRef = useRef(null);

    function onSubmit(e) {
        e.preventDefault();
        let addInput = document.querySelectorAll('.add_input input');
        
        for(let i=0;i<addInput.length;i++){
            numberOfVotes[i] = {
                id: i+1,
                content: addInput[i].value,
                number_of_votes: 0,
            }
        }
        
        
        
        
        

        fetch("http://localhost:3001/vote", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleRef.current.value,
                text: textRef.current.value,
                voteList: numberOfVotes,
                user: 0,
            }),
        }).then(res => {
            if(res.ok) {
                alert("새로운 투표가 생성 되었습니다!");
                history.push("/");
            }
        })
    }

    


    function addVoteIndex() {/* 항목을 추가하는 함수 */
        const newIndex = document.createElement("input");
        const addInput = document.getElementsByClassName('add_input');
        newIndex.type = "text";
        newIndex.placeholder = "항목입력";
        
        addInput[0].appendChild(newIndex);
        
    }

    return (
        <form className="addVoteForm" onSubmit={onSubmit}>
            <h2>투표만들기</h2>
            <div className="input_area">
                <input type="text" placeholder="투표 제목" ref={titleRef} required />
            </div>
            <div className="input_area text_area">
                <label>텍스트</label>
                <input type="text" placeholder="멤버에게 전할 소식을 남겨보세요" ref={textRef} required />
            </div>
            <div className="add_input input_area">
                <label>투표항목</label>
                <input type="text" placeholder="항목입력" required /> {/* 초기 input 추가할지 아님 처음부터 없앨지 고민해봐야함 */}
                <input type="text" placeholder="항목입력" required />
            </div>
            <div className="addVoteList" onClick={addVoteIndex}>
                <span></span>
                <span></span>
            </div>
            <button className="voteCreateBtn">
                만들기
            </button>
        </form>
    )
}

/* 값들을 db에 보내주기 */
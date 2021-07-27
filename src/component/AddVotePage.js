export default function AddVotePage() {
    function addVoteIndex() {
        const newIndex = document.createElement("input");
        const addInput = document.getElementsByClassName('add_input');
        newIndex.type = "text";
        newIndex.placeholder = "항목입력";
        console.log(addInput);
        addInput[0].appendChild(newIndex);
    }

    return (
        <form className="addVoteForm">
            <h2>투표만들기</h2>
            <div className="input_area">
                <input type="text" placeholder="투표 제목" />
            </div>
            <div className="input_area text_area">
                <label>텍스트</label>
                <input type="text" placeholder="멤버에게 전할 소식을 남겨보세요" />
            </div>
            <div className="add_input input_area">
                <label>투표항목</label>
                <input type="text" placeholder="항목입력" />
                <input type="text" placeholder="항목입력" />
                <input type="text" placeholder="항목입력" />
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
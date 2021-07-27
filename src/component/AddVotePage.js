export default function AddVotePage() {
    return (
        <form>
            <div className="input_area">
                <label>제목</label><br />
                <input type="text" placeholder="제목을 입력해주세요" />
            </div>
            <div className="input_area">
                <label>텍스트</label><br />
                <input type="text" placeholder="멤버에게 전할 소식을 남겨보세요" />
            </div>
            <div className="input_area">
                <label>투표항목</label><br />
                <input type="text" placeholder="항목입력" /><br />
                <input type="text" placeholder="항목입력" /><br />
                <input type="text" placeholder="항목입력" />
            </div>
            <button>
                만들기
            </button>
        </form>
    )
}
# VOTE APP #
### using react project ###

> 투표함을 언제든 만들수 있고 삭제도 자유로우며 DB에 반영되어 투표현황을 볼수 있게 제작하는것이 목표입니다.
+ 21.07.28 
    - 더미데이터로 리스트구현 완료
    - form양식 생성
    - sumbit이벤트  (DB로 성공적으로 전달)  *number_of_votes 값이 0일땐 NaN으로 노출되는 이슈가 있음 0이상이면 잘 노출됨 

+ 21.07.31
    - user값이 0일때 NaN으로 노출되던 이슈 해결(백분률로 표현하기 위해 있던 식에 0이 들어가서 오류가 생기던걸 if문으로 1이상의 값이 지정됬을때에만 식을 표현하게 바꿈으로서 해결) 
    - useHistory를 이용, 투표를 생성하고 첫페이지로 돌아갑니다.
    - 투표 결과 반영페이지 만드는중...
+ 21.08.01
    - 투표결과 반영기능 구현완료, 체크를 하나라도 안했을때 경고창을 띄워주게 구현
    - 투표페이지 css만드는중...
+ 21.08.02
    - 투표페이지 css완료
    - 삭제 기능 구현중

### How to use ###

리액트 라우터로 구현했습니다 설치가 필요합니다.
```
npm install react-router-dom
```
json-server REST api가 필요합니다. 
```
npm intall -g json-server (글로벌로 설치해줍니다.)
```
json서버 포트는 3001로 사용해줍니다.
```
json-server --watch ./src/db/data.json --port 3001
```
npm은 어떤 포트를 사용해도 무방합니다.







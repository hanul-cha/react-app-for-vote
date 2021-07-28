# VOTE APP #
### project using react ###

> 투표함을 언제든 만들수 있고 삭제도 자유로우며 DB에 반영되어 투표현황을 볼수 있게 제작하는것이 목표입니다.
+ 21.07.28 
    - 더미데이터로 리스트구현 완료
    - form양식 생성
    - sumbit이벤트  (DB로 성공적으로 전달)  *number_of_votes 값이 0일땐 NaN으로 노출되는 이슈가 있음 0이상이면 잘 노출됨 

### How to use ###

json-server REST api가 필요합니다. 
```
npm intall -g json-server (글로벌로 설치해줍니다.)
```
json서버 포트는 3001로 사용해줍니다.
```
json-server --watch ./src/db/data.json --port 3001
```
npm은 어떤 포트를 사용해도 무방합니다.



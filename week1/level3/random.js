const members = require('./member').member;

/** Number.parseInt() -> 정수로 변환**/
/**
 * 출력
 [ { name: '김민주', part: 'Server', status: 'OB', gender: '여' },
  { name: '이영현', part: 'Server', status: 'OB', gender: '여' },
  { name: '이예진', part: 'Server', status: 'YB', gender: '여' },
  { name: '홍혜진', part: 'Server', status: 'YB', gender: '여' },
  { name: '강준수', part: 'Server', status: 'YB', gender: '남' } ]
[ { name: '최정훈', part: 'Server', status: 'OB', gender: '여' },
  { name: '박주은', part: 'Server', status: 'OB', gender: '여' },
  { name: '김기찬', part: 'Server', status: 'YB', gender: '남' },
  { name: '박진호', part: 'Server', status: 'YB', gender: '남' },
  { name: '윤가인', part: 'Server', status: 'YB', gender: '여' } ]
[ { name: '이현준', part: 'Server', status: 'OB', gender: '여' },
  { name: '김채림', part: 'Server', status: 'OB', gender: '여' },
  { name: '양재욱', part: 'Server', status: 'YB', gender: '남' },
  { name: '임찬기', part: 'Server', status: 'YB', gender: '남' },
  { name: '한승아', part: 'Server', status: 'YB', gender: '여' } ]
[ { name: '신민상', part: 'Server', status: 'OB', gender: '남' },
  { name: '최정재', part: 'Server', status: 'OB', gender: '남' },
  { name: '강효원', part: 'Server', status: 'OB', gender: '여' },
  { name: '박상수', part: 'Server', status: 'YB', gender: '남' },
  { name: '송정훈', part: 'Server', status: 'YB', gender: '남' },
  { name: '이현상', part: 'Server', status: 'YB', gender: '남' } ]
 */

const membersOB = members.filter((member) => member.status === "OB");
const membersYB = members.filter((member) => member.status === "YB");

const shuffledOB = membersOB
  .map(a => ([Math.random(),a]))
  .sort((a,b) => a[0]-b[0])
  .map(a => a[1])

  const shuffledYB = membersYB
  .map(a => ([Math.random(),a]))
  .sort((a,b) => a[0]-b[0])
  .map(a => a[1])

  const gcd = (a,b) => {
    if (b===0) return a;
    return gcd(b, a%b);
  }

  const  len = gcd(membersOB.length, membersYB.length);
  const data = Math.max(membersOB.length/len, membersYB.length/len);

  if (data == membersOB.length/len){
    for (var j = 1; j <=data; j++){
      result=[]
      for (var i =0; i<Number.parseInt(membersYB.length/len); i++ ){
        if (shuffledYB[i] === undefined){
          break
        }  
        if (j==data&& shuffledYB.length>Number.parseInt(membersYB.length/len)){
          while(shuffledYB.length>0){
            result.push(shuffledYB.pop())
          }
        }
        else{
          result.push(shuffledYB.pop());
        }
      }
      for (var i =0; i<len; i++ ){
        result.push(shuffledOB.pop());
        }
      console.log(result)
    }
  }

  else if (data == membersYB.length/len){
    for (var j = 1; j <=data; j++){
      result=[]
      for (var i =0; i<Number.parseInt(membersOB.length/data); i++ ){
        if (shuffledOB[i] === undefined){
          break
        }  
        if (j==data&& shuffledOB.length>Number.parseInt(membersOB.length/data)){
          while(shuffledOB.length>0){
            result.push(shuffledOB.pop())
          }
        }
        else{
          result.push(shuffledOB.pop());
        }
        }
      for (var i =0; i<len; i++ ){
        result.push(shuffledYB.pop());
        }
      console.log(result)
    }
  }

  else {
    for (var j = 1; j <=data; j++){
      result=[]
      for (var i =0; i<len; i++ ){
        result.push(shuffledOB.pop());
      }
      for (var i =0; i<len; i++ ){
        result.push(shuffledYB.pop());
        }
      console.log(result)
  }
}

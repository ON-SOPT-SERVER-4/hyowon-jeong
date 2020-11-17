const member = require('./member').members;
const team4 = function(info) {
  info.forEach(member => {
    const { name, address, age, hobby, no } = member
    console.log(`이름 : ${name}, 사는 곳: ${address}, 나이: ${age}, 취미: ${hobby}, 27th: ${no}\n`);
  });
}

return team4(member);

//출력
// 이름 : 홍혜림, 사는 곳: 오리역, 나이: 23, 취미: 집콕하기, 27th: YB

// 이름 : 송정우, 사는 곳: 분당, 나이: 23, 취미: 농구보기, 27th: YB

// 이름 : 류세화, 사는 곳: 교대역, 나이: 23, 취미: 유툽보기, 27th: OB

// 이름 : 정효원, 사는 곳: 성신여대입구, 나이: 24, 취미: 친구만나기, 27th: OB

// 이름 : 이영은, 사는 곳: 건대입구, 나이: 24, 취미: 운동하기, 27th: YB

// 이름 : 김우영, 사는 곳: 서울대입구역, 나이: 24, 취미: 피아노 치기, 27th: YB

// 이름 : 이현종, 사는 곳: 인천, 나이: 24, 취미: 이야기 들어주기, 27th: YB
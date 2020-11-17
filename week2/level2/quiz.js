const members = require('./member');
/**
 * 단, 모든 promise를 반환하는 함수는 setTimeout을 이용해서 비동기적으로 작동
 */

/**
 * 여자멤버 필터링
 */
function getFemale(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = members.filter(item => item.gender === '여')
      resolve(data);
    }, 500)
  })
}

/**
 * YB멤버 필터링
 */
function getYB(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
        const data = members.filter(item => item.status === 'YB')
        resolve(data);
    }, 500)
  })
}

/**
 * iOS멤버 필터링
 */
function getiOS(members) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = members.filter(item => item.part === 'iOS')
      resolve(data);
    }, 500)
  })
}

getFemale(members)
  .then(members => getYB(members))
  .then(members => getiOS(members))
  .then(members => console.log(members))

  /**
   * 출력
   * [ { name: '신지한', part: 'iOS', status: 'YB', gender: '여' },
        { name: '최영훈', part: 'iOS', status: 'YB', gender: '여' } ]
   */
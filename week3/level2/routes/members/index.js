const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
let membersDB = require('../../modules/members');

/** 멤버를 생성 */
router.post('/', (req, res) => {
  const { name, part, age } = req.body;

  if (!name || !part || !age) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  const idx = membersDB[membersDB.length - 1].idx + 1;
  membersDB.push({ idx, name, part, age })
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_CREATE_SUCCESS, membersDB));
});

/**
 * 출력
 {
    "status": 200,
    "success": true,
    "message": "회원 생성 성공",
    "data": [
        {
            "idx": 0,
            "name": "최영훈",
            "part": "서버",
            "age": 26
        },
        {
            "idx": 1,
            "name": "이수진",
            "part": "서버",
            "age": 23
        },
        {
            "idx": 2,
            "name": "오승재",
            "part": "서버",
            "age": 23
        },
        {
            "idx": 3,
            "name": "정효원",
            "part": "server",
            "age": 24
        }
    ]
}
 */

/** 모든 멤버 조회 */
router.get('/', (req, res) => {
  const members = membersDB;
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_ALL_SUCCESS, members));
});

/**
 * 출력 -> DB연동이 아니라서 항상 초기화
 {
    "status": 200,
    "success": true,
    "message": "전체 회원 조회성공",
    "data": [
        {
            "idx": 0,
            "name": "최영훈",
            "part": "서버",
            "age": 26
        },
        {
            "idx": 1,
            "name": "이수진",
            "part": "서버",
            "age": 23
        },
        {
            "idx": 2,
            "name": "오승재",
            "part": "서버",
            "age": 23
        }
    ]
}
 */

/** 특정 멤버 조회 */
router.get('/:idx', (req, res) => {
  const idx  = req.params.idx;

  if( !idx ) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const member = membersDB.find(member => member.idx == idx);

  if (member === undefined) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_SUCCESS, member));
})

/**
 * 출력 -> 1번 조회
 {
    "status": 200,
    "success": true,
    "message": "회원 조회 성공",
    "data": {
        "idx": 1,
        "name": "이수진",
        "part": "서버",
        "age": 23
    }
}
 */

/** 특정 멤버 삭제 */
router.delete('/:idx', (req, res) => {
  const idx  = req.params.idx;

  if( !idx ) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const member = membersDB.filter(member => member.idx == idx);

  if (member.length === 0) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }
  membersDB = membersDB.filter(member => member.idx != idx);
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_DELETE_SUCCESS, membersDB));
});

/**
 * 출력 -> 1번 삭제
 {
    "status": 200,
    "success": true,
    "message": "회원 삭제 성공",
    "data": [
        {
            "idx": 0,
            "name": "최영훈",
            "part": "서버",
            "age": 26
        },
        {
            "idx": 2,
            "name": "오승재",
            "part": "서버",
            "age": 23
        }
    ]
}
 */

/** 특정 멤버 정보 수정 */
router.put('/:idx', (req, res) => {
  const idx = req.params.idx;
  const { name, part, age } = req.body;

  if( !idx ) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  if (!name || !part || !age) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const memberIdx = membersDB.findIndex(member => member.idx == idx);

  if(memberIdx === -1) {
    return  res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  membersDB[memberIdx] = { idx: Number.parseInt(idx), name, part, age}
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_UPDATE_SUCCESS, membersDB));  
});

/**
 * 출력 -> 2번의 name을 수정
 {
    "status": 200,
    "success": true,
    "message": "회원 수정 성공",
    "data": [
        {
            "idx": 0,
            "name": "최영훈",
            "part": "서버",
            "age": 26
        },
        {
            "idx": 1,
            "name": "이수진",
            "part": "서버",
            "age": 23
        },
        {
            "idx": 2,
            "name": "류세화",
            "part": "서버",
            "age": 23
        }
    ]
}
 */
module.exports = router;
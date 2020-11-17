const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.post('/signup', userController.signup); //회원가입
/**
 * 출력
 {
    "status": 200,
    "success": true,
    "message": "회원가입성공",
    "data": "hyowon"
}

{
    "status": 400,
    "success": false,
    "message": "존재하는 ID 입니다."
}

{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다."
}
 */

router.post('/signin', userController.signin); //로그인

/**
 * 출력
  {
    "status": 200,
    "success": true,
    "message": "로그인 성공",
    "data": "dudgns3tp"
  }

 {
    "status": 400,
    "success": false,
    "message": "로그인 실패"
}

 {
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다."
}
 */

router.get('/', userController.getUserAll); //회원정보
/**
 * 출력
 {
    "status": 200,
    "success": true,
    "message": "전체 회원 조회성공",
    "data": [
        {
            "id": "dudgns3tp",
            "password": "UZR+89CS4zCz9wOh6HT1agLc6NCrrqxnmTypQlVBdNbwuIlubU+z7Yh30n7HI12ptMUKrL62CoOCg8PjGfoEzg==",
            "salt": "T86Dp1B7W/dvKWwvnMe7EM9mqM4TvyB6KiXnslJ8fL9Jb2KZyHKyqItnNM3aq1eND4MLeZc7SFsRBJ9zMkARsQ=="
        }
    ]
}
 */
module.exports = router;
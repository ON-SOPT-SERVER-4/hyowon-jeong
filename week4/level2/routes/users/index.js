const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.post('/signup', userController.signup); //회원가입
/**
 * 출력
 {
    "status": 200,
    "success": true,
    "message": "회원가입성공",
    "data": {
        "id": 2,
        "userName": "정효원",
        "email": "hyowon97@gmail.com"
    }
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
    "data": "hyowon@gmail.com"
}

{
    "status": 400,
    "success": false,
    "message": "비밀번호가일치하지않습니다"
}

{
    "status": 400,
    "success": false,
    "message": "존재하지않는 유저 id 입니다."
}

{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다."
}

 */
router.get('/', userController.readAll); //회원리스트 전체

router.get('/:id', userController.readOne); //해당 id의 회원정보


module.exports = router;
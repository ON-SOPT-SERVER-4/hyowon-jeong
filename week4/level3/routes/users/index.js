const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.post('/signup', userController.signup); //회원가입

router.post('/signin', userController.signin); //로그인

router.get('/', userController.readAll); //회원리스트 전체

router.get('/:id', userController.readOne); //해당 id의 회원정보

router.put('/:id', userController.updateOne); //해당 id의 회원정보 수정
/**
 * 출력
 {
    "status": 200,
    "success": true,
    "message": "사용자 업데이트 성공",
    "data": {
        "id": 1,
        "userName": "효원"
    }
}

{
    "status": 400,
    "success": false,
    "message": "존재하지않는 유저 id 입니다."
}
 */

router.delete('/:id', userController.deleteOne); //해당 id의 회원 탈퇴
/**
 * 출력
 
 {
    "status": 200,
    "success": true,
    "message": "사용자 삭제 성공"
}

 {
    "status": 400,
    "success": false,
    "message": "존재하지않는 유저 id 입니다."
}
 */

module.exports = router;
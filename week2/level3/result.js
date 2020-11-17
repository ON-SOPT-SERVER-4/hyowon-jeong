const fs = require('fs');
const crypto = require('crypto');

const file = 'password'
const password = 'server';

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) =>{
      fs.writeFile(`${file}.txt`,key.toString('base64'),()=>{
        console.log(`파일명 : ${file} 이 생성되었습니다!`);
    })
    });
});

/**
 * 출력
 파일명 : password 이 생성되었습니다!

 파일 내용
 oG3pdkMeo5FHfQdm+3IDMPMEupAhaheA9kY1O6xcjSRX798rwlyApzC0sqGg26SvOEhVPR4rnDRcFAX7qvg9RQ==
 */
import React, { useRef } from 'react';
import './Login.css';

const Login = () => {
  const id = useRef(null);
  const password = useRef(null);
  const login = useRef(null);
  let errStack = 0;

  // const handleLogin = () => {
  //   if (id.current.value === 'acid') {
  //     if (password.current.value === '0000') {
  //       alert('로그인 되었습니다!');
  //     } else {
  //       alert('아이디와 비밀번호를 다시 한 번 확인해주세요!');
  //       errStack++;
  //     }
  //   } else {
  //     alert('존재하지 않는 계정입니다.');
  //   }

  //   if (errStack >= 5) {
  //     alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.');
  //   }
  // };

  const socialAccounts = [
    {
      name: 'google',
      src: './google.png',
    },
    {
      name: 'kakao',
      src: './kakao.png',
    },
    {
      name: 'facebook',
      src: './facebook.png',
    },
  ];

  return (
    <div className='login'>
      {/* 메인로고 */}
      <h1 className='main-logo'>
        <img src="./main-logo.png" alt="main-logo" />
      </h1>

      {/* 로그인박스 */}
      <div className='container'>
        <input type='text' placeholder='이메일' id='id' className='account' ref={id} />
        <input type='password' placeholder='비밀번호' id='password' className='account' ref={password} />
        <p>이메일 또는 비밀번호를 잃어버리셨나요?</p>
        <p>
          <a href="">이메일 찾기</a>  |  <a href="">비밀번호 찾기</a>
        </p>
        <button id='sign-in' className='account' ref={login}>
          Sign in
        </button>
        <p id='alert' className='account'></p>
      </div>

      {/* 소셜 로그인 */}
      <div className='social'>
        <h5>- 소셜 계정으로 로그인하기 -</h5>
        <div className='social-btn-bar'>
          {socialAccounts.map((account) => (
            <button key={account.name}>
              <a href="">
                <img src={account.src} alt={account.name} />
              </a>
            </button>
          ))}
        </div>
        <h6>계정이 없으세요? <a href="">계정을 생성해주세요</a></h6>
      </div>
    </div>
  );
};

export default Login;

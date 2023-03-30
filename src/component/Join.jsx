import React from 'react'
import './Join.css';

const join = () => {
  return (
    <div className='join'>
      <div className='join-title'>
        <div className='intro'>
          <h2>환영합니다!</h2>
          <p>Wesely에서 함께<br/>
          현명한 하루를 보내세요</p>
        </div>
        <div className='join-title-logo'>
          <img src="./main-logo.png" alt="join-title-logo" />
        </div>
      </div>

      {/* 약관 */}
      <div className='join-form'>
        <form action="./Privacy.jsx">
          {/* 약관 전체동의 */}
          <div className='total'>
            <label>
              <input type="checkbox"/>
              <div className="checkbox-img"></div>
              <p>약관 전체동의</p>
            </label>
          </div>

          {/* 약관 리스트 */}
          <div className="agree-list">
            <div className="agree req">
              <label>
                <input type="checkbox"/>
                <div className="checkbox-img"></div>
                <p><b>(필수)</b>서비스 이용약관 관련 전체 동의</p>
              </label>
            </div>
            <div className="agree req">
              <label>
                <input type="checkbox"/>
                <div className="checkbox-img"></div>
                <p><b>(필수)</b>개인정보 수집 및 이용 동의</p>
              </label>
            </div>
            <div className="agree req">
              <label>
                <input type="checkbox"/>
                <div className="checkbox-img"></div>
                <p><b>(필수)</b>개인정보 제3자 제공 동의(인증 이용기관 제공)</p>
              </label>
            </div>
            <div className="agree req">
              <label>
                <input type="checkbox"/>
                <div className="checkbox-img"></div>
                <p><b>(필수)</b>개인정보 제3자 제공 동의(wesely)</p>
              </label>
            </div>
            <div className="agree">
              <label>
                <input type="checkbox"/>
                <div className="checkbox-img"></div>
                <p>(선택)wesely 광고 수신 동의</p>
              </label>
            </div>
          </div>

          <div class="btn-box">
            <button type="submit" id="submit">확인</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default join
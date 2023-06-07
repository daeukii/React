import React from 'react'

export default function Main() {

    // 구글 로그인 함수
    const onGoogleLogin = () => {}
  return (
    <div>
        <h3>Main</h3>
        <button onClick={onGoogleLogin}>구글로 로그인</button>

        <h2>{}님 환영합니다</h2>
    </div>
  )
}

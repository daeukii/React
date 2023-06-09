import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext'

export default function NavHeader() {
  const { state } = useContext(DataContext);

  return (
    <div>
        <Link to='/'>HOME</Link>
        <Link to='/boardlist'>BOARD</Link>
        <Link to='/boardwriteform'>WRITE</Link>
        <Link to='/image'>IMAGE</Link>
        {/** state의 user의 login이 false 일때 : Link
         *   true 일때 : user의 writer 출력
         */}
        {
          state.user.login ? <Link to='/mypage'>{state.user.writer}님의 페이지</Link>
                      :<Link to='/loginform'>LOGIN</Link>
        }
        
    </div>
  )
}
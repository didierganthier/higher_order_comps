import React from 'react'

const Dashboard = ({userInfo}) => {
  return (
    <div>Welcome to the Dashboard {userInfo.username} your role is {userInfo.role}</div>
  )
}

export default Dashboard
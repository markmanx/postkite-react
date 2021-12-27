import React from 'react'
import { usePostKite } from './usePostKite'

export const PostKite: React.FC = ({ children }) => {
  const { postKite, notificationsCount } = usePostKite()

  return (
    <div
      style={{
        position: 'relative',
      }}
      onClick={() => postKite?.openModal()}
    >
      {children}
      {notificationsCount > 0 && (
        <div
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            top: 0,
            right: 0,
            borderRadius: '10px',
          }}
        />
      )}
    </div>
  )
}

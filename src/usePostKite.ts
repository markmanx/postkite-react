import { useEffect, useState, useCallback } from 'react'

export const usePostKite = () => {
  const [postKite, setPostKite] = useState<Window['PostKite']>()
  const [notificationsCount, setNotificationsCount] = useState(0)

  const setListener = useCallback(() => {
    window.PostKite.setChangeListener((postKite) => {
      setNotificationsCount(postKite.notificationsCount)
    })
  }, [])

  useEffect(() => {
    if (window.PostKite) {
      setPostKite(window.PostKite)
      setListener()
      return
    }

    const script = document.createElement('script')
    script.src = `http://localhost:4000/widget/widget.js`

    const onError = () => script.remove()
    script.addEventListener('error', onError)
    script.onload = () => {
      setPostKite(window.PostKite)
      setListener()
    }

    document.body.appendChild(script)
  }, [])

  return {
    postKite,
    notificationsCount,
  }
}

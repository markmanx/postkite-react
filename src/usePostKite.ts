import { useEffect, useState } from 'react'

export const usePostKite = () => {
  const [postKite, setPostKite] = useState<Window['PostKite']>()

  useEffect(() => {
    if (window.PostKite) {
      setPostKite(window.PostKite)
      window.PostKite.setChangeListener((postKite) => {
        setPostKite(postKite)
      })
      return
    }

    const script = document.createElement('script')
    script.src = `http://localhost:4000/widget/widget.js`

    const onError = () => script.remove()
    script.addEventListener('error', onError)
    script.onload = () => {
      setPostKite(window.PostKite)
    }

    document.body.appendChild(script)
  }, [])

  return postKite
}

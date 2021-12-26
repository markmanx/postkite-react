declare interface Window {
  PostKite: {
    openModal: () => void
    notificationsCount: number
    setChangeListener: (cb: (instance: Window['PostKite']) => void) => void
  }
}

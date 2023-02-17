const run = async () => {
  const savedLinks = (await window.chrome.storage.sync.get('savedLinks')).savedLinks as
    | string[]
    | undefined

  if (savedLinks) {
    if (savedLinks.includes(location.hostname)) {
      const date = (await window.chrome.storage.sync.get('timer')).timer as string
      console.log(Date.parse(date))
      console.log(new Date().getTime())
     if (Date.parse(date) < new Date().getTime() || !date) {
        window.location.href = window.chrome.runtime.getURL(`/block.html?destination=${window.location.href}`)
      }
    }
  }
}
run()

export {}

import { SetStateAction, useEffect, useState } from 'react'

function App() {
  const getStorage = () => {
    window.chrome.storage.sync.get('savedLinks', function (data: any) {
      console.log('data: ' + data.savedLinks)
      setStorage(data.savedLinks)
    })
  }

  useEffect(() => {
    getStorage()
  }, [])

  const [link, setLink] = useState('')
  const [error, setError] = useState('')
  const [storage, setStorage] = useState<string[] | undefined>()
  console.log(storage + ' storage')

  return (
    <div className="w-[95%] max-w-4xl flex flex-col items-center justify-center mx-auto">
      <div className="m-2" />
      <div className="text-5xl text-center font-bold">R U Sure About That? 🤔</div>
      <span className="text-gray-200 text-center italic text-sm mt-1">
        If R.U.S.A.T. genuinely provides value to your worklife by keeping you on track to achieve
        your goals and it's within your means please consider{' '}
        <a target="_blank" className="underline" href="https://ko-fi.com/speedreade">
          supporting the project
        </a>
        . You can also support the app by offering suggestions on how I could improve it or
        contributing code yourself via{' '}
        <a
          target="_blank"
          className="underline"
          href="https://github.com/rigba/RUSAT-Chrome-Extension"
        >
          Github
        </a>
        .
      </span>
      <h6 className="text-gray-200 text-center-mt-2">v 1.0.1</h6>
      <div className="m-2" />
      <div className="text-3xl text-center font-semibold">Options Page</div>
      <div className="m-4" />
      <div className="text-xl text-center font-semibold">Add a Page +</div>
      <div className="m-2" />
      {error.length > 0 && (
        <div className="bg-red-400 flex flex-row gap-2 rounded-md p-3 mb-4 w-fit max-w-xl">
          <div className="flex gap-2 font-semibold text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            Error:
          </div>
          <div className="text-xl font-normal mt-auto ">{error}</div>
        </div>
      )}
      <form
        className="flex gap-2 w-full justify-center"
        onSubmit={(e) => {
          e.preventDefault()
          setError('')
          let newStorage: string[]
          if (!storage) {
            newStorage = []
          } else {
            newStorage = [...storage]
          }
          if (/^www\./.test(link)) {
            if (newStorage.includes(link)) {
              setError(
                'The link you provided is already a blocked link. If you think this may be incorrect try reloading the page.',
              )
              return
            }
            newStorage.push(link)
            window.chrome.storage.sync.set({ savedLinks: newStorage })
            setStorage(newStorage)
            return
          }
          //else
          setError(
            `The link you provided was incorrectly formatted. Please format you link like the following: "www.example.com".`,
          )
        }}
      >
        <input
          className="bg-white focus:ring-0 rounded-md w-full max-w-sm text-gray-900 focus:outline-none p-2 text-base"
          placeholder="Website URL (Ex. www.youtube.com) "
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button className="text-2xl rounded-md w-12 font-semibold p-2 bg-blue-500" type="submit">
          <div className="-translate-y-1">+</div>
        </button>
      </form>
      <div className="m-4" />
      <div className="text-xl text-center font-semibold">Blocked Links: </div>
      <div className="m-2" />
      <div className="flex flex-col gap-2 w-full max-w-lg mx-auto">
        {storage &&
          storage?.map((item, i) => {
            return (
              <div
                className="w-[95%] rounded-md bg-neutral-700 p-3 text-sm font-semibold flex justify-between"
                key={i}
              >
                <div className="flex gap-4">
                  <img
                    className="w-10 h-10 my-auto"
                    src={`https://www.google.com/s2/favicons?domain=${item}&sz=128`}
                  />
                  <div className="my-auto flex flex-col">
                    <div className="text-lg">
                      {item.substring(4).charAt(0).toLocaleUpperCase() + item.substring(4).slice(1)}
                    </div>
                    {item}
                  </div>
                </div>
                <button
                  className="p-2"
                  onClick={() => {
                    const newStorage = [...storage]
                    newStorage.splice(i, 1)
                    window.chrome.storage.sync.set({ savedLinks: newStorage })
                    setStorage(newStorage)
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-red-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )
          })}
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        <a
          target="_blank"
          href="https://ko-fi.com/speedreade"
          className="flex gap-2 p-2 bg-white hover:bg-gray-100 rounded-xl text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 64 64"
            className="w-10 h-10"
          >
            <g fill-rule="nonzero" stroke="none" stroke-width="1">
              <g transform="translate(0 -51.1) scale(1.9656) translate(0 26)" fill="none">
                <circle cx="16.3" cy="16.3" r="16.3" fill="#29abe0" />
                <path
                  d="M22.3 8.8h1.6c3 0 5.6 2.5 5.6 5.6v.3c0 3.1-2.5 5.7-5.6 5.7h-1.6V22c0 1.5-1.2 2.6-2.6 2.6H7.4A2.6 2.6 0 0 1 4.8 22V10.1c0-.7.6-1.3 1.3-1.3Zm0 3v5.6h1.4a2.8 2.8 0 1 0 0-5.6z"
                  fill="#fff"
                />
              </g>
              <path
                d="M8.4 5.3c.4-1.2 1.3-1.8 2.8-1.8 2.3 0 3 2.8 2 4.6-.9 1.3-2.5 2.8-4.8 4.7C6 10.9 4.4 9.4 3.6 8c-1.2-1.8-.3-4.6 2-4.6 1.4 0 2.4.6 2.8 1.8Z"
                transform="translate(0 -51.1) scale(1.9656) translate(4.8 34.8)"
                fill="#ff5e5b"
              />
            </g>
          </svg>
          <div className="text-black my-auto font-semibold text-lg">Become a sponsor</div>
        </a>
        <a
          target="_blank"
          href="https://github.com/rigba/RUSAT-Chrome-Extension"
          className="flex gap-2 p-2 bg-white hover:bg-gray-100 rounded-xl text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 fill-black" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App

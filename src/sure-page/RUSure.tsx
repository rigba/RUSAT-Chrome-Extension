import { useEffect } from 'react'

function App() {
  return (
    <div>
      <div className="w-[95%] max-w-4xl flex flex-col items-center justify-center mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="m-2" />
        <div className="text-5xl text-center font-bold">R U Sure About That? 🤔</div>
        <div className="m-2" />
        <span className="text-xl text-center font-semibold">
          You have set a soft restriction on this page for a reason... Maybe its not a good idea to
          proceed. If you click proceed you will be able to access this website for ten minutes
          before being interupted again. If you would like this to stop popping up&nbsp;
          <button
            className="underline italic"
            onClick={() => (window as any).chrome.runtime.openOptionsPage()}
          >
            click me.
          </button>
        </span>
        <div className="m-2" />
        <div className="flex gap-4">
          <button
            className="w-32 bg-blue-500 rounded-md text-base font-semibold p-2"
            type="button"
            onClick={() => {
              window.history.go(-1)
            }}
          >
            Go Back
          </button>
          <button
            className="w-32 bg-red-500 rounded-md text-base font-semibold p-2"
            type="button"
            onClick={() => {
              window.chrome.storage.sync.set({
                timer: new Date(new Date().getTime() + 10 * 60000).toUTCString(),
              })
              window.history.back()
            }}
          >
            Proceed
          </button>
        </div>
        <div className="m-4" />
      </div>
      <a
        target="_blank"
        href="https://ko-fi.com/speedreade"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white hover:bg-gray-100 rounded-lg text-black"
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
        <div className="text-black my-auto font-semibold text-lg">Support Me</div>
      </a>
    </div>
  )
}

export default App

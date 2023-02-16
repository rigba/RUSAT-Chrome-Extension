function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-2" />
      <div className="text-2xl text-center font-semibold">R U Sure About That? 🤔</div>

      <h6 className="text-gray-200 text-center">v 1.0.0</h6>
      <div className="m-2" />
      <button
        className="w-fit bg-blue-500 rounded-md text-base font-semibold flex gap-2 p-2"
        type="button"
        onClick={() => (window as any).chrome.runtime.openOptionsPage()}
      >
        OPTIONS
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M19 5.5a4.5 4.5 0 01-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 11-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 015.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 00-.11.494 3.01 3.01 0 001.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382zM4 17a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="m-2" />
    </div>
  )
}

export default App

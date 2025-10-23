function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-slate-800">Hello tilin</h1>
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">Primary</button>
          <button className="px-4 py-2 border border-slate-200 rounded text-slate-700">Secondary</button>
        </div>
      </div>
    </div>
  );
}

export default App;

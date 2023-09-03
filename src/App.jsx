const App = () => {
  return (
    <div className="flex justify-center items-center bg-black text-white text-[2rem]">
      First
      <div className="text-[2em]">{import.meta.env.VITE_VALUE}</div>
    </div>
  );
};

export default App;

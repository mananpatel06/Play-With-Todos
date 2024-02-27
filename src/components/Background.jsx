function Background() {
  return (
    <>
      <div className="z-[2] w-full h-full flex flex-col items-center justify-center">
        <div className="absolute top-[5%] w-full py-10 flex justify-center
         text-zinc-500 text-xl font-semibold">
          Todos
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] 
        font-semibold text-[13vw] leading-none tracking-tighter text-zinc-900">
          Todo
        </h1>
      </div>
    </>
  );
}

export default Background;

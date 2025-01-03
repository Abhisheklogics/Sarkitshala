

export default function Loading() {
  return (
    <div className="  bg-white  md:ml-10 mt-[-200px]">
      <div className="flex justify-center items-center">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
        <p className="text-xl md:text-3xl font-semibold ml-4 animate-pulse"></p>
      </div>
    </div>
  );
}

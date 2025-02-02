

export default function Loading() {
  return (
    <div className="  absolute bg-white mt-72  ml-40  md:ml-[640px] md:z-50 md:mt-72">
      <div className="flex justify-center items-center">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
        <p className="text-xl md:text-3xl font-semibold ml-4 animate-pulse"></p>
      </div>
    </div>
  );
}

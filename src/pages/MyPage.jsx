function MyPage() {
  return (
    <div className="pt-20 px-20">
      <h1 className="text-2xl text-center">Account</h1>

      <div className="p-10 flex flex-col gap-8">
        <a href="/profile">
          <div className="w-full text-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
            Profile
          </div>
        </a>
        <a href="/curriculum">
          <div className="w-full text-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
            Curriculum
          </div>
        </a>
        <a href="/calendar">
          <div className="w-full text-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
            Calendar
          </div>
        </a>
      </div>
    </div>
  );
}

export default MyPage;

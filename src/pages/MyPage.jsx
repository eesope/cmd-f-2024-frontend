import { HiCalendar } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";

function MyPage() {
  return (
    <div className="pt-20 px-20">
      <h1 className="text-2xl text-center">Account</h1>

      <div className="p-10 flex flex-col gap-8">
        <a href="/curriculum">
          <div className="w-full flex items-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
            <HiPencilAlt className="w-6 h-6" />
            <span>Curriculum</span>
          </div>
        </a>
        <a href="/calendar">
          <div className="w-full flex items-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-4 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2">
            <HiCalendar className="w-6 h-6" />
            <span>Calendar</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MyPage;

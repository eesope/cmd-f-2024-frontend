function Calendar() {
  return (
    <div className="pt-20 px-20">
      <h1 className="text-2xl text-center">Account</h1>

      <div className="p-10 flex flex-col gap-8">
        <button
          type="button"
          className="focus:outline-none text-yellow-900 bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:focus:ring-yellow-700"
        >
          <a href="/detail-page"> Profile </a>
        </button>

        <button
          type="button"
          className="focus:outline-none text-yellow-900 bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:focus:ring-yellow-700"
        >
          Curriculum
        </button>
        <button
          type="button"
          className="focus:outline-none text-yellow-900 bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:focus:ring-yellow-700"
        >
          Calendar
        </button>
      </div>
    </div>
  );
}

export default Calendar;

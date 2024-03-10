function CurriculumCard({
  title,
  subject,
  url,
  startDate,
  endDate,
  status,
  // handleEdit,
}) {
  return (
    <div className="w-full rounded-lg p-4 shadow-md">
      <div className="text-gray-00 font-bold text-lg mb-2">{title}</div>
      <div className="text-yellow-500 mb-2">
        Subject:<span className="text-gray-500 pl-2">{subject}</span>
      </div>
      <div className="text-yellow-500 mb-2">
        URL:<span className="text-gray-500 pl-2">{url}</span>
      </div>
      <div className="text-yellow-500 mb-2">
        Start Date: <span className="text-gray-500 pl-2">{startDate}</span>
      </div>
      <div className="text-yellow-500 mb-2">
        End Date:<span className="text-gray-500 pl-2">{endDate}</span>
      </div>
      {status === "true" ? (
        <div className="text-yellow-500 mb-2">
          Study Status: <span className="text-gray-500 pl-2">Completed</span>
        </div>
      ) : (
        <div className="text-yellow-500 mb-2">
          Study Status: <span className="text-gray-500 pl-2">Ongoing</span>
        </div>
      )}
      {/* <button
        className="justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
        onClick={handleEdit}
      >
        Edit
      </button> */}
    </div>
  );
}

export default CurriculumCard;

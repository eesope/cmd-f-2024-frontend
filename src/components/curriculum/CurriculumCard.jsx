function CurriculumCard({ title, subject }) {
  return (
    <div className="w-full rounded-lg p-4 border-gray-300 border-2">
      <div className="text-gray-900 font-bold mb-2">{title}</div>
      <div className="text-gray-900 font-bold mb-2">{subject}</div>
    </div>
  );
}

export default CurriculumCard;

// eslint-disable-next-line react/prop-types
function Card({ title, imgPath, link }) {
  return (
    <a href={link}>
      <div className="flex rounded-lg shadow-xl overflow-hidden grid-rows-{3}">
        <div className="w-24 h-24 flex-none rounded-r-lg rounded-l-lg">
          <img
            src={imgPath}
            alt={title}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="flex-grow h-24 bg-white p-4">
          <div className="mb-8 rounded-l-lg">
            <div className="text-gray-900 font-bold mb-2">{title}</div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;

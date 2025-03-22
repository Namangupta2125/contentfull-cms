export const CardImages = ({ image, title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-60 h-64 block mb-10 ml-10"
    >
      <div className="flex flex-col justify-between items-center w-full h-full border rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt="" className="w-full h-40 object-cover" />
        <h2 className="text-cyan-800 text-xl font-semibold flex justify-center items-center w-full h-16 text-center px-2">
          {title}
        </h2>
      </div>
    </a>
  );
};

type Props = {
  img: string;
  onClose: () => void;
};

const ImageModal = ({ img, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full px-3 py-1 shadow"
        >
          ✕
        </button>

        <img
          src={img}
          className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-xl animate-zoom"
        />
      </div>
    </div>
  );
};

export default ImageModal;

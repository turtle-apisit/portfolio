import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface LightboxProps {
  lightboxIndex: {
    images: string[];
    index: number;
  };
  setLightboxIndex: (val: null) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ lightboxIndex, setLightboxIndex }) => {
  if (!lightboxIndex) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">

      <button
        onClick={() => setLightboxIndex(null)}
        className="absolute top-4 right-4 text-white text-3xl z-50"
      >
        ✕
      </button>

   
      <Swiper
        spaceBetween={30}
        initialSlide={lightboxIndex.index}
        navigation={true}
        modules={[Navigation]}
        className="w-full max-w-4xl border-gray-200 my-lightbox"
      >
        {lightboxIndex.images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center items-center">
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="max-h-[80vh] rounded-xl shadow-lg border border-gray-200"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Lightbox;

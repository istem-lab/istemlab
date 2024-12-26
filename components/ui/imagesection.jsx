const ImageSection = () => {
    return (
      <section className="flex justify-center items-center bg-gray-100 py-10">
        <div className="max-w-screen-lg mx-auto">
          <img
            src="/images/another-image.jpg"
            alt="Section Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  };
  
  export default ImageSection;
  
const Video = () => {

  return (
    <div>
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Shorts</h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">簡単な動画編集も対応可能です</p>
    </div>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
        <div className="aspect-w-16 aspect-h-10">
          <video controls>
            <source src="vdo/shorts01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </a>
      
      <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
        <div className="aspect-w-16 aspect-h-10">
          <video controls>
          <source src="vdo/shorts03.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </a>
      
      <a className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
        <div className="aspect-w-16 aspect-h-10">
          <video controls>
          <source src="vdo/shorts02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </a>
    </div>
  </div>
    </div>
  );
};

export default Video;
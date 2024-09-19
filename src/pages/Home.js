import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
              <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="img/kv.jpg" alt="Image Description" />
            </div>
          </div>

          <div className="sm:order-1">

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
              <p className="hover:text-point-color dark:text-gray-300 dark:hover:text-white">
              Portfolio with react and tailwind CSS
              </p>
            </h2>

            <div className="mt-5">
            <Link to="/about">
              <p className="inline-flex items-center gap-x-1.5 text-point-color decoration-2 hover:underline font-medium">
                もっと詳しく
                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </p>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';

const Layout = () => {
  const navigate = useNavigate();

  
  const goProfile = () => {
    navigate('/Profile', { replace: true });
  }

  const goAbout = () => {
    navigate('/about', { replace: true });
  }

  const goCase = () => {
    navigate('/case', { replace: true });
  }

  const goShorts = () => {
    navigate('/video', { replace: true });
  }

  const goHome = () => {
    navigate('/', { replace: true });
  }

  return (
    <div>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <button className="flex-none text-base font-semibold dark:text-white" onClick={goHome} aria-label="Brand">Top</button>
              <div className="md:hidden">
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-point-color transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-white md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <button className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" onClick={goProfile}>
                  アピール
                  </button>
                  
                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                    <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                      スキル
                      <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                      </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full z-20 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5 hidden"><div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4"><div className="flex flex-col mx-1 md:mx-0"><p className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 cursor-pointer hover:opacity-50" onClick={goCase}><svg className="flex-shrink-0 w-6 h-6 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.24 7.194a24.16 24.16 0 0 1 3.72-3.062m0 0c3.443-2.277 6.732-2.969 8.24-1.46 2.054 2.053.03 7.407-4.522 11.959-4.552 4.551-9.906 6.576-11.96 4.522C1.223 17.658 1.89 14.412 4.121 11m6.838-6.868c-3.443-2.277-6.732-2.969-8.24-1.46-2.054 2.053-.03 7.407 4.522 11.959m3.718-10.499a24.16 24.16 0 0 1 3.719 3.062M17.798 11c2.23 3.412 2.898 6.658 1.402 8.153-1.502 1.503-4.771.822-8.2-1.433m1-6.808a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg><div className="grow"><p className="font-medium text-gray-800 dark:text-gray-200">Case</p><p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">これまで作成したサイトを、最新のものを中心にご紹介します。</p></div></p></div><div className="flex flex-col mx-1 md:mx-0"><p className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 cursor-pointer hover:opacity-50" onClick={goShorts}><svg className="flex-shrink-0 w-6 h-6 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm7 11-6-2V4l6-2v10Z"></path></svg><div className="grow"><p className="font-medium text-gray-800 dark:text-gray-200">Shorts</p><p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">簡単な動画制作も可能です。</p></div></p></div></div></div>
                  </div>
                  
                  <button className="inline-flex justify-center items-center gap-x-2 text-center bg-point-color hover:opacity-50 border border-transparent text-white text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-point-color focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800 group cursor-pointer" aria-current="page"><svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"></path></svg><a href="mailto:mk.kang.jp@gmail.com">Contact!</a></button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
        <footer className="fixed bottom-0 inset-x-0 text-center py-5"><div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"><p className="text-sm">©2024 Minkyong Kang</p></div></footer>
      </main>
    </div>
  );
};

export default Layout;
import { Link } from 'react-router-dom';

const Profile = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <div>
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="relative p-6 md:p-16">
    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
        スムーズなフロント対応<br />当方の３つの強味
        </h2>

        <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-point-color text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-point-color text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">スマートな対応</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">あらゆる要望に対し、スマートかつスピーティな対応を致します</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
            <span className="flex">
            <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-point-color text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 14h6m-3 3v-6M1.857 1h4.286c.473 0 .857.384.857.857v4.286A.857.857 0 0 1 6.143 7H1.857A.857.857 0 0 1 1 6.143V1.857C1 1.384 1.384 1 1.857 1Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 11 6.143V1.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H1.857A.857.857 0 0 1 1 16.143v-4.286c0-.473.384-.857.857-.857Z"/>
            </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-point-color text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">様々なプロジェクトで積み重なった経験</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">長いキャリアで、安定したクリアなプロジェクトを進めることができます</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
            <span className="flex">
            <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-point-color text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"/>
            </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-point-color text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">必須・歓迎スキルに対応</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">フロントエンドに必要な必須スキルであるhtml/SCSSはもちろん、これらを応用したtailwindCSSやreactなどの言語の対応も可能</span>
              </span>
            </span>
          </button>
        </nav>
      </div>

      <div className="lg:col-span-6">
        <div className="relative">
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="img/p01.png" alt="Image Description" />
            </div>

            <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="img/p02.png" alt="Image Description" />
            </div>

            <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="img/p03.png" alt="Image Description" />
            </div>
          </div>

          <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="relative mt-16 text-center">
      <a href="https://docs.google.com/spreadsheets/d/1t0t9Z4YMUNPxfmwCdYr9NQva16bCcA4DX1oFCakkWoY/edit#gid=607437019" target="_blank">
        <button type="button" class="py-3 px-7 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-point-color text-white hover:bg-gray-dark disabled:opacity-50 disabled:pointer-events-none">キャリアシートはこちら</button>
      </a>
      
      <Link to="/case">
      <a>
      <button type="button" class="ml-5 py-3 px-7 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-point-color text-white hover:bg-gray-dark disabled:opacity-50 disabled:pointer-events-none">事例はこちら</button>
      </a>
      </Link>
    </div>
  </div>
</div>



    </div>
  );
};

export default Profile;
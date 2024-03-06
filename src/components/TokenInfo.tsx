import React, { useEffect, useState } from 'react'
import { ThemeParams } from '../Types/Type';

const TokenInfo = () => {

    const [webApp, setWebApp] = useState<ThemeParams | null>(null);
  
    useEffect(() => {
      const app = (window as any).Telegram?.WebApp;
      if (app) {
       
        setWebApp(app.themeParams);
       
        }
    }, []);

  return (
    <div className={` ${webApp?.bg_color ?  ` bg-[#${webApp.bg_color}]` : 'bg-black'  } w-full text-white p-3 uppercase`}>
      <div className="flex justify-center gap-5 ">
        <div className="flex flex-col border w-full justify-center items-center border-gray-500 rounded-md "  >
          <span className="text-textGrey sm:text-[0.9rem] text-[0.6rem] ">price usd</span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-white`  }  font-bold  sm:text-[0.9rem] text-[0.8rem]`}>$0.004777</p>
        </div>
        <div className="flex flex-col border w-full justify-center items-center rounded-md border-gray-500  py-1 ">
          <span className="text-textGrey sm:text-[0.9rem] text-[0.6rem] ">price </span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-white`  }  font-bold sm:text-[0.9rem] text-[0.8rem]`}>0.00003612 Sol</p>
        </div>
      </div>
      <div className="flex py-4 gap-3">
        <div className="flex flex-col border w-full py-1 justify-center items-center rounded-md border-gray-500">
          <span className="text-textGrey sm:text-[0.9rem] text-[0.6rem] ">liquidity</span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-white`  }  font-bold sm:text-[0.9rem] text-[0.8rem]`}>$310k</p>
        </div>
        <div className="flex flex-col border w-full py-1 justify-center items-center rounded-md border-gray-500" >
          <span className="text-textGrey sm:text-[0.9rem] text-[0.6rem] ">fdv</span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-white`  }  font-bold sm:text-[0.9rem] text-[0.8rem]`}>$4.6m</p>
        </div>
        <div className="flex flex-col border w-full py-1 justify-center items-center rounded-md border-gray-500">
          <span className="text-textGrey sm:text-[0.9rem] text-[0.6rem] ">mkt cap</span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-white`  }  font-bold sm:text-[0.9rem] text-[0.8rem]`}>$4.6m</p>
        </div>
      </div>

      <div className="border border-gray-500 rounded-md">

      <div className="flex justify-between gap-3 ">
        <div className="flex flex-col items-center justify-center w-full border-gray-500 sm:text-[0.9rem] text-[0.8rem] py-1">
          <span className="text-textGrey">5m</span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-error`  }  font-bold`}>-0.34%</p>
        </div>

        <div  className="flex flex-col items-center border-l w-full border-gray-500 sm:text-[0.9rem] text-[0.8rem] py-1">
          <span className="text-textGrey">1h</span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-error`  }  font-bold`} >-0.34%</p>
        </div>

        <div className="flex flex-col items-center border-l w-full border-gray-500 sm:text-[0.9rem] text-[0.8rem] py-1">
          <span className="text-textGrey">6h</span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-error`  }  font-bold`}>-0.34%</p>
        </div>

        <div className="flex flex-col items-center border-l w-full border-gray-500 bg-opacity-20 bg-slate-400 sm:text-[0.9rem] text-[0.8rem] py-1">
          <span className="text-textGrey">24h</span>
          <p className={`${webApp?.text_color ? `text-[#${webApp?.text_color}]` : `text-error`  }  font-bold`}>-0.34%</p>
        </div>

      </div>

        <div className="border-t border-gray-500 flex justify-between">

        
        <div className="flex flex-col justify-evenly px-2 sm:text-[0.9rem] text-[0.8rem]">
          <div className="">
            <span className="text-textGrey  ">txns</span>
            <p className=" font-bold">3,549</p>
          </div>
          <div>
            <span className="text-textGrey  ">volume</span>
            <p className=" font-bold">$1.2m</p>
          </div>
          <div>
            <span className="text-textGrey  ">makers</span>
            <p className=" font-bold">689</p>
          </div>
        </div>
        <div className="px-10 flex flex-col justify-between gap-3 my-3 w-full border-l">
          <div className="flex justify-between w-full gap-10 sm:text-[0.9rem] text-[0.8rem]">
            <div className=" w-full">
              <span className="text-textGrey">buys</span>
              <p>1,740</p>
              <div className="w-full h-[0.2rem] rounded-full bg-secondary"></div>
            </div>
            <div className=" w-full text-right ">
              <span className="text-textGrey">sells</span>
              <p>1,809</p>
              <div className="w-full h-[0.2rem] rounded-full bg-error"></div>
            </div>
          </div>

          <div className="flex justify-between w-full gap-10 sm:text-[0.9rem] text-[0.8rem]">
            <div className="w-full">
              <span className="text-textGrey">buy vol</span>
              <p>$613k</p>
              <div className="w-full h-[0.2rem] rounded-full bg-secondary"></div>
            </div>
            <div className="w-full text-right">
              <span className="text-textGrey">sell vol</span>
              <p>$614k</p>
              <div className="w-full h-[0.2rem] rounded-full bg-error"></div>
            </div>
          </div>


          <div className="flex justify-between w-full gap-10 sm:text-[0.9rem] text-[0.8rem]">
            <div className="w-full">
              <span className="text-textGrey">buyers</span>
              <p>504</p>
              <div className="w-full h-[0.2rem] rounded-full bg-secondary"></div>
            </div>
            <div className="w-full text-right">
              <span className="text-textGrey">sellers</span>
              <p>437</p>
              <div className="w-full h-[0.2rem] rounded-full bg-error"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TokenInfo
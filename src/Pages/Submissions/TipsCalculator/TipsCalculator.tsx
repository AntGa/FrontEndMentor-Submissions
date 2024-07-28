import SwipeTransition from '../../../components/Swipetransition'
import './TipsCalculator.css'
import { motion } from 'framer-motion'
import { Layout } from '../../../components/Layout'
import { TipsButton } from './Components/TipsButton'

function TipsCalculator() {
  return (
    <Layout>
      <div className="SpaceMono flex h-dvh w-dvw items-center justify-center bg-[#C5E4E7]">
        <div className="flex h-[480px] w-[920px] justify-between rounded-3xl bg-white p-8">
          <div className="border-1 h-[413px] w-[418px] items-center border p-4">
            <p className="font-semibold text-[#677979]">Bill</p>
            <div className="mt-2 flex h-[48px] w-[384px] items-center justify-between rounded-md bg-[#F3F8FB] p-[18px]">
              <p className="text-2xl text-[#A8BCBD]">$</p>
              <input className="SpaceMono bg-transparent text-right text-2xl font-semibold text-[#104B4D] outline-none"></input>
            </div>
            <p className="mt-[46px] font-semibold text-[#677979]">
              Select Tip %
            </p>
            <div className="mt-4 flex h-[113px] w-[384px] flex-wrap gap-3">
              <TipsButton text="5" />
              <TipsButton text="10" />
              <TipsButton text="15" />
              <TipsButton text="25" />
              <TipsButton text="50" />
              <input
                className="text h-[50px] w-[118px] rounded-lg bg-[#F3F8FB] p-2 text-center text-[24px] font-semibold text-[#5B7874]"
                placeholder="Custom"
              ></input>
            </div>
            <p className="mt-[40px] font-semibold text-[#677979]">
              Number of People
            </p>
            <div className="mt-1 flex h-[48px] w-[384px] items-center justify-between rounded-xl bg-[#F2F9FB] p-4">
              <img src="TipsCalculator/icon-person.svg" />
              <input className="SpaceMono bg-transparent text-right text-2xl font-semibold text-[#104B4D] outline-none"></input>
            </div>
          </div>
          <div className="mx-[26px] flex h-[413px] w-[418px] rounded-xl bg-[#00474B]">
            <div className="h-11 w-[331px]"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SwipeTransition(TipsCalculator)

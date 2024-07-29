import React, { useState } from 'react'
import SwipeTransition from '../../../components/Swipetransition'
import './TipsCalculator.css'
import { motion } from 'framer-motion'
import { Layout } from '../../../components/Layout'
import { TipsButton } from './Components/TipsButton'

function TipsCalculator() {
  const [bill, setBill] = useState('')
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState('')
  const [tipAmount, setTipAmount] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState(0)
  const [focusedInput, setFocusedInput] = useState('')
  const [inputErrors, setInputErrors] = useState({
    bill: false,
    customTip: false,
    people: false,
  })

  const handleBillChange = (e) => {
    const value = e.target.value
    setBill(value)
    setInputErrors((prev) => ({ ...prev, bill: Number(value) < 0 }))
  }

  const handleTipChange = (percentage) => {
    setTipPercentage(percentage)
    setInputErrors((prev) => ({ ...prev, customTip: Number(percentage) < 0 }))
  }

  const handleNumberOfPeopleChange = (e) => {
    const value = e.target.value
    setNumberOfPeople(value)
    setInputErrors((prev) => ({ ...prev, people: Number(value) < 1 }))
  }

  const calculateTip = () => {
    const billAmount = Number(bill)
    const numPeople = Number(numberOfPeople)
    if (numPeople > 0) {
      const tip = (billAmount * tipPercentage) / 100
      setTipAmount(tip)
      const total = (billAmount + tip) / numPeople
      setTotalPerPerson(total)
    }
  }

  const handleReset = () => {
    setBill('')
    setTipPercentage(0)
    setNumberOfPeople('')
    setTipAmount(0)
    setTotalPerPerson(0)
    setInputErrors({ bill: false, customTip: false, people: false })
  }

  React.useEffect(() => {
    calculateTip()
  }, [bill, tipPercentage, numberOfPeople])

  return (
    <Layout>
      <div className="SpaceMono flex h-dvh w-dvw flex-col items-center justify-center bg-[#C5E4E7]">
        <img src="TipsCalculator/logo.svg" className="mb-[48px]"></img>
        <div className="flex h-[480px] w-[920px] justify-between rounded-3xl bg-white p-8">
          <div className="h-[413px] w-[418px] items-center p-4">
            <p className="font-semibold text-[#677979]">Bill</p>
            <div
              className={`mt-2 flex h-[48px] w-[384px] items-center justify-between rounded-md bg-[#F3F8FB] p-[18px] ${
                focusedInput === 'bill' && !inputErrors.bill
                  ? 'border border-[#104B4D]'
                  : inputErrors.bill
                    ? 'border border-red-500'
                    : ''
              }`}
            >
              <p className="text-2xl text-[#A8BCBD]">$</p>
              <input
                className={`SpaceMono bg-transparent text-right text-2xl font-semibold outline-none ${
                  inputErrors.bill ? 'text-red-500' : 'text-[#104B4D]'
                }`}
                type="number"
                min="0"
                value={bill}
                onChange={handleBillChange}
                onFocus={() => setFocusedInput('bill')}
                onBlur={() => setFocusedInput('')}
              ></input>
            </div>
            <p className="mt-[46px] font-semibold text-[#677979]">
              Select Tip %
            </p>
            <div className="mt-4 flex h-[113px] w-[384px] flex-wrap gap-3">
              {[5, 10, 15, 25, 50].map((percentage) => (
                <TipsButton
                  key={percentage}
                  text={percentage}
                  onClick={() => handleTipChange(percentage)}
                  isSelected={tipPercentage === percentage}
                />
              ))}
              <input
                className={`text h-[50px] w-[118px] rounded-lg bg-[#F3F8FB] p-2 text-center text-[24px] font-semibold outline-none ${
                  inputErrors.customTip ? 'text-red-500' : 'text-[#5B7874]'
                }`}
                placeholder="Custom"
                onChange={(e) => handleTipChange(Number(e.target.value))}
                onFocus={() => setFocusedInput('customTip')}
                onBlur={() => setFocusedInput('')}
              ></input>
            </div>
            <p className="mt-[40px] font-semibold text-[#677979]">
              Number of People
            </p>
            <div
              className={`mt-1 flex h-[48px] w-[384px] items-center justify-between rounded-xl bg-[#F2F9FB] p-4 ${
                focusedInput === 'people' && !inputErrors.people
                  ? 'border border-[#104B4D]'
                  : inputErrors.people
                    ? 'border border-red-500'
                    : ''
              }`}
            >
              <img src="TipsCalculator/icon-person.svg" />
              <input
                className={`SpaceMono bg-transparent text-right text-2xl font-semibold outline-none ${
                  inputErrors.people ? 'text-red-500' : 'text-[#104B4D]'
                }`}
                type="number"
                min="1"
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
                onFocus={() => setFocusedInput('people')}
                onBlur={() => setFocusedInput('')}
              ></input>
            </div>
          </div>
          <div className="mx-[26px] flex h-[413px] w-[418px] flex-col rounded-xl bg-[#00474B] px-[26px]">
            <div className="mt-[58px] flex h-11 w-[331px] justify-between">
              <div className="flex-col">
                <p className="font-semibold text-white">Tip Amount</p>
                <p className="text-[#649498]">/ person</p>
              </div>
              <p className="text-[48px] leading-8 text-[#36C1B0]">
                ${(tipAmount / Number(numberOfPeople)).toFixed(2)}
              </p>
            </div>
            <div className="mt-[58px] flex h-11 w-[331px] justify-between">
              <div className="flex-col">
                <p className="font-semibold text-white">Total</p>
                <p className="text-[#649498]">/ person</p>
              </div>
              <p className="text-[48px] leading-8 text-[#36C1B0]">
                ${totalPerPerson.toFixed(2)}
              </p>
            </div>
            <div className="mt-[123px] flex justify-center">
              <motion.button
                className="h-[50px] w-[384px] rounded-lg bg-[#9FE8DF] text-center font-bold"
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SwipeTransition(TipsCalculator)

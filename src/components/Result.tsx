import React from "react";
import { DateType } from "../hooks/useDateRangeCalc"

type ResultProps = {
  calculatedDate: DateType;
 
};
export const Result:React.FC<ResultProps> = ({ calculatedDate }) => {
 
  return (
    <div className='flex justify-center items-start flex-col w-85%'>
    <p className='text-[3rem] md:text-[5rem] font-bold leading-[3rem] md:leading-[5rem]'>
      <span className='text-purple'>{calculatedDate.years != null ? calculatedDate.years : "- -"}</span> years
    </p>
    <p className='text-[3rem] md:text-[5rem] font-bold leading-[3rem] md:leading-[5rem]'>
      <span className='text-purple'>{calculatedDate.months != null ? calculatedDate.months : "- -"}</span> months
    </p>
    <p className='text-[3rem] md:text-[5rem] font-bold leading-[3rem] md:leading-[5rem]'>
      <span className='text-purple'>{calculatedDate.days != null ? calculatedDate.days : "- -"}</span> days
    </p>
  </div>
  )
}

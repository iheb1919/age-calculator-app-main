import InputNumbers from './InputsNumber'
import { FormSubmitBtn } from './FormSubmitBtn'
import { DateType, ErrorDateType } from '../hooks/useDateRangeCalc';
type FormProps = {
    date: DateType;
    setDate: React.Dispatch<React.SetStateAction<DateType>>;
    errors: ErrorDateType;
    calcDate: (e: React.FormEvent<HTMLFormElement>) => void;
  };
  
  export const Form: React.FC<FormProps> = ({ date, setDate, errors, calcDate }) => {
  return (
    <form onSubmit={calcDate} className='flex flex-col gap-5'>
    <div className="flex justify-between md:justify-start md:gap-7 w-full">
      <InputNumbers placeholder="DD" maxDigits={2} label='day' id='days' setDate={setDate} date={date} errors={errors} />
      <InputNumbers placeholder="MM" maxDigits={2} label='month' id='months' setDate={setDate} date={date} errors={errors} />
      <InputNumbers placeholder="YYYY" maxDigits={4} label='year' id='years' setDate={setDate} date={date} errors={errors} />
    </div>
    <FormSubmitBtn/>
  </form>
  )
}

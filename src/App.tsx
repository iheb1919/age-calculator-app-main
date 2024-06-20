import './App.css';
import { Result } from './components/Result';
import { Form } from './components/Form';
import { useDateRangeCalc } from './hooks/useDateRangeCalc';

function App() {
  const { date, setDate, errors, calcDate, calculatedDate } = useDateRangeCalc();

  return (
    <div className='bg-light-grey h-[100dvh] w-[100dvx] flex justify-center items-center'>
      <div className='w-[90%] max-w-[700px] max-h-[80%] flex flex-col gap-5 py-16 bg-white p-4 rounded-[20px_20px_150px_20px] md:px-16'>
        <Form date={date} setDate={setDate} errors={errors} calcDate={calcDate} />
        <Result calculatedDate={calculatedDate} />
      </div>
    </div>
  );
}

export default App;

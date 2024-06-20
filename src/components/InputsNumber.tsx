import { useState, useEffect } from 'react';

function InputNumbers({ maxDigits, id, label, placeholder, setDate, date, errors }:any) {
  const [value, setValue] = useState('');

  useEffect(() => {
  
  }, [errors, id]);

  const handleChange = (event:any) => {
    const newValue = event.target.value;
    const regex = new RegExp(`^\\d{0,${maxDigits}}$`);
    if (regex.test(newValue)) {
      setDate({ ...date, [id]: parseInt(newValue) });
      setValue(newValue);
    }
  };

  return (
    <label htmlFor={id} className="relative flex flex-col justify-center items-center w-fit gap-1">
      <h1 className={`mr-auto uppercase text-[15px]  font-bold ${errors[id] ? "text-red-500":"text-smokey-grey"}`}>{label}</h1>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`placeholder:text-smokey-grey placeholder:text-center font-bold text-[25px]
          text-black placeholder:font-bold placeholder:text-[25px] w-[90px] md:w-[120px] h-[55px] text-center 
          border ${errors[id] ? `border-red-500` : 'border-light-grey'} rounded-md focus:border-purple outline-0`}
      />
     {errors[id] && <span className="absolute top-full left-0 text-red-500 text-[.7rem] mt-1">{errors[id]}</span>}
    </label>
  );
}

export default InputNumbers;

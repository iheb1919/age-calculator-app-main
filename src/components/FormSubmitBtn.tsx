
export const FormSubmitBtn = () => {
  return (
    <div className='w-full relative flex justify-center  
              after:content-[""]
              after:absolute
              after:top-[50%]
              after:z-[1]
              after:bottom-[50%]
              after:w-full
              after:border-b-2'>
              <button
                type='submit' name='submit'
                className='shrink-0 bg-purple w-[55px] hover:bg-black
                z-[2] h-[55px] p-3 block rounded-full md:ml-[90%] transition-all duration-700 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 46 44">
                  <g fill="none" stroke="#FFF" strokeWidth="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                  </g>
                </svg>
              </button>
            </div>
  )
}

import React from 'react'

const Budget = () => {
  return (
    <div className='flex flex-col gap-y-5 justify-center min-h-screen mx-10'>
        <h2 className='font-bold text-2xl'>How would you describe your budget?</h2>
        <div className='flex flex-col gap-y-2'>
            <div className='flex gap-2'>
                <input type="radio" name="budget" id="moderate"className='' />
                <label htmlFor="moderate">Moderate Budget</label>
            </div>
            <div className='flex gap-2'>
                <input type="radio" name="budget" id="flexible"className='' />
                <label htmlFor="flexible">Flexible Budget</label>
            </div>
            <div className='flex gap-2'>
                <input type="radio" name="budget" id="not-sure"className='' />
                <label htmlFor="not-sure">Not sure</label>
            </div>
            
            
        </div>

    </div>
  )
}

export default Budget
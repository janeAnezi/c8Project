import React from 'react'

const PlanMeal = () => {
  return (
    <div className='flex flex-col gap-y-5 justify-center min-h-screen mx-10'>
        <h2 className='font-bold text-2xl'>How would you like your meal planned?</h2>
        <div className='flex flex-col gap-y-2'>
            <div className='flex gap-2'>
                <input type="radio" name="time" id="daily"className='' />
                <label htmlFor="daily">Daily</label>
            </div>
            <div className='flex gap-2'>
                <input type="radio" name="time" id="weekly"className='' />
                <label htmlFor="weekly">Weekly</label>
            </div>
            <div className='flex gap-2'>
                <input type="radio" name="time" id="occasionally"className='' />
                <label htmlFor="occasionally">Occasionally</label>
            </div>
            
            
        </div>

    </div>
  )
}

export default PlanMeal
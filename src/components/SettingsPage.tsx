

import ReactSlider from 'react-slider'
import { useContext } from 'react'
import SettingsContext, { SettingsInterface } from '~/lib/settingsContext'



const SettingsPage = ({ }) => {

    const settingsInfo = useContext<SettingsInterface>(SettingsContext)

    return (
        <div className="flex flex-col text-left w-[300px] justify-center">
            <label className='mb-2 mt-3 capitalize'>work minutes: {settingsInfo.workMins}:00</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMins}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                min={1}
                max={120}
            />
            <label className='mb-2 mt-3 capitalize'>break minutes: {settingsInfo.breakMins}:00</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMins}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
            <div onClick={() => settingsInfo.setShowSettings(false)} className="flex w-max mx-auto mt-5 bg-[rgba(255,255,255,0.1)] rounded-xl py-2 px-4 text-lg gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                </svg>
                Back
            </div>
        </div>

    )
}

export default SettingsPage


import ReactSlider from 'react-slider'
import { useContext } from 'react'
import SettingsContext, { SettingsInterface } from '~/lib/settingsContext'



const SettingsPage = ({ }) => {

    const settingsInfo = useContext<SettingsInterface>(SettingsContext)

    return (
        <div className="flex flex-col text-left w-[300px]">
            <label className='mb-2 mt-3 capitalize'>work minutes: {settingsInfo.workMins}:00</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMins}
                min={1}
                max={120}
            />
            <label className='mb-2 mt-3 capitalize'>break minutes: {settingsInfo.breakMins}:00</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMins}
                min={1}
                max={120}
            />
        </div>
    )
}

export default SettingsPage
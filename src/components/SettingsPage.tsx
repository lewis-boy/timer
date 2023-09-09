
import { FC } from 'react'
import ReactSlider from 'react-slider'




const SettingsPage = ({ }) => {
    return (
        <div className="flex flex-col text-left w-[300px]">
            <label className='mb-2 mt-3 capitalize'>work minutes:</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={45}
                min={1}
                max={120}
            />
            <label className='mb-2 mt-3 capitalize'>break minutes:</label>
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={45}
                min={1}
                max={120}
            />
        </div>
    )
}

export default SettingsPage
import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'


const ColorPicker = () => {

    const snap = useSnapshot(state);

    return (
        <div className='absolute left-full ml-3'>
            <SketchPicker
                color={snap.color}
                disableAlpha
                onChange={(color) => state.color = color.hex}
                presetColors={[
                    '#CCC',
                    '#EFBD4E',
                    '#F2A900',
                    '#7098DA',
                    '#512314'
                ]}
            />

        </div>
    )
}

export default ColorPicker
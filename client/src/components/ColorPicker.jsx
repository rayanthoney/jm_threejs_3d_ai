import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        // presetColors={[
        //   "#facc79",//mustard
        //   "#4ea09a",//teal
        //   "#982848",//plum
        //   "#077bae",//saphire
        //   "#b9282b",//Cherry
        //   "#794734",//chestnut
        //   "#b2b1ad",//ice gray
        //   "#e7af37",//gold
        //   "#1e1e1e",//black
        //   "#dc6e26",//tangerine
        //   "#f9beae",//salmon
        //   "#9dd5ef",//sky

        // ]}
        onChange={(color) => state.color = color.hex }
      />
    </div>
  )
}

export default ColorPicker
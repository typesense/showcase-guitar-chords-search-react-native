//https://github.com/facebook/hermes/issues/948#issuecomment-1484240071
import TextEncoder from 'text-encoding';
global.TextEncoder = TextEncoder;

import { renderToStaticMarkup } from 'react-dom/server';
// @ts-ignore
import Chord from '@tombatossals/react-chords/lib/Chord';
export type _chordPosition = {
  frets: number[];
  fingers: number[];
  barres: number[];
  capo?: boolean;
};
export default function RenderChord(chord: _chordPosition) {
  // check if rem unit exists
  // const result = [...svg.matchAll(new RegExp('([0-9]*[.])?[0-9]+rem', 'gi'))];
  // if (result.length > 0) {
  //   console.log(result);
  //   console.log(svg);
  // }

  return renderToStaticMarkup(
    Chord({
      chord,
      instrument: {
        strings: 6,
        fretsOnChord: 4,
        name: 'Guitar',
        keys: [],
        tunings: {
          standard: ['E', 'A', 'D', 'G', 'B', 'E'],
        },
      },
    })
  ) // app will crash if we don't change rem to px
    .replaceAll('0.7rem', '11px')
    .replaceAll('0.3rem', '5px')
    .replaceAll('0.25rem', '4px');
}

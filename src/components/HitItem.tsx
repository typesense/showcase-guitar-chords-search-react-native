import RenderChord from '@/utils/reactChords';
import { Text, StyleSheet } from 'react-native';
import { SvgCss } from 'react-native-svg/css';

export default function HitItem({ hit }) {
  return (
    <>
      <Text style={s.h3}>{hit.key + hit.suffix}</Text>
      <SvgCss style={s.chordSvg} xml={RenderChord(hit.positions[0])} />
    </>
  );
}
const s = StyleSheet.create({
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '-10%',
  },
  chordSvg: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
});

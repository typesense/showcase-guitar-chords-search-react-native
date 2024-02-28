import { TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { GithubIcon } from './icons';
import useStyleUnit from '@/hooks/useStyleUnit';

export default function GithubLink() {
  const { vw, vh } = useStyleUnit();

  return (
    <TouchableOpacity
      style={{ ...s.GithubLink, marginRight: vw(4), top: vh(14) }}
      onPress={() =>
        Linking.openURL(
          'https://github.com/typesense/showcase-guitar-chords-search-react-native'
        )
      }
    >
      <GithubIcon style={s.icon} />
    </TouchableOpacity>
  );
}
const s = StyleSheet.create({
  GithubLink: {
    position: 'absolute',
    right: 0,
    zIndex: 100,
  },
  icon: {
    width: 30,
    aspectRatio: 1 / 1,
  },
});

import useStyleUnit from '@/hooks/useStyleUnit';
import STYLE_VARIABLES from '@/utils/STYLE_VARIABLES';
import { View, Text, StyleSheet, Linking } from 'react-native';

export default function Heading() {
  const { vh } = useStyleUnit();

  return (
    <View style={{ ...s.Heading, marginBottom: vh(8) }}>
      <Text style={s.h1}>Guitar chords search</Text>
      <Text>
        powered by{' '}
        <Text
          style={s.pink}
          onPress={() => Linking.openURL('https://typesense.org/')}
        >
          <Text>
            Type<Text style={s.bold}>sense|</Text>
          </Text>
        </Text>
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  Heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  pink: {
    color: STYLE_VARIABLES.__accent,
  },
  bold: {
    fontWeight: 'bold',
  },
});

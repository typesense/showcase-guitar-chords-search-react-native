import STYLE_VARIABLES from '@/utils/STYLE_VARIABLES';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from 'react-native';

export default function Button({
  title,
  ...props
}: { title: string } & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={{ ...s.loginScreenButton, opacity: props.disabled ? 0.5 : 1 }}
      {...props}
    >
      <Text style={s.loginText}>{title}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  loginScreenButton: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    backgroundColor: STYLE_VARIABLES.__btnBg,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

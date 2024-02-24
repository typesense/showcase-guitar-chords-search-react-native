import { useWindowDimensions } from 'react-native';

export default function useStyleUnit() {
  const { width, height } = useWindowDimensions();

  const vw = (num: number) => num * (width / 100);

  const vh = (num: number) => num * (height / 100);

  return { vw, vh };
}

import Lottie from 'react-lottie';
import animationData from '@assets/search_animation';

export default function Search() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400} />;
}

import Lottie from 'react-lottie';
import animationData from '../../../lotties/meditate.json'

const MedLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
        />
      </div>
    );
  }

  export default MedLottie;
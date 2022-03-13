import Lottie from 'react-lottie';
import animationData from '../../lotties/flyinglottie.json'
import styled, { keyframes } from "styled-components";
import { slideInLeft } from 'react-animations';

const SlideInLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeftDiv = styled.div`
animation-name: drive;
animation-duration: 8s;
animation-fill-mode: forward;
animation-iteration-count: infinite;
animation-timing-function: linear;

@keyframes drive{
    from{ transform: translateX(-800px)}
    to{ transform: translateX(800px)}
  
  }
`;

const FlyingLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <SlideInLeftDiv className="flyinglottie">
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
      </SlideInLeftDiv>
    );
  }

  export default FlyingLottie;
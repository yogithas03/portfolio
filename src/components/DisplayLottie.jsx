import React, { Component, Suspense } from 'react';
import LottieComponent from 'lottie-react';

const Lottie = LottieComponent.default ? LottieComponent.default : LottieComponent;

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div onClick={() => null}>
          <Lottie
            animationData={defaultOptions.animationData}
            loop={defaultOptions.loop}
            autoplay={defaultOptions.autoplay}
          />
        </div>
      </Suspense>
    );
  }
}

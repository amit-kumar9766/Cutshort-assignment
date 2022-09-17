import React from 'react'
import Steps from '../components/Steps'
import completionIcon from '../components/assets/confirmation.png'
import { Button } from '../components/Button/Button'

const OnboardingCompletion = () => {
  return (
    <form className="form">
      <Steps totalSteps={4} currentSteps={4} />
      <img
        src={completionIcon}
        alt="completion-icon"
        height="100px"
        width="100px"
      />

      <h3>Congratulations, Eren</h3>
      <p>You have completed onboarding , you can start using the Eden! </p>

      <Button>Launch Eden</Button>
    </form>
  )
}

export default OnboardingCompletion

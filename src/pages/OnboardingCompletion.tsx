import React from 'react'
import Steps from '../components/Steps'
import { Title } from '../components/Title'
import completionIcon from '../components/assets/completion.png'
import { Button } from '../components/Button/Button'

const OnboardingCompletion = () => {
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Title />
      <Steps totalSteps={4} currentSteps={4} />
      <img src={completionIcon} />

      <h3>Congratulations, Eren</h3>
      <p>You have completed onboarding , you can start using the Eden! </p>

      <Button>Launch Eden</Button>
    </form>
  )
}

export default OnboardingCompletion

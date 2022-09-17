import React from 'react'
import { useState } from 'react'
import { Button } from '../components/Button/Button'
import Input from '../components/Input'
import Steps from '../components/Steps'
import './pages.css'

interface OnboardingNameProps {
  change: (a: string) => void
}
const OnboardingName = ({ change }: OnboardingNameProps) => {
  const [fullName, setFullName] = useState<string>('')
  const [displayName, setDisplayName] = useState<string>('')
  const onSubmitName = () => {
    change('secondPage')
  }

  return (
    <form className="form" onSubmit={onSubmitName}>
      <Steps totalSteps={4} currentSteps={1} />

      <h3>Wecome !First things first...</h3>
      <p>You can always change them later.</p>

      <div className="input-form">
        <Input
          label="Full Name"
          placeholder="Steve Jobs"
          value={fullName}
          setValue={setFullName}
        />
        <Input
          label="Display Name"
          placeholder="Steve "
          value={displayName}
          setValue={setDisplayName}
        />
      </div>
      <Button onClick={onSubmitName} disabled={!fullName || !displayName}>
        Create Workspace
      </Button>
    </form>
  )
}

export default OnboardingName

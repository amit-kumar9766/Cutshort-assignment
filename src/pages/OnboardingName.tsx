import React from 'react'
import { useState } from 'react'
import { Button } from '../components/Button/Button'
import Input from '../components/Input'
import Steps from '../components/Steps'
import { Title } from '../components/Title'

const OnboardingName = ({change}:any) => {
  const [fullName, setFullName] = useState<string>('')
  const [displayName, setDisplayName] = useState<string>('');
  const onSubmitName=()=>{
    //router.push()
    change("secondPage")
  }
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onSubmit={onSubmitName}
    >
      <Title />
      <Steps totalSteps={4} currentSteps={1} />

      <h3>Wecome !First things first...</h3>
      <p>You can always change them later.</p>

      <Input
        label="Full Name"
        placeholder="Steve Jobs"
        value={fullName}
        //setValue={(e: any) => setFullName(e.target.value)}
      />
      <Input
        label="Display Name"
        placeholder="Steve "
        value={displayName}
        //onInputChange={(e: any) => setDisplayName(e.target.value)}
      />
       <Button onClick={onSubmitName}>Create Workspace</Button>
    </form>
  )
}

export default OnboardingName

import React from 'react'
import { useState } from 'react'
import { Button } from '../components/Button/Button'
import Input from '../components/Input'
import Steps from '../components/Steps'
import { Title } from '../components/Title'

const OnboardingName = ({change}:any) => {
  const [workspaceName, setWorkSpaceNameName] = useState<string>('')
  const [workspaceUrl, setWorkspaceUrl] = useState<string>('')
  const onSubmitHome=()=>{
    //router.push()
    change("secondPage")
  }
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onSubmit={onSubmitHome}
    >
      <Title />
      <Steps totalSteps={4} currentSteps={2} />

      <h3>Lets set up a home for all your work</h3>
      <p>You can always create another workspace later.</p>

      <Input
        label="Workspace Name"
        placeholder="Eden"
        value={workspaceName}
        //setValue={(e: any) => setFullName(e.target.value)}
      />
      <Input
        label="Workspace URL (optional)"
        placeholder="Example "
        value={workspaceUrl}
        //onInputChange={(e: any) => setDisplayName(e.target.value)}
      />
      <Button onClick={onSubmitHome}>Create Workspace</Button>
    </form>
  )
}

export default OnboardingName

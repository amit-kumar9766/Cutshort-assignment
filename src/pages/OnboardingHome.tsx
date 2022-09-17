import React from 'react'
import { useState } from 'react'
import { Button } from '../components/Button/Button'
import Input from '../components/Input'
import Steps from '../components/Steps'
import { Title } from '../components/Title'

const OnboardingName = ({ change }: any) => {
  const [workspaceName, setWorkSpaceName] = useState<string>('')
  const [workspaceUrl, setWorkspaceUrl] = useState<string>('')
  const onSubmitHome = () => {
    //router.push()
    change('thirdPage')
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

      <div className="input-form">
        <Input
          label="Workspace Name"
          placeholder="Eden"
          value={workspaceName}
          setValue={setWorkSpaceName}
        />
        <Input
          label="Workspace URL (optional)"
          placeholder="Example "
          value={workspaceUrl}
          setValue={setWorkspaceUrl}
          addOnBefore={<p className="add-on">www.eden.com/</p>}
        />
      </div>
      <Button onClick={onSubmitHome} disabled={!workspaceName && !workspaceUrl}>
        Create Workspace
      </Button>
    </form>
  )
}

export default OnboardingName

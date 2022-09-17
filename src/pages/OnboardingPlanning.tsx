import { useState } from 'react'
import Steps from '../components/Steps'
import Card from '../components/Card/Card'
import personIcon from '../components/assets/personIcon.png'
import groupIcon from '../components/assets/group-icon.png'
import { Button } from '../components/Button/Button'

const OnboardingPlanning = ({ change }: any) => {
  const [selectCard, setSelectCard] = useState<number>(0)
  const onSubmitPlan = () => {
    change('fourthPage')
  }

  return (
    <form className="form" onSubmit={onSubmitPlan}>

      <Steps totalSteps={4} currentSteps={3} />

      <h3>How are you planning to use Eden?</h3>
      <p>We'll streamline your setup experience accordingly.</p>

      <div className="card-class">
        <Card
          title="For myself"
          Avatar={<img src={personIcon} alt="person-icon" />}
          desc="Write Better.Think more clearly.Stay organized"
          onClick={() => setSelectCard(1)}
          isSelected={selectCard === 1}
        />
        <Card
          title="With my team"
          Avatar={<img src={groupIcon} alt="person-icon" />}
          desc="Wikis ,docs,tasks and projects all in one place"
          onClick={() => setSelectCard(2)}
          isSelected={selectCard === 2}
        />
      </div>

      <Button onClick={onSubmitPlan} disabled={!selectCard}>
        Create Workspace
      </Button>
    </form>
  )
}

export default OnboardingPlanning

import React from 'react'
import { useState } from 'react'
import Input from '../components/Input'
import Steps from '../components/Steps'
import { Title } from '../components/Title'
import Card from '../components/Card/Card'
import personIcon from '../components/assets/personIcon.png'
import groupIcon from '../components/assets/group-icon.png'
import { Button } from '../components/Button/Button'

const OnboardingPlanning = ({change}:any) => {
  const onSubmitPlan = () => {
    change("fourthPage")
  }
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onSubmit={onSubmitPlan}
    >
      <Title />
      <Steps totalSteps={4} currentSteps={3} />

      <h3>How are you planning to use Eden?</h3>
      <p>We'll streamline your setup experience accordingly.</p>

      <Card
        title={'For myself'}
        Avatar={<img src={personIcon}  alt="person-icon"/>}
        desc="Write Better.Think more clearly.Stay organized"
        onClick={() => {}}
      />
      <Card
        title={'With my team'}
        Avatar={<img src={groupIcon}  alt="person-icon"/>}
        desc="Wikis ,docs,tasks and projects all in one place"
        onClick={() => {}}
      />
      {/* <Card  avatar={src:groupIcon ,alt:"person-icon"} /> */}
      <Button>Create Workspace</Button>
    </form>
  )
}

export default OnboardingPlanning

import React from 'react'
import styled from 'styled-components'
import { Label } from 'src/components/atoms/Label'
import { CompanyName } from 'src/components/atoms/CompanyName'
import { SkillText } from 'src/components/atoms/SkillText'
import { WorkImage } from '../atoms/WorkImage'
import { Spacer } from '../atoms/Spacer'
type Props = {
  className?: string
  labelText: string
  companyName: string
  skillText: string
}
export const FCWorkCard: React.FC<Props> = ({
  className,
  labelText,
  companyName,
  skillText
}) => {
  return (
    <div className={className}>
      <WorkImage src="logo.png" />
      <Spacer marginBottom={25} />
      <Label text={labelText} />
      <Spacer marginBottom={10} />
      <CompanyName text={companyName} />
      <Spacer marginBottom={10} />
      <SkillText text={skillText} />
      <Spacer marginBottom={65} />
    </div>
  )
}
export const WorkCard = styled(FCWorkCard)`
`
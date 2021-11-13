import React from 'react'
import styled from 'styled-components'
import { Label } from 'src/components/atoms/Label'
import { CompanyName } from 'src/components/atoms/CompanyName'
import { SkillText } from 'src/components/atoms/SkillText'
import { WorkImage } from '../atoms/WorkImage'
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
      <Label text={labelText} />
      <CompanyName text={companyName} />
      <SkillText text={skillText} />
    </div>
  )
}
export const WorkCard = styled(FCWorkCard)`
`
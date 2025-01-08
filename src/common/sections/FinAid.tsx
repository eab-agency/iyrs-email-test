import React from 'react'
import {Container, Wrapper} from '@/common/components/Container'

interface FinAidProps {
  content: React.ReactNode
}

export default function FinAid({content}: FinAidProps) {
  return (
    <Container
        htmlTag="section"
        alignItems="items-center"
        className="financial-aid"
      >
        <Wrapper layout="row" width='full' className="w-full md:flex-row">
          {content}
        </Wrapper>
      </Container>
  )
}

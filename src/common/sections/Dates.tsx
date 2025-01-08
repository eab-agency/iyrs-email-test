import React from 'react'
import { Container, Wrapper } from '@/common/components/Container'

interface DatesProps{
    content: React.ReactNode
}

export default function Dates({content}: DatesProps) {
  return (
    <Container htmlTag="section" width="wide" className="dates bg-primary-black py-fluid-2xl mx-auto text-white" alignItems="items-center">
        <Wrapper layout="row" width="narrow" className="w-11/12 max-w-narrow">
            {content}
        </Wrapper>
      </Container>
  )
}

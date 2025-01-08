import React from 'react'

import { Container, Wrapper } from '@/common/components/Container'

interface SchoolContentProps {
  content: React.ReactNode
}

export default function SchoolContent({content}: SchoolContentProps) {
  return (
    <Container htmlTag="section" justifyContent="justify-center" alignItems="items-center" className="school-content py-fluid-xl px-fluid-xl">
        <Wrapper width="wide" className="container grid md:grid-cols-2 gap-fluid-xl">
          {content}          
        </Wrapper>
      </Container>
  )
}

import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText, CCol } from '@coreui/react'
export const MenuCard = (props) => {
  return (
    <CCol>
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={props.imageUrl} />
        <CCardBody>
          <CCardText>{props.text}</CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

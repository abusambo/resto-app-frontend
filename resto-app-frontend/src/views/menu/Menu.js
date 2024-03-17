import React from 'react'
import { CRow } from '@coreui/react'
import { MenuCard } from '../../components/MenuCard'
const Menu = () => {
  return (
    <>
      <CRow className="d-flex justify-content-between pb-3">
        <h2>Menu</h2>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-primary">
            Add item
          </button>
        </div>
      </CRow>

      <CRow xs={{ cols: 1, gutter: 2 }} sm={{ cols: 1, gutter: 2 }} lg={{ cols: 3, gutter: 4 }}>
        <MenuCard
          text="Some quick example text to build on the card title and make up the bulk of the
              card&#39;s content."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknZTMpLO8b1KObbbOdTxu0sEu1jw7C602dg&usqp=CAU"
        />
        <MenuCard
          text="Some quick example text to build on the card title and make up the bulk of the
              card&#39;s content."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknZTMpLO8b1KObbbOdTxu0sEu1jw7C602dg&usqp=CAU"
        />
        <MenuCard
          text="Some quick example text to build on the card title and make up the bulk of the
              card&#39;s content."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknZTMpLO8b1KObbbOdTxu0sEu1jw7C602dg&usqp=CAU"
        />
        <MenuCard
          text="Some quick example text to build on the card title and make up the bulk of the
              card&#39;s content."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknZTMpLO8b1KObbbOdTxu0sEu1jw7C602dg&usqp=CAU"
        />
      </CRow>
    </>
  )
}

export default Menu

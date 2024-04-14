import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <>
     <MDBNavbar light bgColor='light' className='nav-bg'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://static.thenounproject.com/png/860837-200.png'
              height='50'
              alt=''
              loading='lazy'
            />
              Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header

import React, { useState } from "react"
import { Squeeze as Hamburger } from 'hamburger-react'
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar";

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isOpen, setOpen] = useState(false)

  const toggleHamburger = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <div className="header-nav">
        <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
      <div
          className="hamburger d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none"
          onClick={toggleHamburger}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      
      <style jsx>{`
        .header-nav {
          display: ${isOpen ? 'inline' : 'none'};
          background-color: grey;
          height: 100%;
          width: 100vw;
          position: absolute;
          z-index: 100;
          animation: fadein 0.3s ease-in 0s forwards;
        }

        .hamburger {
          position: fixed;
          padding-top: 10px;
          margin-right: 10px;
          right: 0;
          z-index: 150;
        }

        @keyframes fadein {
          0%{
            opacity: 0;
          }
          100%{
            opacity: 1;
          }
        }
      `}
      </style>
    </>
  )
}

export default Header
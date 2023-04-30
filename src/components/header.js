import React, { useState } from "react"
import { Squeeze as Hamburger } from 'hamburger-react'
import { useStaticQuery, graphql, Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  // <Link getProps={isActive} {...props} />
  <Link {...props} />
)

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
        <nav className="nav">
          <div>
            <ul className="list-unstyled navbar-nav">
              <li className="nav-item">
                <ExactNavLink 
                  to="/works/vnospinari0"
                >
                  _vnospinari0
                </ExactNavLink>
              </li>
              <li className="nav-item">
                <ExactNavLink
                  // to="/works/vnente"
                  to="/works/void"
                >
                  _vnente
                </ExactNavLink>
              </li>
              <li className="nav-item">
                <ExactNavLink
                  // to="/works/vnimene"
                  to="/works/void"
                >
                  _vnimene
                </ExactNavLink>
              </li>
              <li className="nav-item pt-5">
                <ExactNavLink
                  to="/archives/vno_sito"
                >
                  vn0 _ sit0
                </ExactNavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
          className="hamburger"
          onClick={toggleHamburger}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      
      <style jsx="true">{`
        .header-nav {
          position: fixed;
          display: ${isOpen ? 'inline' : 'none'};
          background-color: rgba(0,0,0,0.7);
          height: 100%;
          width: 100vw;
          z-index: 100;
        }

        .hamburger {
          position: fixed;
          padding-top: 10px;
          margin-right: 10px;
          right: 0;
          z-index: 150;
        }
      `}
      </style>
    </>
  )
}

export default Header
import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link non-active"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navigation = ({props}) => {
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

  const isIndex = (window.location.pathname == '/')

  return (
    <>
      <h6
        className="nav-button-top text-secondary text-top"
        onClick={toggleHamburger}>
        vnin_izi0
      </h6>
      <div className="header-nav">
        <nav className="nav">
          <div>
            <ul className="list-unstyled navbar-nav">
              <li className="nav-item pb-4">
                <ExactNavLink
                  to="/archives/vno_sito"
                >
                  vn0 _ sit0
                </ExactNavLink>
              </li>

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
              <li className="nav-item test">
                <ExactNavLink
                  // to="/works/vnimene"
                >
                  _vnimene
                </ExactNavLink>
              </li>
            </ul>
          </div>
        </nav>
        <h6 className="nav-button-bottom text-secondary">
          <p className="email pb-4">almrt@vni.works</p>
          <Link
            to="/"
            className="text-secondary text-top">
            vnin_izi0
          </Link>
        </h6>
      </div>
      
      <style jsx="true">{`
        .navbar-nav .nav-link.non-active,
        .test
        {
          visibility: ${isOpen ? 'visible' : 'hidden'}!important;
        }

        .nav-button-top {
          position: absolute;
          top: 0;
          right: 3rem;
          text-align: right!important;
          z-index: 100;
        }

        .nav-button-bottom {
          position: absolute;
          bottom: 1rem;
          right: 3rem;
          text-align: right!important;
          z-index: 100;
          visibility: ${isIndex ? 'hidden' : 'visible'}!important;
        
          .email {
            margin-bottom: 0.5rem;
            padding: 0;
          }
        }
      `}
      </style>
    </>
  )
}

export default Navigation
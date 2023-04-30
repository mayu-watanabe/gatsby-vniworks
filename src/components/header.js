import React, { useState } from "react"
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
      <h5
        onClick={toggleHamburger}
        toggled={isOpen} toggle={setOpen}
        className="nav-button-open text-braille text-secondary">
        &#73;&#224;&#234;&#111;&#36;
      </h5>
      <div className="header-nav">
        <nav className="nav">
          <div>
            <ul className="list-unstyled navbar-nav">
              <h5 className="text-braille text-white-50">&#36;&#54;&#76;&#45;&#82;&#113;</h5>
              <li className="nav-item pb-5">
                <ExactNavLink
                  onClick={toggleHamburger}
                  to="/archives/vno_sito"
                >
                  vn0 _ sit0
                </ExactNavLink>
              </li>

              <h5 className="text-braille text-white-50">&#114;&#110;&#234;&#44;&#90;</h5>
              <li className="nav-item">
                <ExactNavLink 
                  onClick={toggleHamburger}
                  to="/works/vnospinari0"
                >
                  _vnospinari0
                </ExactNavLink>
              </li>
              <li className="nav-item">
                <ExactNavLink
                  onClick={toggleHamburger}
                  // to="/works/vnente"
                  to="/works/void"
                >
                  _vnente
                </ExactNavLink>
              </li>
              <li className="nav-item">
                <ExactNavLink
                  onClick={toggleHamburger}
                  // to="/works/vnimene"
                  to="/works/void"
                >
                  _vnimene
                </ExactNavLink>
              </li>
            </ul>
          </div>
        </nav>
        <h5 className="nav-button-top text-braille text-white-50">
          <Link
            onClick={toggleHamburger}
            to="/">
            &#68;&#76;&#84;&#89;&#97;
          </Link>
        </h5>
      </div>
      
      <style jsx="true">{`
        .header-nav {
          position: fixed;
          display: ${isOpen ? 'inline' : 'none'};
          background-color: rgba(0,0,0,0.7);
          backdrop-filter: blur(2px);
          height: 100%;
          width: 100vw;
          z-index: 100;
        }

        .nav-button-open {
          display: ${isOpen ? 'none' : 'inline'};
          position: fixed;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          cursor: pointer;
        }
      `}
      </style>
    </>
  )
}

export default Header
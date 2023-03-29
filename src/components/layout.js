import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Header from "./header"
import "./../css/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <div className="d-none d-lg-block d-xl-block d-xxl-block">
          <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
        </div>
        <div className="row">
          <div className="d-none d-lg-block d-xl-block col-md-0 col-lg-3 p-0">
          </div>
          <div className="col-md-12 col-lg-9 p-0">
            <main>
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

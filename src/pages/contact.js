import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const Contactage = () => (
  <Layout>
    <div className="py-5">
      <p>almrt@vni.works</p>
    </div>
  </Layout>
)

export default Contactage

export const Head = () => (
    <Seo title="contact"/>
)
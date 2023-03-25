import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="container px-5 color-text">
      <StaticImage
        src="../images/D85_7973.jpg"
        layout="fullWidth"
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt="D85_7973"
        className="img-fluid"
      />
      <h2 className="color-title py-4">_vnimene</h2>
      <p className="my-1">texttexttexttexttext</p>
      <p className="my-1">texttexttexttexttext</p>
      <p className="my-1">texttexttexttexttext</p>
      <p className="my-1">texttexttexttexttext</p>
      <p className="my-1">texttexttexttexttext</p>
    </div>
  </Layout>
)

export default SecondPage

export const Head = () => (
    <Seo title="_vnimene" />
)

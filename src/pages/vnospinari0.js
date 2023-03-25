import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="container px-5 color-text">
      <StaticImage
        src="../images/WIDE_COMPOSITION_BW.jpg"
        layout="fullWidth"
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt="WIDE_COMPOSITION_BW"
        className="img-fluid"
      />
      <h2 className="color-title py-4">_vnospinari0</h2>
      <p className="my-1">texttexttexttexttext</p>
      <p className="my-1">texttexttexttexttext</p>
      <p className="my-1">texttexttexttexttext</p>
      <p className="my-1">texttexttexttexttext</p>
      <p className="my-1">texttexttexttexttext</p>
      <StaticImage
        src="../images/horizontal_compisition.png"
        layout="fullWidth"
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt="A Gatsby astronaut"
        className="img-fluid"
      />
    </div>
  </Layout>
)

export default SecondPage

export const Head = () => (
    <Seo title="_vnospinari0" />
)

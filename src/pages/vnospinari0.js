import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="container color-text">
      <StaticImage
        src="../images/WIDE_COMPOSITION_BW.jpg"
        layout="fullWidth"
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt="WIDE_COMPOSITION_BW"
        className="img-fluid"
      />
      <div className="page-text">
        <h2 className="color-title py-4">_vnospinari0</h2>
        <p className="my-0">a chain - begins / ends</p>
        <p className="my-0">a body as its closure</p>
        <p className="my-0 pb-5">a bridge linking selves</p>
        <p className="my-0">the primary shapes</p>
        <p className="my-0">circle _ triangle then square</p>
        <p className="my-0">square _ triangle then circle</p>
        <p className="my-0 pb-5">the twisted ladder</p>
        <p className="my-0">thorns resemble calls</p>
        <p className="my-0">calls resemble wounds</p>
        <p className="my-0">wounds resemble rhythms</p>
        <p className="my-0 pb-5">rhythms resemble thorns</p>
      </div>
      <div className="pb-5">
        <StaticImage
          src="../images/horizontal_compisition.png"
          layout="fullWidth"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="A Gatsby astronaut"
          className="img-fluid"
        />
      </div>
    </div>
  </Layout>
)

export default SecondPage

export const Head = () => (
    <Seo title="_vnospinari0" />
)

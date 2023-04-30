import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"

const Page = () => (
  <Layout>
    <div className="slide-image-container">
      <div className="slide-image">
        <div className="slide-empty-box"></div>
        <StaticImage
          src="../../images/vn0_sit0/invite_jp.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="vn0_sit0"
        />
      </div>
    </div>

    <div className="color-text py-5">
      <p className="color-title">[ vn0 _ sit0 ]</p>
      <p className="my-0">an exhibition of works by maurizio altieri</p>
      <p className="my-0 pt-4">location : fer travail</p>
      <p className="my-0">1-20-10 setagaya setagaya-ku tokyo</p>
      <p className="my-0 pt-4">april 29 - may 30<span className="ps-4">10:00 am - 7:00 pm</span></p>
      <p className="my-0 pt-4">email almrt@vni.works to make a reservation .</p>
      <p className="my-0 pt-4">*please let us know your name, contact information, and the desired date and time you wish to view the exhibition .</p>
    </div>
  </Layout>
)

export default Page

export const Head = () => (
    <Seo title="vn0 _ sit0" />
)

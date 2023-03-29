import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="container color-text">
      <StaticImage
        src="../images/egg_touch_chest.png"
        layout="fullWidth"
        quality={95}
        formats={["AUTO", "WEBP"]}
        alt="egg_touch_chest"
        className="img-fluid"
      />
      <div className="page-text">
        <h2 className="color-title py-4">_vnente</h2>
        <p className="my-0 pb-5">The shaping of an oval form through an empirical / alchemical approach .</p>
        <p className="my-0">The experimenting while looking for the minimum balance of the base of the human</p>
        <p className="my-0">figure , in movement , has led to the carving out of the negative egg and the subsequent cut</p>
        <p className="my-0">of the two halves, relating to the anatomical detail of the arch of the foot .</p>
        <p className="my-0">The gesture has led to the definition of a form that now seems to be calling to be handled ,</p>
        <p className="my-0">twisted within its irregular split axes , while interrupting the magnetic forces holding together</p>
        <p className="my-0 pb-4">the two halves .</p>
      </div>
      <div className="">
        <StaticImage
          src="../images/DSC08494_BW.png"
          layout="fullWidth"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="DSC08494_BW"
          className="img-fluid"
        />
      </div>
      <div className="page-text">
        <p className="my-0 pt-4">Thus revealing the third ear within .</p>
        <p className="my-0">The third ear stands alone aside .</p>
        <p className="my-0">The third ear is held as a complementary form within the partial egg .</p>
        <p className="my-0">The egg might be magnetically attracted to its complementary , partial , hidden form , at the</p>
        <p className="my-0">diaphragm’s height .</p>
        <p className="my-0">Symbolically closer to the diaphragm , its inner sound .</p>
        <p className="my-0 pb-5">To be auscultated .</p>
      </div>
    </div>
  </Layout>
)

export default SecondPage

export const Head = () => (
    <Seo title="_vnente" />
)

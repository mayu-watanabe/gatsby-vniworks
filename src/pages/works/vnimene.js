import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import {Seo} from "../../components/seo"

const Page = () => (
  <Layout>
    <div className="slide-image-container">
      <div className="slide-image" id="image-area">
        <div className="slide-empty-box"></div>
        <StaticImage
          src="../../images/D85_7973.jpg"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="D85_7973"
        />
        <StaticImage
          src="../../images/arm.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="arm"
        />
        <StaticImage
          src="../../images/shirt_grey.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="shirt_grey"
        />
        <StaticImage
          src="../../images/placket.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="placket"
        />
      </div>
    </div>

    <div className="color-text py-5">
      <p className="color-title">[ _vnimene ]</p>
      <p className="my-0">a membrane describing the first need for the daily ritual contact with one’s skin</p>
      <p className="my-0">the organic details embody a condition of liquid, hidden, intimate</p>
      <p className="my-0 pt-4">the study of a shirt that unfolds bi-dimensionally</p>
      <p className="my-0">tracing a continuous line on a single piece that favours the fold [curve] to the radical [straight] cut</p>
      <p className="my-0">an erfonomic romance</p>
      <p className="color-title pt-5">vnimene [construction]</p>
      <p className="my-0">volumes are altered to visualise , in three dimensions , the structures</p>
      <p className="my-0">that historically distinguish the shirt object</p>
      <p className="my-0">-re-engineered :</p>
      <p className="my-0 pt-4">the neck</p>
      <p className="my-0">_ strictly closed _ reveals its front end , east [the model without collar] meeting west [the model with collar] in a complementary volume, created through an external / internal continuum fold construction</p>
      <p className="my-0 pt-4">the closure</p>
      <p className="my-0">_ through the partial placket _ linking to the neck itself and clavicle [ origami detail ] a micro sequence of pleats , controlling the curve - gravitational entity</p>
      <p className="my-0 pt-4">the wrist</p>
      <p className="my-0">_ repositioned higher _ reveals itself within its hand in motion highlighted by the spiral construction</p>
      <p className="my-0">[ origami detail ] a micro sequence of pleats , controlling the curve - lateral entity</p>
      <p className="my-0 pt-4">the final perimeter</p>
      <p className="my-0">_ through the side hems _ hugs the torso</p>
      <p className="my-0 pt-4">hand stitching reveals the stitch . machine stitching conceals the stitch</p>
    </div>
  </Layout>
)

export default Page

export const Head = () => (
    <Seo title="_vnimene" />
)

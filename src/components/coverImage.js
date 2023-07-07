import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"

const CoverImage = () => {
  const location = useLocation()
  const isActive = (location.pathname == '/') 
  return (
    <>
      <div className={`cover-image ${isActive ? "active" : ""}`}>
        <StaticImage
          src="../images/vn0_sit0/invite_eng.png"
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="vn0_sit0"
          />
      </div>
      <style jsx="true">{`
        .cover-image {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-30%);
          height: 70vh;
          z-index: -50;
        }
        .cover-image img {
          height: 70vh;
          object-fit: contain!important;
          opacity: 0.3!important;
        }
        .cover-image.active img{
          opacity: 1!important;
        }
      `}
      </style>
    </>
  )
}

export default CoverImage
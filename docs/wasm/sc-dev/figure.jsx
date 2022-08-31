import React  from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Figure({src, caption}) {
  return (
    <center>
      <figure>
        <img src={src} alt={caption} width="460px"></img>
        <figcaption>{caption}</figcaption>
      </figure>
    </center>
  )
}
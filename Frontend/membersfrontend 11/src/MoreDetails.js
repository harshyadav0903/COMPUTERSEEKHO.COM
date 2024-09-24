import React from 'react'
import { useParams } from 'react-router-dom'

export default function MoreDetails() {
   const id= useParams("id");
  return (
    <div>{id}</div>
  )
}

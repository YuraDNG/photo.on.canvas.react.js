import React from "react"

import "./video.css"

export const Video: React.FC = () => {
  var videoURL = "https://instagram.flwo1-1.fna.fbcdn.net/v/t50.2886-16/109714132_300142651099067_3625260709784846051_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.flwo1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=m_DswIXCxGIAX-j1wrn&vs=18063665236242828_3547551887&_nc_vs=HBksFQAYJEdOUWFpZ2E3eHhsb19oQUJBT1BfNTNob2cwOHlia1lMQUFBRhUAAsgBABUAGCRHTTZ5NkFZMVVIdHdaQTBCQURDazVMRlhNb0FzYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaYjZWz2LOWQBUCKAJDMywXQDWqfvnbItEYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=965324303f&oe=5FC312D3&oh=865fb7cc1a41a5a77b0a61117d768ec2"

  return <>
    <video className="video video-item" src={videoURL} controls={true} />
  </>
}
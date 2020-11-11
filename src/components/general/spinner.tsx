import React from "react"

export const Spinner: React.FC = () => {

  return <>
    <div 
      className="d-flex justify-content-center"
      style={{marginTop: "10%"}}
    >
      <div 
        className="spinner-border text-primary" 
        style={{width: "3rem", height: "3rem"}} 
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </>
}
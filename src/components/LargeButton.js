import { useState, useEffect } from 'react';

import { blue, red } from "../Swatches";

const LargeButton = (props) => {
  const [buttonStyle, setButtonStyle] = useState({})
  
  useEffect(() => {
    customStyle()
  }, [])

  const customStyle = () => {
    var bgColor = bgColorSuccess()

    if (props.type == 'success') {
      bgColor = bgColorSuccess()
    } else if (props.type == 'danger') {
      bgColor = bgColorDanger()
    }

    setButtonStyle({
      backgroundColor: bgColor,
      color: 'white',
      fontWeight: 600
    })
  }

  const bgColorSuccess = () => {
    var bgColor = blue.PRIMARY.bgColor

    if (props.color == 'primary') {
      bgColor =  blue.PRIMARY.bgColor
    } else if (props.color == 'secondary') {
      bgColor = blue.SECONDARY.bgColor
    } else if (props.color == 'tertiary') {
      bgColor = blue.TERTIARY.bgColor
    }

    return bgColor
  }

  const bgColorDanger = () => {
    var bgColor = red.PRIMARY.bgColor
    
    if (props.color == 'primary') {
      bgColor = red.PRIMARY.bgColor
    } else if (props.color == 'secondary') {
      bgColor = red.SECONDARY.bgColor
    } else if (props.color == 'tertiary') {
      bgColor = red.TERTIARY.bgColor
    }

    return bgColor
  }

  return (
    <div>
      <button 
        className={`${props.className ? props.className : 'btn'}`}
        style={buttonStyle}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        { props.name ? props.name : 'Custom Button' }
      </button>
    </div>
  )
}

export default LargeButton
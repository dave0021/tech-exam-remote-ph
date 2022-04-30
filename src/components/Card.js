const CustomCard = (props) => {
  return (
    <div className="card" style={{ width: 800 }}>
      {props.header &&
        <div 
          className={`card-header ${props.headerClassName ? props.headerClassName : ''}`} 
          align="left" 
          style={
            props.headerStyle ? props.headerStyle : { color: 'black', fontSize: 25, fontWeight: 'bold' }
          }
        >
          { props.header }
        </div>
      }

      <div 
        className={`card-body ${props.bodyClassName ? props.bodyClassName : ''}`}
        align="left"
        style={
          props.bodyStyle ? props.bodyStyle : { padding: 20 }
        }
      >
        { props.children }
      </div>

      {props.footer &&
        <div 
          className={`card-footer ${props.footerClassName ? props.footerClassName : ''}`}
          align="right" 
          style={
            props.footerStyle ? props.footerStyle : {}
          }
        >
          { props.footer }
        </div>
      }
    </div>
  )
}

export default CustomCard
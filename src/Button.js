function Button({color, setColor}){
return (
    <button
    style={{
        backgroundColor: color,
    }}
    onClick={() => {
       setColor(color)
      }}>
        {color}
      </button>
)

}
export default Button;
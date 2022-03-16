import logo from '../../assets/logoNerDecoration.png'

const FunctionalComponent = ({nombre, apellido, children}) => {
  return (
    <div>
      <h3>Functional Component</h3>
      <h2>{nombre} {apellido}</h2>
      {children}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  )
}

export default FunctionalComponent;
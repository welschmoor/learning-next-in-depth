const Testcomponent = () => {
  console.log("typeof window === 'undefined'", typeof window === 'undefined')
  localStorage.setItem('lel', 'yes')
  const itemfromLS = localStorage.getItem('lel')
  console.log('lel key', itemfromLS)
  return <div>TEST COMPONENT YESYESYESYESYES</div>
}

export default Testcomponent

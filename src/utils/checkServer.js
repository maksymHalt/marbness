// Robust way to check if it's Node or browser
const checkServer = () => {
  return typeof window === 'undefined'
}

export default checkServer

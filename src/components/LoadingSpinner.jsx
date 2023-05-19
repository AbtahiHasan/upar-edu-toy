import { RotatingLines } from "react-loader-spinner"

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <RotatingLines
        strokeColor="#00abe4"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}/>
    </div>
  )
}

export default LoadingSpinner
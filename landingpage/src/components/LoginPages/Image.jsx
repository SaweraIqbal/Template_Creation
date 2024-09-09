import sidepic from '../../assets/sidepic.jpg';
const Image = () => {
  return (
    <div>
      <div
        className="text-white h-[100vh] flex justify-center items-center "
        style={{ backgroundImage: `url(${sidepic})`, backgroundRepeat:'no-repeat' , backgroundPosition:'center', backgroundSize:'cover'}}
      ></div>
    </div>
  )
}

export default Image

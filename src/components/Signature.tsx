const Signature = () => {
  const year = new Date().getFullYear();
  return(
    <div className='w-full text-center mt-6'>
      <p className='text-md font-light'>@{year} by <a href="https://github.com/santos-arthur">Arthur Santos</a></p>
    </div>
  ) 
}

export default Signature;
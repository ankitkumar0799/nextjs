
const page = ({params}) => {
    console.log(params);
  return (
    <div>page to {params.id}</div>

  )
}

export default page
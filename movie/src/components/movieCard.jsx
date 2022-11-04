import './moviecard.css'

const MovieCard = ({title,description,rating,img}) => {
  return (
    <div className='section'>
        <div className="card">
            <img alt='image ' src={img} width='260px' />
            <h3 className="" >{`Title :  ${title}`}</h3>
            <p className="">{`Description : ${description}`}</p>
            <p className="">{`Rating : ${rating}`}</p>
    </div>
    </div>
    
  )
}

export default MovieCard


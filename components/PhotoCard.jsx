function PhotoCard({id,title,desc,category,image,alt}){
    return(
        <>
            <div className="card h-100 w-50">
                <img src={image} alt={alt} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{category}</h6>
                    <p className="card-text">{desc}</p>
                    <button className="btn btn-dark">Guzior</button>
                </div>
            </div>
        </>
    )
}

export default PhotoCard
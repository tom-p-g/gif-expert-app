

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card">
            <img  src= {url} />
            <p className="card p"> {title} </p>
        </div>
    )
}


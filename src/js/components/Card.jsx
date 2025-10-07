function Card({img, text, title}) {
    return (
        <>
            <div class="card" style={{width: "18rem"}}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default Card;
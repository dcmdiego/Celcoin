import "./post.css"

export default function Post (props) {

    const {titulo, img, alt} = props;

    return (

        <div className="post">
            <h1 className="titulo">{titulo}</h1>
            <img src={img} alt={alt} />
        </div>

    )

}
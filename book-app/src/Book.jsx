
const Book = ({title,author,img, price}) => {

  //clickHandler
  const clickHandler = () => {
    console.log(author);
  }


  return (
    <article className="book">
       <img className="book-img" src={img} alt="" />
       <h3>{title}</h3>
       <h5>by {author}</h5>
       <p>{price}</p>
       <button className="buy-btn" onClick = {() => clickHandler()}>Buy Now</button>
    </article>
  )
};
export default Book
 
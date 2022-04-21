function projcard(props) {
  let badgetext;
  if (props.obj.spots === 0) {
    badgetext = "SOLD OUT";
  }
  if (props.obj.location === "Online") {
    badgetext = "ONLINE";
  }
  console.log(badgetext);
  return (
    <div className='single-project-card-container'>
      {badgetext && <div className='badge'>{badgetext}</div>}
      <img src={`/images/${props.obj.image}`} className='card-img' />
      <div className='caption'>
        <img src='/images/star.jpg' className='star-img' />
        <span className='stats'>{props.obj.rating}</span>
        <span className='stats'>({props.obj.reviewcount}) &#x2022;</span>
        <span className='stats'>{props.obj.location}</span>
      </div>
      <p className='price-per-night'>
        <span className='price'>From $</span>
        <span className='price'>{props.obj.price}</span>/ Night
      </p>
    </div>
  );
}

export default projcard;

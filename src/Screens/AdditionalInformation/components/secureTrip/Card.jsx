const Card = ({ icon, upperText, LowerText }) => {
  return (
    <div style={{display:'flex', backgroundColor:'white', padding:10, borderRadius:10, gap:5}} >
      <img height={24} width={24} src={icon} alt="" />
      <div>
        {upperText}
        {LowerText}
      </div>
    </div>
  );
};

export default Card;

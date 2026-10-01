import type { ResortListing } from "../data/data";
export default function ListingCard({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
  return (
    <div className="ListingCard">
      <img src={pic} alt="" width="150px" />
      <div className="ListingInfo">
        <p style={{ color: "white", fontWeight: "bolder" }}>{country}</p>
        <p>{location}</p>
        <p style={rating > 4.0 ? { color: "green" } : { color: "red" }}>
          {rating}★
        </p>
        <p>{price}/night</p>
      </div>
    </div>
  );
}

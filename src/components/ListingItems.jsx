import React from "react";

export default function ListingItems({ listing, id }) {
  console.log(listing);
  return <div>{listing.name}</div>;
}

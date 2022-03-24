import React from "react";

export default function Rating({ rating, setRate }) {
  const rate = [1, 2, 3, 4, 5];

  return (
    <div>
      {rate.map((el) =>
        rating < el ? (
          <i class="fa-regular fa-star"></i>
        ) : (
          <i class="fa-solid fa-star" onClick={() => setRate(el)}></i>
        )
      )}
    </div>
  );
}

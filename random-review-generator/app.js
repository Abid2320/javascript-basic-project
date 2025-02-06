const reviews = [
  {
    name: "Alice",
    rating: "⭐⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=1",
    reviewText:
      "Absolutely love this product! The quality is outstanding, and it works perfectly for my needs. Definitely worth every penny.",
  },
  {
    name: "Jack",
    rating: "⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=2",
    reviewText:
      "Great quality, but the price is a bit high. Still, I’m satisfied with the overall performance and durability.",
  },
  {
    name: "Emma",
    rating: "⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=3",
    reviewText:
      "It's decent but not exceptional. I expected a bit more based on the reviews, but it does the job well enough.",
  },
  {
    name: "Noah",
    rating: "⭐⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=4",
    reviewText:
      "Exceeded my expectations! The build is sturdy, and the design is sleek. Highly recommend to anyone considering this.",
  },
  {
    name: "Sophia",
    rating: "⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=5",
    reviewText:
      "Not very durable. It worked fine for a few days, but then I started experiencing issues. A bit disappointed with this purchase.",
  },
  {
    name: "Liam",
    rating: "⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=6",
    reviewText:
      "The performance is solid, but I wish it had more features. Other than that, it functions as expected and is well-made.",
  },
  {
    name: "Olivia",
    rating: "⭐⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=7",
    reviewText:
      "Perfect for my needs! The packaging was secure, and everything arrived in perfect condition. Definitely happy with my purchase.",
  },
  {
    name: "Mason",
    rating: "⭐",
    profilePic: "https://i.pravatar.cc/150?img=8",
    reviewText:
      "Terrible experience. The product stopped working within a week, and customer service was unhelpful. Would not recommend.",
  },
  {
    name: "Isabella",
    rating: "⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=9",
    reviewText:
      "An average product. Nothing particularly bad, but also nothing that makes it stand out. Just okay for the price.",
  },
  {
    name: "Lucas",
    rating: "⭐⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=10",
    reviewText:
      "This is the best thing I’ve ever bought! The quality, design, and usability are top-notch. Couldn’t be happier!",
  },
  {
    name: "Ava",
    rating: "⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=11",
    reviewText:
      "Looks great and works well, but the shipping took longer than expected. Still, I'm satisfied with the product itself.",
  },
  {
    name: "Ethan",
    rating: "⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=12",
    reviewText:
      "Disappointed with the quality considering the price. I expected something more durable and reliable.",
  },
  {
    name: "Mia",
    rating: "⭐⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=13",
    reviewText:
      "Amazing purchase! The product performs exceptionally well, and I have no complaints at all. Definitely worth recommending.",
  },
  {
    name: "James",
    rating: "⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=14",
    reviewText:
      "Works fine, but I expected a bit more given the price. It’s not bad, but it doesn’t stand out much either.",
  },
  {
    name: "Charlotte",
    rating: "⭐⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=15",
    reviewText:
      "Perfect for travel, lightweight and convenient. I use it almost daily and haven’t had any issues so far.",
  },
  {
    name: "Benjamin",
    rating: "⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=16",
    reviewText:
      "Really good overall, but I feel like a few minor improvements could make it even better. Still, a solid purchase.",
  },
  {
    name: "Amelia",
    rating: "⭐",
    profilePic: "https://i.pravatar.cc/150?img=17",
    reviewText:
      "Worst purchase ever. The product was defective upon arrival, and I had to go through a lengthy return process. Avoid this one!",
  },
  {
    name: "Alexander",
    rating: "⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=18",
    reviewText:
      "Good quality, but the instructions were unclear, making setup a bit frustrating. Once set up, though, it works great.",
  },
  {
    name: "Harper",
    rating: "⭐⭐⭐⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=19",
    reviewText:
      "Fantastic! The materials feel premium, and the performance is flawless. Would definitely buy again in the future.",
  },
  {
    name: "Henry",
    rating: "⭐⭐",
    profilePic: "https://i.pravatar.cc/150?img=20",
    reviewText:
      "Not what I expected. It feels cheaply made, and I doubt it will last long. A bit of a letdown overall.",
  },
];

// getting all the elements
const cardHeader = document.querySelector(".card-header");
const cardRating = document.querySelector(".card-rating");
const cardDesc = document.querySelector(".card-desc");
const cardImg = document.querySelector(".img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");
const randomBtn = document.querySelector(".generate-random");

// selecting te current item
let currentItem = 0;

// loading the initial content
window.addEventListener("DOMContentLoaded", () => {
  let item = reviews[currentItem];
  cardImg.src = item.profilePic;
  cardHeader.textContent = item.name;
  cardRating.textContent = item.rating;
  cardDesc.textContent = item.reviewText;
});

// showing the review
function showReview(review) {
  cardImg.src = review.profilePic;
  cardHeader.textContent = review.name;
  cardRating.textContent = review.rating;
  cardDesc.textContent = review.reviewText;
}

// showing the next review
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(reviews[currentItem]);
});

// showing the previous review
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview(reviews[currentItem]);
});

// showing the random review
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showReview(reviews[currentItem]);
});

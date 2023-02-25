import { ReactElement, useState } from "react";

import styled from "styled-components";

import { ReviewItem } from "@/global/types";
import HatchAuthor from "public/media/reviews/hatch_brenda_kola.png";
import HatchSVG from "public/media/reviews/hatch_logo.webp";
import LeapSVG from "public/media/reviews/leap_logo.webp";
import LeapAuthor from "public/media/reviews/leap_rob_hamblen.png";
import MottoSVG from "public/media/reviews/motto_logo.webp";
import MottoAuthor from "public/media/reviews/motto_sunny_bonnell.png";
import NeueSVG from "public/media/reviews/neueBeratung_logo.webp";
import NeueAuthor from "public/media/reviews/neueBeratung_markus_blatt.png";

import ReviewButton from "./ReviewButton";
import ReviewTemplate from "./ReviewTemplate";

interface IProps {
  className?: string;
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    personImg: LeapAuthor,
    companyLogo: LeapSVG,
    text: "“When my clients have a workshop with us in Butter, there's just a different vibe to the whole interaction. It becomes something they look forward to! It marries up exactly with the playful way we want to show up as an agency. Our participants love the structure and how it gives them an equal chance to contribute.”",
    author: "Rob Hamblen",
    role: "Founder at LEAP, Product Design & Innovation agency",
    backgroundColor: "#80F4D5",
  },
  {
    id: 2,
    personImg: MottoAuthor,
    companyLogo: MottoSVG,
    text: "“Butter helps us make the work fun! We use it to help organizations align at the leadership level, and it helps bring interaction and creativity to the next level. We’re incorporating different tools to drive up the energy without having to open up different screens. Our productivity’s gone through the roof because we feel like we’re able to get more done!”",
    author: "Sunny Bonnell",
    role: "Founder at Motto, strategic branding agency",
    backgroundColor: "#C7D0FF",
  },
  {
    id: 3,
    personImg: NeueAuthor,
    companyLogo: NeueSVG,
    text: "“Butter comes directly from the wishes of every moderator. It’s the tool I would dream of. It really helps us facilitate workshops, bring people together, and help them work together better online. It’s helped me build better relationships with my clients during a project.”",
    author: "Markus Blatt",
    role: "Co-CEO of neueBeratung, innovation & business transformation consultancy",
    backgroundColor: "#FFC783",
  },
  {
    id: 4,
    personImg: HatchAuthor,
    companyLogo: HatchSVG,
    text: "“Butter has helped our program’s engagement and participation go through the roof! Our participants feel good from beginning to end. They have big smiles on their face when they join, get more comfortable and involved during the session, and leave feeling happy and inspired!”",
    author: "Brenda Kola",
    role: "Program Manager at Hatch, entrepreneurship cohort-based training",
    backgroundColor: "#FEABAB",
  },
];

function ReviewsBase({ className }: IProps): ReactElement {
  const [currentReviewId, setCurrentReviewId] = useState(1);

  const changeReview = (id: number) => {
    console.log(id);
    setCurrentReviewId(id);
  };

  const reviewData = reviews.find(
    (r) => r.id === currentReviewId
  ) as ReviewItem;

  return (
    <div className={className}>
      <ReviewTemplate reviewData={reviewData} />
      <PaginationWrapper>
        {reviews.map((review) => (
          <ReviewButton
            key={review.id}
            active={review.id === currentReviewId}
            onClick={() => changeReview(review.id)}
          />
        ))}
      </PaginationWrapper>
    </div>
  );
}

const Reviews = styled(ReviewsBase)``;

const PaginationWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: -25px;
`;
export default Reviews;

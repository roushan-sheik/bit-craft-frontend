import React from "react";
import Btn from "../../button/Btn";
import ReviewModal from "../../shared/modal/ReviewModal";

const PostProductReview = () => {
  const [showReviwModal, setShowReviewModal] = React.useState(false);
  return (
    <div className="my-8">
      {showReviwModal && (
        <ReviewModal
          closeModal={() => setShowReviewModal(false)}
          isOpen={showReviwModal}
        />
      )}
      <Btn
        onClick={() => setShowReviewModal(!showReviwModal)}
        className={"w-full"}
      >
        {" "}
        Review
      </Btn>
    </div>
  );
};

export default PostProductReview;

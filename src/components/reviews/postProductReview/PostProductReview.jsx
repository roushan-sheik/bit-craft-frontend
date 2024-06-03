import React from "react";
import Btn from "../../button/Btn";
import ReviewModal from "../../shared/modal/ReviewModal";
import PropTypes from "prop-types";
const PostProductReview = ({ product_id }) => {
  const [showReviwModal, setShowReviewModal] = React.useState(false);
  return (
    <div className="my-8">
      {showReviwModal && (
        <ReviewModal
          closeModal={() => setShowReviewModal(false)}
          isOpen={showReviwModal}
          product_id={product_id}
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
PostProductReview.propTypes = {
  product_id: PropTypes.string,
};
export default PostProductReview;

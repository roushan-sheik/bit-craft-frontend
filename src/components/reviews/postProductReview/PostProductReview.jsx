import PropTypes from "prop-types";
import React from "react";
import Btn from "../../button/Btn";
import ReviewModal from "../../shared/modal/ReviewModal";
const PostProductReview = ({ product_id, showReviewSuccess }) => {
  const [showReviwModal, setShowReviewModal] = React.useState(false);
  return (
    <div className="my-8">
      {showReviwModal && (
        <ReviewModal
          closeModal={() => setShowReviewModal(false)}
          isOpen={showReviwModal}
          product_id={product_id}
          showReviewSuccess={showReviewSuccess}
        />
      )}
      <Btn
        onClick={() => setShowReviewModal(!showReviwModal)}
        className={"w-full"}
      >
        {" "}
        Give a Review
      </Btn>
    </div>
  );
};
PostProductReview.propTypes = {
  product_id: PropTypes.string,
  showReviewSuccess: PropTypes.func,
};
export default PostProductReview;

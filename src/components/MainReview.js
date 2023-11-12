import Review from "./Review";
const MainReview = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div>
            <h1 className="font-bold flex justify-center text-4xl font-sans">Our Reviews</h1>
          </div>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default MainReview;

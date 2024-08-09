import PropTypes from "prop-types";
import { formatDate } from "../utils/formatDate";

import "./../index.css";

const Card = ({ item }) => {
  return (
    <div className="h-72 rounded-lg overflow-hidden shadow-md cursor-pointer">
      <div className="overflow-hidden w-full h-1/2 relative">
        <div className="background-image-card">
          <img
            src="https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex h-1/2">
        <div className="mx-8 mt-5">
          <p className="text-slate-500 text-sm">
            {formatDate(item.published_at)}
          </p>
          <h2 className="font-semibold text-xl line-clamp-3">{item?.title}</h2>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;

/* eslint-disable react/prop-types */

import { formatDate } from "../../utlis/formatDate";

function BlogHeader({ name, profile_image, created_at }) {
    return (
        <div className="flex items-center gap-5 w-full">
            <img
                className="w-30 h-20 bg-white rounded-full"
                src={profile_image}
            />
            <h3 className="text-2xl text-gray-300 font-bold">{name}</h3>
            <small className="text-stone-300">{formatDate(created_at)}</small>
        </div>
    );
}

export default BlogHeader;

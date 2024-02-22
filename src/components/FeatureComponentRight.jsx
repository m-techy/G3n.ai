import React from "react";

const FeatureComponentRight = ({ content }) => {
    return (
        <div className="flex">
            <div className="image w-1/2">

            </div>
            <div className="w-1/2 flex flex-col gap-6">
                <div className="heading">
                    <div className="text-4xl  font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                        {content.heading}
                    </div>
                    <div className="text-4xl font-bold">{content.caption}</div>
                </div>
                <div className="description text-sm text-justify">
                    {content.desc}
                </div>
            </div>

        </div>
    );
};

export default FeatureComponentRight;

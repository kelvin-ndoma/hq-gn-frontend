import React from "react";

const DashboardPosts = ({ posts }) => {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Top Posts</h3>
      {posts.map((post, index) => (
        <div key={index} className="p-4 bg-white shadow rounded-lg mb-4">
          <p className="text-gray-800">
            {post.content}{" "}
            {post.mentions.map((mention, idx) => (
              <span key={idx} className="text-blue-600">
                @{mention}
              </span>
            ))}
          </p>
          <button className="text-blue-600 mt-2">See all</button>
          <div className="mt-4 flex items-center space-x-2">
            <span>❤️ {post.likes} Likes</span>
            <span>🔖</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DashboardPosts;

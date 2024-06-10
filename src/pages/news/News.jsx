import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import MySpinner from "../../components/loadingSpinner/Spinner";

const News = () => {
  const { data: news, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const { data } = await axios.get("./news.json");
      return data;
    },
  });
  if (isLoading) return <MySpinner />;

  return (
    <div className="main_">
      <div>
        <h1 className="text-2xl lg:text-4xl font-semibold my-4 text-center">
          Latest News
        </h1>
      </div>
      <div className="grid grid-cols-1  gap-6">
        {news?.map((item) => {
          console.log(item);
          const {
            author_name,
            author_email,
            profile_image,
            title,
            content,
            image,
            tags,
            createdAt,
            vote,
          } = item;
          return (
            <div
              className="border p-4 shadow- bg-blue-gray-50 rounded-md"
              key={item.id}
            >
              <h2 className="text-xl font-semibold">{author_name}</h2>
              <h2 className="text-sm">{author_email}</h2>
              <div>
                <h4 className="text-lg mt-2 font-medium">{title}</h4>
                <p>{content}</p>
                <p>Date: {createdAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;

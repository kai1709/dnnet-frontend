import { endPoints } from "@/services/endpoints";
import { fetcherAPI } from "@/services/fetcher";
import { Heart, MessageSquare } from "lucide-react";
import React from "react";
import Link from "next/link";
import { formatTitleToSlug, getDevice } from "../lib/utils";
import { cn } from "@/lib/utils";

const ThoiSu = async () => {
  const isMobile = await getDevice();
  const res: any = await fetcherAPI(
    `${endPoints.getNewsSummaries}?fields=*%2Cnews_source.name%2Ccountry.name`
  );
  let news = res?.data || [];
  news = [...news, ...news, ...news, ...news];
  const mainNews = news[0];
  const mainSlug = `${formatTitleToSlug(mainNews?.title)}-${mainNews?.id}`;
  let subNews = news.slice(1, 4);
  // console.log({ news });
  return (
    <div className="flex-1 pb-4">
      <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
        THỜI SỰ
      </div>
      <div className="px-4 py-2">
        <div className="text-head-line text-lg font-bold">
          {mainNews?.country?.name}
        </div>
        <div className="flex gap-4">
          <div className="h-[320px] md:h-[230px] flex-1">
            <Link href={`${mainSlug}`} className="h-full">
              <img
                src={mainNews?.json_base64_image?.image_base64}
                alt={mainNews?.json_base64_image?.title}
                className="h-full object-cover"
              />
            </Link>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="text-head-line-title text-xl font-bold">
              <Link href={`${mainSlug}`}>{mainNews?.title}</Link>
            </div>
            <div className="text-head-line text-base font-bold">
              <div>
                Nguồn:{" "}
                <a
                  href={mainNews?.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mainNews?.news_source?.name}
                </a>
              </div>
              <div>Chia sẻ: AI</div>
            </div>
            <div className="text-head-line text-base font-bold flex gap-4">
              <div className="flex gap-2">
                <MessageSquare />
              </div>
              <div className="flex gap-2">
                <Heart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {subNews?.map((item: any, index: number) => {
          const isLast = index === subNews.length - 1;
          const slug = `${formatTitleToSlug(item?.title)}-${item?.id}`;
          return (
            <div key={index} className={cn(isLast && "hidden md:block")}>
              <div className="text-head-line text-lg font-bold">
                {item?.country?.name}
              </div>
              <Link href={`/${slug}`}>
                <img
                  src={item?.json_base64_image?.image_base64}
                  alt={item?.json_base64_image?.title}
                  className="w-full"
                />
                <div className="text-section-high-light py-4">
                  {item?.title}
                </div>
              </Link>
              <div className="text-head-line text-base font-bold mb-4">
                <div>
                  Nguồn:{" "}
                  <a
                    href={item?.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item?.news_source?.name}
                  </a>
                </div>
                <div>Chia sẻ: AI</div>
              </div>
              <div className="text-head-line text-base font-bold flex gap-4">
                <div className="flex gap-2">
                  <MessageSquare />
                </div>
                <div className="flex gap-2">
                  <Heart />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThoiSu;

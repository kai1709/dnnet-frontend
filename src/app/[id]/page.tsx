import IconHome from "@/components/components/icons/IconHome";
import { endPoints } from "@/services/endpoints";
import { fetcherAPI } from "@/services/fetcher";
import React from "react";
import { Heart, MessageSquare, Info } from "lucide-react";
import { createMetadata, getIdFromSlug } from "@/components/lib/utils";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const id = getIdFromSlug(params.id);
  const res: any = await fetcherAPI(
    `${endPoints.getNewsSummaries}/${id}?fields=*%2Cnews_source.name%2Ccountry.name`
  );
  const detail = res?.data;
  return createMetadata({
    title: detail?.title,
    description: detail?.short_summary,
  });
}

const NewsDetail = async ({ params }: Props) => {
  const id = getIdFromSlug(params?.id);
  const res: any = await fetcherAPI(
    `${endPoints.getNewsSummaries}/${id}?fields=*%2Cnews_source.name%2Ccountry.name`
  );
  const detail = res?.data;
  return (
    <div>
      <div className="flex items-center gap-2 p-4">
        <IconHome className="text-head-line" />
        <h1 className="text-head-line text-sm font-bold">Tin Tức</h1>
      </div>
      <div className="text-section-header bg-section-header-background p-4 text-lg font-bold">
        {detail?.country?.name}
      </div>

      <div className="p-4">
        <div className="text-head-line-title text-xl font-bold">
          {detail?.title}
        </div>
        {!!detail?.json_base64_image?.image_base64 && (
          <div className=" relative">
            <img
              src={detail?.json_base64_image?.image_base64}
              alt={detail?.json_base64_image?.title}
              className="mt-4 w-full"
            />
            <Info className=" absolute bottom-2 right-2" />
          </div>
        )}
        <div className="text-section-high-light whitespace-pre-line mt-4">
          {detail?.long_summary}
        </div>
        <div className="text-head-line text-base font-bold mt-10">
          <div>
            Nguồn:{" "}
            <a
              href={detail?.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            >
              {detail?.news_source?.name}
            </a>
          </div>
          <div>Chia sẻ: AI</div>
        </div>

        <div className="text-head-line text-base font-bold flex gap-4 mt-4">
          <div className="flex gap-2">
            <MessageSquare />
          </div>
          <div className="flex gap-2">
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;

import { API_URL } from "@/constant/app";
import {
  ArticleContent,
  ParagraphChild
} from "@/types/business.interface";
import Image from "next/image";
import React from "react";

type Props = {
  content: ArticleContent[]
};

const DynamicZoneRenderer = ({ content }: Props ) => {
  console.log(content)
  const renderContent = (content: ArticleContent[]) => {
    console.log(content)
    return content?.map((item, index) => {
      switch (item.__component) {
        case "article.paragraph":
          console.log("okok")
          return item.paragraph.map((paragraph, index) => (
            <div key={index}>
              {paragraph.children.map((child: ParagraphChild, childIdx) => {
                if (child.type === "link" && child.children) {
                  return (
                    <a
                      key={childIdx}
                      href={child.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline" // Add your styles here
                    >
                      {child.children.map((linkChild, linkChildIdx) => (
                        <React.Fragment key={linkChildIdx}>
                          {linkChild.text?.split("\n").map((line, idx) => (
                            <React.Fragment key={idx}>
                              {idx > 0 && <br />}
                              {line}
                            </React.Fragment>
                          ))}
                        </React.Fragment>
                      ))}
                    </a>
                  );
                }
                return (
                  <span
                    key={childIdx}
                    className={`${child.bold ? "font-semibold" : ""}`}
                  >
                    {child.text?.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </span>
                );
              })}
            </div>
          ));

        case "article.single-image":
          return (
            <div className="relative w-full aspect-video" key={index}>
              <Image
                fill
                src={`${item.image.url}`}
                alt={item.image.alternativeText || ""}
              />
            </div>
          );

        case "article.multiple-images":
          return (
            <div
              key={index}
              className={`md:grid ${
                item.images.length >= 3 ? "grid-cols-3" : "grid-cols-2"
              } gap-4`}
            >
              {item.images.map((image) => (
                <div className="relative w-full h-full aspect-[4/3]" key={image.id}>
                  <Image
                    fill
                    src={`${image.url}`}
                    alt={image.alternativeText || ""}
                  />
                </div>
              ))}
            </div>
          );

        case "article.file":
          return (
            <iframe
              key={index}
              className="h-[800px] w-full"
              src={`${item.file.url}#page=1&view=fitH&fitV`}
            ></iframe>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="space-y-8 text-lg">{renderContent(content)}</div>
  );
};

export default DynamicZoneRenderer;

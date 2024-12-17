import { API_URL } from "@/constant/app";
import React from "react";
import {
  Business,
  BusinessContent,
  ParagraphChild,
} from "@/types/business.interface";

type BusinessProps = {
  business: Business;
};

const BusinessContentRenderer: React.FC<BusinessProps> = ({ business }) => {
  const renderContent = (content: BusinessContent[]) => {
    return content.map((item, index) => {
      switch (item.__component) {
        case "article.paragraph":
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
            <div key={index}>
              <img
                className="w-full"
                src={`${API_URL}${item.image.url}`}
                alt={item.image.alternativeText || ""}
              />
            </div>
          );

        case "article.multiple-images":
          const gridColsClass = `grid-cols-${Math.min(item.images.length, 3)}`;
          return (
            <div key={index} className={`md:grid ${gridColsClass} gap-4`}>
              {item.images.map((image) => (
                <img
                  key={image.id}
                  className="w-full h-full object-cover"
                  src={`${API_URL}${image.url}`}
                  alt={image.alternativeText || ""}
                />
              ))}
            </div>
          );

        // case "article.file":
        //   if (item.file.ext === ".pdf") {
        //     return (
        //       <iframe
        //         className="h-[800px] w-full"
        //         src={`${API_URL}${item.file.url}`}
        //       ></iframe>
        //     );
        //   } else {return null}

        case "article.file":
        return (
          // <div key={index} className="mt-4">
          //   <a
          //     href={`${API_URL}${item.file.url}`}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //     className="text-blue-600 underline"
          //   >
          //     {item.file.name || "Download File"}
          //   </a>
          //   <p className="text-sm text-gray-500">{`Size: ${item.file.size.toFixed(2)} KB`}</p>
          // </div>
          <iframe
          key={index}
            className="h-[800px] w-full"
            src={`${API_URL}${item.file.url}#page=1&view=fitH&fitV`}
          ></iframe>
        );

        default:
          return null;
      }
    });
  };

  return (
    <div className="space-y-8 text-lg">{renderContent(business.content)}</div>
  );
};

export default BusinessContentRenderer;

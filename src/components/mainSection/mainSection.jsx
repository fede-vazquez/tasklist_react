import React from "react";
import PagePreviewCard from "./PagePreviewCard";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function MainSection() {
  const pagesConfig = [
    {
      title: "Lista de tareas",
      description:
        "Lista de tareas por día, en esta página/app sera posible crear tareas por día.",
      srcImg: "/previewPagesImages/tasklist_preview.png",
      alt: "Lista de tareas",
    },
  ];

  return (
    <section>
      <NavBar />
      <ul className="p-4 row justify-content-center m-auto">
        {pagesConfig &&
          pagesConfig.map((page, i) => {
            return (
              <li key={page.title + i} className="col-11 col-sm-8 col-md-6">
                <Link to={"/tasklist"}>
                  <PagePreviewCard
                    title={page.title}
                    description={page.description}
                    srcImg={page.srcImg}
                    alt={page.alt}
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default MainSection;

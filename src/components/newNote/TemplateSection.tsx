"use client"
import { templateCategories } from "@/lib/templates";
import TemplateCard from "./TemplateCard";
import { Carousel, CarouselContent, CarouselItem, } from "../ui/carousel";
import { useSearchParams } from "next/navigation";
const TemplateSection =  () => {
  const searchParams=useSearchParams()
  const templates=searchParams.get("templates")
  const filteredCategories=templates ? templateCategories.filter((category)=>category.category===templates):templateCategories
  return (
    <section className="flex flex-col gap-5 mt-10">
      {filteredCategories.map((template, index) => (
        <div key={index}>
          <h1 className="text-2xl space-x-1 font-bold">
            {template.icon} {template.category} templates
          </h1>
          <Carousel>
            <CarouselContent className="">
              {template.templates.map((temp, idx) => (
                <CarouselItem key={idx} className="md:basis-1/3 sm:basis-1/2 basis-full">
                  <TemplateCard data={temp} key={idx} category={template.category}/>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      ))}
    </section>
  );
};

export default TemplateSection;

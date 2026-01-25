import { ExternalLink, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { TemplateItem } from "@/lib/templates";
import NewButton from "../notes/NewButton";


const TemplateCard = ({ data ,category}: { data: TemplateItem,category:string }) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-muted/60">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {data.imageUrl ? (
          <img
            src={data.imageUrl}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary/30">
            <span className="text-muted-foreground text-xs italic">
              No preview available
            </span>
          </div>
        )}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 backdrop-blur-md bg-white/70 dark:bg-black/50 shadow-sm"
        >
          {data.subtitle}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-xl font-bold tracking-tight">
          {data.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {data.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <NewButton className="flex-1 gap-2 shadow-sm" content={JSON.stringify(data.initialContent)} category={category} >
          
        </NewButton>
        <Link
        href={`/view/${data.title.toLocaleLowerCase().trim().replaceAll(" ","")}`}
        target="_blank"
        >
          <Button
            variant="outline"
            size="icon"
            className="shrink-0"
            title="See details"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;

export const revalidate = 0
export const dynamic = "force-dynamic"
import ContentShowCase from "@/components/notes/ContentShowCase"
import DeleteButton from "@/components/notes/DeleteButton"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getUserNotes } from "@/server/getNotes"
import { Tag, Plus, FileText, Clock } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"

const formatRelativeDate = (date: Date): string => {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const Page = async () => {
  const data = await getUserNotes()

  if (data.error || !data.data) {
    if (data.error === "Unauthorized user") {
      redirect("/sign-in")
    } else {
      throw new Error("Server error occurred")
    }
  }

  if (data.data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center p-8">
          <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">No notes yet</h2>
          <p className="text-muted-foreground mb-8 max-w-sm">
            Create your first note to get started organizing your thoughts!
          </p>
          <Link href="/new-note">
            <Button size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Create Note
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Your Notes
          </h1>
          <span className="text-sm text-muted-foreground">
            {data.data.length} {data.data.length === 1 ? "note" : "notes"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {data.data.map((note) => {
            const lastUpdated = note.updatedAt || note.createdAt
            const date = formatRelativeDate(new Date(lastUpdated))

            return (
              <Card
                key={note.id}
                className="group hover:shadow-lg transition-all duration-200 hover:border-primary/20 cursor-pointer"
              >
                <Link href={`/new-note/${note.id}`} className="block">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {note.noteTitle}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      <Clock className="w-3 h-3" />
                      {date}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {note.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {note.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <CardDescription className="line-clamp-3">
                      <ContentShowCase content={note.noteContent} />
                    </CardDescription>
                  </CardContent>
                </Link>

                <CardFooter className="justify-end gap-4 pt-4 border-t">
                  <Link href={`/new-note/${note.id}`}>
                    <Button variant="outline" size="sm">
                      Update
                    </Button>
                  </Link>
                  <DeleteButton id={note.id} />
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>

      <Link href="/new-note" className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="gap-2 shadow-lg hover:shadow-xl transition-shadow rounded-full px-6"
        >
          <Plus className="w-5 h-5" />
          New Note
        </Button>
      </Link>
    </div>
  )
}

export default Page
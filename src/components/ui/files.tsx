import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronRight, Folder, File } from "lucide-react"
import { cn } from "@/lib/utils"

const Files = AccordionPrimitive.Root

const FolderItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-none", className)}
        {...props}
    />
))
FolderItem.displayName = "FolderItem"

const FolderTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center gap-2 py-1.5 px-2 text-sm font-medium transition-all hover:bg-muted/50 rounded-md [&[data-state=open]>svg:first-child]:rotate-90 text-left",
                className
            )}
            {...props}
        >
            <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground" />
            <Folder className="h-4 w-4 shrink-0 text-blue-500 fill-blue-500/20" />
            {children}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
FolderTrigger.displayName = "FolderTrigger"

const FolderPanel = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-1 pt-0 ml-6 border-l border-border/50 pl-2", className)}>{children}</div>
    </AccordionPrimitive.Content>
))
FolderPanel.displayName = "FolderPanel"

const SubFiles = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col gap-1", className)} {...props} />
)

const FileItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex items-center gap-2 py-1.5 px-2 text-sm text-foreground/80 hover:bg-muted/50 rounded-md cursor-pointer",
            className
        )}
        {...props}
    >
        <File className="h-4 w-4 shrink-0 text-muted-foreground" />
        {children}
    </div>
))
FileItem.displayName = "FileItem"

export { Files, FolderItem, FolderTrigger, FolderPanel, SubFiles, FileItem }

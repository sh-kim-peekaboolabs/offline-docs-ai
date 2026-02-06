'use client';

import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

export type InlineCitationProps = ComponentProps<'span'>;
export const InlineCitation = ({ className, ...props }: InlineCitationProps) => (
    <span className={cn('group inline items-center gap-1', className)} {...props} />
);

export type InlineCitationTextProps = ComponentProps<'span'>;
export const InlineCitationText = ({ className, ...props }: InlineCitationTextProps) => (
    <span className={cn('transition-colors group-hover:bg-accent', className)} {...props} />
);

export type InlineCitationCardProps = ComponentProps<typeof HoverCard>;
export const InlineCitationCard = (props: InlineCitationCardProps) => (
    <HoverCard closeDelay={0} openDelay={0} {...props} />
);

export type InlineCitationCardTriggerProps = {
    source: string;
    className?: string;
};
export const InlineCitationCardTrigger = ({ source, className }: InlineCitationCardTriggerProps) => (
    <HoverCardTrigger asChild>
        <button
            style={{
                width: '16px',
                height: '16px',
                fontSize: '9px',
                padding: 0,
                minWidth: '16px',
                minHeight: '16px'
            }}
            className={cn(
                'ml-0.5 inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 md:!w-5 md:!h-5 md:!text-[11px] font-bold transition-colors cursor-pointer',
                className
            )}
        >
            {source}
        </button>
    </HoverCardTrigger >
);

export type InlineCitationCardBodyProps = ComponentProps<'div'>;
export const InlineCitationCardBody = ({ className, ...props }: InlineCitationCardBodyProps) => (
    <HoverCardContent className={cn('relative w-80 p-4', className)} {...props} />
);

export type InlineCitationSourceProps = ComponentProps<'div'> & {
    title?: string;
    description?: string;
};
export const InlineCitationSource = ({ title, description, className, children, ...props }: InlineCitationSourceProps) => (
    <div className={cn('space-y-2', className)} {...props}>
        {title && <h4 className="font-medium text-sm leading-tight">{title}</h4>}
        {description && (
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        )}
        {children}
    </div>
);

export type InlineCitationQuoteProps = ComponentProps<'blockquote'>;
export const InlineCitationQuote = ({ children, className, ...props }: InlineCitationQuoteProps) => (
    <blockquote className={cn('border-muted border-l-2 pl-3 text-muted-foreground text-sm italic', className)} {...props}>
        {children}
    </blockquote>
);

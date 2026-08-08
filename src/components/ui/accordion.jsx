import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '../../lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({ className, ...props }) => (
  <AccordionPrimitive.Item className={cn(className)} {...props} />
);

const AccordionTrigger = ({ className, children, ...props }) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 items-center text-left outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 rounded-lg',
        '[&[data-state=open]_.accordion-chevron]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({ className, children, ...props }) => (
  <AccordionPrimitive.Content
    className={cn(
      'overflow-hidden',
      'data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up',
      '[&[data-state=open]>div]:animate-accordion-fade-in',
      '[&[data-state=closed]>div]:animate-accordion-fade-out'
    )}
    {...props}
  >
    <div className={cn(className)}>{children}</div>
  </AccordionPrimitive.Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import './Tabs.css';

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className = '', children, ...props }) {
  return (
    <TabsPrimitive.List className={`tabs-list ${className}`} {...props}>
      {children}
    </TabsPrimitive.List>
  );
}

export function TabsTrigger({ className = '', children, ...props }) {
  return (
    <TabsPrimitive.Trigger className={`tabs-trigger ${className}`} {...props}>
      {children}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({ className = '', children, ...props }) {
  return (
    <TabsPrimitive.Content className={`tabs-content ${className}`} {...props}>
      {children}
    </TabsPrimitive.Content>
  );
}

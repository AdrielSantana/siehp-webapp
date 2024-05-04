import React from "react";
import { AdminPagesHeaderRootProps, AdminPagesHeaderTitleProps, AdminPagesHeaderButtonProps, AdminPagesHeaderFilterProps, AdminPagesHeaderButtonIconProps, AdminPagesHeaderButtonContentProps } from "./types";

const AdminPagesHeaderRoot = ({
  children,
  className,
  ...props
}: AdminPagesHeaderRootProps) => {
  return (
    <div
      className={`w-100% h-2.5 flex flex-row gap-2 mt-[4.25rem] mb-1.5 ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AdminPagesHeaderTitle = ({
  children,
  className,
  ...props
}: AdminPagesHeaderTitleProps) => {
  return (
    <h1
      className={`text-gray-900-tk text-1.5 ${className ?? ""}`}
      {...props}
    >
      {children}
    </h1>
  );
};

const AdminPagesHeaderButtonContent = ({children, className, ...props}: AdminPagesHeaderButtonContentProps)=>{
  return (
    <div className={`flex flex-wrap ${className??""}`} {...props}>
      {children}
    </div>
  )
}

const AdminPagesHeaderButton = ({children, className, ...props}: AdminPagesHeaderButtonProps)=>{
  return (
    <button className={` ${className ?? ""}`} {...props}>{children}</button>
  );
}

const AdminPagesHeaderButtonIcon = ({children, className, ...props}: AdminPagesHeaderButtonIconProps)=>{
  return (<div className={`${className ?? ""}`} {...props}>
    {children}
  </div>)
}

const AdminPagesHeaderFilter = ({className, ...props}: AdminPagesHeaderFilterProps)=>{
  return(
  <input
    {...props}
    className={`inline-flex appearance-none h-2.5 w-[15rem] items-center justify-center rounded-4 bg-gray-700-tk flex-shrink-0 ${className ?? ""}`}
  />
)
}

export const AdminPagesHeader = {
  Root: AdminPagesHeaderRoot,
  Title: AdminPagesHeaderTitle,
  Button: AdminPagesHeaderButton,
  ButtonIcon: AdminPagesHeaderButtonIcon,
  Filter: AdminPagesHeaderFilter,
  ButtonContent: AdminPagesHeaderButtonContent
};

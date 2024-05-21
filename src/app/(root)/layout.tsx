import Header from "@/components/Organism/Header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaUserTie } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="w-full min-h-[40px] max-w-[calc(100vh - 224px)] flex md:justify-between justify-end items-center bg-purple-600 px-4 text-white">
          <Breadcrumb className="hidden md:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/users">Users</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Button className="avatar hover:bg-purple-800">
            <FaUserTie />
          </Button>
        </div>

        {children}
      </main>
    </>
  );
}

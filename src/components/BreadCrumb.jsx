import React from 'react'
import { Breadcrumb } from "keep-react";
import { GoHome } from "react-icons/go";
import { RxCaretRight } from "react-icons/rx";
const BreadCrumb = () => {
  return (
    <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<RxCaretRight size={20} color="#AFBACA" />}
        breadCrumbWithBorder={false}
        className="w-[75%] 2xl:w-[1300px] mt-6"
      >
        <Breadcrumb.Item href="#" icon={<GoHome size={24} color="#AFBACA" />}>
          Flashcard
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Mathematics</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Relations and Functions
        </Breadcrumb.Item>
      </Breadcrumb>
  )
}

export default BreadCrumb

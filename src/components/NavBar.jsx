import React from "react";
import { Navbar, Button } from "keep-react";
const NavBar = () => {
  return (
    <Navbar fluid={true} className="w-full md:w-[80%] 2xl:w-[1400px]">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <img
              src="https://wjve36.n3cdn1.secureserver.net/wp-content/uploads/2023/12/Hy.png?time=1705390596"
              className="w-[60%]"
            />
          </Navbar.Brand>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2 items-center">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Contact" />
            <Navbar.Link linkName="Flashcard" />
            <Navbar.Link linkName="FAQ" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Contact" />
            <Navbar.Link linkName="Flashcard" />
            <Navbar.Link linkName="FAQ" />
            </Navbar.Container>
          </Navbar.Collapse>
          <Navbar.Divider></Navbar.Divider>
          <Button size="md" type="primary" className="rounded-full">
            login
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavBar;

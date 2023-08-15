import React from "react";
import "./NavigationLink.scss";

interface NavigationLinkProps {
  url: string;
  name: string;
}

export const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <a href={props.url}>
      {props.name}
    </a>
  );
};

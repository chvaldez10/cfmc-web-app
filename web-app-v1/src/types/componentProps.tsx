/* 
  This file is for component specific types.
  These types are specific to a component or page.
*/

import { ReactElement } from "react";

export interface Verse {
  verse: {
    details: {
      text: string;
      reference: string;
      version: string;
      verseURL: string;
    };
    notice: string;
  };
}

export interface WorshipSong {
  title: string;
  artist: string;
  imageSrc: string;
}

export interface NavbarProps {
  label: string;
  url: string;
  svgIcon: ReactElement;
}

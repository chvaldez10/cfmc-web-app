/* 
  This file is for component specific types.
  These types are specific to a component or page.
*/

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

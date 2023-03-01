import { Log } from '@microsoft/sp-core-library';
import * as React from "react";
import * as ReactDOM from "react-dom";
import Sidebar from '../../Components/Sidebar';

import {BaseApplicationCustomizer, PlaceholderName,PlaceholderContent, ApplicationCustomizerContext, } from '@microsoft/sp-application-base';

// import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'SidenavElementApplicationCustomizerStrings';

const LOG_SOURCE: string = 'SidenavElementApplicationCustomizer';


export interface ISidenavElementApplicationCustomizerProperties {
  Top: string;
  testMessage: string;
  context:ApplicationCustomizerContext
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SidenavElementApplicationCustomizer

  extends BaseApplicationCustomizer<ISidenavElementApplicationCustomizerProperties> {

 private _topPlaceholder: PlaceholderContent | undefined;
  // private _onDispose: (placeholderContent: PlaceholderContent) => void;
 
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);  
      
    // Call render method for generating the HTML elements.  
  // var x=  this.getData();
  // console.log(x);
    this._renderPlaceHolders();  
 
     return Promise.resolve();
   }
   private async _renderPlaceHolders(): Promise<void> {  
    

    if (!this._topPlaceholder) {  
      this._topPlaceholder =  
        this.context.placeholderProvider.tryCreateContent(  
          PlaceholderName.Top,  
          { onDispose: this._onDispose });  
      
      // The extension should not assume that the expected placeholder is available.  
      if (!this._topPlaceholder) {  
        console.error('The expected placeholder (Top) was not found.');  
        return;  
      }  
      
      if (this.properties) {  
        let topString: string = this.properties.Top;  
        if (!topString) {  
          topString = '(Top property was not defined.)';  
        }  
      
       
      }  
    }
  

    const ele = React.createElement(Sidebar)  
    ReactDOM.render(ele,this._topPlaceholder.domElement)
  }
  private _onDispose(): void {
    console.log('[AlertApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }  
}

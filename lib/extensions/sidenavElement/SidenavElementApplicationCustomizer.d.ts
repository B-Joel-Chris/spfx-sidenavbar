import { BaseApplicationCustomizer, ApplicationCustomizerContext } from '@microsoft/sp-application-base';
export interface ISidenavElementApplicationCustomizerProperties {
    Top: string;
    testMessage: string;
    context: ApplicationCustomizerContext;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class SidenavElementApplicationCustomizer extends BaseApplicationCustomizer<ISidenavElementApplicationCustomizerProperties> {
    private _topPlaceholder;
    onInit(): Promise<void>;
    private _renderPlaceHolders;
    private _onDispose;
}
//# sourceMappingURL=SidenavElementApplicationCustomizer.d.ts.map
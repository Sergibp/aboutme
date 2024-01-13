import { FunctionComponent, RefObject } from 'react';
import { Theme } from '../../../models/Theme';
export type ContentFooterProps = {
    canShow: boolean;
    onExpand: () => void;
    paused: boolean;
    progressRef: RefObject<HTMLDivElement>;
    remainInterval: number;
    showMore: boolean;
    showProgressBar?: boolean;
    showReadMore?: boolean | '';
    startWidth: number;
    textContentIsLarge: boolean;
    theme?: Theme;
    triangleDir?: string;
};
declare const ContentFooter: FunctionComponent<ContentFooterProps>;
export { ContentFooter };

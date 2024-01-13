import { Theme } from '../../../models/Theme';
import { TimelineMode } from '../../../models/TimelineModel';
export declare const MediaWrapper: import("styled-components").StyledComponent<"div", any, {
    active?: boolean | undefined;
    cardHeight?: number | undefined;
    dir?: string | undefined;
    mode?: TimelineMode | undefined;
    slideShowActive?: boolean | undefined;
    theme?: Theme | undefined;
}, never>;
export declare const CardImage: import("styled-components").StyledComponent<"img", any, {
    active?: boolean | undefined;
    dir?: string | undefined;
    mode?: TimelineMode | undefined;
    visible?: boolean | undefined;
}, never>;
export declare const CardVideo: import("styled-components").StyledComponent<"video", any, {
    height?: number | undefined;
}, never>;
export declare const MediaDetailsWrapper: import("styled-components").StyledComponent<"div", any, {
    mode?: TimelineMode | undefined;
}, never>;
export declare const ErrorMessage: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const IFrameVideo: import("styled-components").StyledComponent<"iframe", any, {}, never>;
